import * as React from 'react';
import SalePurchaseType_Page from '../../Pages/SetUp/SalePurchaseType/sale-purchase-type.page';
import { store2 } from '../../Redux/config/config.reducer';
import { toast } from 'react-toastify';
import SalePurchaseTypeLoadDetails from '../HOC/load-sale-purchase-type';
import { LoaderContext } from '../../AppContext/loaderContext';

interface IState {
    configType: string,
    rawObj: object,
    defGstCatName: string,
    gridApi: any,
    showBranchCode: boolean,
    masterType: number,
    payType: number
}
interface IProps {
    api: any; gstCategory: any[], loadSPTypeMaster: any;
    billSundryList: any[],
    customer: number, compCode: number, username: string, gettingVirtualCode: any;
    collectListData: any;
}
class SPType extends React.Component<IProps, IState> {
    static contextType = LoaderContext;
    constructor(props: any) {
        super(props);
        this.state = {
            masterType: 0,
            rawObj: {},
            defGstCatName: '',
            showBranchCode: false,
            gridApi: null,
            payType: 0,
            configType: ''
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
        store2.getState().seriesConf = {}
    }
    componentDidUpdate(prevProps: any) {
        if (this.props.gettingVirtualCode !== 0) {
            if (this.props.loadSPTypeMaster !== prevProps.loadSPTypeMaster) {
                if (this.props.loadSPTypeMaster.sptypeheader[0].usefor == 2) this.setState({ showBranchCode: true })
                else { }
            } else { }

        } else { }
    }
    //-------------------------------------------------Private Methods -------------------------------------------------------------------------------------------------------
    getMasterType = (val: number) => { this.setState({ masterType: val }) }


    getTableData = (gridApi: any) => {
        this.setState({ gridApi: gridApi })
    }
    getAllRows = () => {
        let items: any[] = [];
        this.state.gridApi.forEachNode(function (node: any) {
            if (node.data.bscode !== null)
                items.push(node.data);
        });
        return items;
    }



    //---------------------------------------------Alter Table----------------------------------------------------------------------------------------------------------

    //getTableData = (e: any) => {
    //    let data = e.data;
    //    console.log(data);
    //    this.setState({ detailsArr:data  })
    //}


    collectTableData = async () => {

        let dataSet: any[] = await this.getAllRows();

        dataSet.map((item: any) => {
            this.props.billSundryList.map((option: any) => {
                if (option.value === item.bscode.value) {
                    item.bscode = option.bscode.value;
                    item.bstype = option.bstypecode;
                    item.nature = option.naturecode;


                    item.bsval = parseFloat(item.bsval);
                    item.code = this.props.gettingVirtualCode;

                }

            })
        })



        await this.setState({
            rawObj: dataSet
        })
    }
    SelectList = (item: any) => {
        let value = parseInt(item.id)
        let name = (item.name)
        let label = "seriesConf";

        store2.dispatch({ payload: value, key: name, type: "changeConfig", label: label });
        name == 'usefor' && value == 2 ? this.setState({ showBranchCode: true }) : this.setState({ showBranchCode: false })
    }
    handleChange = (e: any) => {

        //if (!e.target.checked) return;

        e.preventDefault();
        var value: any;
        var label: string = '';

        if (e.currentTarget.classList.contains('seriesConf')) {
            label = "seriesConf"
            if (e.currentTarget.classList.contains('switch')) {
                e.target.checked ? value = 1 : value = 0
            } else if (e.currentTarget.classList.contains('select')) {
                value = parseInt(e.target.value);
            } else {
                value = e.target.value
            }
        }
        store2.dispatch({ payload: value, key: e.target.name, type: "changeConfig", label: label });


    }
    handleList = (name: string, value: any) => {
        store2.dispatch({ payload: parseInt(value), key: name, type: "changeConfig", label: 'seriesConf' })
        name == 'usefor' && value == 2 ? this.setState({ showBranchCode: true }) : this.setState({ showBranchCode: false })
    }

    //--------------------------------------------Posting Data Method ---------------------------------------------------------------------------------------------------


    handlePosting = async (e: any) => {
        const loader = this.context;
        loader.setLoader(true);
        e.preventDefault();
        await this.collectTableData();
        let i: any = {};
        this.props.gettingVirtualCode !== 0 ?
            i = {
                sptypeheader: [{
                    value: this.props.gettingVirtualCode,
                    customer: this.props.customer,
                    company: this.props.compCode,
                    mastertype: this.state.masterType,
                    username: this.props.username,
                    ...this.props.loadSPTypeMaster.sptypeheader[0],
                    ...store2.getState().seriesConf

                }],
                sptypedetail: this.state.rawObj
            } :
            i = {
                sptypeheader: [{
                    value: this.props.gettingVirtualCode,
                    customer: this.props.customer,
                    company: this.props.compCode,
                    mastertype: this.state.masterType,
                    username: this.props.username,
                    ...store2.getState().seriesConf

                }],
                sptypedetail: this.state.rawObj
            }
        console.log('i', i);
        const confUrl = '/api/SPTypeSaving';


        try {

            let { res, got } = await this.props.api(confUrl, "POST", i);

            if (res.status == 200) {
                loader.setLoader(false)
                toast.success(got.msg)

            } else {
                loader.setLoader(false)
                toast.error(got.msg)

            }
            //store2.getState().roleMaster = []
            //store2.getState().seriesConf = {}
        } catch (err) {
            loader.setLoader(false)
            alert(err)
        }

    }


    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <>
                {this.state.configType === '/add-sale-type' ? (<SalePurchaseType_Page
                    SelectList={this.SelectList.bind(this)}
                    gstCat={this.props.gstCategory}
                    pagecode={13}
                    vccode={this.props.gettingVirtualCode}
                    showBranchCode={this.state.showBranchCode}
                    getMasterType={this.getMasterType}
                    handleList={this.handleList.bind(this)}
                    defGstCatName={this.state.defGstCatName}
                    collectListData={this.props.collectListData}
                    defaultLoad={this.props.loadSPTypeMaster}
                    getTableData={this.getTableData.bind(this)}
                    pageTitle="Sale Type" billSundry={this.props.billSundryList} handleChange={this.handleChange} handlePosting={this.handlePosting} configType={this.state.configType} />) : null}



                {this.state.configType === '/add-purchase-type' ? (<SalePurchaseType_Page
                    SelectList={this.SelectList.bind(this)}
                    gstCat={this.props.gstCategory}
                    pagecode={14}
                    getMasterType={this.getMasterType}
                    defGstCatName={this.state.defGstCatName}
                    handleList={this.handleList.bind(this)}
                    showBranchCode={this.state.showBranchCode}
                    collectListData={this.props.collectListData}
                    vccode={this.props.gettingVirtualCode}
                    defaultLoad={this.props.loadSPTypeMaster}
                    getTableData={this.getTableData.bind(this)}
                    pageTitle="Purchase Type" handleChange={this.handleChange} billSundry={this.props.billSundryList} handlePosting={this.handlePosting} configType={this.state.configType} />) : null}

            </>
        )
    }
}

const saletype$purtype = SalePurchaseTypeLoadDetails(SPType);
export default saletype$purtype;