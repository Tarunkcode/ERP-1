import * as React from 'react';
import BomRoutingConfig_Page from '../../Pages/Master/BomRoutingConfiguration/bom-routing-config.component';


import { toast } from 'react-toastify';
import { BOM_STORE } from '../../Redux/BOM/bom.reducer';
import BOM_SetUp from '../HOC/loadBOM';
import { LoaderContext } from '../../AppContext/loaderContext';

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
    operationApi: any,
    process: any[],
    bomConsDetApi: any,
    bomProdDetApi: any,
    routeDetApi: any,
    Item_Code$Name12: any[],
    Item_Code$Name23: any[],
    bomCurrentState: any

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
            bomProdDetApi: null,
            gettingVirtualCode: 0,
            altItemDetApi: null,
            process: [],
            Item_Code$Name12: [],
            Item_Code$Name23: [],
            uom: [],
            bomCurrentState: {
                code: 0,
                customer: parseInt("57"),
                company: parseInt("46"),
            }

        }
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    routeObj: any = this.props.location.state;

    // Private Data
    prodItemDefRow: any[] = [{ bomitem: null, itemname: null, prodavgqty: null, prodavguom: null, rate: null, cost: null, isotherprod: null }]
    consItemDefRow: any[] = [{ bomitem: null, itemname: null, rate: null, consqty: null, conuom: null, prodavgqty: null, prodavguom: null, cost: null, altitem: null }]

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
            "Customer": 68,
            "Company": 60,
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
            "Customer": 0,
            "Company": 0,
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
            let iUomName = item.uomname
            let iName = arr[0]
            this.setState({ watchItemObj: { uomname: iUomName, itemname: iName, itemcode: iCode } })
            console.log('arr', arr)

            BOM_STORE.dispatch({ payload: uom, key: "unit", type: "bom_struct", label: 'BOMHeader' });
            BOM_STORE.dispatch({ payload: iCode, key: "item", type: "bom_struct", label: 'BOMHeader' });
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
            if (node.data.process !== null)
                items.push(node.data);
        });
        return items;
    }

    collectRoutingDetails = async () => {
        let dataSet: any[] = await this.getRoutingDetailRows();
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{}]

        }

        BOM_STORE.dispatch({ payload: dataSet, key: '', type: "bom_struct", label: 'RoutingDetails' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                RoutingDetails: dataSet
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
        let lastStoreState = BOM_STORE.getState().BomDetails;
        let len = dataSet.length;

        if (dataSet.length === 0 || dataSet === null) {

            dataSet = []

        } else {
            for (let i = 0; i < 10 - len; i++) {
                dataSet.push({ ...this.consItemDefRow, srno: i + 1 })
            }

        }

        BOM_STORE.dispatch({ payload: [...lastStoreState, ...dataSet], key: '', type: "bom_struct", label: 'BomDetails' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                consItemDetails: dataSet
            }
        })
    }
    collectBOMProdDetails = async () => {
        let lastStoreState = BOM_STORE.getState().BomDetails;
        let dataSet: any[] = await this.getBOMProdDetailsRow();
        let len = dataSet.length;
       
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = []

        } else {
            for (let i = 0; i < 10 - len ; i++) {
                dataSet.push({ ...this.prodItemDefRow, srno: i + 1 })
            }
           
        }

        BOM_STORE.dispatch({ payload: [...lastStoreState, ...dataSet], key: '', type: "bom_struct", label: 'BomDetails' });
        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                prodItemDetails: dataSet
            }
        })

    }
   
    //__________________________________________________________Alt Item___________________________________________________________________________________________________________

   


    getAltItemDetApi = (api: any) => {
        this.setState({altItemDetApi : api})
    }




    //__________________________________________________________Other Produce Item___________________________________________________________________

   

    getOtherProduceApi = (api: any) => {
        this.setState({otherProdApi : api})
    }

    //__________________________________________________________Operation___________________________________________________________________

    
    getOperationDetApi = (api: any) => {
        this.setState({ operationApi: api })
    }


    //__________________________________________________________WASTE CLASSES___________________________________________________________________
    handle_RoutingJobWork_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'RoutingJobWork' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                RoutingJobWork: [...BOM_STORE.getState().RoutingJobWork]
            }
        })

    }
    handle_BomJWDetails_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BomJWDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BomJWDetails: [...BOM_STORE.getState().BomJWDetails]
            }
        })

    }


    handle_RoutingOtherHead_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'RoutingOtherHead' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                RoutingOtherHead: [...BOM_STORE.getState().RoutingOtherHead]
            }
        })

    }
    handle_BOMProcessPOH_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BOMProcessPOH' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMProcessPOH: [...BOM_STORE.getState().BOMProcessPOH]
            }
        })

    }


    handle_BOMItemSupplier_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BOMItemSupplier' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMItemSupplier: [...BOM_STORE.getState().BOMItemSupplier]
            }
        })

    }
    handle_BomCutComponenet_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BomCutComponenet' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BomCutComponenet: [...BOM_STORE.getState().BomCutComponenet]
            }
        })

    }
    handle_BOMItemLocation_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BOMItemLocation' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMItemLocation: [...BOM_STORE.getState().BOMItemLocation]
            }
        })

    }
    handle_RoutingMachineDetails_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'RoutingMachineDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                RoutingMachineDetails: [...BOM_STORE.getState().RoutingMachineDetails]
            }
        })

    }
    handle_BOMSAMEITEM_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BOMSAMEITEM' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMSAMEITEM: [...BOM_STORE.getState().BOMSAMEITEM]
            }
        })

    }











    componentDidMount() {
        this.getSeries();
        this.getProcess();
        this.getItemCode$Name12();
        this.loadUom();
        this.getItemCode$Name23();
        if (!this.routeObj)
            this.setState({ gettingVirtualCode: 0 })
        else this.setState({ gettingVirtualCode: parseInt(this.routeObj.code) })
    }


    SaveRoutingMaster = async (e: any) => {
        const loader = this.context;
        this.collectRoutingDetails();
        loader.setLoader(true);
        let data = BOM_STORE.getState();
        e.preventDefault();
        let i: any = JSON.stringify(data);
        console.log('i:', i);
        const Url2SaveRoutingMaster = '/api/RoutingMasterSave'
        try {
            let { res, got } = await this.props.api(Url2SaveRoutingMaster, "POST", i);
            if (res.status == 200) {
                loader.setLoader(false);
                toast.success(got.msg);
            }
            else toast.error(got.msg);

        } catch (err) {
            alert(err);
        }
    }

    render() {
        return (
            <BomRoutingConfig_Page
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

                collectBOMConsDetails={this.collectBOMConsDetails.bind(this)}
                collectBOMProdDetails={this.collectBOMProdDetails.bind(this)}
                currentConsDetails={this.state.bomCurrentState.consItemDetails}
                currentProdDetails={this.state.bomCurrentState.prodItemDetails}
                prodItemRow={this.prodItemDefRow}
                consItemRow={this.consItemDefRow}

              
         
                handleBOMItemLocation={this.handle_BOMItemLocation_Change.bind(this)}
                handleBOMItemSupplier={this.handle_BOMItemSupplier_Change.bind(this)}
                handleBomJWDetails={this.handle_BomJWDetails_Change.bind(this)}
                handleBOMProcessPOH={this.handle_BOMProcessPOH_Change.bind(this)}
                handleBOMSAMEITEM={this.handle_BOMSAMEITEM_Change.bind(this)}
                handleRoutingJobWork={this.handle_RoutingJobWork_Change.bind(this)}
                handleRoutingMachineDetails={this.handle_RoutingMachineDetails_Change.bind(this)}
                handleBomCutComponenet={this.handle_BomCutComponenet_Change.bind(this)}
                handleRoutingOtherHead={this.handle_RoutingOtherHead_Change.bind(this)}
               





                SaveRoutingMaster={this.SaveRoutingMaster.bind(this)}
                getRoutingDetailApi={this.getRoutingDetailsApi.bind(this)}
                getBomConsumeDetailApi={this.getBOMConsDetaisApi.bind(this)}
                getBomProduceDetailApi={this.getBOMProdDetaisApi.bind(this)}
                getAltItemDetailApi={this.getAltItemDetApi.bind(this)}
                getOtherProdDetailApi={this.getOtherProduceApi.bind(this)}
                getOperationDetailApi={this.getOperationDetApi.bind(this)}
            />
        )
    }
}

const BOM = BOM_SetUp(BOM_Routing);
export default BOM;