import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import BomRoutingConfig_Page from '../../Pages/Master/BomRoutingConfiguration/bom-routing-config.component';
import { BOM_STORE } from '../../Redux/BOM/bom.reducer';
import Current_Configuration_SetUp from '../HOC/Current_Configuration_SetUp';





interface IProps {
    context: any,
    api: any,
    location: any
}
interface IState {
    series: any[],
    watchItemObj: any,
    seriesNumType: number,
    routingCode: string,
    uom: any[],
    gettingVirtualCode: number,
    altItemDetApi: any,
    otherProdApi: any,
    curr_stage: number,
    consItemCurrIndex: number,
    overheadApi: any,
    prodItemCurrIndex: number,
    operationApi: any,
    process: any[],
    loadedConsItemDetails: any[],
    loadedProdItemDetails: any[],
    bomConsDetApi: any,
    bomProdDetApi: any,
    routeDetApi: any,
    Item_Code$Name12: any[],
    Item_Code$Name23: any[],
    bomCurrentState: any,
    currentConsItem: any,
    currentProdItem: any,
    currentProcessItem: any,
    routingMasterDetails: any

}

class BOM_Routing extends React.Component<IProps, IState> {
    static contextType = LoaderContext;
    constructor(props: IProps) {
        super(props);
        this.state = {
            series: [],
            seriesNumType: 0,
            watchItemObj: { uomname: "", itemname: "", itemcode: "" },
            routingCode: '',
            routeDetApi: null,
            bomConsDetApi: null,
            otherProdApi: null,
            operationApi: null,
            overheadApi: null,
            curr_stage: 0,
            consItemCurrIndex: 0,
            currentConsItem: null,
            currentProdItem: null,
            currentProcessItem: null,
            prodItemCurrIndex: 0,
            bomProdDetApi: null,
            gettingVirtualCode: 0,
            altItemDetApi: null,
            loadedConsItemDetails: [],
            loadedProdItemDetails: [],
            process: [],
            Item_Code$Name12: [],
            Item_Code$Name23: [],
            uom: [],
            bomCurrentState: {
                code: 0,
                customer: parseInt(this.customer),
                company: parseInt(this.compCode)
            },
            routingMasterDetails: {}


        }
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""


    // Private Data
    routingDefRow: any[] = [{ process: null, amt: null, settime: null, machinetime: null, manpower: null, finalprocess: null, electricity: null, poh: null, job: null, machinedep: null }]
    prodItemDefRow: any[] = [{ bomitem: null, itemname: null, prodavgqty: null, prodavguom: null, rate: null, cost: null, isotherprod: null }]
    consItemDefRow: any[] = [{ bomitem: null, itemname: null, rate: null, consqty: null, conuom: null, prodavgqty: null, prodavguom: null, cost: null, altitem: null }]
    altItemDefRow: any[] = [{ altitem: null }, { itn: null }, { rate: null }, { consqty: null }, { consuom: null }, { prodavgqty: null }, { prodavguom: null }, { cost: null }];
    otherProdDefRow: any[] = [{ item: null }, { itemname: null }, { qty: null }, { uom: null }]
    operationDefRow: any[] = [{ srno: 1, process: null, opration: null, cycletime: null, fop: null }]
    overheadDefRow = [{ srno: 1, overhead: null, cost: null }]

    loadRoutingMasterDetails = async (code: number) => {
        const { setLoader } = this.context;
        if (code) {
            let url = `/api/RoutingModify?RCode=${code}`;

            try {
                let { res, got } = await this.props.api(url, "GET", '');
                if (res.status == 200) {
                    if (got.data[0].bomheader.length > 0) {
                        this.setState({ routingMasterDetails: got.data[0] });
                        //const bomdetailsLength: number = got.data[0].bomdetails.length
                        const routingdetailsLength: number = got.data[0].routingdetails.length
                        const bomaltitemLength: number = got.data[0].bomaltitem.length
                        const bomotherproddetailsLength: number = got.data[0].bomotherproddetails.length
               

                        let dataSet = got.data[0].bomheader;
                        let dataSet1 = got.data[0].routingdetails;
                        let dataSet2 = got.data[0].bomdetails;
                        let dataSet3 = got.data[0].bomaltitem;
                        let dataSet4 = got.data[0].bomotherproddetails;
                        let dataSet5 = got.data[0].bomprocesspoh;
                        let dataSet6 = got.data[0].routingoprationdetails;

                        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'BOMHeader' });
                        BOM_STORE.dispatch({ payload: dataSet1, key: '', type: "bom_struct", label: 'RoutingDetails' });

                        //BOM_STORE.dispatch({ payload: dataSet2, key: 'modify', type: "bom_struct", label: 'BomDetails' });
                        //BOM_STORE.dispatch({ payload: dataSet3, key: 'modify', type: "bom_struct", label: 'BOMAltItem' });
                        //BOM_STORE.dispatch({ payload: dataSet4, key: 'modify', type: "bom_struct", label: 'BomOtherProdDetails' });
                        //BOM_STORE.dispatch({ payload: dataSet5, key: 'modify', type: "bom_struct", label: 'BOMProcessPOH' });
                        //BOM_STORE.dispatch({ payload: dataSet6, key: 'modify', type: "bom_struct", label: 'ROUTINGOPRATIONDETAILS' });




                        for (let i = 1; i <= 10 - routingdetailsLength; i++) got.data[0].routingdetails.push({ ...this.routingDefRow[0], sr: routingdetailsLength + i + 1 })
                        for (let i = 1; i <= 10 - bomaltitemLength; i++) got.data[0].bomaltitem.push({ ...this.altItemDefRow[0], srno: bomaltitemLength + i + 1 })
                        for (let i = 1; i <= 10 - bomotherproddetailsLength; i++) got.data[0].bomotherproddetails.push({ ...this.otherProdDefRow[0], srno: bomotherproddetailsLength + 1 + i})
                      
                        let consItemData: any[] = [];
                        let prodItemData: any = [];
                       
                        await got.data[0].bomdetails.map((item: any) => {
                            if (item.inout === 1) {
                                consItemData = [...consItemData, item]
                            } else if (item.inout === 2) {
                                prodItemData = [...prodItemData, item]
                            } else {
                                alert("ERROR:: Blank in Out in Bom Details")
                            }
                        })

                        console.log('bomotherproddetails', got.data[0].bomotherproddetails)
                        console.log('bomaltitem', got.data[0].bomaltitem)
                        
                     
                        //console.log('super data', got.data[0])
                        //console.log('routingdetails', got.data[0].routingdetails)
                        //console.log('bomprocesspoh', got.data[0].bomprocesspoh)
                        //console.log('routingoprationdetails', got.data[0].routingoprationdetails)
                     
                        this.setState({ loadedConsItemDetails: consItemData })
                        this.setState({ loadedProdItemDetails: prodItemData })

                        console.log('consume item details', consItemData)
                        console.log('produce item details', prodItemData)

                        setLoader(false);
                    }
                    else {
                        setLoader(false);
                        toast.info('No Data Found for Modify')
                    }

                }
                else {
                    setLoader(false);
                    toast.error('ERROR::Routing Master Details Loading Failed')
                }


            }

            catch (err) {
                setLoader(false);
                alert(err);
            }

        }
    }
    //------------------------------------------------------------ Callback Methods---------------------------------------------------------------------------------------

    getRoutingCode = async (seriesCode: number, prefix: string) => {

        let vchUrl = `/api/GetVchNo?TranType=12&SrCode=${seriesCode}&BSave=0`;
        try {
            let { got, res } = await this.props.api(vchUrl, "GET", '');
            if (res.status == 200) {
                let data: string = got.data;
                let routingCode: string = prefix + data;
                this.setState({ routingCode: routingCode });
                BOM_STORE.dispatch({ payload: routingCode, key: "vchno", type: "bom_struct", label: 'BOMHeader' });
            }
            else toast.error(res.msg);

        }
        catch (err) {
            alert(err)
        }
    }

    //--------------------------------------------------------- methods for loading list dropdown--------------------------------------------------------------------------
    getSeries = async () => {
        let SeriesUrl = `/api/GetSeries?TranType=12&SrType=0&Company=${this.compCode}&Customer=${this.customer}`;
        try {
            let { res, got } = await this.props.api(SeriesUrl, "GET", '');
            if (res.status == 200) {

                this.setState({ series: got.data })
            }
            else toast.error(res.msg);
        }
        catch (err) {
            alert(err)
        }
    }
    loadUom = async () => {
        const { setLoader } = this.context;
        setLoader(true)

        try {


            let urlStr: string = `/api/LoadMasterData?MasterType=${21}&Company=${this.compCode}&Customer=${this.customer}`

            let { res, got } = await this.props.api(urlStr, "GET", '');
            if (res.status === 200) {
                this.setState({ uom: got.data })



                setLoader(false)
            }
            else {
                setLoader(false);
                throw new Error('Bad Fetch 1')
            }


        } catch (err) {
            setLoader(false);
            alert(err);
        }
    }
    getProcess = async () => {
        const loader = this.context;
        loader.setLoader(true);
        let processUrl = `/api/LoadMasterData?MasterType=11&Company=${this.compCode}&Customer=${this.customer}`;
        try {
            let { res, got } = await this.props.api(processUrl, 'GET', '');
            if (res.status == 200) {


                this.setState({ process: got.data })
                loader.setLoader(false);
            }
            else {
                loader.setLoader(false);
                toast.error(res.msg);
            }
        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }
    }
    getItemCode$Name12 = async () => {
        const loader = this.context;
        loader.setLoader(true);
        let url = '/api/LoadIMList';
        let body1 = {
            "Customer": parseInt(this.customer),
            "Company": parseInt(this.compCode),
            "Series": "",
            "ItemBrand": "",
            "ItemGroup": "",
            "ItemType": "",
            "ItemCat": "",
            "ItemSubCat": "",
            "Clearance": "",
            "UOM": "",
            "MC": "",
            "QC": "",
            "GRPType": "1,2"

        }
        try {
            let { res, got } = await this.props.api(url, 'POST', body1);
            if (res.status == 200) {

                let cd$Nm: any = got.data.map((option: any) => ({
                    value: option.value,
                    label: option.codestrname,
                    uomname: option.uomname,
                    uom: option.uom,
                    rate: option.rate


                }))
                this.setState({ Item_Code$Name12: cd$Nm })
                loader.setLoader(false);
            }
            else {
                loader.setLoader(false);
                toast.error(res.msg);
            }
        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }
    }
    getItemCode$Name23 = async () => {
        const loader = this.context;
        loader.setLoader(true);
        let url = '/api/LoadIMList';
        let body = {
            "Customer": parseInt(this.customer),
            "Company": parseInt(this.compCode),
            "Series": "",
            "ItemBrand": "",
            "ItemGroup": "",
            "ItemType": "",
            "ItemCat": "",
            "ItemSubCat": "",
            "Clearance": "",
            "UOM": "",
            "MC": "",
            "QC": "",
            "GRPType": "2,3"

        }
        try {
            let { res, got } = await this.props.api(url, 'POST', body);
            if (res.status == 200) {

                let cd$Nm: any = got.data.map((option: any) => ({
                    value: option.value,
                    label: option.codestrname,
                    uomname: option.uomname,
                    uom: option.uom,
                    rate: option.rate

                }))
                console.log('code name and code................', cd$Nm)
                this.setState({ Item_Code$Name23: cd$Nm })
                loader.setLoader(false);
            }
            else {
                loader.setLoader(false);
                toast.error(res.msg);
            }
        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }
    }

    afterValueConvert = (e: any) => {

        var value: any = e.target.value;
        if (e.currentTarget.classList.contains('double')) { value = parseFloat(value) }
        else if (e.currentTarget.classList.contains('decimal')) { value = parseFloat(value) }
        else if (e.currentTarget.classList.contains('number')) { value = parseInt(value) }
        else if (e.currentTarget.classList.contains('select')) { value = parseInt(value) }
        else if (e.currentTarget.classList.contains('switch')) { e.target.checked === true ? value = 1 : value = 0 }
        else value = e.target.value;

        return value;
    }

    getCurrentRow = (index: number, data: any) => {

        this.setState({ curr_stage: index, currentProcessItem: data });


    }
    getAltItemCurrentRow = (index: number, data: any) => {

        this.setState({ consItemCurrIndex: index, currentConsItem: data })
    }
    getProdItemCurrentRow = (index: number, data: any) => {
        this.setState({ prodItemCurrIndex: index, currentProdItem: data })
    }
    //___________________________________________________________Methods for saving Form data in Redux Store __________________________________________________________________
    CollectListWithItem = (item: any, name: string) => {
        if (name == 'series') {
            this.setState({ seriesNumType: item.numbertype })
            if (item.numbertype == '1') this.getRoutingCode(item.value, item.prefix);
        }
        else if (name == 'item') {
            let arr = item.label.split("|")
            let iCode = arr[1]

            let uom = item.uom
            let value = item.value
            let iUomName = item.uomname
            let iName = arr[0]
            this.setState({ watchItemObj: { uomname: iUomName, itemname: iName, itemcode: iCode } })
            console.log('arr', arr)

            BOM_STORE.dispatch({ payload: uom, key: "unit", type: "bom_struct", label: 'BOMHeader' });
            BOM_STORE.dispatch({ payload: value, key: "item", type: "bom_struct", label: 'BOMHeader' });

            return;
        }
        BOM_STORE.dispatch({ payload: item.value, key: name, type: "bom_struct", label: 'BOMHeader' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMHeader: [{ ...BOM_STORE.getState().BOMHeader }]
            }
        })

    }
    CollectList = (value: any, name: string) => {

        BOM_STORE.dispatch({ payload: value, key: name, type: "bom_struct", label: 'BOMHeader' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMHeader: [{ ...BOM_STORE.getState().BOMHeader }]
            }
        })

    }

    handle_BOMHeader_Change = (e: any) => {
        e.preventDefault();
   
        let value = this.afterValueConvert(e);
        BOM_STORE.dispatch({ payload: value, key: e.target.name, type: "bom_struct", label: 'BOMHeader' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMHeader: [{ ...BOM_STORE.getState().BOMHeader }]
            }
        })

    }

    //__________________________________________________________Routing Details___________________________________________________________________
    getRoutingDetailsApi = (api: any) => {
        this.setState({ routeDetApi: api });
    }


    getRoutingDetailRows = () => {
        let items: any[] = [];
        this.state.routeDetApi.forEachNode(function (node: any) {
            if (node.data.process !== null) {
                items.push(node.data);
            }
        });
        return items;
    }

    collectRoutingDetails = async () => {
        let dataSet: any[] = await this.getRoutingDetailRows();
        let copy = JSON.parse(JSON.stringify(dataSet));
        dataSet.map((item: any, ind: number) => {
            item.code = this.state.gettingVirtualCode;
            item.sr = ind + 1;
            item.amt = parseFloat(item.amt);
            item.settime = parseInt(item.settime);
            item.machinetime = parseInt(item.machinetime);
            item.manpower = parseFloat(item.manpower);
            item.electricity = parseFloat(item.electricity);
            item.poh = parseFloat(item.poh);
            for (let property in item) {
                let temp = typeof item[property] == 'object';
                if (temp && item[property] && item[property].label) {
                    item[property] = item[property].value;
                }
            }
        })
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{}]

        }
        else {
            console.log('dataset', dataSet, 'copy', copy)
        }
        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'RoutingDetails' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                RoutingDetails: copy
            }
        })



    }
    //------------------------------------------------------------- BOM Details -----------------------------------------------------------------------------------
    getBOMConsDetaisApi = (api: any) => {
        this.setState({ bomConsDetApi: api })
    }

    getBOMProdDetaisApi = (api: any) => {
        this.setState({ bomProdDetApi: api })
    }

    getBOMConsDetailsRow = () => {
        let items: any[] = [];
        this.state.bomConsDetApi.forEachNode(function (node: any) {
            if (node.data.bomitem !== null)
                items.push(node.data);
        });
        return items;
    }

    getBOMProdDetailsRow = () => {
        let items: any[] = [];
        this.state.bomProdDetApi.forEachNode(function (node: any) {
            if (node.data.bomitem !== null)
                items.push(node.data);
        });
        return items;
    }

    collectBOMConsDetails = async () => {

        let dataSet: any[] = await this.getBOMConsDetailsRow();
        let copy = JSON.parse(JSON.stringify(dataSet));
        dataSet.map((item: any, ind: number) => {
            item.psrno = this.state.curr_stage;
            item.code = this.state.gettingVirtualCode;
            item.srno = ind + 1;
            item.inout = 1;
            for (let property in item) {
                let temp = typeof item[property] == 'object';
                if (temp && item[property] && item[property].label) {
                    item[property] = item[property].value;
                }
            }
        })
        console.log('dataSet consume item', dataSet);
        let len = copy.length;

        if (dataSet.length === 0 || dataSet === null) {

            dataSet = []
            copy = [];
        }
        else {

            // creating empty rows
            for (let i = 0; i < 10 - len; i++) {
                copy.push({ ...this.consItemDefRow[0], srno: i + 1, psrno: this.state.curr_stage, code: this.state.gettingVirtualCode, inout: 1 })
            }

        }

        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'BomDetails' });

        //--------------------------------------- creting state -------------------------------------------------------------------------
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                consItemDetails: { ...this.state.bomCurrentState.consItemDetails, [this.state.curr_stage]: copy }
            }
        })

        console.log('current state 1', this.state.bomCurrentState)
    }
    collectBOMProdDetails = async () => {

        let dataSet: any[] = await this.getBOMProdDetailsRow();
        let copy = JSON.parse(JSON.stringify(dataSet));
        dataSet.map((item: any, ind: number) => {
            item.psrno = this.state.curr_stage;
            item.code = this.state.gettingVirtualCode;
            item.srno = ind + 1;
            item.prodavgqty = parseFloat(item.prodavgqty || '0');
            item.rate = parseFloat(item.rate || '0');
            item.cost = parseFloat(item.cost || '0')
            item.inout = 2;
            for (let property in item) {
                let temp = typeof item[property] == 'object';
                if (temp && item[property] && item[property].label) {
                    item[property] = item[property].value;
                }
            }
        })
        let len = copy.length;

        if (dataSet.length === 0 || dataSet === null) {

            dataSet = []
            copy = [];
        }
        else {

            for (let i = 0; i < 10 - len; i++) {
                copy.push({ ...this.prodItemDefRow[0], srno: i + 1, psrno: this.state.curr_stage, code: this.state.gettingVirtualCode, inout: 2 })
            }

        }

        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'BomDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                prodItemDetails: { ...this.state.bomCurrentState.prodItemDetails, [this.state.curr_stage]: copy }
            }
        })
        console.log('current state 2', this.state.bomCurrentState)
    }

    //__________________________________________________________Alt Item___________________________________________________________________________________________________________




    getAltItemDetApi = (api: any) => {
        this.setState({ altItemDetApi: api })
    }

    getAltItemRow = () => {
        let items: any[] = [];
        this.state.altItemDetApi.forEachNode(function (node: any) {
            if (node.data.altitem !== null)
                items.push(node.data);
        });
        return items;
    }
    collectAltItemDetails = async () => {
        let dataSet: any[] = await this.getAltItemRow();
        let copy = JSON.parse(JSON.stringify(dataSet));
        dataSet.map((item: any, ind: number) => {
            item.psrno = this.state.curr_stage;
            item.code = this.state.gettingVirtualCode;
            item.srno = ind + 1;
            item.process = this.state.currentProcessItem.process;
            item.bomitem = this.state.currentConsItem.bomitem;
            item.bomsrno = this.state.consItemCurrIndex;
            for (let property in item) {
                let temp = typeof item[property] == 'object';
                if (temp && item[property] && item[property].label) {
                    item[property] = item[property].value;
                }
            }
        })
        let len = copy.length;

        if (dataSet.length === 0 || dataSet === null) {

            dataSet = []
            copy = [];

        } else {

            for (let i = 0; i < 10 - len; i++) {
                copy.push({ ...this.altItemDefRow[0], srno: i + 1, psrno: this.state.curr_stage, code: this.state.gettingVirtualCode, bomsrno: this.state.consItemCurrIndex })
            }

        }

        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'BOMAltItem' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMAltItem: { ...this.state.bomCurrentState.BOMAltItem, [`Alt${this.state.consItemCurrIndex}${this.state.curr_stage}`]: copy }
            }
        })

    }

    //__________________________________________________________Other Produce Item___________________________________________________________________



    getOtherProduceApi = (api: any) => {
        this.setState({ otherProdApi: api })
    }
    getOtherProduceRow = () => {
        let items: any[] = [];
        this.state.otherProdApi.forEachNode(function (node: any) {
            if (node.data.item !== null) {
                items.push(node.data);
                console.log('capture', node.data)
            }
        });
        return items;
    }
    collectOtherProduceDetails = async () => {
        let dataSet: any[] = await this.getOtherProduceRow();
        let copy = JSON.parse(JSON.stringify(dataSet));
        dataSet.map((item: any, ind: number) => {
            item.psrno = this.state.curr_stage;
            item.code = this.state.gettingVirtualCode;
            item.srno = ind + 1;
            item.process = this.state.currentProcessItem.process;
            item.proditem = this.state.currentProdItem.bomitem;
            item.prodsrno = this.state.prodItemCurrIndex;
            for (let property in item) {
                let temp = typeof item[property] == 'object';
                if (temp && item[property] && item[property].label) {
                    item[property] = item[property].value;
                }
            }

        })

        let len = copy.length;

        if (dataSet.length === 0 || dataSet === null) {

            dataSet = []
            copy = [];

        } else {

            for (let i = 0; i < 10 - len; i++) {
                copy.push({ ...this.otherProdDefRow[0], srno: i + 1, psrno: this.state.curr_stage, code: this.state.gettingVirtualCode, prodsrno: this.state.prodItemCurrIndex })
            }

        }

        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'BomOtherProdDetails' });
        console.log('oither produce item', dataSet)
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BomOtherProdDetails: { ...this.state.bomCurrentState.BomOtherProdDetails, [`Prod${this.state.prodItemCurrIndex}${this.state.curr_stage}`]: copy }
            }
        })
   
    }
    //__________________________________________________________Operation___________________________________________________________________


    getOperationDetApi = (api: any) => {
        this.setState({ operationApi: api })
    }


    getOperationDetRow = () => {
        let items: any[] = [];
        this.state.operationApi.forEachNode(function (node: any) {
            if (node.data.opration !== null)
                items.push(node.data);
        });
        return items;
    }
    collectOperationDetails = async () => {
        let dataSet: any[] = await this.getOperationDetRow();
        let copy = JSON.parse(JSON.stringify(dataSet));
        copy.map((item: any, ind: number) => {

            item.opration = item.opration;
            item.code = this.state.gettingVirtualCode;
            item.psrno = this.state.curr_stage;
            item.srno = item.srno || ind + 1;
            item.process = item.process;
            item.fop = item.fop;
            item.cycletime = item.cycletime ? parseInt(item.cycletime) : 0
        })
        dataSet.map((item: any, ind: number) => {
            
            item.code = this.state.gettingVirtualCode;
            item.srno = ind + 1 ;
            item.psrno = this.state.curr_stage;
            item.opration = item.opn;
            item.process = item.process === true ? 1 : 0;
            item.fop = item.fop === true ? 1 : 0;
            item.cycletime = item.cycletime ? parseInt(item.cycletime) : 0
        })


        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [];
            copy = [];

        }

         BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'ROUTINGOPRATIONDETAILS' }) ;
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                ROUTINGOPRATIONDETAILS: { ...this.state.bomCurrentState.ROUTINGOPRATIONDETAILS, [this.state.curr_stage]: copy }
            }
        })
    }

    //------------------------------------------------------Overhead Details------------------------------------------------------------------------------------
    getOverheadDetApi = (api: any) => {
        this.setState({ overheadApi: api })
    }
    getOverheadDetRow = () => {
        let items: any[] = [];
        this.state.overheadApi.forEachNode(function (node: any) {
            if (node.data.poh !== null)
                items.push(node.data);
        });
        return items;
    }
    collectOverheadDetails = async () => {
        let dataSet: any[] = await this.getOverheadDetRow();
        let copy = JSON.parse(JSON.stringify(dataSet));
      
        copy.map((item: any, ind: number) => {

            item.srno = item.srno || ind + 1;
            item.code = this.state.gettingVirtualCode;
            item.prsrno = this.state.curr_stage;
            item.cost = item.cost ? parseFloat(item.cost) : 0;
            item.poh = item.poh;
        })
        dataSet.map((item: any, ind: number) => {
          
            item.srno = item.srno || ind + 1;
            item.code = this.state.gettingVirtualCode;
            item.prsrno = this.state.curr_stage;
            item.cost = item.cost ? parseFloat(item.cost) : 0;
            item.pohname = item.pohname || ''
            item.poh = item.opn;
        })

        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [];
            copy = [];

        }

        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'BOMProcessPOH' })
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMProcessPOH: { ...this.state.bomCurrentState.BOMProcessPOH, [this.state.curr_stage]: copy }
            }
        })
    }

    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    componentDidMount() {
        BOM_STORE.dispatch({ payload: parseInt(this.customer), key: "customer", type: "bom_struct", label: 'BOMHeader' });
        BOM_STORE.dispatch({ payload: parseInt(this.compCode), key: "company", type: "bom_struct", label: 'BOMHeader' });
        BOM_STORE.dispatch({ payload: this.username, key: "username", type: "bom_struct", label: 'BOMHeader' });
        this.getSeries();
        this.getProcess();
        this.getItemCode$Name12();
        this.loadUom();
        this.getItemCode$Name23();
        if (this.props.location.state && this.props.location.state.code !== 0) {
            let code = parseInt(this.props.location.state.code)
            this.loadRoutingMasterDetails(code)
            this.setState({ gettingVirtualCode: code });
        BOM_STORE.dispatch({ payload: code, key: "code", type: "bom_struct", label: 'BOMHeader' });

        } else {
            BOM_STORE.dispatch({ payload: 0, key: "code", type: "bom_struct", label: 'BOMHeader' });
            this.setState({ gettingVirtualCode: 0 });
        }
    }


    SaveRoutingMaster = async (e: any) => {
        e.preventDefault();
        const loader = this.context;
        loader.setLoader(true);
        const URL = '/api/RoutingMasterSave'
        try {
            await this.collectRoutingDetails();
            let data = await BOM_STORE.getState();
            console.log('i', JSON.stringify(data));

            let { res, got } = await this.props.api(URL, "POST", data);
            if (res.status == 200) {
                loader.setLoader(false);
                toast.success(got.msg);
            }
            else {
                loader.setLoader(false);
                toast.error(got.msg);
            }
        } catch (err) {
            loader.setLoader(false);
            alert(err);
        }
        //loader.setLoader(false);
    }

    render() {
        return (
            <BomRoutingConfig_Page
                // Greneric loading
                seriesLoad={this.state.series}
                processLoad={this.state.process}
                routingCode={this.state.routingCode}
                seriesNumType={this.state.seriesNumType}
                watchItemObj={this.state.watchItemObj}
                codeNameLoad12={this.state.Item_Code$Name12}
                codeNameLoad23={this.state.Item_Code$Name23}
                CollectListWithItem={this.CollectListWithItem.bind(this)}
                CollectList={this.CollectList.bind(this)}
                provide_conf={this.props.context.conf}
                uomList={this.state.uom}
                handleBOMHeader={this.handle_BOMHeader_Change.bind(this)}
                details={this.state.routingMasterDetails}
                // Bom Details saving
                getCurrentRow={this.getCurrentRow.bind(this)}
                collectBOMConsDetails={this.collectBOMConsDetails.bind(this)}
                collectBOMProdDetails={this.collectBOMProdDetails.bind(this)}
                currentConsDetails={this.state.bomCurrentState.consItemDetails}
                currentProdDetails={this.state.bomCurrentState.prodItemDetails}
                prodItemRow={this.prodItemDefRow}
                consItemRow={this.consItemDefRow}

                //Other Produce Item Saving
                collectOtherProdDetails={this.collectOtherProduceDetails.bind(this)}
                currentOtherProdDetails={this.state.bomCurrentState.BomOtherProdDetails}
                otherProdDefRow={this.otherProdDefRow}
                getProdItemCurrentRow={this.getProdItemCurrentRow.bind(this)}
                // Alt Item Saving

                getAltItemCurrentRow={this.getAltItemCurrentRow.bind(this)}
                collectAltItemDetails={this.collectAltItemDetails.bind(this)}
                currentAltItemDetails={this.state.bomCurrentState.BOMAltItem}
                altItemRow={this.altItemDefRow}

                // Operation Details Saving
                collectOperationDetails={this.collectOperationDetails.bind(this)}
                currentOperationDetails={this.state.bomCurrentState.ROUTINGOPRATIONDETAILS}
                oprDefRow={this.operationDefRow}

                // Overhead Details Saving
                collectOverheadDetails={this.collectOverheadDetails.bind(this)}
                currentOverheadDetails={this.state.bomCurrentState.BOMProcessPOH}
                overheadDefRow={this.overheadDefRow}


                // Saving and Auxilary assets
                SaveRoutingMaster={this.SaveRoutingMaster.bind(this)}
                getRoutingDetailApi={this.getRoutingDetailsApi.bind(this)}
                getBomConsumeDetailApi={this.getBOMConsDetaisApi.bind(this)}
                getBomProduceDetailApi={this.getBOMProdDetaisApi.bind(this)}
                getAltItemDetailApi={this.getAltItemDetApi.bind(this)}
                getOtherProdDetailApi={this.getOtherProduceApi.bind(this)}
                getOperationDetailApi={this.getOperationDetApi.bind(this)}
                getOverheadDetApi={this.getOverheadDetApi.bind(this)}

                //modify terms
                vccode={this.state.gettingVirtualCode}
                bomheader_details={this.state.routingMasterDetails.bomheader}
                routingdetails_details={this.state.routingMasterDetails.routingdetails}
                bomaltitem_details={this.state.routingMasterDetails.bomaltitem}
                bomotherproddetails_details={this.state.routingMasterDetails.bomotherproddetails}
                bomprocesspoh_details={this.state.routingMasterDetails.bomprocesspoh}
                routingoprationdetails_details={this.state.routingMasterDetails.routingoprationdetails}

                consItem_details={this.state.loadedConsItemDetails}
                prodItem_details={this.state.loadedProdItemDetails}
            />
        )
    }
}

const BOM = Current_Configuration_SetUp(BOM_Routing);
export default BOM;