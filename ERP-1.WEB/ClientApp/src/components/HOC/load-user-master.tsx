import * as React from 'react';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import useFetch from '../Hooks/useFetch';
interface IProps {
    location: any;
}
interface IState {
    defUserMaster: any,
    defCodeNames: object,
   value : number,
    defaultRole : string,
    roleList: any[]
}

export default function UserLoadDetails(Component: any) {
    let api = useFetch();
    class UserDefault extends React.Component<IProps, IState> {
            static contextType = LoaderContext;
        constructor(props: any) {
            super(props);
            this.state = {
                defUserMaster: {},
                defaultRole: '',
                defCodeNames: {},
                 value : 0,
                roleList: []
            }
          
        }
        compCode = window.localStorage.getItem('compCode') || ""
        customer = window.localStorage.getItem('customer') || ""
        username = window.sessionStorage.getItem('username') || ""
        routeObj = this.props.location.state;


   
        loadUserRoles = async () => {
            const loader = this.context;
            const url = `/api/LoadMasterData?MasterType=${10001}&Company=${this.compCode}&Customer=${this.customer}`
            loader.setLoader(true);
            try {
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    let data: any[] = got.data

                    this.setState({ roleList: data })
                    loader.setLoader(false);
                } else {
                    loader.setLoader(false);
                    toast.error(got.msg)
                }
            } catch (err) {
               loader.setLoader(false);
                console.log('ERRPR', err);
                alert(err);
            }
        }

        loadUserMaster = async () => {
            const loader = this.context;
            let url = `/api/UserModify?Code=${this.props.location.state.code}`;
            try {
                loader.setLoader(true);
                let { res, got } = await api(url, "GET", '');
                if (res.status == 200) {
                    let data: any = await got.data[0]

                    console.log(data);
                    this.setState({ defUserMaster: data });
                    loader.setLoader(false);

                } else {
                  loader.setLoader(false);
                }
            } catch (err) {
                loader.setLoader(false);
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
                <Component api={api} roleList={this.state.roleList} customer={this.customer} compCode={this.compCode} username={this.username} loadUserDetails={this.state.defUserMaster} gettingVirtualCode={(!this.routeObj) ? 0 : parseInt(this.routeObj.code)} backPath={(!this.routeObj) ? null : this.routeObj.backPath} {...this.props} />
            )
        }
    }
    return UserDefault;
}
