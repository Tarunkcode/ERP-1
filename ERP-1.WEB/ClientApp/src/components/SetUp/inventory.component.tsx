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


interface IState {
    rawPosting: object,
    configType: string,
    loadedList1: any
}
interface IProps {
    defFeatureOptionMaster: object,
    AlterLoadedData: any
}
class Feature_Option extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            rawPosting: {},
            configType: '',
            loadedList1 :[]
        }

    }
    compCode = window.sessionStorage.getItem('compCode') || ""
    customer = window.sessionStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    FetchLoadedList = (mType: any) => {

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
                this.setState({ loadedList1: res.data })
            });


        } catch (err) {
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
            store2.getState().InventoryDet = [{}]
        } catch (err) {
            alert(err)
        }
    }

    HandleIpSelect = (code: string, name: string) => {
        var label: string = ''
        console.log(name + ':' + code);

        label = "InventoryDet"
        //if (name === "") toast.error('key is not sent by store.dispatch in ipSelect')
        let currObj = { [name]: parseInt(code) }
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
            else if (e.currentTarget.classList.contains('select')) {
                value = parseInt(e.target.value)
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
                    this.state.configType === '7' ? (<GSTConf_Page defConf={this.props.defFeatureOptionMaster} LoadedList={this.state.loadedList1} HandleIpSelect={this.HandleIpSelect.bind(this)} handleChange={this.handleChange.bind(this)} handlePosting={this.handlePosting.bind(this)} />) : null
                }
            </>
        )
    }
}

const Inventory = DefaultConfigConf(Feature_Option);
export default Inventory;