
import * as React from 'react';
import { useState } from 'react';
import './login.styles.css';
import CustomButton from '../../custom-button/custom-button.component';
import { Redirect, useHistory } from 'react-router-dom';


import { connect } from "react-redux";
import { selectCurrentUser } from "../../../Redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from '../../../Redux/user/user.actions';
import { DomainContext } from '../../../AppContext/domainContext.component';
import { toast } from 'react-toastify';
//import "./spinner.styles.css";

import ClipLoader from 'react-spinners/ClipLoader';


//import Spinner from '../../Spinner/spinner.component';

interface IProps {
    setCurrentUser: any,
    currentUser: any,
    appContext: any,
    location: any
}

interface IState {
    username: string;
    password: string;
    redirect: boolean;
    compCode: string;
    compList: any;
    isLoader: boolean;
    //uid: any;
    //pass: any;
    fy: number;
}
//hoc
export function LogInHoc(Component: any) {
    const C = (props: any) => {
        let { domainState } = React.useContext(DomainContext);
        console.log(domainState);
        return <Component appContext={domainState} {...props} ></Component>
    };
    return C;
};
class ChildLog extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
       
        this.state = {
            username: '',
            password: '',
            redirect: false,
            compCode:'',
            compList: [],
            isLoader:false,
            //uid: this.props.location.state.uid,
            //pass: this.props.location.state.pass,
            fy: 0
        };
    }
    ip = window.sessionStorage.getItem('url')
    port = window.sessionStorage.getItem('port')
    compCode = window.sessionStorage.getItem('compCode')
    customer = window.sessionStorage.getItem('customer')
    compName = window.sessionStorage.getItem('compName')
    componentDidMount() {

        this.setState({ compList: [{'compCode': this.compCode, 'compName':this.compName}] })
    }
   


    handleCompCodeChange(e: any) {
      
        this.setState({ compCode: e.target.value })
        console.log('set ', e.target.value)
    }

    handleUserNameChange(e: any) {
        this.setState({
            username: e.target.value
        });
    }
    handlePasswordChange(e: any) {
        this.setState({
            password: e.target.value
        });
    }
    handleFYChange(e: any) {
       /* if (e.target.value.length !== 4) return alert("Please Enter a Valid FY in Format 'YYYY'")*/
       this.setState({ fy: e.target.value })
    }
    fetchValidateUserApi = async () => {
        const {compCode, password, username } = this.state;
       
        var urlStart = `http://${this.ip}:${this.port}/api/UserValidates`
        //UID = U1 & Pwd=U1 & LoginID=tarun1 & LoginPwd=tarun1 & CompCode=1 & Customer=1
        //string UserName, string Pwd, int Company, int Customer
        var params = []

        //params.push(`UID=${this.state.uid}`);
        //params.push(`Pwd=${this.state.pass}`);
        //params.push(`LoginID=${username}`);
        //params.push(`LoginPwd=${password}`);
        //params.push(`CompCode=${compCode}`);
        //params.push(`Customer=${compList[0].customer}`);
        params.push(`UserName=${username}`);
        params.push(`Pwd=${password}`);
        params.push(`Company=${compCode}`);
        params.push(`Customer=${this.customer}`);

        var logInUrl = urlStart + '?' + params.join('&');
        console.log(logInUrl);
        try {
            var req: Request;
            let h = new Headers();
            h.append('Accept', 'application/json');
            h.append('CompCode', 'EsErpDb');
            h.append('FYear', '0');
            req = new Request(logInUrl, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            await fetch(req).then(res => res.json()).then(result => {


                    this.setState({ isLoader: false })

                if (result.data[0].result == 1) {
                    window.sessionStorage.setItem('state', JSON.stringify({ 'domain': this.ip, 'port': this.port, 'Fy': this.state.fy }))
                    window.sessionStorage.setItem('roleCode', result.data[0].role.toString())
                    window.sessionStorage.setItem('username', this.state.username)
         
                    toast.success('You have Signed in Successfully!');
                    this.setState({ redirect: true })
                } else {
                    /*  alert(result.data[0].msg);*/
                    toast.error(result.data[0].msg);
                    return;
                }

            })

        } catch (err) {
            alert(err);
        }

    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        this.setState({ isLoader : true })
        try {

            const { setCurrentUser } = this.props;
            // var { domainState } = React.useContext(DomainContext);

            window.sessionStorage.setItem('user', this.state.username)
            //window.sessionStorage.setItem('compCode', this.state.compCode)

            let i = JSON.stringify(this.props.appContext)
            await setCurrentUser(i)
            window.localStorage.setItem('state', i);

            this.fetchValidateUserApi();

        }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        const {compList, redirect } = this.state;
        //console.log('compList obj', this.tempArr)
        if (redirect == true) {
            return <Redirect to='/home' />;
        } else { }

        return (<>
            {compList.length != 0 && compList != undefined && compList != null ?
                (
                    compList[0].msg !== '' || compList[0].msg !== null || compList[0].msg !== undefined ? (
                        <div className="m-0 p-0" style={{position:'absolute', left:'10px', top:'50px'}}>
                        <textarea rows={2} className="form-control col-12 text-danger m-0 float-left text-center" readOnly>{compList[0].msg}</textarea>
                            
                        </div>
                    ): null
                   

                ) : null
            }
            <div className="outer-container">

                <span className="card" style={{ border: 'none', background:'none', height: 'auto', minHeight: '110px' }}>
                    {
                        this.state.isLoader === true ? (<ClipLoader color="#52bfd9" size={100} loading={this.state.isLoader} />) : null
                    }


                </span>
                <div className="card" style={{ width: "83%" }}>
                    <span className="page_Header">SIGN IN</span>
                  
                    <img src={'./assets/erpLogo.png'} style={{ width: "52%" }} />

                  
                        <form onSubmit={this.handleSubmit}>

                            <select name="comp" id="compcode" className="form-control text-primary text-center" onChange={this.handleCompCodeChange.bind(this)}>
                                {
                                    compList.map((obj: any) => (
                                        <>
                                            <option value="" selected></option>
                                            <option value={obj.compCode}>{obj.compName}</option>
                                        </>
                                    ))
                                }
                            </select>

                            <input type="number" name="fyyear" id="fyyear" className="form-control input-fields" required placeholder="Financial Year" onBlur={this.handleFYChange.bind(this)} />

                            <input type="text" name="username" id="username" className="form-control input-fields" required placeholder="Enter UserName" onBlur={this.handleUserNameChange.bind(this)} />

                            <input type="password" name="password" id="password" className="form-control input-fields" required placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
                            <CustomButton type="submit" className='custom-button'>Log in</CustomButton>

                        </form>


                    <div className="footer2">
                        <h6> Developed By Excellent Softwares <br /> <span> © 2022 </span> </h6>
                    </div>
                </div>

            </div>
        
        </>
        );

    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch: any) => ({
    setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});
const LogIn = connect(mapStateToProps, mapDispatchToProps)(ChildLog)
export default LogInHoc(LogIn);


