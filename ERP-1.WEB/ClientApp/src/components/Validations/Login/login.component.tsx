
import * as React from 'react';

import './login.styles.css';
import CustomButton from '../../custom-button/custom-button.component';
import { Redirect } from 'react-router-dom';


import { connect } from "react-redux";
import { selectCurrentUser } from "../../../Redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from '../../../Redux/user/user.actions';

import { toast } from 'react-toastify';
//import "./spinner.styles.css";

import ClipLoader from 'react-spinners/ClipLoader';


//import Spinner from '../../Spinner/spinner.component';

//interface IProps {
//    setCurrentUser: any,
//    currentUser: any,
//    appContext: any,
//    location: any
//}

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
interface IProps {
    history: any;
}
//hoc
//export function LogInHoc(Component: any) {
//    const C = (props: any) => {
//        let { domainState } = React.useContext(DomainContext);
//        console.log(domainState);
//        return <Component appContext={domainState} {...props} ></Component>
//    };
//    return C;
//};
export default class ChildLog extends React.Component<IProps, IState>{

    constructor(props: any) {
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

    ip = window.localStorage.getItem('url')
    port = window.localStorage.getItem('port')
    compCode = window.localStorage.getItem('compCode')
    customer = window.localStorage.getItem('customer')
    compName = window.localStorage.getItem('compName')
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

        var params = []

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



                if (result.data[0].result == 1) {
                    window.sessionStorage.setItem('state', JSON.stringify({ 'domain': this.ip, 'port': this.port, 'Fy': this.state.fy }))
                    window.sessionStorage.setItem('roleCode', result.data[0].role.toString())
                    window.sessionStorage.setItem('username', this.state.username)
         
                    toast.success('You have Signed in Successfully!');
                    this.setState({ redirect: true })
                   
                } else {
                    /*  alert(result.data[0].msg);*/
                    this.setState({ isLoader: false })
                    toast.error(result.data[0].msg);
                    return;
                }

            })

        } catch (err) {
            this.setState({ isLoader: false })
            alert(err);
        }

    }
 
    handleSubmit = async (event: any) => {
        event.preventDefault();
        this.setState({ isLoader : true })
        try {

            /*const { setCurrentUser } = this.props;*/
            // var { domainState } = React.useContext(DomainContext);

        /*    window.sessionStorage.setItem('user', this.state.username)*/
            //window.sessionStorage.setItem('compCode', this.state.compCode)

            //let i = JSON.stringify(this.props.appContext)
      /*      let i = {domain:'103.25.128.155', port:'12019',Fy:'2022'}*/
            /*           await setCurrentUser(i)*/
   /*         window.localStorage.setItem('state', JSON.stringify(i));*/

            this.fetchValidateUserApi();
        
        }
        catch (error) {
             this.setState({ isLoader : false })
            alert(error);
        }
    }

    render() {
        const {compList, redirect } = this.state;
        //console.log('compList obj', this.tempArr)
        if (redirect == true) {
            this.setState({ isLoader: false })
            return <Redirect to='/home' />;
        } else { }

        return (<>
            {compList.length != 0 && compList != undefined && compList != null ?
                (
                    compList[0].msg !== '' || compList[0].msg !== null || compList[0].msg !== undefined ? (
                        <div className="m-0 p-0" style={{position:'absolute', left:'10px', top:'50px'}}>
                            <textarea rows={2} className="form-control col-12 text-danger m-0 float-left text-center" readOnly>{compList[0].msg}</textarea>
                            <button className="btn btn-danger p-1 mt-3" onClick={() => {
                                const { history } = this.props;
                                    localStorage.clear();
                                sessionStorage.clear();
                                history.push('/')

                            }}>Change User</button>
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

//const mapStateToProps = createStructuredSelector({
//    currentUser: selectCurrentUser
//});
//const mapDispatchToProps = (dispatch: any) => ({
//    setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
//});
//const LogIn = connect(mapStateToProps, mapDispatchToProps)(ChildLog)
//export default LogInHoc(LogIn);


