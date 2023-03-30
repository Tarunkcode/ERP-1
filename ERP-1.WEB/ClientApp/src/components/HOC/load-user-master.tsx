import * as React from 'react';
import { toast } from 'react-toastify';

import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface IState {
    defUserMaster: any,
    defCodeNames: object,
    defaultRole : string,
    roleList: any[]
}
export default function UserLoadDetails(Component: any) {
    let api = useFetch();
    class UserDefault extends React.Component<IProps, IState> {
        constructor(props: any) {
            super(props);
            this.state = {
                defUserMaster: {},
                defaultRole: '',
                defCodeNames: {},
                roleList: []
            }
        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;
        defInitStateObj = {}
        //componentDidUpdate(prevProps: any, prevState: any) {
        //    if (!this.routeObj) { }
        //    else {
        //        if (this.state.defUserMaster !== prevState.defUserMaster && this.state.defUserMaster.role) {

        //            /*console.log('default User Master', this.state.defUserMaster.role)*/
        //            this.state.roleList.map((option: any) => {
        //                if (option.id === this.state.defUserMaster.role)
        //                    this.setState({ defaultRole: option.value })
        //                console.log('role value to set', option.value)
        //            })


        //        } else { }
        //    }
        //}
        AlterLoadedData = (obj: object) => {
            this.defInitStateObj = { ...this.defInitStateObj, ...obj }
            var newObj = this.defInitStateObj;
            return newObj;
        }
        loadUserRoles = async () => {
            const url = `/api/LoadMasterData?MasterType=${10001}&Company=${this.compCode}&Customer=${this.customer}`

            try {
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    let list: any = got.data.map((option: any) => ({

                        id: option.code,
                        value: option.name,
                        name: 'role'

                    }))
                    this.setState({ roleList: list })
                } else toast.error(got.msg)

            } catch (err) {
                alert(err);
            }
        }

        loadUserMaster = async () => {
            let url = `/api/UserModify?Code=${this.props.location.state.code}`;
            try {
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    let data: any = await got.data[0]
            
                
                    this.setState({ defUserMaster: data });
                    this.defInitStateObj = { ...this.state.defUserMaster }
                } else {

                }
            } catch (err) {
                alert(err);
            }
        }
        componentDidMount() {
            this.loadUserRoles()
            if (!this.routeObj) { }
            else {

                this.loadUserMaster();
            }

        }
        render() {
            return (
                <Component api={api} roleList={this.state.roleList} customer={this.customer} compCode={this.compCode} username={this.username} loadUserDetails={this.state.defUserMaster} AlterLoadedData={this.AlterLoadedData.bind(this)} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} {...this.props} />
            )
        }
    }
    return UserDefault;
}