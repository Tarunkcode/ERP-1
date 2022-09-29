import * as React from 'react';
import '../masterStyle.css';

import { HiddenModal } from '../../../components/Modals/master.modals';
import { SeriesMasterModal } from '../../../components/Modals/master.modals';
import { CustomerGroupModal } from '../../../components/Modals/master.modals';
import { DelTermsModal } from '../../../components/Modals/master.modals';
import { PayTermsModal } from '../../../components/Modals/master.modals';

import { fetchMasters } from '../../../components/HOC/fetchApi.hoc';
import CustomInput from '../../../components/custom-input/custom-input.component';


interface IState {
    opn: string,
    series: any[],
    delT: any[],
    payT: any[],
    custGp: any[]
}
interface IProps {

    fetchApi: any
}



class ApiState extends React.Component<IProps, IState> {
    /*static ApiContext = MasterApiContext;*/

    constructor(props: any) {
        super(props);

        this.state = {
            opn: 'Corporate',
            series: [],
            delT: [],
            payT: [],
            custGp:[]

        };
        this.handleAddressOptions = () => { }
    }

    componentDidMount() {
        try {
            //fetch series master 
            this.props.fetchApi(3, 'series').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 1')
            }).then((result: any) => this.setState({ series: result.data }));

            //fetch del terms
            this.props.fetchApi(30, 'delterms').then((res: any) => {
                if (res.ok) return res.json()
                else throw new Error('Bad Fetch 1')
            }).then((result: any) => this.setState({ delT: result.data }))

            // fetch pay terms
            this.props.fetchApi(31, 'payterms').then((res: any) => {
                if (res.ok) return res.json();
                else throw new Error('Bad Fetch 1')
            }).then((result: any) => this.setState({ payT: result.data }));

