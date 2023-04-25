import * as React from 'react';

import { store2 } from '../../Redux/config/config.reducer';
import Role_Master_Page from "../../Pages/SetUp/RoleMaster/role_master.page"
import { toast } from 'react-toastify';
import RoleMasterLoadDetails from '../HOC/load-role-master.config';
import { clear_form } from '../../Pages/Helper Functions/table';

interface IProps {
    api: any,
    defRoleMaster: any,
    AlterLoadedData: any,
    gettingVirtualCode: any,
    history: any,
}

interface IState {
    rawObj: any,
    name: string,
    isAllStatus : boolean,
    des1: string,
    wholeRolePerssionActive: any[],
    des2: string,
    des3: string,
    des4: string
}
class Role_Master extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            rawObj: {
                "roleright": [{}]
            },
            name: "",
            des1: "",
            wholeRolePerssionActive : [],
            isAllStatus : false,
            des2: "",
            des3: "",
            des4: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePosting = this.handlePosting.bind(this)
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    componentDidMount() {
        this.SuperUserDefaultRole()

    }
    componentDidUpdate(prevProps: any) {
        if (this.props.gettingVirtualCode !== 0) {
            if (this.props.defRoleMaster !== prevProps.defRoleMaster) {

                this.props.defRoleMaster.roleright.map((option: any) => {
                    let Code = option.code;
                    store2.dispatch({ payload: parseInt(Code), key: "code", type: "changeConfig", label: "roleMaster" });
                })
                this.setState({
                    rawObj: {

                        "roleright": [...store2.getState().roleMaster]
                    }
                })
            } else { }

        } else { }
    }
    GetAllStatus = (status: boolean) => {
        this.setState({ isAllStatus: status })
    }
    getName = (value: string) => {
        this.setState({ name: value })
        this.props.gettingVirtualCode !== 0 ? this.props.defRoleMaster.roleheader[0].name = value : null
    }
    getDes1 = (value: string) => {
        this.setState({ des1: value })
        this.props.gettingVirtualCode !== 0 ? this.props.defRoleMaster.roleheader[0].des1 = value : null
    }
    getDes2 = (value: string) => {
        this.setState({ des2: value })
        this.props.gettingVirtualCode !== 0 ? this.props.defRoleMaster.roleheader[0].des2 = value : null
    }
    getDes3 = (value: string) => {
        this.setState({ des3: value })
        this.props.gettingVirtualCode !== 0 ? this.props.defRoleMaster.roleheader[0].des3 = value : null
    }
    getDes4 = (value: string) => {
        this.setState({ des4: value })
        this.props.gettingVirtualCode !== 0 ? this.props.defRoleMaster.roleheader[0].des4 = value : null
    }
    SuperUserDefaultRole = async () => {

        try {

            let path = `/api/DefaultRoleList`
            let { res, got } = await this.props.api(path, 'GET', '')
            console.log('res', res)
            if (res.status === 200) {
                var json: any[] = got.data;
                this.setState({ wholeRolePerssionActive: json });
            }
            else throw new Error('Bad Fetch 1')
        } catch (err) { alert(err) }
    }
    handleChange = async (e: any) => {
        var Code: any = e.target.name
        if (!e.target.checked) {
            // on unchecked
            let index: number = await store2.getState().roleMaster.findIndex((item: any) => item.code == Code)
            await store2.getState().roleMaster.splice(index, 1);
            let jsonObject = store2.getState().roleMaster.map((item: any) => JSON.stringify(item));


            let s: any = new Set(jsonObject);
            s = Array.from(s).map((item: any) => JSON.parse(item));

            /* let s = new Set([...store2.getState().roleMaster])*/
         
            this.setState({
                rawObj: {

                    "roleright": s
                }
            })
        }
        else {
            // else on check
            await store2.dispatch({ payload: parseInt(Code), key: "code", type: "changeConfig", label: "roleMaster" });
       


            let jsonObject = store2.getState().roleMaster.map((item: any) => JSON.stringify(item));



            let s2: any = new Set(jsonObject);
            s2 = Array.from(s2).map((item: any) => JSON.parse(item));

       



            //let s2 = new Set([...store2.getState().roleMaster])
            this.setState({
                rawObj: {

                    "roleright": s2
                }
            })

        }

    }
    handlePosting = async (e: any) => {
        e.preventDefault();
        if (this.props.gettingVirtualCode !== 0) {
            if (this.props.defRoleMaster.roleheader.name == '' && this.state.name == '') {
                toast.info("Please Enter a Role Name");
                return;
            }
            else if (!this.state.isAllStatus) {
                if (this.state.rawObj.roleright.length === 0 || this.state.rawObj.roleright[0] === { code: 0 }) {
                    toast.info('Please check some role rights')
                    return;
                }
            }
        } else {
            if (this.state.name == '') {
                toast.info("Please Enter a Role Name");
                return;
            }
            else if (!this.state.isAllStatus) {
                if ( this.state.rawObj.roleright[0] === {}) {
                    toast.info('Please check some role rights')
                    return;
                }
            }
        }
        /*  if(!this.state.name) return alert('Name Cannnot be Empty')*/
        console.log('calling', this.state.rawObj.roleright);
        let i: any = {
            "roleheader": this.props.gettingVirtualCode !== 0 ? [...this.props.defRoleMaster.roleheader]
                : [{
                    'code': this.props.gettingVirtualCode,
                    'customer': parseInt(this.customer),
                    'company': parseInt(this.compCode),
                    "username": this.username,
                    "name": this.state.name,
                    "des1": this.state.des1,
                    "des2": this.state.des2,
                    "des3": this.state.des3,
                    "des4": this.state.des4
                }],
            "roleright": this.state.isAllStatus ? [...this.state.wholeRolePerssionActive] : [...this.state.rawObj.roleright]
        };

        console.log('i', i)


        const confUrl = '/api/RoleAdd';
        try {
            let { res, got } = await this.props.api(confUrl, "POST", i)

            if (res.status == 200) {
                toast.success(got.msg);
                let formObj = document.getElementById("form");
                this.props.gettingVirtualCode === 0 ? clear_form(formObj) : window.history.go(-1)
                

            } else {
                toast.error(got.msg)

            }
            store2.getState().roleMaster = []
        } catch (err) {
            alert(err)
        }

    }
    render() {
        return (
            <>

                < Role_Master_Page getName={this.getName} defRoleMaster={this.props.defRoleMaster} suDefArr={this.state.wholeRolePerssionActive} getAllStatus={this.GetAllStatus} getDes1={this.getDes1} getDes2={this.getDes2} getDes3={this.getDes3} getDes4={this.getDes4} handleChange={this.handleChange} handlePosting={this.handlePosting} vccode={this.props.gettingVirtualCode} />

            </>
        )

    }
}

const role = RoleMasterLoadDetails(Role_Master);
export default role;


