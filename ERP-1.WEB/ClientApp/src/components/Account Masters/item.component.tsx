import * as React from 'react';
import '../masterStyle.css';


import { fetchMasters } from '../HOC/fetchApi.hoc';



import { connect } from "react-redux";
import { selectCurrentData } from "../../Redux/form-collection/formCollection.selectors";
import { setFormDataCollection } from "../../Redux/form-collection/formCollection.actions";
import formDataCollection, { store1 } from "../../Redux/form-collection/formCollection.reducer";
import { createStructuredSelector } from 'reselect';
import { CusSupMaster } from '../../Pages/Master/Customer-Supplier-Master/customer-supplier-master.page';



interface IState {
    opn: string,
    series: any[],
    delT: any[],
    payT: any[],
    custGp: any[],
    country: any[],
    zone: any[],
    state: any[],
    city: any[],
    bank: any[],
    branch: any[],
    currency: any[],
    tryNotToReRender: any
}
interface IProps {

    fetchApi: any,
    currentData: any,
    setFormDataCollection: any,
 
}



class CustomerMaster extends React.PureComponent<IProps, IState> {
    /*static ApiContext = MasterApiContext;*/

    constructor(props: any) {
        super(props);

        this.state = {
            opn: 'Corporate',
            series: [],
            delT: [],
            payT: [],
            custGp: [],
            country: [],
            zone: [],
            state: [],
            city: [],
            bank: [],
            branch: [],
            currency: [],
            tryNotToReRender: true

        };

    }

    componentDidMount() {
        
     
        try {
            //fetch series master 
            this.props.fetchApi(3, 'series').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 1')
            }).then((result: any) => this.setState({ series: result.data }));

