import * as React from 'react';

import { store2 } from '../../Redux/config/config.reducer';
import Role_Master_Page from "../../Pages/SetUp/RoleMaster/role_master.page"
import { toast } from 'react-toastify';
import ProvideHookToClass from '../HOC/loadBOM';

interface IProps {
    api: any
}

interface IState {
    rawObj: object,
    name: string,
    Des1 : string,
    Des2 : string,
    Des3 : string,
    Des4: string
}
class Role_Master extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            rawObj: {},
            name: '',
            Des1: '',
            Des2: '',
            Des3: '',
            Des4: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handlePosting = this.handlePosting.bind(this)
    }
    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""


    getName = ( value: string) => {
        this.setState({ name: value })
        console.log('name', this.state.name)
    }
    getDes1 = (value: string) => {
        this.setState({ Des1: value })
        console.log('Des1', this.state.Des1)
    }
    getDes2 = (value: string) => {
        this.setState({ Des2: value })
        console.log('Des2', this.state.Des2)
    }
    getDes3 = (value: string) => {
        this.setState({ Des3: value })
        console.log('Des3', this.state.Des3)
    }
    getDes4 = (value: string) => {
        this.setState({ Des4: value })
        console.log('Des4', this.state.Des4)
    }

    handleChange = (e: any) => {
      if (!e.target.checked) return;
    
        e.preventDefault();
        var value: any;
        var Code: any;
        var label: string = '';
        Code = e.target.name
      
        store2.dispatch({ payload: parseInt(Code), key: "Code", type: "changeConfig", label: "roleMaster" });

        this.setState({
            rawObj: {
                "RoleHeader": [{
                    'Code': 0,
                    'Customer': parseInt(this.customer),
                    'Company': parseInt(this.compCode),
                    'Name': this.state.name,
                    'Des1': this.state.Des1,
                    'Des2': this.state.Des2,
                    'Des3': this.state.Des3,
                    "Des4": this.state.Des4,
                    "UserName": this.username
                }],
                "RoleRight": [...store2.getState().roleMaster]
            }
        })
    }
    handlePosting = async (e: any) => {
        e.preventDefault();
      if(!this.state.name) return alert('Name Cannnot be Empty')
        console.log('calling');
        let i: any = this.state.rawObj;
      
        const confUrl = '/api/RoleAdd';
        console.log('i',i)
      
       
        try {
            let { res, got } = await this.props.api(confUrl,"POST", i)
           
            if (res.status == 0) {
                toast.success(got.msg)

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
             
                < Role_Master_Page getName={this.getName} getDes1={this.getDes1} getDes2={this.getDes2} getDes3={this.getDes3} getDes4={this.getDes4} handleChange={this.handleChange} handlePosting={this.handlePosting} />

            </>
        )

    }
}

const role = ProvideHookToClass(Role_Master);
export default role;