import * as React from 'react';
import BomRoutingConfig_Page from '../../Pages/Master/BomRoutingConfiguration/bom-routing-config.component';

import ProvideHookToClass from '../HOC/loadBOM';
import { toast } from 'react-toastify';
import { BOM_STORE } from '../../Redux/BOM/bom.reducer';

interface IProps {
    api: any
}
interface IState {
    series: any[],
    
    seriesNumType: number,
    routingCode: string,
    process: any[],
    Item_Code$Name12: any[],
    Item_Code$Name23: any[],
    bomCurrentState: object

}
class BOM_Routing extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            series: [],
            seriesNumType: 0,
            routingCode: '',
            process: [],
            Item_Code$Name12: [],
            Item_Code$Name23: [],
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





    getRoutingCode = async (seriesCode: number, prefix: string) => {
       
        let vchUrl = `/api/GetVchNo?TranType=12&SrCode=${seriesCode}&BSave=0`;
        try {
            let { got, res } = await this.props.api(vchUrl, "GET", '');
            if (res.status == 200) {
                let data: string = got.data;
                let routingCode: string = prefix + data;
                this.setState({ routingCode: routingCode });
            }
            else toast.error(res.msg);

        }
        catch (err) {
            alert(err)
        }
    }

   
    getList = async () => {
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
    getProcess = async () => {
        let processUrl = `/api/LoadMasterData?MasterType=11&Company=${this.compCode}&Customer=${this.customer}`;
        try {
            let { res, got } = await this.props.api(processUrl, 'GET', '');
            if (res.status == 200) {

              
                this.setState({ process: got.data })
            }
            else toast.error(res.msg);
        } catch (err) {
            alert(err)
        }
    }
    getItemCode$Name12 = async () => {
        let url = '/api/LoadIMList';
        let body1 = {
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
            "GRPType": "1,2"

        }
        try {
            let { res, got } = await this.props.api(url, 'POST', body1);
            if (res.status == 200) {

                let cd$Nm: any = got.data.map((option: any) => ({
                    id: option.code,
                    value: option.codestrname,
                    uomname: option.uomname,
                    uom: option.uom,
                    label: option.codestrname,
                    name: 'item'

                }))
                console.log('code name and code................', cd$Nm)
                this.setState({ Item_Code$Name12: cd$Nm })
            }
            else toast.error(res.msg);
        } catch (err) {
            alert(err)
        }
    }
    getItemCode$Name23 = async () => {
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
                    id: option.code,
                    value: option.codestrname,
                    uomname: option.uomname,
                    uom: option.uom,
                    label: option.codestrname,
                    name: 'item'

                }))
                console.log('code name and code................', cd$Nm)
                this.setState({ Item_Code$Name23: cd$Nm })
            }
            else toast.error(res.msg);
        } catch (err) {
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

    //___________________________________________________________Process__________________________________________________________________
    CollectList = (value: any, name: string, item : any) => {
        if (name == 'series') {
            this.setState({ seriesNumType: item.numbertype } )
           this.getRoutingCode( item.value, item.prefix);
        }
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

    //__________________________________________________________Consume Item___________________________________________________________________





    handle_BomDetails_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BomDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BomDetails: [...BOM_STORE.getState().BomDetails]
            }
        })

    }
    //__________________________________________________________Alt Item___________________________________________________________________
    handle_RoutingDetails_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'RoutingDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                RoutingDetails: [...BOM_STORE.getState().RoutingDetails]
            }
        })

    }
    //__________________________________________________________Produce Item___________________________________________________________________
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
    //__________________________________________________________Other Produce Item___________________________________________________________________
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
    //__________________________________________________________Job Work________________________________________________________________________________
    handle_BOMAltItem_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BOMAltItem' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMAltItem: [...BOM_STORE.getState().BOMAltItem]
            }
        })

    }
    //__________________________________________________________Operation___________________________________________________________________
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

    handle_BomOtherProdDetails_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BomOtherProdDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BomOtherProdDetails: [...BOM_STORE.getState().BomOtherProdDetails]
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


    handle_ROUTINGOPRATIONDETAILS_Change = (val: any, key: any, row: any) => {

        let value = this.afterValueConvert(val);
        let mainObj = { srno: parseInt(row) + 1, [key]: value }
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'ROUTINGOPRATIONDETAILS' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                ROUTINGOPRATIONDETAILS: [...BOM_STORE.getState().ROUTINGOPRATIONDETAILS]
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


    componentDidMount() {
        this.getList();
        this.getProcess();
        this.getItemCode$Name12();
        this.getItemCode$Name23();
    }


    SaveRoutingMaster = async (e: any) => {
        e.preventDefault();
        let i: any = JSON.stringify(this.state.bomCurrentState);
        console.log('i:', i);
        const Url2SaveRoutingMaster = '/api/RoutingMasterSave'
        try {
            let { res, got } = await this.props.api(Url2SaveRoutingMaster, "POST", i);
            if (res.status == 200) {
                console.log('bom posting response', got.msg)
                alert('success');
            }
            else toast.error(res.msg);

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
                setRoutingCode={this.getRoutingCode.bind(this) }
                codeNameLoad12={this.state.Item_Code$Name12}
                codeNameLoad23={this.state.Item_Code$Name23}
                CollectList={this.CollectList.bind(this) }
                handleBOMAltItem={this.handle_BOMAltItem_Change.bind(this)}

                handleBomCutComponenet={this.handle_BomCutComponenet_Change.bind(this)}
                handleBomDetails={this.handle_BomDetails_Change.bind(this)}
                handleBOMHeader={this.handle_BOMHeader_Change.bind(this)}
                handleBOMItemLocation={this.handle_BOMItemLocation_Change.bind(this)}
                handleBOMItemSupplier={this.handle_BOMItemSupplier_Change.bind(this)}
                handleBomJWDetails={this.handle_BomJWDetails_Change.bind(this)}
                handleBomOtherProdDetails={this.handle_BomOtherProdDetails_Change.bind(this)}
                handleBOMProcessPOH={this.handle_BOMProcessPOH_Change.bind(this)}
                handleBOMSAMEITEM={this.handle_BOMSAMEITEM_Change.bind(this)}
                handleRoutingDetails={this.handle_RoutingDetails_Change.bind(this)}
                handleRoutingJobWork={this.handle_RoutingJobWork_Change.bind(this)}
                handleRoutingMachineDetails={this.handle_RoutingMachineDetails_Change.bind(this)}
                handleROUTINGOPRATIONDETAILS={this.handle_ROUTINGOPRATIONDETAILS_Change.bind(this)}
                handleRoutingOtherHead={this.handle_RoutingOtherHead_Change.bind(this)}
                SaveRoutingMaster={this.SaveRoutingMaster.bind(this)}
            />
        )
    }
}

const BOM = ProvideHookToClass(BOM_Routing);
export default BOM;