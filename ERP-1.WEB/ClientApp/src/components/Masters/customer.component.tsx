import * as React from 'react';
import { fetchMasters } from '../HOC/AccountMaster.hoc';
import { connect } from "react-redux";
import { selectCurrentData } from "../../Redux/form-collection/formCollection.selectors";
import { setFormDataCollection } from "../../Redux/form-collection/formCollection.actions";
import formDataCollection, { store1 } from "../../Redux/form-collection/formCollection.reducer";
import { createStructuredSelector } from 'reselect';
import { CusSupMaster } from '../../Pages/Master/Customer-Supplier-Master/customer-supplier-master.page';
import { toast } from 'react-toastify';
import { LoaderContext } from '../../AppContext/loaderContext';
import { Validator_Engine } from '../Validation-Scripts/validations.scripts';
import { clear_form } from '../../Pages/Helper Functions/table';

interface IState {
    opn: string,
    opnName: string,
    errorList: any,
    configType: any,
    bankGridApi: any,
    addressType: number,
    plantGridApi: any,
    mastertype: any,
    shippingGridApi: any,
    rawData: any
}
interface IProps {
    api: any,
    series: any[],
    masters: any,
    gettingVirtualCode: number,
    defaultData: any,
    history: any
}

class CustomerMaster extends React.PureComponent<IProps, IState> {
    static contextType = LoaderContext;

    constructor(props: any) {
        super(props);

        this.state = {
            opn: '1',
            opnName: 'Corporate',
            configType: '',
            addressType: 1,
            bankGridApi: null,
            plantGridApi: null,
            shippingGridApi: null,
            mastertype: null,
            errorList: {},
            rawData: {}
        };
    }
    componentDidMount() {
        let id: string = window.location.pathname;
        console.log('id', id)
        //let s: string = id.charAt(id.length - 1)
        //console.log('s', s)
        this.setState({
            configType: id == "/add-supplier-master" ? 2 : 1
        })
        if (id == "/add-customer-master") {
            this.setState({ mastertype: 3 })
        } else {

            this.setState({ mastertype: 22 })
        }



    }

    componentDidUpdate(prevProps: any) {
        if (this.props.defaultData !== prevProps.defaultData) {
            if (this.props.gettingVirtualCode !== 0) {
                if (this.props.defaultData) {
                    let opnVal = this.props.defaultData.addressdetail[0].addresstype;
                    let opnNaam = opnVal == '1' ? 'Corporate' : opnVal == '2' ? "Plant" : opnVal == '3' ? "Shipping" : ''
                    this.setState({ opn: opnVal, opnName: opnNaam })
                    this.setState({ addressType: this.props.defaultData.addressdetail[0].addresstype })

                    store1.dispatch({ payload: this.props.defaultData.accountmaster[0].series, key: "series", type: "AddOnFormData", label: "AccountMaster" });
                    store1.dispatch({ payload: this.props.defaultData.accountmaster[0].codestr, key: "codestr", type: "AddOnFormData", label: "AccountMaster" });
                    store1.dispatch({ payload: this.props.defaultData.accountmaster[0].name, key: "name", type: "AddOnFormData", label: "AccountMaster" });
                    store1.dispatch({ payload: this.props.defaultData.accountmaster[0].group, key: "group", type: "AddOnFormData", label: "AccountMaster" });
                    store1.dispatch({ payload: this.props.defaultData.accountmaster[0].delterm, key: "delterm", type: "AddOnFormData", label: "AccountMaster" });
                    store1.dispatch({ payload: this.props.defaultData.accountmaster[0].payterm, key: "payterm", type: "AddOnFormData", label: "AccountMaster" });
                    if (this.props.defaultData.addressdetail[0].addresstype === 1) {
                        store1.dispatch({ payload: this.props.defaultData.addressdetail[0].city, key: "city", type: "AddOnFormData", label: "AddressDetail" });
                        store1.dispatch({ payload: this.props.defaultData.addressdetail[0].state, key: "state", type: "AddOnFormData", label: "AddressDetail" });
                        store1.dispatch({ payload: this.props.defaultData.addressdetail[0].country, key: "country", type: "AddOnFormData", label: "AddressDetail" });
                        store1.dispatch({ payload: this.props.defaultData.addressdetail[0].address1, key: "address1", type: "AddOnFormData", label: "AddressDetail" });

                    }


                }
            }

        }
    }

    compCode = window.localStorage.getItem('compCode') || ""
    customer = window.localStorage.getItem('customer') || ""
    username = window.sessionStorage.getItem('username') || ""
    handleAddressOptions = (event: any) => {
        event.preventDefault();

        this.setState({
            opn: event.target.value,
            opnName: event.target.value == '1' ? "Corporate" : event.target.value == '2' ? "Plant" : event.target.value == '3' ? "Shipping" : '',
            addressType : parseInt(event.target.value)
        })

    }

