import * as React from 'react'
import { toast } from 'react-toastify';
import GSTConf_Page from '../../Pages/SetUp/Featutes-Option/gst-conf.page';
import GSTCategory_Page from '../../Pages/SetUp/GSTCategory/gst-category.page';
import Inventory_Page from '../../Pages/SetUp/Featutes-Option/inventory.page'
import JobWork_Page from '../../Pages/SetUp/Featutes-Option/job-work.page';
import Production_Page from '../../Pages/SetUp/Featutes-Option/production.page';
import Purchase_Page from '../../Pages/SetUp/Featutes-Option/purchase.page';
import Quality_Page from '../../Pages/SetUp/Featutes-Option/quality-check.page';
import Sale_Page from '../../Pages/SetUp/Featutes-Option/sale.page';
import { store2 } from '../../Redux/config/config.reducer';
import DefaultConfigConf from '../HOC/fetchDefaultConfigurationSettings';
import { Redirect } from 'react-router';
import { LoaderContext } from '../../AppContext/loaderContext';


interface IState {
    rawPosting: any,
    configType: string,
    loadedList1: any,
    redirect: boolean,
}
interface IProps {
    api: any,
  /*  history : any,*/
    defFeatureOptionMaster: object,
    AlterLoadedData: any
}
class Feature_Option extends React.Component<IProps, IState> {
    static contextType = LoaderContext;
    constructor(props: any) {
        super(props);
        this.state = {
            rawPosting: null,
            configType: '',
            loadedList1: [],
            redirect : false
        }

    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    FetchLoadedList = async (mType: any) => {
        const loader = this.context;
        const urlUGList = `/api/LoadMasterData?MasterType=${mType}&Company=${this.compCode}&Customer=${this.customer}`;

       
        try {
            loader.setLoader(true);
            let { res, got } = await this.props.api(urlUGList, "GET",'')
            if(res.status) {
                this.setState({ loadedList1: got.data })
                loader.setLoader(false);
            }


        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }


    }
    componentDidMount() {
     
        let id: string = window.location.pathname;
        console.log('id', id)
        let s: any = id.split('/');
        console.log('s', s)
        if (s[s.length - 1] === 'gst') this.setState({ configType: '7' })
        else {
        this.setState({
            configType: s[s.length - 1]
        })

        }
        this.FetchLoadedList(2008);
    }
    handlePosting = async (e: any) => {
        const loader = this.context;
        loader.setLoader(true);
        e.preventDefault();
        console.log('calling');
        let i: any = {};
        if (this.state.rawPosting === null) {

            i = { "ConfigType": parseInt(this.state.configType), "Customer": parseInt(this.customer), "Company": parseInt(this.compCode), "InventoryDet": [this.props.defFeatureOptionMaster] };
        }
        else {
            i = this.state.rawPosting;
        
        }
        console.log('isssssss', i);
        //console.log('calling')
        const confUrl = '/api/SaveConfig';


      
        try {
            let { res, got } = await this.props.api(confUrl,'POST' ,i)
        
            if (res.status == 200) {
                    loader.setLoader(false);
                toast.success(got.msg)
                setTimeout(() => {
                this.setState({ redirect: true });
                }, 2000)

            } else {
                loader.setLoader(false);
                toast.error(got.msg)

            }
            store2.getState().InventoryDet = [{}]
        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }
    }

    SelectList = (item : any) => {
        let name = item.value;
        let id = item.id;
        
        let label = "InventoryDet"
        //if (name === "") toast.error('key is not sent by store.dispatch in ipSelect')
        let currObj = { [name]: parseInt(id) }
        let mainObj = this.props.AlterLoadedData(currObj)

        console.log('mo', mainObj)
        store2.dispatch({ payload: mainObj, key: "", type: "changeConfig", label: label });

    }
    handleChange = (e: any) => {
        e.preventDefault();
        var value: any;
        var label: string = '';

        if (e.currentTarget.classList.contains('InventoryDet')) {
            label = "InventoryDet";
            if (e.target.name === 'qtyTolPo') {

                value = parseFloat(e.target.value).toFixed(2);
                value = parseFloat(value);
            }
            else if (e.currentTarget.classList.contains('switch')) {
                e.target.checked === true ? value = 1 : value = 0
            }
            
            else value = e.target.value;
        }

        else alert("category Label are not set for one or multiple inputs 1")


        let currObj = { [e.target.name]: value }
        let mainObj = this.props.AlterLoadedData(currObj)
       
        console.log('mo', mainObj)
        store2.dispatch({ payload: mainObj, key: "", type: "changeConfig", label: label });

        this.setState({
            rawPosting: {
                "ConfigType": parseInt(this.state.configType),
                "Customer": parseInt(this.customer),
                "Company": parseInt(this.compCode),
                "InventoryDet": [...store2.getState().InventoryDet]

            }
        })
        console.log('raw Data', this.state.rawPosting)
    }

    render() {
        let { redirect } = this.state;
        if (redirect === true) {
            return <Redirect to="/successfully-modify" />
        }
        return (
            <>
                {
                    this.state.configType === "3" ? (
                        <Purchase_Page defConf={this.props.defFeatureOptionMaster} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "1" ? (
                        <Inventory_Page defConf={this.props.defFeatureOptionMaster} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "6" ? (
                        <Sale_Page defConf={this.props.defFeatureOptionMaster} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }

                {
                    this.state.configType === "2" ? (
                        <Production_Page defConf={this.props.defFeatureOptionMaster} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "5" ? (
                        <JobWork_Page defConf={this.props.defFeatureOptionMaster} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }
                {
                    this.state.configType === "4" ? (
                        <Quality_Page defConf={this.props.defFeatureOptionMaster} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />
                    ) : null
                }

                {
                    this.state.configType === '7' ? (<GSTConf_Page defConf={this.props.defFeatureOptionMaster} LoadedList={this.state.loadedList1} SelectList={this.SelectList.bind(this)} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />) : null
                }
            </>
        )
    }
}

const Inventory = DefaultConfigConf(Feature_Option);
export default Inventory;