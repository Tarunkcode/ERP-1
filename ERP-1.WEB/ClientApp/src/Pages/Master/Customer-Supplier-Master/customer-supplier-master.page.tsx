import * as React from 'react';
import { Input } from 'reactstrap';
//import '../masterStyle.css';
import CustomInput from '../../../components/custom-input/custom-input.component';

import { HiddenModal } from '../../../components/Modals/master.modals';
import { SeriesMasterModal } from '../../../components/Modals/master.modals';
import { CustomerGroupModal } from '../../../components/Modals/master.modals';
import { DelTermsModal } from '../../../components/Modals/master.modals';
import { PayTermsModal } from '../../../components/Modals/master.modals';


export function CusSupMaster({ handleChangeField, bank, branch, currency, masters, handleAddressOptions, opn, title, handleSave$Submit, handleAddressTypeChange, formDataCollection, accountType, ...otherProps }: any) {
    return (
        <>
            <div className="main card firstDiv" >

                <div className="text-center card-title col-12" style={{ textAlign: 'start'}}>
                    <span className="row-header p-0 m-0" >{title}</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0">
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <CustomInput name="Series" classCategory="form-control inp AccountMaster" ipType="text" label="Series" ipTitle="Enter Series" dataArray={masters.series} change={handleChangeField} />

                                        <SeriesMasterModal />
                                    </>
                                    <>
                                        <CustomInput name="CodeStr" classCategory="form-control inp AccountMaster" ipType="text" label={accountType == "3" ? "Customer Code" : "Supplier Code"} ipTitle={accountType == "3" ? "Enter Customer Code" : "Enter Supplier Code"} dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />

                                    </>
                                    <>
                                        <CustomInput name="Name" classCategory="form-control inp AccountMaster" ipType="text" label={accountType == "3" ? "Customer Name" : "Supplier Name"} ipTitle={accountType == "3" ? "Enter Customer Name" : "Enter Supplier Name"} dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <CustomInput name="PrintName" classCategory="form-control inp AccountMaster" ipType="text" label="Print Name" ipTitle="Enter Print Name" dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>

                                    <>

                                        <CustomInput name="Group" classCategory="form-control inp AccountMaster" ipType="text" label={accountType == "3" ? "Customer Group" : "Supplier Group"} ipTitle={accountType === "3" ? "Enter Customer Group" : "Enter Supplier Group"} dataArray={masters.custGp} change={handleChangeField} />
                                        <CustomerGroupModal />

                                    </>
                                    <>
                                        <label htmlFor="MajorProduct" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Major Products</label>

                                        <select name="MajorProduct" className="form-control inp AccountMaster" style={{ height: '25px' }} title="Major Products" onBlur={handleChangeField}>
                                            <option value={1} >Y</option>
                                            <option value={0} >N</option>
                                        </select>
                                        <HiddenModal />
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <>

                                        <CustomInput name="DelTerm" classCategory="form-control inp AccountMaster" ipType="text" label="Delivery Terms" ipTitle="Enter Delievery Terms" dataArray={masters.delT} change={handleChangeField} />
                                        <DelTermsModal />
                                    </>

                                    <>

                                        <CustomInput name="PayTerm" classCategory="form-control inp AccountMaster" ipType="text" label="Payment terms" ipTitle="Enter Payment Terms" dataArray={masters.payT} change={handleChangeField} />
                                        <PayTermsModal />
                                    </>

                                    <div className="col-4"></div>

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <label htmlFor="OpBal" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Opening Balance</label>
                                        <input type="text" name="OpBal" className="form-control AccountMaster" style={{ width: '18%' }} title="Opening Balance" onBlur={handleChangeField} />
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
                                        <CustomInput name="cdtAmt" classCategory="form-control inp " ipType="text" label="Credit Amount" ipTitle="Enter Credit Amount" dataArray={[]} /> {/* notFound*/}
                                        <HiddenModal />
                                    </>

                                    <div className="col-4"></div>

                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <>
                                        <CustomInput name="cdtLmt" classCategory="form-control inp " ipType="text" label="Credit Limit" ipTitle="Enter Credit Limit" dataArray={[]} /> {/* notFound*/}
                                        <HiddenModal />
                                    </>
                                    <>
                                        <label htmlFor="LedgerType" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Ledger Type</label>
                                        <select name="LedgerType" className="form-control inp AccountMaster" style={{ height: '25px' }} title="Is Ledger Type" onBlur={handleChangeField}>
                                            <option value={1} >Y</option>
                                            <option value={0} selected>N</option>
                                        </select>
                                        <HiddenModal />
                                    </>
                                    <>
                                        <label htmlFor="multiCurr" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Multi Currency</label>
                                        <select name="multiCurr" className="form-control inp" style={{ height: '25px' }} title="is Multi Currency"> {/* notFound*/}
                                            <option value={1} >Y</option>
                                            <option value={0} selected>N</option>
                                        </select>
                                        <HiddenModal />
                                    </>


                                </span>
                            </div>
                        </fieldset>
                    </form>
                    <div className="row card-footer col-12 " style={{ margin: '1em 0%'}}>
                        <span className="d-flex align-items-center m-0 p-0">
                            <>
                                <label htmlFor="PayDate" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">First Payment Date</label>
                                <input className="form-control AccountMaster" name="PayDate" type="date" onBlur={handleChangeField} />
                                <HiddenModal />

                            </>

                            <>
                                <label htmlFor="DayFreq" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label ">Days Frequency</label>
                                <input type="text" name="DayFreq AccountMaster" className="form-control AccountMaster" title="Days Frequency" onBlur={handleChangeField} />
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
                                        <CustomInput name="PdPerSon" classCategory="form-control inp AccountMaster" ipType="text" label="Contact Person" ipTitle="Enter Contact  Person" dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>
                                    <>
                                        <CustomInput name="PDDesignation" classCategory="form-control inp AccountMaster" ipType="text" label="Designation" ipTitle="Enter Designation" dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <>
                                        <CustomInput name="PDExe" classCategory="form-control inp AccountMaster" ipType="text" label="Chief Executive" ipTitle="Enter Chief Executive" dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>
                                    <>
                                        <CustomInput name="PDExeTel" classCategory="form-control inp AccountMaster" ipType="text" label="Chief Exe. Tel. No." ipTitle="Enter Chief Executive Tel. No." dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>


                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <>
                                        <CustomInput name="PDTel" classCategory="form-control inp AccountMaster" ipType="text" label="Tel. No." ipTitle="Tel. No." dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>
                                    <>
                                        <CustomInput name="Pdmob" classCategory="form-control inp AccountMaster" ipType="text" label="Mobile No." ipTitle="Enter Mobile No." dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-12">


                                    <>
                                        <CustomInput name="PDEMAIL" classCategory="form-control inp AccountMaster" ipType="text" label="Email" ipTitle="Enter Email" dataArray={[]} change={handleChangeField} />
                                        <HiddenModal />
                                    </>
                                </span>

                            </div>
                        </fieldset>
                    </form>
                    <div className="row card-footer col-12 " style={{ margin: '1em 0%' }}>
                        <span className="d-flex align-items-center m-0 p-0">
                            <>
                                <label htmlFor="zone" style={{ fontSize: '0.8em', width: '100%', marginLeft: '2em' }} className="form-label">Address. Options</label>
                                <select name="zone" className="form-control" onBlur={handleAddressOptions} >

                                    <option style={{ fontFamily: "trebuc" }} value="Corporate" selected >Corporate</option>
                                    <option style={{ fontFamily: "trebuc" }} value="Plant">Plant</option>
                                    {
                                        accountType == "3" ? (<option style={{ fontFamily: "trebuc" }} value="Shipping">Shipping</option>) : null
                                    }
                                    
                                </select>
                                <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>

                            </>



                        </span>
                    </div>
                    <div style={{ margin: '0', width: '100%', padding: '0' }} id="addres">
                        <form className="form col-sm-12 row-content card-body pt-0">

                            <fieldset className="form-group border p-0">
                                <legend className="px-2" data-toggle="collapse" data-target="#contAdd" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{opn}<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                {
                                   
                                    opn == "Corporate" ? (
                                        <div className="collapse" id="contAdd">
                                            <span className="d-flex section2 col-sm-12">
                                                <>
                                                    <CustomInput name="Address1" classCategory="form-control inp AddressDetail" ipType="text" label="Address-1" ipTitle="Enter Address" dataArray={[]} change={handleChangeField} onChange={handleAddressTypeChange(1)} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="Address2" classCategory="form-control inp AddressDetail" ipType="text" label="Address-2" ipTitle="Enter Address" dataArray={[]} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="Address3" classCategory="form-control inp AddressDetail" ipType="text" label="Address-3" ipTitle="Enter Address" dataArray={[]} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>




                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <>
                                                    <CustomInput name="Address4" classCategory="form-control inp AddressDetail" ipType="text" label="Address-4" ipTitle="Enter Address" dataArray={[]} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="Country" classCategory="form-control inp AddressDetail" ipType="text" label="Country" ipTitle="Enter Country" dataArray={masters.country} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="Zone" classCategory="form-control inp AddressDetail" ipType="text" label="Zone" ipTitle="Enter Zone" dataArray={masters.zone} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>




                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <>
                                                    <CustomInput name="State" classCategory="form-control inp AddressDetail" ipType="text" label="State" ipTitle="Enter State" dataArray={masters.state} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="City" classCategory="form-control inp AddressDetail" ipType="text" label="City" ipTitle="Enter City" dataArray={masters.city} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="Tel" classCategory="form-control inp AddressDetail" ipType="tel" label="Tel. No." ipTitle="Enter Telephone Number" dataArray={[]} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <>
                                                    <CustomInput name="Email" classCategory="form-control inp AddressDetail" ipType="text" label="Email ID" ipTitle="Enter Email" dataArray={[]} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="PostCode" classCategory="form-control inp AddressDetail" ipType="text" label="Pin Code" ipTitle="Enter Pin" dataArray={[]} change={handleChangeField} />
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="pan" classCategory="form-control inp AddressDetail" ipType="text" label="Pan" ipTitle="Enter Pan No." dataArray={[]} /> {/* notFound*/}
                                                    <HiddenModal />
                                                </>

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <>
                                                    <CustomInput name="gst" classCategory="form-control inp AddressDetail" ipType="text" label="GST No." ipTitle="Enter GST" dataArray={[]} /> {/* notFound*/}
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="dist" classCategory="form-control inp AddressDetail" ipType="text" label="Distance" ipTitle="Enter Distance" dataArray={[]} /> {/* notFound*/}
                                                    <HiddenModal />
                                                </>
                                                <>
                                                    <CustomInput name="station" classCategory="form-control inp AddressDetail" ipType="text" label="Station" ipTitle="Enter Station" dataArray={[]} /> {/* notFound*/}
                                                    <HiddenModal />
                                                </>
                                            </span>

                                        </div>
                                    ) : null
                                }
                                {
                                    opn == "Plant" ? (
                                        <div className="collapse" id="contAdd">
                                            <table id="plantAddress" className="table table-responsive table-striped table-bordered table-sm" style={{
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
                                                        <td><input name="Accounttype" className="form-control inp AddressDetail" type="tel" title="Enter P/L"  style={{ width: '300px' }} onChange={handleAddressTypeChange(2)} required /></td> {/*Accounttype CONFLICT*/}


                                                        <td><input name="Name" className="form-control inp AddressDetail" type="tel" title="Enter Plant Name" onBlur={handleChangeField} style={{ width: '300px' }}/></td>

                                                        <td><input name="Address1" className="form-control inp AddressDetail" type="tel" title="Enter Address Line 1" onBlur={handleChangeField} style={{ width: '300px' }}/></td>

                                                        <td><input name="Address2" className="form-control inp AddressDetail" type="tel" title="Enter Address Line 2" onBlur={handleChangeField} style={{ width: '300px' }} /></td>

                                                        <td><input name="Country" className="form-control inp AddressDetail" type="tel" title="Enter Country" onBlur={handleChangeField} style={{ width: '300px' }} list="countryList"/>
                                                            {
                                                                masters.country != null && bank.length > 0 ?

                                                                    (
                                                                        <datalist id='countryList'>
                                                                            {
                                                                                masters.country.map((obj: any) => {
                                                                                    return <option value={obj.code}>{obj.name}</option>
                                                                                })
                                                                            }


                                                                        </datalist>

                                                                    )

                                                                    : null


                                                            }
                                                        </td>

                                                        <td><input name="Zone" className="form-control inp AddressDetail" type="tel" title="Enter Zone" onBlur={handleChangeField} style={{ width: '300px' }} list="zoneList" />
                                                            {
                                                                masters.zone != null && bank.length > 0 ?

                                                                    (
                                                                        <datalist id='zoneList'>
                                                                            {
                                                                                masters.zone.map((obj: any) => {
                                                                                    return <option value={obj.code}>{obj.name}</option>
                                                                                })
                                                                            }


                                                                        </datalist>

                                                                    )

                                                                    : null


                                                            }
                                                        </td>

                                                    </tr>
                                                

                                                </tbody>
                                            </table>
                                        </div>
                                    ) : null
                                }
                                {
                                    opn == "Shipping" ? (
                                        <div className="collapse" id="contAdd">
                                            <table id="shippingAddress" className="table table-responsive table-striped table-bordered table-sm" style={{
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
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>GST</th> {/* notFound*/}
                                                        <th className="text-center" style={{ fontWeight: 400, backgroundColor: 'grey', color: 'white' }}>Distance</th> {/* notFound*/}

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th>1</th>
                                                        <td><input name="PAN" className="form-control inp AddressDetail" type="text" title="Enter PAN No." style={{ width: '300px' }} /></td>{/* notFound*/}
                                                        <td><input name="Address1" className="form-control inp AddressDetail" type="text" title="Enter Address" onBlur={handleChangeField} style={{ width: '300px' }} onChange={handleAddressTypeChange(3)} required /></td>
                                                        <td><input name="Address2" className="form-control inp AddressDetail" type="text" title="Enter Address" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="Address3" className="form-control inp AddressDetail" type="text" title="Enter Address" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="Address4" className="form-control inp AddressDetail" type="text" title="Enter Address" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="Country" className="form-control inp AddressDetail" type="text" title="Enter Country" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="Zone" className="form-control inp AddressDetail" type="text" title="Enter Zone" style={{ width: '300px' }} /></td>
                                                        <td><input name="State" className="form-control inp AddressDetail" type="text" title="Enter State" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="City" className="form-control inp AddressDetail" type="text" title="Enter City" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="PostCode" className="form-control inp AddressDetail" type="text" title="Enter Post Code" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="Tel" className="form-control inp AddressDetail" type="text" title="Enter Telephone" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                                        <td><input name="GST" className="form-control inp AddressDetail" type="text" title="Enter GST" style={{ width: '300px' }} /></td>
                                                        <td><input name="Distance" className="form-control inp AddressDetail" type="text" title="Enter Distance"  style={{ width: '300px' }} /></td>

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

                            <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                <span className="row-header p-0 m-0" >Bank Details</span>
                            </div>
                            <table id="dtHorizontalExample" className="table table-responsive table-striped table-bordered table-sm" style={{
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
                                        <td><input type="text" className="form-control inp" style={{ width: '300px' }} /></td> {/*NotFound*/}
                                        <td>
                                           
                                            <input name="Name" className="form-control inp BankDetail" type="text" title="Select Bank Name" onBlur={handleChangeField} style={{ width: '300px' }} list="bankNameList" />
                                            {
                                                bank != null && bank.length > 0 ?

                                                    (
                                                        <datalist className='bankNameList' id='bankNameList'>
                                                            {
                                                                bank.map((obj: any) => {
                                                                    return <option value={obj.code}>{obj.name}</option>
                                                                })
                                                            }


                                                        </datalist>

                                                    )

                                                    : null


                                            }

                                        </td>
                                        <td>  <input name="Address" className="form-control inp BankDetail" type="text" title="Select Branch Name" onBlur={handleChangeField} style={{ width: '300px' }} list="branchNameList" />
                                            {
                                                branch != null && branch.length > 0 ?

                                                    (
                                                        <datalist className='branchNameList' id='branchNameList'>
                                                            {
                                                                branch.map((obj: any) => {
                                                                    return <option value={obj.code}>{obj.name}</option>
                                                                })
                                                            }


                                                        </datalist>

                                                    )

                                                    : null


                                            }</td>
                                        <td>  <input name="ACNo" className="form-control inp BankDetail" type="text" title="Enter Account No." onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                        <td>  <input name="ACType" className="form-control inp BankDetail" type="text" title="Select Branch Name" onBlur={handleChangeField} style={{ width: '300px' }}/></td>
                                        <td>  <input name="SwiftCode" className="form-control inp BankDetail" type="text" title="Select Branch Name" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                        <td>  <input name="IFSCCode" className="form-control inp BankDetail" type="text" title="Select Branch Name" onBlur={handleChangeField} style={{ width: '300px' }} /></td>
                                        <td> <input name="Currency" className="form-control inp BankDetail" type="text" title="Select Currency Name" onBlur={handleChangeField} style={{ width: '300px' }} list="currNameList" />
                                            {
                                                currency != null && currency.length > 0 ?

                                                    (
                                                        <datalist className='currency-name-list' id='currNameList'>
                                                            {
                                                                currency.map((obj: any) => {
                                                                    return <option value={obj.code}>{obj.name}</option>
                                                                })
                                                            }


                                                        </datalist>

                                                    )

                                                    : null


                                            }
                                        </td>
                                        <td> <input name="Country" className="form-control inp BankDetail" type="text" title="Select Country Name" onBlur={handleChangeField} style={{ width: '300px' }} list="countryList" />

                                            {
                                                masters.country != null && currency.length > 0 ?

                                                    (
                                                        <datalist id='countryList'>
                                                            {
                                                                masters.country.map((obj: any) => {
                                                                    return <option value={obj.code}>{obj.name}</option>
                                                                })
                                                            }


                                                        </datalist>

                                                    )

                                                    : null


                                            }
                                        </td>
                                        <td> <input name="SwiftCode" className="form-control inp BankDetail" type="text" title="Select Branch Name" style={{ width: '300px' }} /></td> {/* NotFound*/}
                                        <td> <input name="SwiftCode" className="form-control inp BankDetail" type="text" title="Select Branch Name" style={{ width: '300px' }} /></td>{/* NotFound*/}
                                    </tr>
                                  

                                </tbody>
                            </table>
                        </div>
                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />

                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        {
                            accountType == "3" ? (
                             <div className="card col-sm-5" style={{ padding: '0', margin: '0' }}>
                         
                                    <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                        <span className="row-header p-0 m-0" >Last 3 Years TurnOver</span>
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
                                                <td> <input name="Year1" className="form-control inp AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '70px', margin: 'auto' }} /></td>
                                                <td> <input name="TurnOver1" className="form-control inp AccountMaster" type="text" title="Enter Turnover 1" onBlur={handleChangeField} style={{ width: '120px', margin: 'auto' }} /></td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td><input name="Year2" className="form-control inp AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '70px', margin: 'auto' }} /></td>
                                                <td><input name="TurnOver2" className="form-control inp AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '120px', margin: 'auto' }} /></td>


                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td><input name="Year3" className="form-control inp AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '70px', margin: 'auto' }} /></td>
                                                <td><input name="TurnOver3" className="form-control inp AccountMaster" type="text" title="Enter Year No." onBlur={handleChangeField} style={{ width: '120px', margin: 'auto' }} /></td>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                   
                             </div>
                            ) : null
                        }
                       
                        <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>
                            <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                <span className="row-header p-0 m-0" >Additional Docs</span>
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
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 " onClick={handleSave$Submit}>Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    );


}