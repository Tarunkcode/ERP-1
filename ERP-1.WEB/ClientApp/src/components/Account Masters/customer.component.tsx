import * as React from 'react';


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

  
    HandleShippingTable = (code: string, name: string, row: any) => {

        let mainObj: object = { srno: parseInt(row) + 1, [name]: parseInt(code) };
        console.log('created', mainObj)

    }
    HandlePlantTable = (code: string, name: string, row: any) => {

        let mainObj: object = { srno: parseInt(row) + 1, [name]: parseInt(code) };
        console.log('created', mainObj)

    }
    HandleBankDetails = (code: string, name: string, row: any) => {

        let mainObj: object = { srno: parseInt(row) + 1, [name]: parseInt(code) };
        console.log('created', mainObj)

    }

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

    formatJSONData = (name: string, label: string, event : any) => {
        let modifyValue: any;
        if (event.currentTarget.classList.contains('str')) modifyValue = event.target.value;
        else if (event.currentTarget.classList.contains('float')) modifyValue = parseFloat(event.target.value)
        else if (name === 'paydate') modifyValue =  new Date(event.target.value).toISOString();
        else modifyValue = parseInt(event.target.value)
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
    
        
        var name: string = e.target.name
        value = this.formatJSONData(name, label, e);



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
                <CusSupMaster handleChangeField={this.handleChangeField} bank={bank} branch={branch} currency={currency} masters={{ 'series': this.state.series, 'delT': this.state.delT, 'payT': this.state.payT, 'custGp': this.state.custGp, 'country': this.state.country, 'zone': this.state.zone, 'state': this.state.state, 'city': this.state.city, 'bank': this.state.bank, 'branch': this.state.branch, 'currency': this.state.currency }} handleAddressOptions={this.handleAddressOptions} opn={this.state.opn} title="Add Customer Master" handleSave$Submit={this.handleSave$Submit} handleAddressTypeChange={this.handleAddressTypeChange} accountType={this.accountType} HandleShippingTable={this.HandleShippingTable.bind(this)} HandleBankDetails={this.HandleBankDetails.bind(this) }  />
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