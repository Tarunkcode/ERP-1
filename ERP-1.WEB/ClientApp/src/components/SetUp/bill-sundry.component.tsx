import * as React from 'react';
import BillSundry_Page from '../../Pages/SetUp/Bill-Sundry/bill-sundry.page';
import { store2 } from '../../Redux/config/config.reducer';
import { toast } from 'react-toastify';
import { ProvideHookToClass } from '../HOC/Current_Configuration_SetUp';
interface IProps {
    api: any
}
interface IState {
    postingData: object
}
class BillSundry extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            postingData: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePosting = this.handlePosting.bind(this);
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""


    handleRadio = (e: any) => {
        let key: string = e.target.name;
        let value: number = parseInt(e.target.id);
        console.log(key," : ", value)
        store2.dispatch({
            payload: value, key: key, type: "changeConfig", label: "seriesConf"
        });
        this.setState({
            postingData: {
                'code': 0,
                "username": this.username,
                'customer': parseInt(this.customer),
                'company': parseInt(this.compCode),
                ...store2.getState().seriesConf
            }
        })

    }
    handleChange = (e: any) => {
        var key: string = e.target.name;
        var value: any = e.target.value;
        var label: string = ''



        if (key === 'effcostpur' || key === 'effcostsale' || key === 'effcostmatissue' || key === 'effcostst' || key === 'effaccsale' || key === 'adjsaleamt' || key === 'adjpartyamtsale' || key === 'postoverabovesale' || key === 'affaccpurch' || key === 'adjinpurchamt' || key === 'adjpartyamtpurch' || key === 'postoverabocepurch' || key === 'bsrnd' || key === 'bsrndtype') {
            e.target.checked ? value = 1 : value = 0
        }
        else {

            switch (key) {
                case 'bstype': value = parseInt(value);
                case 'noofprvbs': value = parseInt(value);
                case 'perof': value = parseFloat(value);
                case 'noofprvbs': value = parseInt(value);
                case 'consolbsamt': value = parseInt(value);
                case 'bsnature': value = parseInt(value);
                case 'value': value = parseInt(value);
                case 'frombs': value = parseInt(value);
                case 'tobs': value = parseInt(value);

          
                default: null;
            }
        }


        if (e.currentTarget.classList.contains('seriesConf')) label = "seriesConf";
        else { alert("category Label are not set for one or multiple inputs 1"); return; }

        console.log(key + ':' + value);


        store2.dispatch({ payload: value, key: key, type: "changeConfig", label: label });
        this.setState({
            postingData: {
                'code': 0,
                "username": this.username,
                'customer': parseInt(this.customer),
                'company': parseInt(this.compCode),
                ...store2.getState().seriesConf
            }
        })

    }
     handleList = (code : any, name: string) => {
        let value = parseInt(code)
       
        let label = "seriesConf";
        store2.dispatch({ payload: value, key: name, type: "changeConfig", label: label });

       
         this.setState({
             postingData: {
                 'code': 0,
                 "username": this.username,
                 'customer': parseInt(this.customer),
                 'company': parseInt(this.compCode),
                 ...store2.getState().seriesConf
             }
         })
    }
    handlePosting = async (e: any) => {
        e.preventDefault();

        let i: any = this.state.postingData;
        console.log('i:', i);
        //console.log('calling')
        const confUrl = '/api/BillSundrySaving';

        try {
            let { got, res } = await this.props.api(confUrl, 'POST', i)
            if (res.status == 200) toast.success(got.msg);

            else toast.error(got.msg)
            /*this.props.postApi(i)*/

        } catch (err) {
            alert(err)
        }
    }

    render() {


        return (
            <BillSundry_Page handleList={this.handleList.bind(this) } handleRadio={this.handleRadio.bind(this) } handleChange={this.handleChange} handlePosting={this.handlePosting} />
        )
    }
}


const BillSundConf = ProvideHookToClass(BillSundry);
export default BillSundConf;