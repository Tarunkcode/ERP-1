import * as React from 'react';
import Modify_Page from '../../Pages/Modify/modify.page';
import { toast } from 'react-toastify'
import { withRouter } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';

interface IState {
    selectModList: any[],
    address: string,
    masterType : string,
    fetchCode: string,
    Loader: boolean
}
interface IProps {
    history: any;
    location: any;
    match: any;
}
 class Modify_Child extends React.Component<IProps, IState> {
    constructor(props : any) {
        super(props);
        this.state = {
            selectModList: [],
            address: '',
            masterType: '',
            Loader: false,
            fetchCode:''
        }
    }

     compCode = window.localStorage.getItem('compCode') || ""
     customer = window.localStorage.getItem('customer') || ""
     username = window.sessionStorage.getItem('username') || ""

    FetchLoadingSubMasterData = (mType:any) => {
     
            const urlLoadModify = `http://103.25.128.155:12019/api/LoadMasterData?MasterType=${mType}&Company=${this.compCode}&Customer=${this.customer}`;
            console.log('url load modify', urlLoadModify)
            var req: Request;
            const h = new Headers();
            h.append('Accept', 'application/json');
            h.append('Content-Type', 'application/json');
            h.append('CompCode', 'ESERPDB');
            h.append('FYear', '0');


            req = new Request(urlLoadModify, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            })

            try {
                /* fetch(req).then((res: any) =>  res.json() ).then((res: any) => { if (res.data.length !== 0) { const dataArr = res.data; this.setState({ selectModList: dataArr }); console.log('list to load', dataArr) } else { toast.info('No data Found') } });*/

                fetch(req).then((res: any) => res.json()).then((res: any) => {
                    this.setState({ selectModList: res.data }); res.data.length === 0 ? (toast.info('No data Found')) : null
                });
                this.setState({ Loader: false })

            } catch (err) {
                alert(err)
            }

        
    }
     componentDidMount() {
         this.setState({ Loader: true })
        var { master } = this.props.match.params;
       
        var {mAdd}= this.props.location.state;
        this.setState({ address: mAdd })
        if (!this.props.location.state) { } else {
            this.FetchLoadingSubMasterData(master);
        }
       
    }
     componentDidUpdate(prevProps: any) {
      
         if (prevProps.match.params.master !== this.props.match.params.master) this.FetchLoadingSubMasterData(this.props.match.params.master);
   
    }
    handleSelect = (code: string, name: string) => {
     
        console.log(name +':'+ code)
        this.setState({ fetchCode : code })
    }
    handleSubmit = () => {
     
        if (!this.state.fetchCode) { toast.info('Please Select one Term to Modify') }
        else this.props.history.push({pathname: this.state.address, state: { code: this.state.fetchCode } })
        //<Redirect to={{ pathname: this.state.address, state: { code: this.state.fetchCode } }} />
    }
    render() {
        return (
            <>
                {
                    this.state.Loader === true ? (<ClipLoader color="#52bfd9" size={100} loading={this.state.Loader} />) : (<Modify_Page selectModList={this.state.selectModList} handleSelect={this.handleSelect.bind(this)} handleSubmit={this.handleSubmit} />)
                }
               
            </>
            )
    }
}

const Modify = withRouter(Modify_Child);
export default Modify;