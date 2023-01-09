import * as React from 'react';
import Currency_Page from '../../Pages/Sub-Master/currency.page';
import { store2 } from '../../Redux/config/config.reducer';
import { toast } from 'react-toastify';
import ItemGroup_Page from '../../Pages/Sub-Master/item-group.page';
import SubUnit_Page from '../../Pages/Sub-Master/sub-unit.page';
import ProductType_Page from '../../Pages/Sub-Master/product-type.page';
import Cust_Sup_Page from '../../Pages/Sub-Master/customer-supplier-group';
import PaymentTrem_Page from '../../Pages/Sub-Master/payment-term.page';
import Process_Page from '../../Pages/Sub-Master/process.page';
import DefaultSubMaster from '../HOC/fetchDefaultSubMaster.hoc';
import ProductionOverHead_Page from '../../Pages/Sub-Master/production-overhead.page';
import MatCentre from '../../Pages/Sub-Master/matrial-center.page';

interface IState {
    rawObj: object,
    masterType: number,
    configType: string,
    ipSelectCode: string,
    UgList : any
}
interface IProps {
    defSubMaster: object;
    gettingVirtualCode: number;
    AlterLoadedData: any
}
class SubMasterChild extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            rawObj: {},
            masterType: 0,
            configType: '',
            ipSelectCode: '',
            UgList : []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePosting = this.handlePosting.bind(this);
        this.HandleIpSelect = this.HandleIpSelect.bind(this);

    }
    compCode = window.sessionStorage.getItem('compCode') || ""
    customer = window.sessionStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    componentDidMount() {
        let id: string = window.location.pathname;
        console.log('id', id)
        let s: any = id.split('/');
        console.log('s', s)
        this.setState({
            configType: s[s.length - 1]
        })

        console.log('def', this.props.defSubMaster)
    }
    list: any[] = [];



    GetEsPayTermDet = ({ ind, val, key }: any) => {
        if (!this.list[ind]) {
            this.list[ind] = { [key]: val, PayType: 1, SrNo: ind + 1 };
        }
        else {
            let o = this.list[ind];
            o[key] = val;
            this.list[ind] = o;
        }
        console.log('list', this.list);
        return this.list;
    }

    HandleIpSelect = (code: string, name: string, row : any) => {
        var label: string = ''
        console.log(name + ':' + code);
        let mainObj : object = {};
        label = "subMaster"
        if (name === "") toast.error('key is not sent by store.dispatch in ipSelect')
        else {
            if (this.props.gettingVirtualCode === 0) {
                store2.dispatch({ payload: parseInt(code), key: name, type: "changeConfig", label: label });
            } else {
                let change : object = { [name]: parseInt(code) }
                 mainObj = this.props.AlterLoadedData(change)
                store2.dispatch({ payload: mainObj, key: "", type: "changeConfig", label: "modifySubMaster" });
            }

        }

        this.setState({
            rawObj: {
                'MasterType': this.state.masterType,
                'UserName': this.username,
                'Code': this.props.gettingVirtualCode,
                'Customer': parseInt(this.customer),
                'Company': parseInt(this.compCode),
                ...store2.getState().subMaster
            }
        })
        
    }

    FetchUnderGroupDataList = (mType: any) => {

        const urlUGList = `http://103.25.128.155:12019/api/LoadMasterData?MasterType=${mType}&Company=${this.compCode}&Customer=${this.customer}`;
      
        var req: Request;
        const h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');


        req = new Request(urlUGList, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        })

        try {
         
            fetch(req).then((res: any) => res.json()).then((res: any) => {
                this.setState({ UgList: res.data })
            });
          

        } catch (err) {
            alert(err)
        }


    }

    getMasterType = (val: any) => {
        this.setState({ masterType: val })
        this.FetchUnderGroupDataList(val);
    }
    handleChange = (e: any) => {
        e.preventDefault();

        var value : any = '';
        var label: string = ''
        if (e.currentTarget.classList.contains('subMaster')) {
            
            label = "subMaster"
            switch (e.target.name) {
                case 'c1': value = parseInt(e.target.value); break;
                case 'c2': value = parseInt(e.target.value); break;
                case 'c3': value = parseInt(e.target.value); break;
                case 'c4': value = parseInt(e.target.value); break;
                case 'c5': value = parseInt(e.target.value); break;
                case 'c6': value = parseInt(e.target.value); break;
                case 'c7': value = parseInt(e.target.value); break;
                case 'c8': value = parseInt(e.target.value); break;
                case 'c9': value = parseInt(e.target.value); break;
                case 'c10': value = parseInt(e.target.value); break;
                case 'c11': value = parseInt(e.target.value); break;
                case 'c12': value = parseInt(e.target.value); break;
                case 'c13': value = parseInt(e.target.value); break;
                case 'c14': value = parseInt(e.target.value); break;
                case 'c15': value = parseInt(e.target.value); break;
                case 'c16': value = parseInt(e.target.value); break;
                case 'c17': value = parseInt(e.target.value); break;
                case 'c18': value = parseInt(e.target.value); break;
                case 'c19': value = parseInt(e.target.value); break;
                case 'c20': value = parseInt(e.target.value); break;
                case 'c21': value = parseInt(e.target.value); break;
                case 'c22': value = parseInt(e.target.value); break;
                case 'c23': value = parseInt(e.target.value); break;
                case 'c24': value = parseInt(e.target.value); break;
                case 'c25': value = parseInt(e.target.value); break;

                case 'd1': value = parseFloat(e.target.value); break;
                case 'd2': value = parseFloat(e.target.value); break;
                case 'd3': value = parseFloat(e.target.value); break;
                case 'd4': value = parseFloat(e.target.value); break;
                case 'd5': value = parseFloat(e.target.value); break;
                case 'd6': value = parseFloat(e.target.value); break;
                case 'd7': value = parseFloat(e.target.value); break;
                case 'd8': value = parseFloat(e.target.value); break;
                case 'd9': value = parseFloat(e.target.value); break;
                case 'd10': value = parseFloat(e.target.value); break;
                case 'd11': value = parseFloat(e.target.value); break;
                case 'd12': value = parseFloat(e.target.value); break;
                case 'd13': value = parseFloat(e.target.value); break;
                case 'd14': value = parseFloat(e.target.value); break;

                case 'BranchCode': value = parseFloat(e.target.value); break;
                case 'BusyCode': value = parseFloat(e.target.value); break;
                case 'PlanNoMW': value = parseFloat(e.target.value); break;

                default: value = e.target.value

            }
            if (e.currentTarget.classList.contains('switch')) { e.target.checked === true ? value = 1 : value = 0 }
          

        } else if (e.currentTarget.classList.contains('table')) {
            var value: any = e.target.value;
            var key: any = e.target.name;
            if (key === 'NoOfDay') { value = parseInt(value) }
            else if (key === 'Per') { value = parseFloat(value).toFixed(2); value = parseFloat(value) }


            var m = this.GetEsPayTermDet({ ind: 0, val: value, key: key });



            store2.dispatch({ payload: m, type: "table", key:'', label: 'tableRow' })
      
        }
         else alert("category Label are not set for one or multiple inputs 1")
       
        if (this.props.gettingVirtualCode !== 0) {
            let change = { [e.target.name]: value }
            console.log('change', change);
            let obj = this.props.AlterLoadedData(change)
            console.log('after change', obj)
            store2.dispatch({ payload: obj, key: "", type: "changeConfig", label: "modifySubMaster" });


        } else {
            store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: "subMaster" });
        }
     
            this.setState({
                rawObj: {
                    'MasterType': this.state.masterType,
                    'UserName': this.username,
                    'Code': this.props.gettingVirtualCode,
                    'Customer': parseInt(this.customer),
                    'Company': parseInt(this.compCode),
                    ...store2.getState().subMaster
                }
            })

    }
    handlePosting = async (e: any) => {
        e.preventDefault();
        console.log('calling');
        let i: any = JSON.stringify(this.state.rawObj);
        console.log('i:', i);
        //console.log('calling')
        const confUrl = 'http://103.25.128.155:12019/api/SaveMasterData';


        var req1: Request;
        let h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        req1 = new Request(confUrl, {
            method: 'POST',
            headers: h,
            body: i,
            mode: 'cors'
        });
        try {
            const response = await fetch(req1);
            const data = await response.json();
            if (data.data == 2) {
                toast.success(data.msg)

            } else {
                toast.error(data.msg)

            }
            store2.getState().subMaster.EsMasterTable[0] = {}
        } catch (err) {
            alert(err)
        }
    }
    render() {
        return (
            <>
                {
                    this.state.configType === '1' ? (<Cust_Sup_Page UgList={this.state.UgList} HandleIpSelect={this.HandleIpSelect.bind(this)} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Customer Group" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
                {
                    this.state.configType === '2' ? (<Cust_Sup_Page HandleIpSelect={this.HandleIpSelect} UgList={this.state.UgList } defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Supplier Group" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
                {
                    this.state.configType === '18' ? (<Currency_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="" configType={this.state.configType}   handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
                {
                    this.state.configType === '3' ? (<ItemGroup_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="" configType={this.state.configType}  handleChange={this.handleChange} handlePosting={this.handlePosting} />):null
                }
                {
                    this.state.configType === '17' ? (<SubUnit_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '11' ? (<ProductType_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Product Type" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '12' ? (<ProductType_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Product Category" configType={this.state.configType}  handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '16' ? (<ProductType_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Brand" configType={this.state.configType}  handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '43' ? (<ProductType_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Sub Category" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '40' ? (<ProductType_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Clearance" configType={this.state.configType}  handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '10' ? (<PaymentTrem_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Payment Term" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
             {
                    this.state.configType === '9' ? (<PaymentTrem_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Delivery Term" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
            
              
            
                {
                    this.state.configType === '42' ? (<ProductionOverHead_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Production Operation" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
            
                 {
                    this.state.configType === '38' ? (<ProductionOverHead_Page HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Production OverHead" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
           
             {
                    this.state.configType === '4' ? (<MatCentre HandleIpSelect={this.HandleIpSelect} defaultData={this.props.defSubMaster} getMasterType={this.getMasterType} pageTitle="Material Center" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} />) : null
                }
           
            

            </>
            )
    }
}


const SubMaster = DefaultSubMaster(SubMasterChild);

export default SubMaster;