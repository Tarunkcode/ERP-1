import * as React from 'react';
import { toast } from 'react-toastify';
import Process_Page from '../../Pages/Sub-Master/process.page';
import { store2 } from '../../Redux/config/config.reducer';
import LoadProcessMaster from '../HOC/Load_Process_SubMaster';

interface IState {
    configType: string;
    masterType: number;
    sNo: number;
    rawObj: object;
    defProcessMaster: any;
}
interface IProps {
    state: any;
    gettingVirtualCode: number;

}
class RootProcess extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            configType: '',
            masterType: 0,
            sNo: 0,
            rawObj: {},
            defProcessMaster: {}
        }
        this.handlePosting = this.handlePosting.bind(this);
        this.HandleOverHeadIpSelect = this.HandleOverHeadIpSelect.bind(this);
        this.HandleOperationIpSelect = this.HandleOperationIpSelect.bind(this);
        this.HandleJobIpSelect = this.HandleJobIpSelect.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findCurrentRowNo = this.findCurrentRowNo.bind(this);
    }
    compCode = window.sessionStorage.getItem('compCode') || ""
    customer = window.sessionStorage.getItem('customer') || ""
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


    fetchDefProcessMaster = async (code: any) => {

        let urlStr = `http://103.25.128.155:12019/api/LoadProcessMaster?Code=${code}&Company=${this.compCode}&Customer=${this.customer}`
        console.log('load sub Master', urlStr);
        console.log('calling')
        var req: Request;
        const h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');


        req = new Request(urlStr, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        })

        try {

            await fetch(req).then((res: any) => res.json()).then((res: any) => {
                var data = res.data[0];
                this.setState({ defProcessMaster: data });
           
                this.mainObj = data.esmastertable[0];
                this.oprnArr = [...data.processopration];
                this.ovrhdArr = [...data.processpoh];
                this.jbWorkerArr = [...data.processjobworker];
                console.log('overhead', this.ovrhdArr)
                console.log('operation', this.oprnArr)
                store2.dispatch({ payload: this.mainObj, key: "", type: "changeConfig", label: "modify_P_ESMaster" });
                store2.dispatch({ payload: this.ovrhdArr, key: '', type: "changeConfig", label: "modify_P_overHead" });
                store2.dispatch({ payload: this.oprnArr, key: '', type: "changeConfig", label: "modify_P_opr" });
                store2.dispatch({ payload: this.jbWorkerArr, key: '', type: "changeConfig", label: "modify_P_Job" });
            });
        } catch (err) {
            alert(err)
        }
    }
    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.defProcessMaster !== this.state.defProcessMaster) {
            console.log('updates', this.state.defProcessMaster);
        }
    }

    HandleOverHeadIpSelect = (code: string, name: string, row: any) => {
      
        let mainObj: object = { srno: parseInt(row) + 1, [name]: parseInt(code)};
        if (this.props.gettingVirtualCode === 0) {
            store2.dispatch({ payload: mainObj, key: row, type: "changeConfig", label: "pMasterOverHead" });

        } else {
            this.ovrhdArr[parseInt(row)] = mainObj
 
                //this.localState.processpoh = this.ovrhdArr;

            store2.dispatch({ payload: this.ovrhdArr, key: '', type: "changeConfig", label: "modify_P_overHead" });
        }
        
          

        this.setState({
            rawObj: {
                Code: this.props.gettingVirtualCode,
                Customer: parseInt(this.customer),
                Company: parseInt(this.compCode),
                MasterType: 11,
                UserName: this.username,
                ...store2.getState().pMaster
            }

        })

    }
    HandleOperationIpSelect = (code: string, name: string, row: any) => {
        let mainObj: object = { srno : parseInt(row) + 1, [name]: parseInt(code) };
        if (this.props.gettingVirtualCode === 0) {
            store2.dispatch({ payload: mainObj, key: row, type: "changeConfig", label: "pMasterOperation" });

        } else {
            this.oprnArr[parseInt(row)] = mainObj
          
            //this.localState.processopration = this.oprnArr;
            console.log('oprn', this.oprnArr)
            store2.dispatch({ payload: this.oprnArr, key: '', type: "changeConfig", label: "modify_P_opr" });

        }

      
         

        this.setState({
            rawObj: {
                Code: this.props.gettingVirtualCode,
                Customer: parseInt(this.customer),
                Company: parseInt(this.compCode),
                MasterType: 11,
                UserName: this.username,
                ...store2.getState().pMaster
            }

        })

    }
    HandleJobIpSelect = (code: string, name: string, row: any) => {

        let mainObj: object = { srno: parseInt(row) + 1, [name]: parseInt(code) };
        if (this.props.gettingVirtualCode === 0) {
            store2.dispatch({ payload: mainObj, key: row, type: "changeConfig", label: "pMasterJob" });


        } else {
            this.jbWorkerArr[parseInt(row)] = mainObj
         
            this.localState.processjobworker = this.jbWorkerArr;

            store2.dispatch({ payload: this.jbWorkerArr, key: '', type: "changeConfig", label: "modify_P_Job" });

        }
            

        this.setState({
            rawObj: {
                Code: this.props.gettingVirtualCode,
                Customer: parseInt(this.customer),
                Company: parseInt(this.compCode),
                MasterType: 11,
                UserName: this.username,
                ...store2.getState().pMaster
            }

        })

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
                ...store2.getState().pMaster
            }

        })
    }
    handlePosting = async (e: any) => {
      
        e.preventDefault();
        console.log('calling');
        let i: any = JSON.stringify(this.state.rawObj);
        console.log('i:', i);
        //console.log('calling')
        const confUrl = 'http://103.25.128.155:12019/api/SaveProcessMaster';


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
            store2.getState().pMaster.esmastertable[0] = {}
            store2.getState().pMaster.processjobworker = []
            store2.getState().pMaster.processpoh = []
            store2.getState().pMaster.processopration = []

        } catch (err) {
            alert(err)
        }
    }
    findCurrentRowNo = (val: number) => {
        this.setState({ sNo: val })
        console.log('val', val + 1);
    }
   
    getMasterType = (val: any) => {
        this.setState({ masterType: val })

    }

    render() {
        return (
            <Process_Page HandleOperationIpSelect={this.HandleOperationIpSelect} HandleJobIpSelect={this.HandleJobIpSelect} HandleOverHeadIpSelect={this.HandleOverHeadIpSelect} defaultData={this.state.defProcessMaster} getCurrentRowNo={this.findCurrentRowNo} getMasterType={this.getMasterType} pageTitle="Add Process Master" configType={this.state.configType} handleChange={this.handleChange} handlePosting={this.handlePosting} compCode={this.compCode} customer={this.customer} />
        )
         
    }
}

const Process = LoadProcessMaster(RootProcess)

export default Process;