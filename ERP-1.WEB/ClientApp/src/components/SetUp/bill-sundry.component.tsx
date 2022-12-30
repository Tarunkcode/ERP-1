import * as React from 'react';
import BillSundry_Page from '../../Pages/SetUp/Bill-Sundry/bill-sundry.page';
import { store2 } from '../../Redux/config/config.reducer';
import { toast } from 'react-toastify';

interface IState {
    postingData : object
}
export default class BillSundry extends React.Component<{},IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            postingData: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePosting = this.handlePosting.bind(this);
    }
    compCode = window.sessionStorage.getItem('compCode') || ""
    customer = window.sessionStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""

    handleChange = (e: any) => {
        var key: string = e.target.name;
        var value: any = e.target.value;
        var label: string = ''



        if (key === 'EffCostPur' || key === 'EffCostSale' || key === 'EffCostMatIssue' || key === 'EffCostST' || key === 'EffAccSale' || key === 'AdjSaleAmt' || key === 'AdjPartyAmtSale' || key === 'PostOverAboveSale' || key === 'AffAccPurch' || key === 'AdjInPurchAmt' || key === 'AdjPartyAmtPurch' || key === 'PostOverAbocePurch' || key === 'AmtBSFed' || key === 'PerOfOn' || key === 'BSRnd' || key === 'BSRndType') {
            e.target.checked ? value = 1 : value = 0
        }
        else {

            switch (key) {
                case 'BSType': value = parseInt(value);
                case 'BSNature': value = parseInt(value);
                case 'Value': value = parseInt(value);
                case 'FromBS': value = parseInt(value);
                case 'ToBS': value = parseInt(value);
            
                case 'PerOf': value = parseFloat(value);
                default: null;
            }
        }
        
      
        if (e.currentTarget.classList.contains('seriesConf')) label = "seriesConf";
        else { alert("category Label are not set for one or multiple inputs 1"); return;}

        console.log(key + ':' + value);
      

        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });
        this.setState({
            postingData: {
                'Code': 0,
                "UserName": this.username,
                'Customer': parseInt(this.customer),
                'Company': parseInt(this.compCode),
                ...store2.getState().seriesConf
            }
        })

    }
     handlePosting = async (e: any) => {
         e.preventDefault();
         console.log('calling');
         let i: any = JSON.stringify(this.state.postingData);
         console.log('i:', i);
         //console.log('calling')
         const confUrl = 'http://103.25.128.155:12019/api/BillSundrySaving';


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
             store2.getState().seriesConf = {}
             /*this.props.postApi(i)*/
         } catch (err) {
             alert(err)
         }
    }

    render() {
   

        return (
            <BillSundry_Page handleChange={this.handleChange} handlePosting={this.handlePosting} />
            )
    }
}