import * as React from 'react';
import './login.styles.css';
import CustomButton from '../../custom-button/custom-button.component';
import { Redirect } from 'react-router-dom';
import { useContext } from 'react';

import { connect } from "react-redux";
import { selectCurrentUser } from "../../../Redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from '../../../Redux/user/user.actions';

import { toast } from 'react-toastify';
//import "./spinner.styles.css";
import AuthContext from '../../../AppContext/AuthContext';
import ScaleLoader from 'react-spinners/ScaleLoader';


//import Spinner from '../../Spinner/spinner.component';

interface IProps {
    currentUser: any,
    history: any;
    setCurrentUser: any;
/*    currentUser: any;*/
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

/*hoc*/
export function LogInHoc(Component: any) {
    const C = (props: any) => {
        let contextData: any = useContext(AuthContext);
      
        return <Component auth={contextData} {...props} ></Component>
    };
    return C;
};
class ChildLog extends React.Component<IProps, IState>{

    constructor(props: any) {
        super(props);
       
        this.state = {
            username: '',
            password: '',
            redirect: false,
            compCode:'',
            compList: [],
            isLoader:false,
       
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
    fetchValidateUserApi = async (raws: any) => {
        /*   const { setAuthTokens, setUser } = this.props.auth;*/
        let { setCurrentUser, currentUser } = this.props;
        const { compCode, password, customer, username, ip, port, fy } = raws;

        var urlStart = `http://${ip}:${port}/api/Authentication`

        var params = []

        params.push(`UserName=${username}`);
        params.push(`Pwd=${password}`);
        params.push(`Company=${compCode}`);
        params.push(`Customer=${customer}`);

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
            const response = await fetch(req);

            if (response.status === 200) {
                let data = await response.json();
                window.sessionStorage.setItem('state', JSON.stringify({ 'domain': ip, 'port': port, 'Fy': fy }))
                //window.sessionStorage.setItem('roleCode', result.data[0].role.toString())
                window.sessionStorage.setItem('username', username)
                window.sessionStorage.setItem('rolecode', data.id.toString())
                setCurrentUser({user: data.token})
               /* setAuthTokens(data.token)*/
               /* setUser(data.name)*/
                return { redirect: true, status: response.status }

            } else {

                return { redirect: false, status: response.status }
            }

        } catch (err) {

            return { redirect: false, status: "Exception Occured in LogIn Module" }
        }

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

 
    handleSubmit = async (event: any) => {
        event.preventDefault();
        this.setState({ isLoader : true })
      
     
            const param = {
                compCode: this.compCode,
                password: this.state.password,
                customer: this.customer,
                username: this.state.username,
                ip: this.ip,
                port: this.port,
                fy: this.state.fy
            }
        const { redirect, status } = await this.fetchValidateUserApi(param);
        const { user } = this.props.currentUser
        window.sessionStorage.setItem('token1', user);
        
        if (redirect === true) {

            this.setState({ isLoader: false })
            toast.success(`You Signed In Successfully with status code ${status}`)
            this.setState({ redirect: true })
        }
        else if (redirect === false) {
            this.setState({ isLoader: false })
            toast.error(status)
            this.setState({ redirect: false })
        }
        else {
            if (redirect === undefined) {
                this.setState({ isLoader: false })
                alert(`Exception Occured : ${status}`)
            }
        }
       
    }

    render() {
        const {compList, redirect } = this.state;
        //console.log('compList obj', this.tempArr)
        if (redirect == true) {
            this.setState({ isLoader: false })
            return <Redirect to='/home' />;
        } else { }

            //{compList.length != 0 && compList != undefined && compList != null ?
            //    (
            //        compList[0].msg !== '' || compList[0].msg !== null || compList[0].msg !== undefined ? (
            //            <div className="m-0 p-0" style={{position:'absolute', left:'10px', top:'50px'}}>
            //                <textarea rows={2} className="form-control col-12 text-danger m-0 float-left text-center" readOnly>{compList[0].msg}</textarea>
                           
            //            </div>
            //        ): null
                   

            //    ) : null
            //}
        return (<>
            <div className="outer-container mt-1">
                {
                    this.state.isLoader === true ? (
                        <div className="col-12" style={{ minHeight: '100vh', maxHeight: '100vh', minWidth: '100vw', maxWidth: '100vw', zIndex: 10, backgroundColor: 'rgba(0,0,0, 0.1)', position: 'absolute', top: '13%', right: '0', bottom: '0', left: '0' }}>
                            <span className="card" style={{ border: 'none', background: 'none', height: 'auto', minHeight: '110px', position: 'absolute', top: '40%', right: '50%', zIndex: 1000 }}>

                                <ScaleLoader color="#52bfd9" loading={this.state.isLoader} />


                            </span>

                        </div>

                    ): null

                }
             

                <span className="card" style={{ border: 'none', background: 'none', height: 'auto', minHeight: '110px'}}></span>
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
                        <span style={{ cursor: 'pointer', color: 'blue' }} className="m-0" onClick={() => {
                            const { history } = this.props;
                            localStorage.clear();
                            sessionStorage.clear();
                            history.push('/')

                        }}>ReValidate Customer</span>


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
    setCurrentUser: ({ user }: any) => dispatch(setCurrentUser({ user }))
});
const LogIn = connect(mapStateToProps, mapDispatchToProps)(ChildLog)
/*const LogIn = LogInHoc(ChildLog)*/
export default LogIn;