            // fetch Customer Group
            this.props.fetchApi(1005, 'custGp').then((res: any) => {
                if (res.ok) return res.json()
                else throw new Error('Bad Fetch 1')
            }).then((result: any) => this.setState({ custGp: result.data }));

        } catch (err) { alert(err); }
        
    }

    handleAddressOptions = (event: any) => {
        event.preventDefault();

        this.setState({
            opn: event.target.value
        })

    }


    render() {

        return (
            <>

                <div className="main card firstDiv" >

                    <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                        <span className="row-header p-0 m-0" >Add Customer Master</span>
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="show" id="genDetails">
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <CustomInput name="series" ipType="text" label="Series" ipTitle="Enter Series" dataArray={this.state.series} />

                                            <SeriesMasterModal />
                                        </>
                                        <>
                                            <CustomInput name="custCode" ipType="text" label="Customer Code" ipTitle="Enter Customer Code" dataArray={[]} />
                                            <HiddenModal />

                                        </>
                                        <>
                                            <CustomInput name="custName" ipType="text" label="Customer Name" ipTitle="Enter Customer Name" dataArray={[]} />
                                            <HiddenModal />
                                        </>

                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <CustomInput name="pntName" ipType="text" label="Print Name" ipTitle="Enter Print Name" dataArray={[]} />
                                            <HiddenModal />
                                        </>

                                        <>

                                            <CustomInput name="custGrp" ipType="text" label="Customer Group" ipTitle="Enter Customer Group" dataArray={this.state.custGp} />
                                            <CustomerGroupModal />

                                        </>
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Major Products</label>

                                            <select name="majProd" className="form-control inp" style={{ height: '25px' }} title="Major Products" >
                                                <option value="1">Y</option>
                                                <option value="0">N</option>
                                            </select>
                                            <HiddenModal />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <>

                                            <CustomInput name="delTerms" ipType="text" label="Delivery Terms" ipTitle="Enter Delievery Terms" dataArray={this.state.delT} />
                                            <DelTermsModal />
                                        </>

                                        <>

                                            <CustomInput name="payTerms" ipType="text" label="Payment terms" ipTitle="Enter Payment Terms" dataArray={this.state.payT} />
                                            <PayTermsModal />
                                        </>

                                        <div className="col-4"></div>

                                    </span>
                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Opening Balance</label>
                                            <input type="text" name="opnBal" className="form-control" style={{ width: '18%' }} title="Opening Balance" />
                                            <select className="form-control ml-1" style={{
                                                width: '4%',
                                                height: '25px',
                                                padding: '0px'
                                            }}>
                                                <option>D(-)</option>
                                                <option>C(+)</option>
                                            </select>
                                        </>
                                        <>
                                            <CustomInput name="cdtAmt" ipType="text" label="Credit Amount" ipTitle="Enter Credit Amount" dataArray={[]} />
                                            <HiddenModal />
                                        </>

                                        <div className="col-4"></div>

                                    </span>


                                    <span className="d-flex section2 col-sm-12">

                                        <>
                                            <CustomInput name="cdtLmt" ipType="text" label="Credit Limit" ipTitle="Enter Credit Limit" dataArray={[]} />
                                            <HiddenModal />
                                        </>
                                        <>
                                            <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Ledger Type</label>
                                            <select name="custGrp" className="form-control inp" style={{ height: '25px' }} title="Customer Group">
                                                <option value="0">Y</option>
                                                <option value="1">N</option>
                                            </select>
                                            <HiddenModal />
                                        </>
                                        <>
                                            <label htmlFor="multiCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Multi Currency</label>
                                            <select name="multiCurr" className="form-control inp" style={{ height: '25px' }} title="Customer Group">
                                                <option value="0">Y</option>
                                                <option value="1">N</option>
                                            </select>
                                            <HiddenModal />
                                        </>


                                    </span>
                                </div>
                            </fieldset>
                        </form>
                        <div className="row row-content col-12 " style={{ margin: '1em 0%', backgroundColor: 'whitesmoke' }}>
                            <span className="d-flex align-items-center m-0 p-0">
                                <>
                                    <label htmlFor="1payDate" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">First Payment Date</label>
                                    <input className="form-control" name="1payDate" type="date" />
                                    <HiddenModal />

                                </>

                                <>
                                    <label htmlFor="daysFreq" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label ">Days Frequency</label>
                                    <input type="text" name="daysFreq" className="form-control" title="Days Frequency" />
                                    <HiddenModal />
                                </>



                            </span>
                        </div>
                        <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Personal Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                                <div className="collapse" id="personalDet">

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <CustomInput name="contPerson" ipType="text" label="Contact Person" ipTitle="Enter Contact  Person" dataArray={[]} />
                                            <HiddenModal />
                                        </>
                                        <>
                                            <CustomInput name="desg" ipType="text" label="Designation" ipTitle="Enter Designation" dataArray={[]} />
                                            <HiddenModal />
                                        </>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <>
                                            <CustomInput name="chfExec" ipType="text" label="Chief Executive" ipTitle="Enter Chief Executive" dataArray={[]} />
                                            <HiddenModal />
                                        </>
                                        <>
                                            <CustomInput name="chfExcTel" ipType="text" label="Chief Exe. Tel. No." ipTitle="Enter Chief Executive Tel. No." dataArray={[]} />
                                            <HiddenModal />
                                        </>


                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <>
                                            <CustomInput name="telNo" ipType="text" label="Tel. No." ipTitle="Tel. No." dataArray={[]} />
                                            <HiddenModal />
                                        </>
                                        <>
                                            <CustomInput name="mob" ipType="text" label="Mobile No." ipTitle="Enter Mobile No." dataArray={[]} />
                                            <HiddenModal />
                                        </>

                                    </span>

                                    <span className="d-flex section2 col-sm-12">


                                        <>
                                            <CustomInput name="email" ipType="text" label="Email" ipTitle="Enter Email" dataArray={[]} />
                                            <HiddenModal />
                                        </>
                                    </span>

                                </div>
                            </fieldset>
                        </form>
                        <div className="row row-content col-12 " style={{ margin: '1em 0%', backgroundColor: 'whitesmoke' }}>
                            <span className="d-flex align-items-center m-0 p-0">
                                <>
                                    <label htmlFor="zone" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">Address. Options</label>
                                    <select name="zone" className="form-control" onChange={this.handleAddressOptions} >

                                        <option style={{ fontFamily: "trebuc" }} value="Corporate" selected >Corporate</option>
                                        <option style={{ fontFamily: "trebuc" }} value="Plant">Plant</option>
                                        <option style={{ fontFamily: "trebuc" }} value="Shipping">Shipping</option>
                                    </select>
                                    <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>

                                </>



                            </span>
                        </div>
                        <div style={{ margin: '0', width: '100%', padding: '0' }} id="addres">

                            <form className="form col-sm-12 row-content card-body pt-0">

                                <fieldset className="form-group border p-0">
                                    <legend className="px-2" data-toggle="collapse" data-target="#contAdd" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{this.state.opn}<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                    {
                                        this.state.opn == "Corporate" ? (
                                            <div className="collapse" id="contAdd">

                                                <span className="d-flex section2 col-sm-12">
                                                    <>
                                                        <CustomInput name="address" ipType="text" label="Address" ipTitle="Enter Address" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="country" ipType="text" label="Country" ipTitle="Enter Country" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="zone" ipType="text" label="Zone" ipTitle="Enter Zone" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>




                                                </span>

                                                <span className="d-flex section2 col-sm-12">
                                                    <>
                                                        <CustomInput name="state" ipType="text" label="State" ipTitle="Enter State" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="cty" ipType="text" label="City" ipTitle="Enter City" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="tel" ipType="tel" label="Tel. No." ipTitle="Enter Telephone Number" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>

                                                </span>

                                                <span className="d-flex section2 col-sm-12">
                                                    <>
                                                        <CustomInput name="emailId" ipType="text" label="Email ID" ipTitle="Enter Email" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="pin" ipType="text" label="Pin Code" ipTitle="Enter Pin" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="pan" ipType="text" label="Pan" ipTitle="Enter Pan No." dataArray={[]} />
                                                        <HiddenModal />
                                                    </>

                                                </span>

                                                <span className="d-flex section2 col-sm-12">
                                                    <>
                                                        <CustomInput name="gst" ipType="text" label="GST No." ipTitle="Enter GST" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="dist" ipType="text" label="Distance" ipTitle="Enter Distance" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                    <>
                                                        <CustomInput name="station" ipType="text" label="Station" ipTitle="Enter Station" dataArray={[]} />
                                                        <HiddenModal />
                                                    </>
                                                </span>

                                            </div>
                                        ) : null
                                    }
                                    {
                                        this.state.opn == "Plant" ? (
                                            <div className="collapse" id="contAdd">
                                                <table id="plantAddress" className="table table-striped table-bordered table-sm" style={{
                                                    width: "100%"
                                                }}>
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>P/L</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Plant Name</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address 1</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address 2</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Country</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Zone</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>1</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>2</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>3</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : null
                                    }
                                    {
                                        this.state.opn == "Shipping" ? (
                                            <div className="collapse" id="contAdd">
                                                <table id="shippingAddress" className="table table-striped table-bordered table-sm" style={{
                                                    width: "100%"
                                                }}>
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>PAN</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 1</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 2</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 3</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Address Line 4</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Country</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Zone</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>State</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>City</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Post Code</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Tel No.</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>GST</th>
                                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Distance</th>

                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th>1</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>2</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr>
                                                            <th>3</th>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        ) : null
                                    }
                                </fieldset>

                            </form>
                        </div>
                        <hr style={{ margin: '0', padding: '0' }} />
                        <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                            <div className="card-body col-sm-12 addCustomer container container-fluid container-lg" style={{ overflowX: 'auto', overflowY: 'auto' }}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' }}>
                                    <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Bank Details</span>
                                </div>
                                <table id="dtHorizontalExample" className="table table-striped table-bordered table-sm" style={{
                                    width: "100%"
                                }}>
                                    <thead>
                                        <tr>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>S.No</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>PAN</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Name of the Bank</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Branch</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>A/C No.</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>A/C Type</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Swift Code</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>IFSC Code</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Currency</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Country</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>GST</th>
                                            <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Distance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <hr style={{ margin: '0', padding: '0' }} />

                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                            <div className="card col-sm-5" style={{ padding: '0', margin: '0' }}>

                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                                    <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Last 3 Yrs. TurnOver</span>
                                </div>
                                <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                                    <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                        <thead className="thead-light table-secondary text-center">
                                            <tr>
                                                <th>S. No</th>
                                                <th>Year</th>
                                                <th>TurnOver(Lacks)</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                                    <span className="card-title" style={{ fontSize: '15px', margin: '0', padding: '0' }}>Additional Docs</span>
                                </div>

                                <div className="card-body col-12" style={{ margin: '0', padding: '0' }}>

                                    <span className="d-flex col-sm-12 m-0 pl-0 pr-0">
                                        <>
                                            <label htmlFor="empName" style={{ fontSize: '0.8em' }} className="form-label col-3 labl2 labl">Data Collected By</label>
                                            <input type="text" name="empName" className="form-control inp" />
                                        </>
                                        <>
                                            <label htmlFor="date" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Date</label>
                                            <input type="date" style={{ fontSize: '0.8em' }} name="date" className="form-control inp" />
                                        </>

                                    </span>
                                    {/*<span className="d-flex col-sm-10 m-0 pl-0 pr-0">*/}
                                    {/*    <>*/}
                                    {/*        <label htmlFor="position" style={{ fontSize: '0.8em' }} className="form-label col-3 labl2 labl">Position</label>*/}
                                    {/*        <input type="text" name="position" className="form-control inp" />*/}
                                    {/*    </>*/}
                                    {/*    <>*/}
                                    {/*        <label htmlFor="place" style={{ fontSize: '0.8em' }} className="form-label labl2 labl">Place</label>*/}
                                    {/*            <input type="date" style={{ fontSize: '0.8em' }} name="place" className="form-control inp" />*/}
                                    {/*    </>*/}

                                    {/*</span>*/}

                                    <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                        <>
                                            <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Docs</label>
                                            <input type="file" name="docs" />
                                        </>
                                        <span>
                                            <button type="button">Remove</button>
                                        </span>


                                    </span>
                                </div>

                            </div>
                        </div>


                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                </div>
                <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                    <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                    <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
                </div>
            </>
        );
    }
}


const AddCustomerMaster = fetchMasters(ApiState);
export default AddCustomerMaster;