            //fetch del terms master
            this.props.fetchApi(30, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 2')
            }).then((result: any) => this.setState({ delT: result.data }))

            // fetch pay terms master
            this.props.fetchApi(31, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 3')
            }).then((result: any) => this.setState({ payT: result.data }));

            // fetch Customer master
            this.props.fetchApi(1005, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 4')
            }).then((result: any) => this.setState({ custGp: result.data }));

            // fetch Country master
            this.props.fetchApi(1003, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 5')
            }).then((result: any) => this.setState({ country: result.data }));

            // fetch Zone master
            this.props.fetchApi(1004, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 6')
            }).then((result: any) => this.setState({ zone: result.data }));

            // fetch state master
            this.props.fetchApi(26, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 7')
            }).then((result: any) => this.setState({ state: result.data }));

            // fetch city master
            this.props.fetchApi(26, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 8')
            }).then((result: any) => this.setState({ city: result.data }));

            // fetch bank master
            this.props.fetchApi(1018, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 9')
            }).then((result: any) => this.setState({ bank: result.data }));

            // fetch branch master
            this.props.fetchApi(1019, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 10')
            }).then((result: any) => this.setState({ branch: result.data }));

            // fetch currency master
            this.props.fetchApi(102, 'master').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 11')
            }).then((result: any) => this.setState({ currency: result.data }));
            this.setState({ tryNotToReRender: true })
        } catch (err) { alert(err); }

    }
    //iife
    SetCustomerAccountType = (() => {
        store1.dispatch({ payload: 3, key: "AccountType", type: "AddOnFormData", label: "AccountMaster" });
        store1.dispatch({ payload: 3, key: "AccountType", type: "AddOnFormData", label: "AddressDetail" });
        store1.dispatch({ payload: 3, key: "MasterType", type: "AddOnFormData", label: "BankDetail" });
        store1.dispatch({ payload: 3, key: "AccountType", type: "AddOnFormData", label: "AccProductCurrency" });
        store1.dispatch({ payload: 3, key: "MasterType", type: "AddOnFormData", label: "CommercialDetail" });
        store1.dispatch({ payload: 3, key: "AccountType", type: "AddOnFormData", label: "AccountBillByBillDetail" });
        store1.dispatch({ payload: 3, key: "MasterType", type: "AddOnFormData", label: "AccMasterSeries" });
    })()
    handleAddressOptions = (event: any) => {
        event.preventDefault();

        this.setState({
            opn: event.target.value
        })

    }

    formatJSONData = (value : string,name: string, label: string) => {
        let modifyValue: any;
          if (label == "BankDetail") {
            switch (name) {
                case 'Name': modifyValue = parseInt(value); break;
                case 'Address': modifyValue = parseInt(value); break;
                case 'Currency': modifyValue = parseInt(value); break;
                case 'Country': modifyValue = parseInt(value); break;
                default: modifyValue = value;
            }
              return modifyValue;
          }
        switch (name) {
            case 'Series': modifyValue = parseInt(value); break;
            case 'MajorProduct': modifyValue = parseInt(value); break;
            case 'DelTerm': modifyValue = parseInt(value); break;
            case 'PayTerm': modifyValue = parseInt(value); break;
            case 'Group': modifyValue = parseInt(value); break;
            case 'PayTo': modifyValue = parseInt(value); break;
            case 'OpBal': modifyValue = parseFloat(value); break;
            case 'TurnOver1': modifyValue = parseFloat(value); break;
            case 'TurnOver2': modifyValue = parseFloat(value); break;
            case 'TurnOver3': modifyValue = parseFloat(value); break;
            case 'PayDate': modifyValue = new Date(value).toISOString(); break;
            case 'DayFreq': modifyValue = parseInt(value); break;
            case 'Country': modifyValue = parseInt(value); break;
            case 'Zone': modifyValue = parseInt(value); break;
            case 'State': modifyValue = parseInt(value); break;
            case 'City': modifyValue = parseInt(value); break;

            default: modifyValue = value;
        }
      
        
        return modifyValue;
    }

    handleAddressTypeChange = (value: number) => {

        store1.dispatch({ type: "AddOnFormData", payload: value, key: "AddressType", label: "AddressDetail" })
    }
    handleChangeField = (e: any) => {
        e.preventDefault();
        var label: string = '';
        var value: any;
        if (e.currentTarget.classList.contains('AccountMaster')) label = "AccountMaster";
        else if (e.currentTarget.classList.contains('AddressDetail')) label = "AddressDetail";
        else if (e.currentTarget.classList.contains('BankDetail')) label = "BankDetail";
        else if (e.currentTarget.classList.contains('AccProductCurrency')) label = "AccProductCurrency";
        else if (e.currentTarget.classList.contains('CommercialDetail')) label = "CommercialDetail";
        else if (e.currentTarget.classList.contains('AccountBillByBillDetail')) label = "AccountBillByBillDetail";
        else if (e.currentTarget.classList.contains('AccMasterSeries')) label = "AccMasterSeries";
        else alert("category Label are not set for one or multiple inputs 1")
        let key = window.localStorage.getItem('key')!;
        
        var name: string = e.target.name
        if (key) value = parseInt(key);
        else value = this.formatJSONData(e.target.value, name, label);
            console.log('key : ' + e.target.name + ',value : ' + value);
            store1.dispatch({ payload: value, key: e.target.name, type: "AddOnFormData", label: label });
        /*console.log(store1.getState())*/
        window.localStorage.removeItem('key');
    }
    handleSave$Submit= async (e: any)=> {
     
        e.preventDefault();
        let i: any = JSON.stringify(store1.getState());
        console.log('i:', i);
            const urlSaveMaster = 'http://103.25.128.155:12019/api/SaveToAccountMaster';

            var req1: Request;
            let h = new Headers();
            h.append('Accept', 'application/json');
            h.append('Content-Type', 'application/json');
            h.append('CompCode', 'Comp0021');
            h.append('FYear', '2022');
            req1 = new Request(urlSaveMaster, {
                method: 'POST',
                headers: h,
                body: i,
                mode: 'cors'
            });
        try {
            const response = await fetch(req1);
            const data = await response.json();
            console.log('got response msg',data);
            alert(data.msg);
      
            /*this.props.postApi(i)*/
        } catch (err) {
            alert(err)
        }
       
    }
    accountType = "3";
    render() {
      
        const { bank, branch, currency } = this.state;
        return (
            <>
                <CusSupMaster handleChangeField={this.handleChangeField} bank={bank} branch={branch} currency={currency} masters={{ 'series': this.state.series, 'delT': this.state.delT, 'payT': this.state.payT, 'custGp': this.state.custGp, 'country': this.state.country, 'zone': this.state.zone, 'state': this.state.state, 'city': this.state.city, 'bank': this.state.bank, 'branch': this.state.branch, 'currency': this.state.currency }} handleAddressOptions={this.handleAddressOptions} opn={this.state.opn} title="Add Customer Master" handleSave$Submit={this.handleSave$Submit} handleAddressTypeChange={this.handleAddressTypeChange} accountType={this.accountType}  />
            </>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    currentData: selectCurrentData
});
const mapDispatchToProps = (dispatch: any) => ({
    setFormDataCollection: (data: any) => dispatch(setFormDataCollection(data))
});

const CMaster = connect(mapStateToProps, mapDispatchToProps)(CustomerMaster);
export default fetchMasters(CMaster);