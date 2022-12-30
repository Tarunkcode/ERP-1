import * as React from 'react';
import SalePurchaseType_Page from '../../Pages/SetUp/SalePurchaseType/sale-purchase-type.page';
import { store2 } from '../../Redux/config/config.reducer';
import { toast } from 'react-toastify';
interface IState {
    configType: string,
    rawObj : object,
    masterType: number,
    payType: number
}
export default class SPType extends React.Component<{}, IState> {
    constructor(props : any) {
        super(props);
        this.state = {
            masterType: 0,
            rawObj: {},
            payType : 0,
            configType:''
        }
    }
    componentDidMount() {
        let id: string = window.location.pathname;
        console.log('id', id)
        //let s: string = id.charAt(id.length - 1)
        //console.log('s', s)
        this.setState({
            configType: id
        })
     

    }
  
    getMasterType = (val: number) => { this.setState({ masterType: val }) }
   

    compCode = window.sessionStorage.getItem('compCode') || ""
    customer = window.sessionStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""


    handleChange = (e: any) => {
            let obj: object = {};
        //if (!e.target.checked) return;

        e.preventDefault();
        var value: any;
        var label: string = '';

        if (e.currentTarget.classList.contains('roleMaster')) {
            label = "roleMaster"
            store2.dispatch({ payload: parseInt(e.target.value), key: e.target.name, type: "changeConfig", label: label });
        }
        else if (e.currentTarget.classList.contains('seriesConf')) {
            label = "seriesConf"
            if (e.currentTarget.classList.contains('switch')) {
                e.target.checked ? value = 1 : value = 0
            } else if (e.currentTarget.classList.contains('select')) {
                value = parseInt(e.target.value);
            } else {
                value = e.target.value
            }
            store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });
        }
        //console.log('sCon', store2.getState().seriesConf)
        //console.log('rlm', store2.getState().roleMaster)
        store2.getState().roleMaster.map((item): any => {
            obj = { ...obj, ...item }
            
        })
        this.setState({
            rawObj: {
                Customer: parseInt(this.customer),
                Company: parseInt(this.compCode),
                SPTypeHeader: [{
                    Code: 0,
                    MasterType: this.state.masterType,
                    ...store2.getState().seriesConf,
                    UserName: this.username
                }],
                SPTypeDetail: [{ ...obj, Code:0 }]
            }
        })
    }
    handlePosting = async (e: any) => {
        e.preventDefault();
      
        console.log('calling');
        let i: any = JSON.stringify(this.state.rawObj);

        const confUrl = 'http://103.25.128.155:12019/api/SPTypeSaving';
        console.log('i', i)

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
            if (data.status == 0) {
                toast.success(data.msg)

            } else {
                toast.error(data.msg)

            }
            store2.getState().roleMaster = []
        } catch (err) {
            alert(err)
        }

    }
    render() {
        return (
            <>
                {this.state.configType === '/add-sale-type' ? (<SalePurchaseType_Page
                  
                    getMasterType={this.getMasterType }
                 
                    pageTitle="Sale Type" handleChange={this.handleChange} handlePosting={this.handlePosting} configType={this.state.configType} />) : null}
                {this.state.configType === '/add-purchase-type' ? (<SalePurchaseType_Page
                 
                    getMasterType={this.getMasterType}
               
                    pageTitle="Purchase Type" handleChange={this.handleChange} handlePosting={this.handlePosting} configType={this.state.configType} />) : null}
               
            </>
            )
    }
}