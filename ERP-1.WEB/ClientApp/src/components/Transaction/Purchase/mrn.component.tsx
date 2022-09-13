import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const MRN = () => {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

    var [itemCodeArr, setItemCodeArr]: any = React.useState([]);
    var kinda = React.useRef('');
    var [masterDetails, setMasterDetails]: any = React.useState([]);
    var [changeItemCode, setChangeItemCode]: any = React.useState('');
    var [changeItemName, setChangeItemName]: any = React.useState('');
    var [wholeLineItem, setWholeLineItem]: any = React.useState([{ UOMNAME: '', MRP: '', SGST: '', CGST: '', IGST: '', GSTCAT: '', SALEPRICE: '' }]);


    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
    const today = new Date();
    var format = today.toString().slice(4, 15)
    var yearOnly = format.slice(7, 11)
    var dateOnly = format.slice(4, 6)
    var MonthOnly = format.slice(0, 3)
    var monthNo = 0;
    if (MonthOnly.toLowerCase() == "jan") monthNo = 1;
    else if (MonthOnly.toLowerCase() == "feb") monthNo = 2;
    else if (MonthOnly.toLowerCase() == "mar") monthNo = 3;
    else if (MonthOnly.toLowerCase() == "apr") monthNo = 4;
    else if (MonthOnly.toLowerCase() == "may") monthNo = 5;
    else if (MonthOnly.toLowerCase() == "jun") monthNo = 6;
    else if (MonthOnly.toLowerCase() == "jul") monthNo = 7;
    else if (MonthOnly.toLowerCase() == "aug") monthNo = 8;
    else if (MonthOnly.toLowerCase() == "sep") monthNo = 9;
    else if (MonthOnly.toLowerCase() == "oct") monthNo = 10;
    else if (MonthOnly.toLowerCase() == "nov") monthNo = 11;
    else if (MonthOnly.toLowerCase() == "dec") monthNo = 12;

    var defaultDate = `${yearOnly}-${monthNo}-${dateOnly}`

    var [startDate, setStartDate]: any = useState(new Date("2022-04-01"));
    var [endDate, setEndDate]: any = useState(new Date);
    var [changeStartDate, setChangeStartDate]: any = useState("2022-04-01");
    var [changeEndDate, setChangeEndDate]: any = useState(defaultDate);
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Add Matrial Reciept On Challan</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card addSalecard">
                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '44vh' }}>
                            <form className="form">

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Series</label>
                                        <input className="form-control col-sm-6" type="text" name="so-date" /></>

                                    {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-no">So No.</label>*/}
                                    {/*    <input className="form-control col-sm-3" type="text" name="so-no" /></>*/}
                                </span>

                              
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Supplier</label>
                                        <input className="form-control col-sm-6" type="text" name="so-date" /></>

                                  
                                </span>
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">MRN Type</label>
                                        <input className="form-control col-sm-6" type="text" name="so-date" /></>

                                  
                                </span>


                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">MR Date</label>
                                        <input className="form-control col-sm-3" type="date" name="sold-to" value={getAccName!} />
                                    </>
                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">MR No.</label>
                                        <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} />
                                    </>
                                </span>

                            </form>
                        </div>

                    </div>

                    <div className="card addSalecard">

                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '28vh' }}>
                            <form className="form">


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Number</label>
                                        <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM}  /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Date</label>
                                        <input className="form-control col-sm-3" type="date" name="open-po" /></>
                                </span>
                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Challan Unit</label>
                                        <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM}  /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Amount</label>
                                        <input className="form-control col-sm-3" type="text" name="open-po" /></>
                                </span>
                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Excise Bill (Y/N)</label>
                                        <input className="form-control col-sm-3" type="checkbox" name="delievery-terms" value={masterDetails.DELTERM} /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Currency</label>
                                        <input className="form-control col-sm-3" type="text" name="open-po" /></>
                                </span>
                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Purchase Type</label>
                                        <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM} /></>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Exch Rate</label>
                                        <input className="form-control col-sm-3" type="text" name="open-po" /></>
                                </span>
                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0px 25px 0px 16px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Ref. No.</label>
                                        <input className="form-control col-sm-3" type="text" name="delievery-terms" value={masterDetails.DELTERM} readOnly /></>

                                    <div className="col-2"></div>
                                        
                                </span>
                                <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Upload Bill<input type="file" /></label>
                                {/*<button type="button" className="col-3">Upload Bill</button>*/}
                            </form>
                        </div>

                    </div>
                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-sm-5" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Bill Sundry Details</span>
                    </div>
                    <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary text-center">
                                <tr>
                                    <th>S. No</th>
                                    <th>Bill Sundary</th>
                                    <th>Narration</th>
                                    <th>@</th>

                                    <th>Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default MRN;