    GetErrorList = (obj: object) => {
        this.setState({ errorList: obj })
    }

    //----------------------------------------------------------- handle Tables Data-----------------------------------------------

    getBankTableData = (gridApi: any) => {
        this.setState({ bankGridApi: gridApi })
    }
    getShippingTableData = (gridApi: any) => {
        this.setState({ shippingGridApi: gridApi })
    }
    getPlantTableData = (gridApi: any) => {
        this.setState({ plantGridApi: gridApi })
    }
    getBankAllRows = () => {

        let items: any[] = [];
        if (this.state.bankGridApi) {
            this.state.bankGridApi.forEachNode(function (node: any) {
                if (node.data.name !== null)
                    items.push(node.data);
            });
        }
        return items;
    }
    getPlantAllRows = () => {
        let items: any[] = [];
        if (this.state.plantGridApi !== null) {
            this.state.plantGridApi.forEachNode(function (node: any) {
                if (node.data.address1 !== null)
                    items.push(node.data);
            });
        }
        return items;
    }
    getShippingAllRows = () => {
        let items: any[] = [];
        if (this.state.shippingGridApi !== null) {
            this.state.shippingGridApi.forEachNode(function (node: any) {
                if (node.data.address1 !== null)
                    items.push(node.data);
            });

        }
        return items;
    }

