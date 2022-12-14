import * as React from 'react'
import { toast } from 'react-toastify';
import GST_Page from '../../Pages/SetUp/Featutes-Option/gst.page';
import Inventory_Page from '../../Pages/SetUp/Featutes-Option/inventory.page'
import JobWork_Page from '../../Pages/SetUp/Featutes-Option/job-work.page';
import Production_Page from '../../Pages/SetUp/Featutes-Option/production.page';
import Purchase_Page from '../../Pages/SetUp/Featutes-Option/purchase.page';
import Quality_Page from '../../Pages/SetUp/Featutes-Option/quality-check.page';
import Sale_Page from '../../Pages/SetUp/Featutes-Option/sale.page';
import { store2 } from '../../Redux/config/config.reducer';


interface IState {
    rawPosting: object,
    configType: string,

}
export default class Inventory extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state ={
            rawPosting: {},
            configType: '',
    
        }
    
    }
compCode = window.sessionStorage.getItem('compCode') || ""
customer = window.sessionStorage.getItem('customer') || ""
username = window.sessionStorage.getItem('username') || ""
 
    componentDidMount() { 
        let id: string = window.location.pathname;
        console.log('id',id)
       let s : string = id.charAt(id.length - 1 )
        console.log('s', s)
        this.setState({
            configType:s
        })


    }
    handlePosting = async (e: any) => {
        e.preventDefault();
        console.log('calling');
        let i: any = JSON.stringify(this.state.rawPosting);
            console.log('i:', i);
        //console.log('calling')
        const confUrl = 'http://103.25.128.155:12019/api/SaveConfig';
 

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
            console.log('res', data)
            if (data.status == 0) {
                toast.success(data.msg)

            } else {
                toast.error(data.msg)

            }
        } catch (err) {
            alert(err)
        }
    }
   
    handleChange = (e: any) => {
        e.preventDefault();
        var value: any;
        var label: string = '';

        if (e.currentTarget.classList.contains('InventoryDet')) label = "InventoryDet";
       
        else alert("category Label are not set for one or multiple inputs 1")
        if (e.target.name === 'QtyTolPo') {

            value = parseFloat(e.target.value).toFixed(1);
            value = parseFloat(value);
        } else {
       e.target.checked ? value = '1': value= '0'
        value = parseInt(value);

        }

        console.log('key : ' + e.target.name + ',value : ' + value);
        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });

        this.setState({
            rawPosting: {
                "ConfigType": parseInt(this.state.configType),
                "Customer":parseInt(this.customer),
                "Company": parseInt(this.compCode),
                "InventoryDet" : [...store2.getState().InventoryDet]
                
            }
        })
    
    }

    render() {
        return (
            <>
                {
                    this.state.configType === "3" ? (
                        <Purchase_Page handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "1" ?(
                        <Inventory_Page handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                        ): null
                }
                {
                    this.state.configType === "2" ? (
                        <Sale_Page handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
              
                {
                    this.state.configType === "4" ? (
                        <Production_Page handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "5" ? (
                        <JobWork_Page handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "6" ? (
                        <Quality_Page handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
              
               
            </>
            )
    }
}
