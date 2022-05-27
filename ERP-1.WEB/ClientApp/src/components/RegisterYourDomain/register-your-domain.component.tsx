import * as React from 'react';
import { Redirect } from 'react-router';
import CustomButton from '../custom-button/custom-button.component';
import './register-your-domain.styles.css';


interface IProps {
}
interface IState {
    sURL: string;
    sPort: string;
    FY: string;
}


export default class RegisterDomain extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            sURL: '',
            sPort: '',
            FY: ''
        };
        this.handleDomainChange = this.handleDomainChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
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
     handleRegistration = (event : any) => {

            event.preventDefault();

            try {


                let url = "http://localhost:16067/api/SaveDomain";
                let data = this.state

                console.log('data', data)

                fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    body: JSON.stringify(data)
                }).then((result) => {
                    result.json().then((res) => {
                        console.log('res', res)
                      
                    })
                })
            }
            catch (error) {
                console.log(error);
            }
        }

    render() {
        return (
            <div>

                <div className="outer-container">
                    <div className="card" style={{ backgroundColor: "grey" }}>
                        <span className="page_Header">Register Your Domain</span>
                        {/*<img src={'./assets/logo.jpg'} />*/}
                        <span className="content_Header">Excellent ERP</span>
                        <div className="inner-container">
                            <form onSubmit={this.handleRegistration.bind(this)}>

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
            
            )
    }

}

