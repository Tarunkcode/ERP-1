import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import Process_Page from '../../Pages/Sub-Master/process.page';
import { store2 } from '../../Redux/config/config.reducer';
import LoadProcessMaster from '../HOC/Load_Process_SubMaster';

interface IState {
    configType: string;
    masterType: number;
    sNo: number;
    rawObj: object;
    defProcessMaster: any;
    jobApi: any,
    overApi: any;
    oprnApi: any;
}
interface IProps {
    api: any,
    state: any;
    gettingVirtualCode: number;
    overhead: any[],
    operation: any[],
    jobwork: any[],
    matCenter: any[]
}
class RootProcess extends React.Component<IProps, IState> {
    static contextType = LoaderContext;
    constructor(props: IProps) {
        super(props)
        this.state = {
            configType: '',
            masterType: 0,
            sNo: 0,
            rawObj: {},
            defProcessMaster: {},
            oprnApi: null,
            jobApi: null,
            overApi: null
        }
        this.handlePosting = this.handlePosting.bind(this);

        this.handleChange = this.handleChange.bind(this);

    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    localState: any = {}
    mainObj: object = {};
    ovrhdArr: any = [];
    jbWorkerArr: any = [];
    oprnArr: any = [];

    componentDidMount() {
        let id: string = window.location.pathname;
        console.log('id', id)
        let s: any = id.split('/');
        console.log('s', s)
        this.setState({
            configType: s[s.length - 1]
        })

        console.log('virtual code :', this.props.gettingVirtualCode)


        //-----------------------------------------
        if (this.props.gettingVirtualCode === 0 || this.props.state === null) {
        } else {
            /*  console.log('code', this.props.state)*/
            this.fetchDefProcessMaster(this.props.state.code);

        }
    }
    //----------------------------------------------------------------------------------------------------------------------
    getJobApi = (api: any) => {
        this.setState({ jobApi: api })
    }
    getOverHeadApi = (api: any) => {
        this.setState({ overApi: api })
    }
    getOprnApi = (api: any) => {
        this.setState({ oprnApi: api })
    }

    getJobGridData = async () => {
        let items: any[] = [];
        this.state.jobApi.forEachNode(function (node: any) {
            if (node.data.jbcode !== null)
                items.push(node.data);
        });
        return items;
    }
    getOverHeadGridData = async () => {
        let items: any[] = [];
        this.state.overApi.forEachNode(function (node: any) {
            if (node.data.poh !== null)
                items.push(node.data);
        });
        return items;
    }
    getOprnGridData = async () => {
        let items: any[] = [];
        this.state.oprnApi.forEachNode(function (node: any) {
            if (node.data.opr !== null)
                items.push(node.data);
        });
        return items;
    }
    //-------------------------------------------------------------------------------------------------------------------------
    saveJobWork = async () => {
        let dataSet: any[] = await this.getJobGridData();
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{}]

            return;
        } else {
            dataSet.map((item: any, ind: number) => {
                this.props.jobwork.map((option: any) => {
                    if (option.value === item.jbcode.value) {
                        item.srno = ind + 1;
                        item.jbcode = item.jbcode.value;
                        item.jobworkon = item.jobworkon.value;


                    }

                })
            })


        }


