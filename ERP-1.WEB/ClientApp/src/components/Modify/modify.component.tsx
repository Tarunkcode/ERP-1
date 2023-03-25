import * as React from 'react';
import Modify_Page from '../../Pages/Modify/modify.page';
import { toast } from 'react-toastify'
import { withRouter } from "react-router-dom";
import ClipLoader from 'react-spinners/ClipLoader';
import ProvideHookToClass from '../HOC/loadBOM';

interface IState {
    selectModList: any[],
    address: string,
    masterType: string,
    fetchCode: string,
    Loader: boolean
}
interface IProps {
    history: any;
    location: any;
    match: any;
    api: any;
}
class Modify_Child extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectModList: [],
            address: '',
            masterType: '',
            Loader: false,
            fetchCode: ''
        }
    }
    token: any = window.sessionStorage.getItem('token');
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""

    FetchLoadingSubMasterList = async (mType: any) => {

        const urlLoadModify = `/api/LoadMasterData?MasterType=${mType}&Company=${this.compCode}&Customer=${this.customer}`;

        try {
            /* fetch(req).then((res: any) =>  res.json() ).then((res: any) => { if (res.data.length !== 0) { const dataArr = res.data; this.setState({ selectModList: dataArr }); console.log('list to load', dataArr) } else { toast.info('No data Found') } });*/
            let { res, got } = await this.props.api(urlLoadModify, "GET", '');

            if (res.status == 200) {
                if (got.data.length === 0) {
                    toast.info('No data Found')
                }


                else {
                    let modify_list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ selectModList: modify_list });
                }
            } else toast.error(got.msg)
            this.setState({ Loader: false })

        } catch (err) {
            alert(err)
        }


    }

    FetchNewUserList = async () => {

        const urlLoadModify = `/api/LoadUsersList?Company=${this.compCode}&Customer=${this.customer}`;

        try {
            /* fetch(req).then((res: any) =>  res.json() ).then((res: any) => { if (res.data.length !== 0) { const dataArr = res.data; this.setState({ selectModList: dataArr }); console.log('list to load', dataArr) } else { toast.info('No data Found') } });*/
            let { res, got } = await this.props.api(urlLoadModify, "GET", '');

            if (res.status == 200) {
                if (got.data.length === 0) {
                    toast.info('No data Found')
                }


                else {
                    let modify_list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ selectModList: modify_list });
                }
            } else toast.error(got.msg)
            this.setState({ Loader: false })

        } catch (err) {
            alert(err)
        }


    }


    componentDidMount() {
        this.setState({ Loader: true })
        var { master } = this.props.match.params;
        console.log('master', master)
        var { mAdd } = this.props.location.state;
        this.setState({ address: mAdd })
        if (!this.props.location.state) { } else {
            switch (mAdd) {
                case '/add-user-master': this.FetchNewUserList(); break;
                default: this.FetchLoadingSubMasterList(master); break;
            }
            
        }

    }
  
    handleSelect = (code: string, name: string) => {

        console.log(name + ':' + code)
        this.setState({ fetchCode: code })
    }
    handleSubmit = () => {

        if (!this.state.fetchCode) { toast.info('Please Select one Term to Modify') }
        else this.props.history.push({ pathname: this.state.address, state: { code: this.state.fetchCode } })
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

/*const Modify = (Modify_Child);*/
const modi = ProvideHookToClass(Modify_Child)
export default withRouter(modi);