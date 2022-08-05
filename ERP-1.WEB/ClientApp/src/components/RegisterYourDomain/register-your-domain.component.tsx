import * as React from 'react';
import { Redirect } from 'react-router';
import CustomButton from '../custom-button/custom-button.component';
import LogIn from '../Login/login.component';
import './register-your-domain.styles.css';


interface IProps {
}
export interface IDomain {
    sURL: string;
    sPort: string;
    FY: string;
    CompCode: string;
    currentDomain: string;
    redirect: boolean;
}

export default class RegisterDomain extends React.Component<IProps, IDomain> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            sURL: '',
            sPort: '',
            FY: '',
            CompCode: '',
            currentDomain: window.location.hostname,
            redirect: false
        };
        this.handleDomainChange = this.handleDomainChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
        this.handleFYChange = this.handleFYChange.bind(this);
        this.handleCompCode = this.handleCompCode.bind(this);
        this.handleFYChange = this.handleFYChange.bind(this);
    }


    handleDomainChange(e: any) {
        this.setState({
            sURL: e.target.value
        });
    }
    handlePortChange(e: any) {
        this.setState({
            sPort: e.target.value
        });
    }

    handleFYChange = (e: any) => {
        this.setState({
            FY: e.target.value
        });
    }
        handleCompCode = (e: any) => {
            this.setState({
                CompCode: e.target.value
        });
       

    }
     handleRegistration = (event : any) => {

            event.preventDefault();

            try {


                let url = `http://${window.location.host}/api/SaveDomain`;
                let data = this.state

                console.log('data', data)

                fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    },
                    body: JSON.stringify(data)
                }).then((result) => {
                    result.json().then((res) => {
                        console.log('res', res)
                        this.setState({
                            redirect: true
                        });
                        alert("You are register successfully");
                      
                    })
                })
            }
            catch (error) {
                console.log(error);
                this.setState({
                    redirect: false
                });
                alert('resgister domain failed')
         }
        
         
     }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/Login' />;
        }
        return (
            <>
              
            <div>

                <div className="outer-container">
                        <div className="card" style={{ backgroundColor: "grey", width: "83%" }}>
                            <span className="page_Header" style={{ fontWeight: 900, color:"white" }}>Register Your Domain</span>
                            <img src={'./assets/erpLogo.png'} style={{width:"33%" }} />
                   
                        <div className="inner-container">
                            <form onSubmit={this.handleRegistration.bind(this)}>

                                    <input type="text" name="compcode" id="compcode" className="form-control input-fields" required placeholder="Comp### Code" onChange={this.handleCompCode} />

                                    <input type="text" name="domain" id="domain" className="form-control input-fields" required placeholder="Domain Address" onChange={this.handleDomainChange} />


                                <input type="text" name="port" id="port" className="form-control input-fields" required placeholder="Port No." onChange={this.handlePortChange} />

                                <input type="text" name="fy" id="fy" className="form-control input-fields" required placeholder="Financial Year" onChange={this.handleFYChange} />
                                <CustomButton type="submit" className='custom-button btn-danger'>Register Now</CustomButton>

                            </form>


                        </div>
                        <div className="footer2">
                            <h6> Developed By Excellent Softwares <br /> <span> © 2022 </span> </h6>
                        </div>
                    </div>

                </div>


                </div>

   </>
            
            )
    }

}