        await this.setState({
            rawObj: {
                ...this.state.rawObj,
                processjobworker: dataSet
            }
        })
    }
    saveOperationDetails = async () => {
        let dataSet: any[] = await this.getOprnGridData();
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{}]

            return;
        } else {
            dataSet.map((item: any) => {
                this.props.operation.map((option: any, ind: number) => {
                    if (option.value === item.opr.value) {
                        item.srno = ind + 1;
                        item.opr = item.opr.value;

                    }

                })
            })

        }



        await this.setState({
            rawObj: {
                ...this.state.rawObj,
                processopration: dataSet
            }
        })
    }
    saveProcessOverHead = async () => {
        let dataSet: any[] = await this.getOverHeadGridData();
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{}]

        } else {

            dataSet.map((item: any) => {
                this.props.overhead.map((option: any, ind: number) => {
                    if (option.value === item.poh.value) {
                        item.srno = ind + 1;
                        item.poh = item.poh.value;

                    }

                })
            })
        }



        await this.setState({
            rawObj: {
                ...this.state.rawObj,
                processpoh: dataSet
            }
        })
    }
    fetchDefProcessMaster = async (code: any) => {
        const loader = this.context;
        let urlStr = `/api/LoadProcessMaster?Code=${code}&Company=${this.compCode}&Customer=${this.customer}`
        loader.setLoader(true);
        try {
            let { res, got } = await this.props.api(urlStr, "GET", '')
            if (res.status == 200) {
                var data = got.data[0];
                // alter Job Work

                //alter Operation

                // alter Overhead


                this.setState({ defProcessMaster: data });
                this.setState({
                    rawObj: {
                        ...data,
                        esprocessmaster: [data.esprocessmaster[0]]
                    }
                })
                loader.setLoader(false);
            } else {
                toast.error('ERROR :: Loading Default Process Master Failed !');
                loader.setLoader(false);
            }
        } catch (err) {
            loader.setLoader(false);
            alert(err)
        }
    }
   


    handleChange = (e: any) => {

        e.preventDefault();

        var value: any = '';
        var label: string = e.target.name;
        //-------------------------------------------------------------------------------
        if (e.currentTarget.classList.contains('switch')) {
            console.log('switch', e.target.value);
            e.target.checked === true ? value = 1 : value = 0;

        } else if (e.currentTarget.classList.contains('select')) {
            value = parseInt(e.target.value);
        } else if (e.currentTarget.classList.contains('number')) {
            value = parseFloat(e.target.value);
        } else {
            value = e.target.value;
        }

        if (this.props.gettingVirtualCode === 0) {
            //-------------------------------------------------------------------------------
            if (e.currentTarget.classList.contains('pMaster')) {

                store2.dispatch({ payload: value, key: label, type: "changeConfig", label: "pMaster" });


            }
            else {
                alert('asign category pMaster is missed to some of the field in process Master');
            }
        } else {
            let change = { [label]: value }

            this.mainObj = { ...this.mainObj, ...change }
            store2.dispatch({ payload: this.mainObj, key: "", type: "changeConfig", label: "modify_P_ESMaster" });
        }
        //-------------------------------------------------------------------------------
        this.setState({
            rawObj: {
                Code: this.props.gettingVirtualCode,
                Customer: parseInt(this.customer),
                Company: parseInt(this.compCode),
                MasterType: 11,
                UserName: this.username,
                esprocessmaster: this.props.gettingVirtualCode === 0 ? store2.getState().pMaster.esmastertable : [...this.state.defProcessMaster.esprocessmaster[0], ...store2.getState().pMaster.esmastertable[0]]
            }

        })
    }
    handlePosting = async (e: any) => {
        const loader = this.context;
        loader.setLoader(true)
        await this.saveJobWork();
        await this.saveOperationDetails();
        await this.saveProcessOverHead();
        e.preventDefault();
        let i: any = this.state.rawObj;
        console.log('i', JSON.stringify(i))
        const confUrl = '/api/SaveProcessMaster';


        try {
            let { res, got } = await this.props.api(confUrl, "POST", i)

            if (res.status == 200) {
                loader.setLoader(false)
                toast.success(got.msg)

            } else {
                loader.setLoader(false)
                toast.error(got.msg)

            }


        } catch (err) {
            loader.setLoader(false)
            alert(err)
        }
    }
    collectList = async (value: any, name: string) => {

        if (this.props.gettingVirtualCode === 0) {
            store2.dispatch({ payload: parseInt(value), key: name, type: "changeConfig", label: "pMaster" });
        } else {
            let mainObj = { label: name, value: parseInt(value) }
            store2.dispatch({ payload: mainObj, key: "", type: "changeConfig", label: "modify_P_ESMaster" });
        }
        this.setState({
            rawObj: {
                Code: this.props.gettingVirtualCode,
                Customer: parseInt(this.customer),
                Company: parseInt(this.compCode),
                MasterType: 11,
                UserName: this.username,
                esprocessmaster: this.props.gettingVirtualCode === 0 ? store2.getState().pMaster.esmastertable : [...this.state.defProcessMaster.esprocessmaster[0], ...store2.getState().pMaster.esmastertable[0]]
            }

        })
    }

    getMasterType = (val: any) => {
        this.setState({ masterType: val })

    }

    render() {
        return (
            <Process_Page defaultData={this.state.defProcessMaster} getMasterType={this.getMasterType} configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} compCode={this.compCode} customer={this.customer} virtualCode={this.props.gettingVirtualCode} overhead={this.props.overhead} operation={this.props.operation} jobwork={this.props.jobwork} collectJobApi={this.getJobApi} collectOperationApi={this.getOprnApi} collectOverHeadApi={this.getOverHeadApi} collectList={this.collectList} materialCenter={this.props.matCenter} />
        )

    }
}

const Process = LoadProcessMaster(RootProcess)

export default Process;