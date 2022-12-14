import * as React from 'react';
import './customer-validation.styles.css';
import CustomButton from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';
import { Redirect } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { ToastContainer, toast } from 'react-toastify';
interface IProps {

}
interface IState {
    regNo: string,
    uid: string,
    pass: string,
    isLoader : boolean,
    redirect: boolean,
    compList :any
}
export default class CustomerVaildate extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            regNo: '',
            uid: '',
            pass: '',
            isLoader : false,
            redirect: false,
            compList : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRegNoChange = this.handleRegNoChange.bind(this)
        this.handleUIdChange = this.handleUIdChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
    }
    
    handleSubmit = async (e: any) => {
        e.preventDefault();
        this.setState({ isLoader : true })
        var custValidateUrl = 'http://103.25.128.155:183/api/GetUserCompany'
        var params = []
        params.push(`REGNO=${this.state.regNo}`);
        params.push(`UID=${this.state.uid}`);
        params.push(`PWD=${this.state.pass}`);
      
        const validateUrl: string = custValidateUrl + '?' + params.join('&');
        console.log('validate url', validateUrl);
        try {
            var req: Request;
            let h = new Headers();
            h.append('Accept', 'application/json');
            h.append('CompCode', 'ESMASTERDB');
            h.append('FYear', '0');
            req = new Request(validateUrl, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            await fetch(req).then(res => res.json()).then(result => {

                //"url": "http://103.25.128.155",
                //    "port": "12019",
                //        "customer": 25,
                //            "custName": "Intech",
                //                "compCode": 13,
                console.log('result', result)
                    this.setState({ isLoader: false })
                if (result.data[0].result === 1) {
                    window.sessionStorage.setItem("compName", result.data[0].compName)
                    window.sessionStorage.setItem("url", result.data[0].url)
                    window.sessionStorage.setItem("port", result.data[0].port)
                    window.sessionStorage.setItem("customer", result.data[0].customer)
                    window.sessionStorage.setItem("custName", result.data[0].custName)
                    window.sessionStorage.setItem("compCode", result.data[0].compCode)
                    window.sessionStorage.setItem("compName", result.data[0].compName)
       
                    this.setState({ compList: result.data[0].compName })
                    toast.success(`Customer Validate Successfully`);
                    this.setState({ redirect: true })
                } else {
                    /*  alert(result.data[0].msg);*/
                    toast.error(result.data[0].msg);
                    this.setState({ redirect: false });
                    return;
                }

            })

        } catch (err) {
            alert(err);
        }

    }

    handleRegNoChange(e: any) {this.setState({ regNo: e.target.value }) }
    handleUIdChange(e: any) { this.setState({ uid: e.target.value }) }
    handlePassChange(e: any) { this.setState({ pass: e.target.value }) }



    render() {
        //const { redirect, compList, uid, pass } = this.state;
        const { redirect, compList } = this.state;
        console.log('redirect', redirect);
        if (redirect === true) {
            //return <Redirect to={{
            //    pathname: "/Login",
            //    state: { compList: compList}
            //}} />;
           return <Redirect to="/Login" />
        } else { }
        return (
            <>
                <div className="outer-container">
                    <div className="card" style={{ width: "83%" }}>
                        <span className="page_Header form_title">Validate Customer</span>
                        {
                            this.state.isLoader === true ? (<ClipLoader color="#52bfd9" size={100} loading={this.state.isLoader} />) : null
                        }
                        <img src={'./assets/erpLogo.png'} style={{ width: "33%" }} />

                        {/*<div className="inner-container">*/}
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="regNo"
                        value={this.state.regNo}
                        handleChange={this.handleRegNoChange}
                        label="Registration No."
                        required
                    />
                    <FormInput
                        type="text"
                        name="uid"
                        value={this.state.uid}
                        handleChange={this.handleUIdChange}
                        label="User ID"
                        required
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.pass}
                        handleChange={this.handlePassChange}
                        label="Password"
                        required
                    />
                   
                            <CustomButton style={{ backgroundColor:'#8a2be2'}} type="submit">Validate Now</CustomButton>
                            </form>
                        {/*</div>*/}
                        <div className="footer2">
                            <h6> Developed By Excellent Softwares <br /> <span> © 2022 </span> </h6>
                        </div>
                    </div>

                </div>
            </>
        )
     }
}