    //--------------------------------------------------- collect table data -----------------------------------------------------
    collectBankTableData = async () => {

        let dataSet: any[] = await this.getBankAllRows();
        //alter dataSet
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{
                "srno": 1, "name": null, "address": null, "acno": null, "acctype": null, "swiftcode": null,
                "ifsccode": null, "currency": null, "country": null
            }]
            store1.dispatch({ payload: dataSet, key: '', type: "AddOnFormData", label: "BankDetail" })
            return;
        }
        dataSet.map((item: any, ind: number) => {
            item.srno = ind + 1;
            item.name = item.name.value;
            item.address = item.address.value;
            item.acno = item.acno;
            item.acctype = item.acctype.value;
            item.swiftcode = item.swiftcode;
            item.ifsccode = item.ifsccode;
            item.currency = item.currency.value;
            item.country = item.country.value;
            item.code = this.props.gettingVirtualCode;
            item.mastertype = this.state.mastertype;
        })
        // dispatch dataSet
        store1.dispatch({ payload: dataSet, key: '', type: "AddOnFormData", label: "BankDetail" })

    }
    collectPlantTableData = async () => {

        let dataSet: any[] = await this.getPlantAllRows();
        if (dataSet.length === 0 || dataSet === null) {

            dataSet = [{
                "srno": 1, "pan": null, "address1": null, "address2": null, "address3": null, "address4": null, "country": null,
                "zone": null, "state": null, "city": null, "postcode": null, "tel": null, "gstno": null, "distance": null
            }]
            store1.dispatch({ payload: dataSet, key: '', type: "AddOnFormData", label: "PlantAddressDetail" })
            return;
        }
        dataSet.map((item: any, ind: number) => {
            /*...dataSet,*/
            item.srno = ind + 1;
            item.pan = item.pan;
            item.addresstype = this.state.addressType;
            item.address1 = item.address1
            item.address2 = item.address2;
            item.address3 = item.address3;
            item.address4 = item.address4;
            item.country = item.country.value;
            item.zone = item.zone.value;
            item.state = item.state.value;
            item.city = item.city.value;
            item.postcode = item.postcode;
            item.tel = item.tel;
            item.gstno = item.gstno;
            item.distance = item.distance;

            item.code = this.props.gettingVirtualCode;
            item.mastertype = this.state.mastertype;
        })
        store1.dispatch({ payload: dataSet, key: '', type: "AddOnFormData", label: "PlantAddressDetail" })




    }
    collectShippingTableData = async () => {

        let dataSet: any[] = await this.getShippingAllRows();
        if (dataSet.length === 0 || dataSet === null) {
            dataSet = [{
                "srno": 1, "pan": null, "address1": null, "address2": null, "address3": null, "address4": null, "country": null, "zone": null, "state": null, "city": null, "postcode": null, "tel": null, "gstno": null, "distance": null
            }]
            store1.dispatch({ payload: dataSet, key: '', type: "AddOnFormData", label: "ShippingAddressDetail" })
            return;
        }
        dataSet.map((item: any, ind: number) => {
            /*...dataSet,*/
            item.srno = ind + 1;
            item.pan = item.pan;
            item.addresstype = this.state.addressType;
            item.address1 = item.address1
            item.address2 = item.address2;
            item.address3 = item.address3;
            item.address4 = item.address4;
            item.country = item.country.value;
            item.zone = item.zone.value;
            item.state = item.state.value;
            item.city = item.city.value;
            item.postcode = item.postcode;
            item.tel = item.tel;
            item.gstno = item.gstno;
            item.distance = item.distance;
            item.code = this.props.gettingVirtualCode;
            item.mastertype = this.state.mastertype;
        })
        store1.dispatch({ payload: dataSet, key: '', type: "AddOnFormData", label: "ShippingAddressDetail" })


    }

    //--------------------------------------------------------------------------------- end Table Handler-----------------------------------------------------------


    //--------------------------------------------------------------------list handler ------------------------------------------------------------------------------
    collectAccountMasterListData = (value: any, name: string) => {
        console.log(name, ':', value);
        if (value.length < 1 || !value) {
            if (store1.getState().AccountMaster[0][name]) {
                delete store1.getState().AccountMaster[0][name];
            }
            return;
        }
        store1.dispatch({ payload: value, key: name, type: "AddOnFormData", label: "AccountMaster" });

    }
    collectAddressDetailListData = (value: any, name: string) => {
        console.log(name, ':', value);

        if (value.length < 1 || !value) {
            if (store1.getState().AddressDetail[0][name]) {
                delete store1.getState().AccountMaster[0][name];
            }
            return;
        }
        store1.dispatch({ payload: value, key: name, type: "AddOnFormData", label: "AddressDetail" });



    }
    //-------------------------------------------------------------------------------------------------------------------------
    formatJSONData = (name: string, event: any) => {
        let modifyValue: any;
        if (event.currentTarget.classList.contains('str')) modifyValue = event.target.value;
        else if (event.currentTarget.classList.contains('float')) modifyValue = parseFloat(event.target.value)
        else if (event.currentTarget.classList.contains('switch')) {
            let value = event.target.value == 'on' ? "1" : "0";
            modifyValue = parseInt(value);
        }
        else if (name === 'paydate') modifyValue = new Date(event.target.value).toISOString();
        else modifyValue = parseInt(event.target.value)
        return modifyValue;
    }

    handleAddressDetailsChange = (e: any) => {
        e.preventDefault();
        var label: string = '';
        var value: any;

        if (e.currentTarget.classList.contains('AddressDetail')) label = "AddressDetail";
        else alert("category Label are not set for one or multiple inputs 1")
        var name: string = e.target.name
        value = this.formatJSONData(name, e);
        if (value.length < 1 || !value) {
            if (store1.getState().AddressDetail[0][e.target.name]) {
                delete store1.getState().AccountMaster[0][e.target.name];
            }
            return;
        }
        store1.dispatch({ payload: value, key: name, type: "AddOnFormData", label: label });
        store1.dispatch({ payload: this.state.mastertype, key: 'accounttype', type: "AddOnFormData", label: label });
        store1.dispatch({ payload: this.props.gettingVirtualCode, key: 'code', type: "AddOnFormData", label: label });
        store1.dispatch({ payload: this.state.addressType, key: 'addresstype = this.state.addressType;', type: "AddOnFormData", label: label });

    }
    handleChangeField = (e: any) => {
        e.preventDefault();
        var label: string = '';
        var value: any;

        if (e.currentTarget.classList.contains('AccountMaster')) label = "AccountMaster";

        //else if (e.currentTarget.classList.contains('BankDetail')) label = "BankDetail";
        //else if (e.currentTarget.classList.contains('AccProductCurrency')) label = "AccProductCurrency";
        //else if (e.currentTarget.classList.contains('CommercialDetail')) label = "CommercialDetail";
        //else if (e.currentTarget.classList.contains('AccountBillByBillDetail')) label = "AccountBillByBillDetail";
        //else if (e.currentTarget.classList.contains('AccMasterSeries')) label = "AccMasterSeries";
        else alert("category Label are not set for one or multiple inputs 1")


        var name: string = e.target.name
        value = this.formatJSONData(name, e);

        if (value.length < 1 || !value) {
            if (store1.getState().AccountMaster[0][e.target.name]) {
                delete store1.getState().AccountMaster[0][e.target.name];
            }
            return;
        }

        store1.dispatch({ payload: value, key: e.target.name, type: "AddOnFormData", label: label });

    }
    handleSave$Submit = async (e: any) => {
        console.log('calalessls')
        /*  console.log('Address details 2', store1.getState().AddressDetail)*/
        //------------------------------------------------------------validate mandatory fields----------------------------------

        if (!store1.getState().AccountMaster[0].series) {
            toast.info('Please Fill Series !')
            return;
        }
        else if (!store1.getState().AccountMaster[0].codestr || store1.getState().AccountMaster[0].codestr === '') {
            toast.info('Please Fill Code !')
            return;
        }
        else if (!store1.getState().AccountMaster[0].printname || store1.getState().AccountMaster[0].printname === '') {
            toast.info('Please Fill Code !')
            return;
        }
        else if (!store1.getState().AccountMaster[0].name || store1.getState().AccountMaster[0].name === '') {
            toast.info('Please Fill Name !')
            return;
        }
        else if (!store1.getState().AccountMaster[0].group) {
            toast.info('Please Fill Group !')
            return;
        }
        else if (!store1.getState().AccountMaster[0].delterm) {
            toast.info('Please Fill Delivery Term !')
            return;
        } else if (!store1.getState().AccountMaster[0].payterm) {
            toast.info('Please Fill Pay Term !')
            return;
        } else { }
        if (this.state.opn == '1') {

            if (!store1.getState().AddressDetail[0].city) {
                console.log('city', store1.getState().AddressDetail[0].city)
                toast.info('Please Fill City !')
                return;
            }
            else if (!store1.getState().AddressDetail[0].state) {
                toast.info('Please Fill State !')
                return;
            } else if (!store1.getState().AddressDetail[0].country) {
                toast.info('Please Fill Country !')
                return;
            }
            else if (!store1.getState().AddressDetail[0].address1 || store1.getState().AddressDetail[0].address1 === '') {
                toast.info('Please Fill Address !')
                return;
            } else { }
        }


        let keyArr = Object.keys(this.state.errorList);
        if (keyArr.length > 0) {
            let temp = 0;
            for (let key of keyArr) {
                if (this.state.errorList[key] !== '') {
                    toast.info(`Please Fill Correct ${key}`);
                    temp = 1;
                    break;

                } else { }
            }
            if (temp === 1) {
                return;
            }
        }


        //-------------------------------------------------------------------------------------------------------------------------
        const loader = this.context;
        if (this.state.addressType === 2) {
            await this.collectPlantTableData();

        } else if (this.state.addressType === 3) {
            await this.collectShippingTableData();

        }
        await this.collectBankTableData();
        loader.setLoader(true);
        let i: any = {
            accountmaster: this.props.gettingVirtualCode === 0 ? [{
                code: this.props.gettingVirtualCode,
                company: parseInt(this.compCode),
                customer: parseInt(this.customer),
                accounttype: this.state.mastertype,
                ...store1.getState().AccountMaster[0]
            }] : [{
                code: this.props.gettingVirtualCode,
                company: parseInt(this.compCode),
                customer: parseInt(this.customer),
                accounttype: this.state.mastertype,
                ...this.props.defaultData.accountmaster[0],
                ...store1.getState().AccountMaster[0]
            }],
            addressdetail: this.props.gettingVirtualCode === 0 ? this.state.opn == '1' ? [{ ...store1.getState().AddressDetail[0] }] : store1.getState().AddressDetail : this.state.opn == '1' ? [{ ...this.props.defaultData.addressdetail[0], ...store1.getState().AddressDetail[0] }] : store1.getState().AddressDetail,
            bankdetail: store1.getState().BankDetail[0],
            accproductcurrency: [{}],
            commercialdetail: [{}],
            accountbillbybilldetail: [{}],
            accmasterseries: [{}],

        }
        e.preventDefault();

        const urlSaveMaster = '/api/SaveToAccountMaster';


        try {
            console.log('resultant json', JSON.stringify(i));
            let { res, got } = await this.props.api(urlSaveMaster, "POST", i);
            if (res.status == 200) {
                toast.success(got.msg);
                let ref = document.getElementById("form");
                loader.setLoader(false)
                this.props.gettingVirtualCode == 0 ? clear_form(ref) : this.props.history.push('/successfully-modify')

            }
            else {
                loader.setLoader(false)
                toast.error(got.msg)
            }

        } catch (err) {
            loader.setLoader(false)
            alert(err)
        }

    }

    render() {

        /* const { bank, branch, currency } = this.state;*/
        return (
            <>
                <CusSupMaster
                    handleChangeField={this.handleChangeField}
                    series={this.props.series}
                    masters={this.props.masters}
                    collectAccSelectedItem={this.collectAccountMasterListData.bind(this)}
                    collectAddSelectedItem={this.collectAddressDetailListData.bind(this)}
                    getBankTableData={this.getBankTableData.bind(this)}
                    getPlantTableData={this.getPlantTableData.bind(this)}
                    getShippingTableData={this.getShippingTableData.bind(this)}
                    handleAddressOptions={this.handleAddressOptions}
                    opn={this.state.opn}
                    handleAddressDetailsChange={this.handleAddressDetailsChange.bind(this)}
                    vccode={this.props.gettingVirtualCode}
                    defaultData={this.props.defaultData}
                    FetchErrorList={this.GetErrorList.bind(this)}
                    opnName={this.state.opnName}
                    title={this.state.configType === 1 ? "Add Customer Master" : "Add Supplier Master"}
                    handleSave$Submit={this.handleSave$Submit}
                    addressType={this.state.addressType}
                    accountType={this.state.configType}

                />
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