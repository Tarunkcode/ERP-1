
import * as React from 'react';
import { useState } from 'react';
import './login.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import { Redirect, useHistory } from 'react-router-dom';


import { connect } from "react-redux";
import { selectCurrentUser } from "../../Redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from '../../Redux/user/user.actions';
import { DomainContext } from '../../AppContext/domainContext.component';

interface IProps {
    setCurrentUser: any,
    currentUser: any,
     appContext:any
}

interface IState {
    username: string;
    password: string;
    redirect: boolean;
    compCode: string;
  
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
            compCode: ''
        };
    }
    //static contextType = DomainContext

    handleCompCodeChange(e: any) {
        this.setState({
            compCode: e.target.value
        })
    }
   
    handleUserNameChange(e : any) {
        this.setState({
            username: e.target.value
        });
    }
    handlePasswordChange(e: any) {
        this.setState({
            password: e.target.value
        });
    }

    fetchValidateUserApi = async () => {
        var urlStart = `http://${this.props.appContext.domain}:${this.props.appContext.port}/api/values/ValidateUser`
        var params = []
        params.push(`UName=${this.state.username}`);
        params.push(`uP=${this.state.password}`);
        params.push(`Comp=${this.state.compCode}`);
        params.push(`FY=${this.props.appContext.Fy}`);
        console.log(urlStart + '?' + params.join('&'));
        try {
            await fetch(urlStart + '?' + params.join('&')).then(res => res.json()).then(result => {



                if (result[0].VResult == '1') {
                    var soSeries = result[0].SOSeries;
                    var AccName = result[0].AccName;
     
                    window.sessionStorage.setItem('so-series', soSeries);
                    window.sessionStorage.setItem('acc-name', AccName);
                    this.setState({ redirect: true })
                } else {
                    alert("Invalid user id or pass");
                    return;
                }

            })

        } catch (err) {
            alert(err);
        }

    }

   handleSubmit = async (event: any) => {
        event.preventDefault();
       
       try {

           const { setCurrentUser } = this.props;
          /* var { domainState } = React.useContext(DomainContext);*/
          
           window.sessionStorage.setItem('username', this.state.username)
           window.sessionStorage.setItem('compCode', this.state.compCode)
           let i = JSON.stringify(this.props.appContext)
         
           await setCurrentUser(i)
           window.localStorage.setItem('state',i);

           this.fetchValidateUserApi();
   
       }
        catch (error) {
            console.log(error);
        }
    }

    render() {
        const { redirect } = this.state;

        if (redirect == true) {
            return <Redirect to='/home' />;
        } else {}

    return (
        <div className="outer-container">
            <div className="card" style={{ width: "83%" }}>
                <span className="page_Header">SIGN IN</span>
                <img src={'./assets/erpLogo.png'} style={{width:"33%"}} />
             
                <div className="inner-container">
                    <form onSubmit={this.handleSubmit}>

                        <input type="text" name="comp" id="compcode" className="form-control input-fields" required placeholder="Comp#### Code" onChange={e => this.handleCompCodeChange(e)} />


                        <input type="text" name="username" id="username" className="form-control input-fields" required placeholder="Enter UserName" onChange={e => this.handleUserNameChange(e)} />

                        <input type="password" name="password" id="password" className="form-control input-fields" required placeholder="Password" onChange={e => this.handlePasswordChange(e)} />
                        <CustomButton type="submit" className='custom-button'>Log in</CustomButton>

                    </form>


                </div>
                <div className="footer2">
                    <h6> Developed By Excellent Softwares <br /> <span> © 2022 </span> </h6>
                </div>
            </div>

        </div>

    );
       
    }
  
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch : any) => ({
    setCurrentUser: (user : any) => dispatch(setCurrentUser(user))
});
const LogIn = connect(mapStateToProps, mapDispatchToProps)(ChildLog)
export default LogInHoc(LogIn);


