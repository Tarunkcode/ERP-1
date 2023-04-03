﻿import * as React from 'react';
import Modify_Page from '../../Pages/Modify/modify.page';
import { toast } from 'react-toastify'
import { withRouter } from "react-router-dom";

import ProvideHookToClass from '../HOC/loadBOM';

interface IState {
    selectModList: any[],
    address: string,
    masterType: string,
    fetchCode: string,

}
interface IProps {
    history: any;
    location: any;
    match: any;
    api: any;
    loader: any;
}
class Modify_Child extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            selectModList: [],
            address: '',
            masterType: '',

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
            this.props.loader(true)
            /* fetch(req).then((res: any) =>  res.json() ).then((res: any) => { if (res.data.length !== 0) { const dataArr = res.data; this.setState({ selectModList: dataArr }); console.log('list to load', dataArr) } else { toast.info('No data Found') } });*/
            let { res, got } = await this.props.api(urlLoadModify, "GET", '');

            if (res.status == 200) {
                if (got.data.length === 0) {
                    this.props.loader(false)
                    toast.info('No data Found')
                }


                else {
                    let modify_list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ selectModList: modify_list });
                    this.props.loader(false)
                }
            } else {
                this.props.loader(false)
                toast.error(got.msg)
            }

        } catch (err) {
            this.props.loader(false)
            alert(err)
        }


    }

    FetchNewUserList = async () => {

        const urlLoadModify = `/api/LoadUsersList?Company=${this.compCode}&Customer=${this.customer}`;

        try {
            this.props.loader(true)
            /* fetch(req).then((res: any) =>  res.json() ).then((res: any) => { if (res.data.length !== 0) { const dataArr = res.data; this.setState({ selectModList: dataArr }); console.log('list to load', dataArr) } else { toast.info('No data Found') } });*/
            let { res, got } = await this.props.api(urlLoadModify, "GET", '');

            if (res.status == 200) {
                if (got.data.length === 0) {
                    this.props.loader(false)
                    toast.info('No data Found')
                }


                else {
                    let modify_list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ selectModList: modify_list });
                    this.props.loader(false)
                }
            } else {
                this.props.loader(false)
                toast.error(got.msg)
            }

        } catch (err) {
            this.props.loader(false)
            alert(err)
        }


    }
    FetchAccMasterList = async (mt: any) => {

        const urlLoadModify = `/api/LoadAccMList`;
        let body = {
            "Customer": parseInt(this.customer),
            "Company": parseInt(this.compCode),
            "AccType": parseInt(mt),
            "Series": 0,
            "Group": 0
        }
        try {
            this.props.loader(true)
            let { res, got } = await this.props.api(urlLoadModify, "POST", body);

            if (res.status == 200) {
                if (got.data.length === 0) {
                    this.props.loader(false)
                    toast.info('No data Found')
                }


                else {
                    let modify_list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ selectModList: modify_list });
                    this.props.loader(false)
                }
            } else {
                this.props.loader(false)
                toast.error(got.msg)
            }

        } catch (err) {
            this.props.loader(false)
            alert(err)
        }


    }
    FetchItemMasterList = async () => {

        const urlLoadModify = `/api/LoadIMList`;
        let body = {
            "Customer": parseInt(this.customer),
            "Company": parseInt(this.compCode),
            "Series": "",
            "ItemBrand": "",
            "ItemGroup": "",
            "ItemType": "",
            "ItemCat": "",
            "ItemSubCat": "",
            "Clearance": "",
            "UOM": "",
            "MC": "",
            "QC": "",
            "GRPType": ""
        }
        try {
            this.props.loader(true)
            let { res, got } = await this.props.api(urlLoadModify, "POST", body);

            if (res.status == 200) {
                if (got.data.length === 0) {
                    this.props.loader(false)
                    toast.info('No data Found')
                }


                else {
                    let modify_list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,

                    }))
                    this.setState({ selectModList: modify_list });
                    this.props.loader(false)
                }
            } else {
                this.props.loader(false)
                toast.error(got.msg)
            }

        } catch (err) {
            this.props.loader(false)
            alert(err)
        }


    }


    componentDidMount() {

        var { master } = this.props.match.params;
        console.log('master', master)
        var { mAdd } = this.props.location.state;
        this.setState({ address: mAdd })
        if (!this.props.location.state) { } else {
            this.props.loader(true)
            switch (mAdd) {
                case '/add-user-master': this.FetchNewUserList(); break;
                case '/add-item-master': this.FetchItemMasterList(); break;
                case '/add-customer-master' || '/add-supplier-master': this.FetchAccMasterList(master); break;
                default: this.FetchLoadingSubMasterList(master); break;
            }
            this.props.loader(false)
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
                    this.props.loader !== true ? (<Modify_Page selectModList={this.state.selectModList} handleSelect={this.handleSelect.bind(this)} handleSubmit={this.handleSubmit} />) : null
                }

            </>
        )
    }
}

/*const Modify = (Modify_Child);*/
const modi = ProvideHookToClass(Modify_Child)
export default withRouter(modi);