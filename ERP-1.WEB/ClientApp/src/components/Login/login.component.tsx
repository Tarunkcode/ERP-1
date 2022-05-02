
import * as React from 'react';
import { useState } from 'react';
import './login.styles.css';
import CustomButton from '../custom-button/custom-button.component';
import { Redirect, useHistory } from 'react-router-dom';


interface IProps {
}

interface IState {
    username: string;
    password: string;
    redirect: boolean;
}


export default class LogIn extends React.Component<IProps, IState>{
  
    constructor(props: IProps) {
        super(props);

        this.state = {
            username: '',
            password: '',
            redirect:false
        };
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


           var urlStart = "http://103.197.121.188:85/ESERP/api/values/ValidateUser"
           var params = []
           params.push(`UName=${this.state.username}`);
           params.push(`uP=${this.state.password}`);
           params.push('Comp=comp0015');
           params.push('FY=2021');
           console.log(urlStart + '?' + params.join('&'));



           await fetch(urlStart + '?' + params.join('&')).then(res => res.json()).then(result => {

               if (result[0].VResult == '1') {

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
            <div className="card">
                <span className="page_Header">LOG IN</span>
                <img src={'./assets/logo.jpg'} />
                <span className="content_Header">Excellent ERP</span>
                <div className="inner-container">
                    <form onSubmit={this.handleSubmit}>
                       
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


