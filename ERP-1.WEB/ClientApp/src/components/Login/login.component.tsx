
import * as React from 'react';
import { useState } from 'react';
import './login.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import { Redirect, useHistory } from 'react-router-dom';


import { connect } from "react-redux";
import { selectCurrentUser } from "../../Redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from '../../Redux/user/user.actions';

interface IProps {
    setCurrentUser: any,
    currentUser: any,
   
}

interface IState {
    username: string;
    password: string;
    redirect: boolean;
    compCode: string;
  
}


class LogIn extends React.Component<IProps, IState>{
  
    constructor(props: IProps) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirect: false,
            compCode: ''
        };
    }
 


    componentDidMount() {

        const { setCurrentUser } = this.props;
            var domainUrl = `http://${window.location.host}/api/getall`;
            fetch(domainUrl).then(res => res.json()).then(result => {
                console.log(result)

                if (result != null && result.length > 0) {
           const currentDomain = window.location.hostname
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].sUrl == currentDomain) {
                            setCurrentUser({
                                domain: result[i].sUrl,
                                port: result[i].sPort,
                                Fy: result[i].fy
                            })
                            /*const serializedState = JSON.stringify(this.props.currentUser)*/
                            window.localStorage.setItem('state', JSON.stringify(this.props.currentUser));
                            //console.log('local Storage', serializedState)
                           
                        break;

                        }
                        

                    }
                    console.log('Matched Record', this.state);

                    console.log('login currentUser', this.props.currentUser)
                    
                }
             
            })

    }


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



   handleSubmit = async (event: any) => {

        event.preventDefault();
       
       try {


           var urlStart = "http://103.197.121.188:85/api/values/ValidateUser"
           var params = []
           params.push(`UName=${this.state.username}`);
           params.push(`uP=${this.state.password}`);
           params.push('Comp=comp0015');
           params.push('FY=2021');
           console.log(urlStart + '?' + params.join('&'));
          window.sessionStorage.setItem('username', this.state.username)
          window.sessionStorage.setItem('compCode', this.state.compCode)
         



           await fetch(urlStart + '?' + params.join('&')).then(res => res.json()).then(result => {

               if (result[0].VResult == '1') {
                   var soSeries = result[0].SOSeries;
                   var AccName = result[0].AccName;
                   console.log(soSeries)
                   window.sessionStorage.setItem('so-series', soSeries);
                   window.sessionStorage.setItem('acc-name', AccName);
                   this.setState({ redirect:true })
               } else {
                   alert("Invalid user id or pass");
                   return;
               }
           })
       
   
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
                <span className="page_Header">LOG IN</span>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);

