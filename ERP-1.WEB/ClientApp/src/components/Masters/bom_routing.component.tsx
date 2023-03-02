import * as React from 'react';
import BomRoutingConfig_Page from '../../Pages/Master/BomRoutingConfiguration/bom-routing-config.component';
import useFetch from '../Hooks/useFetch';
import BoM_Parent from '../HOC/loadBOM';
import { toast } from 'react-toastify';
import { BOM_STORE } from '../../Redux/BOM/bom.reducer';

interface IProps {
   api : any
}
interface IState {
    series: any[],
    process: any[],
    Item_Code$Name: any[],
    bomCurrentState: object

}
class BOM_Routing extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            series: [],
            process: [],
            Item_Code$Name: [],
            bomCurrentState: {
                code: 0,
                customer: parseInt("57"),
                company: parseInt("46"),
            }
            
        }
    }

  
   getList = async () => {
       let SeriesUrl = '/api/GetSeries?TranType=12&SrType=0&Company=46&Customer=57';
       try {
        let { res, got } = await this.props.api(SeriesUrl, "GET", '');
           if (res.status == 200) {
               let series: any = got.data.map((option: any) => ({
                   numbertype: option.numbertype,
                   id: option.code,
                   value: option.name,

               }))
               this.setState({ series: series })
           }
       else toast.error(res.msg);       }
       catch (err) {
           alert(err)
       }
    }
    getProcess = async () => {
        let processUrl = '/api/LoadMasterData?MasterType=11&Company=46&Customer=57';
        try {
            let { res, got } = await this.props.api(processUrl, 'GET', '');
            if (res.status == 200) {

                const itm2: any = got.data.map((opn: any) => ({ label: opn.name, value: opn.code }));
/*                console.log('items................',itm2)*/
                this.setState({ process: itm2 })
            }
            else toast.error(res.msg);
        } catch (err) {
            alert(err)
        }
    }
    getItemCode$Name = async () => {
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
            "GRPType": ""

        }
        try {
            let { res, got } = await this.props.api(url, 'POST', body);
            if (res.status == 200) {

                let cd$Nm: any = got.data.map((option: any)=> ({

                    id: option.code,
                    value: option.codestrname,
                    uomname: option.uomname,
                    uom: option.uom,
                    label: option.codestrname


                }))
                console.log('code name and code................',cd$Nm)
                this.setState({ Item_Code$Name: cd$Nm })
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
 
    //onSelectionChanged(event: SelectionChangedEvent) {
    //    const selectedData = this.gridApi.getSelectedRows();
    //    console.log('Selection updated');
    //}

    handle_BOMHeader_Change = (e: any) => {
        e.preventDefault();
        let value = this.afterValueConvert(e);
        BOM_STORE.dispatch({ payload: value, key: e.target.name, type: "bom_struct", label: 'BOMHeader' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BOMHeader: [{...BOM_STORE.getState().BOMHeader}]
            }
        })

    }

    //__________________________________________________________Consume Item___________________________________________________________________





    handle_BomDetails_Change = (val: any,key : any, row : any) => {
      
        let value = this.afterValueConvert(val);
        let mainObj = {srno : parseInt(row) + 1, [key]: value}
        BOM_STORE.dispatch({ payload: mainObj, key: parseInt(row), type: "bom_struct", label: 'BomDetails' });

        this.setState({
            bomCurrentState: {
                ...this.state.bomCurrentState,
                BomDetails: [...BOM_STORE.getState().BomDetails ]
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
    //__________________________________________________________Job Work___________________________________________________________________
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
        this.getItemCode$Name();
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
                codeNameLoad={this.state.Item_Code$Name}

                handleBOMAltItem={this.handle_BOMAltItem_Change.bind(this)}
                handleBomCutComponenet ={this.handle_BomCutComponenet_Change.bind(this)}
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
                SaveRoutingMaster={this.SaveRoutingMaster.bind(this) }
            />
            )
    }
}

const BOM = BoM_Parent(BOM_Routing);
export default BOM;