import * as React from 'react';
import { toast } from 'react-toastify';
import SeriesConfig_Page from "../../Pages/SetUp/Series-Config/series-config.page";
import { store2 } from '../../Redux/config/config.reducer';
import ProvideHookToClass from '../HOC/loadBOM';

interface IProps {
    api : any
}
interface IState {
    rawObj: object,
    Code: any,
    ctype: any
}
class Series_Conf extends React.Component<IProps,IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            rawObj: {},
            Code: 0,
            ctype: 0,
           
        }
        this.handlePosting = this.handlePosting.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""

    getCode = (value: any) => {
        this.setState({ Code: value })
    }
     getCtype = (value: any) => {
        this.setState({ ctype: value })
        console.log('ctype', this.state.ctype)
    }
    handleChange = (e: any) => {

        e.preventDefault();

        var value = e.target.value;
        var label :string = ''
        if (e.currentTarget.classList.contains('seriesConf')) label = "seriesConf";

        else alert("category Label are not set for one or multiple inputs 1")

        if (e.target.name !== "Prefix" || e.target.name !== "Suffix" || e.target.name !== "DateVchNoSep" || e.target.name !== "PadChar") value = parseInt(value);

        console.log('key : ' + e.target.name + ',value : ' + value);
        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });

        this.setState({
            rawObj: {
                "CType": parseInt(this.state.ctype),
                'Code': parseInt(this.state.Code),
                'Customer': parseInt(this.customer),
                'Company': parseInt(this.compCode),
                ...store2.getState().seriesConf
            }
        })
    }
    handlePosting = async (e: any) => {
        e.preventDefault();
       
        let i: any = this.state.rawObj;
       
        const confUrl = '/api/SeriesSaving';


        try {
            let {res, got } = await this.props.api(confUrl, "POST", i)
          
            if (res.status == 0) {
                toast.success(got.msg)

            } else {
                toast.error(got.msg)

            }
            store2.getState().seriesConf = {}
        } catch (err) {
            alert(err)
        }

    }
    render() {
        return (
            <>
                
                    < SeriesConfig_Page handleChange={this.handleChange} getCtype={this.getCtype} parentCode={this.state.Code} getCode={this.getCode} handlePosting={this.handlePosting} />
                
               
              
                
            </>
            )
        
    }
}

const seriesConf = ProvideHookToClass(Series_Conf)
export default seriesConf;