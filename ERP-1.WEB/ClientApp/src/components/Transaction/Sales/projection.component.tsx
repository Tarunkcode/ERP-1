import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
//import UnderConstruction from '../../under-construction';
const Projection = () => {
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
                        }}>Add Projection</span>

                    </div>
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card addSalecard">
                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight:'28vh' }}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 2px' }}>
                                        <label style={{ margin: '0 30px 0 12px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Series</label>
                                        <span style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>{getSoSeries}</span>
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row' , margin: '0', padding: '10px 0' }}>
                                    <> <label style={{ margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-date">Vch. No.</label>
                                            <input className="form-control col-sm-6" type="text" name="so-date" /></>

                                        {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-no">So No.</label>*/}
                                        {/*    <input className="form-control col-sm-3" type="text" name="so-no" /></>*/}
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                        <><label style={{ margin: '0 46px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Date</label>
                                            <DatePicker

                                                name="startDate"
                                                className="startDate form-control col-sm-10 m-0"
                                                selectsStart

                                                dateFormat="MMM dd, yyyy"
                                                closeOnScroll={true}
                                                selected={startDate}

                                                onChange={(k: Date) => {
                                                    setStartDate(k)
                                                    var format = k.toString().slice(4, 15)
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

                                                    var fDate = `${yearOnly}-${monthNo}-${dateOnly}`
                                                    console.log(fDate)
                                                    setChangeStartDate(fDate)
                                                }
                                                }

                                            /></>

                                        <> <label style={{ margin: '0 46px 0 10px', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="del-date">Due Date</label>
                                            <DatePicker name="toDate" className="toDate form-control col-sm-10" dateFormat="MMM dd, yyyy" closeOnScroll={true} selected={endDate} onChange={(date: Date) => {
                                                setEndDate(date)
                                                var format = date.toString().slice(4, 15)
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

                                                var eDate = `${yearOnly}-${monthNo}-${dateOnly}`
                                                console.log(eDate)
                                                setChangeEndDate(eDate)
                                            }} /></>
                                    </span>

                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                        <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="sold-to">Ref No.</label>
                                            <input className="form-control col-sm-3" type="text" name="sold-to" value={getAccName!} />
                                        </>
                                        <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="address">Dispatch No.</label>
                                            <input className="form-control col-sm-3" type="text" name="address" value={masterDetails.ADDRESSNAME} />
                                        </>
                                    </span>

                                </form>
                            </div>

                        </div>

                        <div className="card addSalecard">

                        <div className="card-body" style={{ margin: '0', padding: '0', minHeight:'28vh' }}>
                                <form className="form">


                                    <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Customer <i style={{color:'red', marginLeft:'5px'}}>*</i></label>
                                        <input className="form-control col-sm-6" type="text" name="delievery-terms" value={masterDetails.DELTERM} /></>
                                    

                                        {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="open-po">Open P.O</label>*/}
                                        {/*    <input className="form-control col-sm-3" type="text" name="open-po" /></>*/}
                                    </span>


                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' }}>
                                    <><label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="payment-terms">Address</label>
                                        <textarea className="form-control"  name="payment-terms" value={masterDetails.PAYTERM} /></>

                                        {/*<> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-po">Upload P.O</label>*/}
                                        {/*    <input className="form-control col-sm-3" type="text" name="upload-po" /></>*/}
                                    </span>



                                </form>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="card-footer row row-content col-sm-12 form-group" style={{ margin: '0', padding: '0' }}>
                    <label style={{ margin: '0' }} className='col-sm-1 label-control'>Type</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.CUSTTYPE} readOnly />


                    <label style={{ margin: '0' }} className='col-sm-1 label-control'>State</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.STATENAME} readOnly />

                    <label style={{ margin: '0' }} className='col-sm-2 label-control'>Scheme Enable</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.SCHEME} readOnly />

                    <label style={{ margin: '0' }} className='col-sm-2 label-control'>Pay Status</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' value={masterDetails.PAYTO} readOnly />


                    <label style={{ margin: '0' }} className='col-sm-1 label-control'>Dis %</label><input style={{ margin: '0' }} type="text" className='form-control col-sm-1' />

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

export default Projection;