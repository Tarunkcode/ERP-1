import * as React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
const SaleReturn = () => {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');


    var [masterDetails, setMasterDetails]: any = React.useState([]);


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
        <div className="firstDiv">


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Sale Return Against Sale</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg d-flex flex-row p-0 m-0">
                    <div style={{ width: '50%', margin: '0', padding: '0', display: 'flex', flexDirection:'column' }}>
                    <div className="card addSalecard" style={{ width: '100%', padding: '0 20px' }}>
                        <div className="card-body" style={{ margin: '0', padding: '0' }}>
                            <form className="form">


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="series">Series</label>
                                        <span className="col-sm-5" style={{ color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' }}>Series</span></>
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

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="so-no">Inv No.</label>
                                        <input className="form-control col-sm-3" type="text" name="so-no" /></>
                                </span>


                             

                            </form>
                        </div>
                        </div>
                        <div className="card addSalecard" style={{ width: '100%', padding: '0 20px', minHeight:'31vh' }}>
                        <div className="card-body" style={{ margin: '0', padding: '0' }}>
                            <form className="form">

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="del-date">Sold To</label>
                                        <input className="form-control col-sm-5" type="text" name="del-date" /></>


                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3" htmlFor="po-no">Address</label>
                                            <textarea className="form-control col-sm-6"  name="po-no" /> </>

                                </span>
                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <div style={{ visibility: 'hidden' }}>
                                        <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-3"></label>
                                        <input className="form-control col-sm-5" type="text" /> </div>

                                    </span>
                                    <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                        <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-curr">Sale F.y</label>
                                            <input className="form-control col-sm-3" type="text" name="bill-curr" /> </>

                                        <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="curr-rate">State & State Code</label>
                                            <input className="form-control col-sm-3" type="text" name="curr-rate" /> </>
                                    </span>
                                      
                            </form>
                        </div>
                    </div>
                    </div>
                    <div className="card addSalecard" style={{ width: '50%' }}>
                        <div className="card-body" style={{ margin: '0', padding: '20 0' }}>
                            <form className="form">

                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Del. Terms <i style={{ color: 'red', marginLeft: '5px' }}>*</i></label>
                                        <input className="form-control col-sm-6" type="text" name="delievery-terms"  /></>

                                </span>
                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' }}>

                                    <> <label style={{ margin: '0', padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="delievery-terms">Payment Terms <i style={{ color: 'red', marginLeft: '5px' }}>*</i></label>
                                        <input className="form-control col-sm-6" type="text" name="delievery-terms"  /></>

                                </span>

                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-curr">Bill Currency</label>
                                        <input className="form-control col-sm-3" type="text" name="bill-curr" /> </>

                                    <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="curr-rate">Curr. Rate</label>
                                        <input className="form-control col-sm-3" type="text" name="curr-rate" /> </>
                                </span>


                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>
                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="upload-bill">Sale Type</label>
                                        <input className="form-control col-sm-3" type="text" name="upload-bill" /> </>

                                </span>


                                <span className="form-group col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0px' }}>
                                    <><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="series">Bill No.</label>
                                        <input className="form-control col-sm-3" type="text" name="number" /></>

                                    <> <label style={{ padding: '0', fontSize: '14px', marginLeft: '50px' }} className="form-label col-sm-2" htmlFor="bill-date">Bill Date</label>
                                        <input className="form-control col-sm-3" type="date" name="bill-date" /> </>
                                </span>



                                <span className='form-group col-sm-12' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' }}>

                                    <> <label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-amt">Bill Amt.</label>
                                        <input className="form-control col-sm-3" type="text" name="bill-amt" /> </>

                                    {/*<><label style={{ padding: '0', fontSize: '14px' }} className="form-label col-sm-2" htmlFor="bill-qty">Bill Qty</label>*/}
                                    {/*    <input className="form-control col-sm-3" type="text" name="bill-qty" /></>*/}
                                </span>

                            </form>
                        </div>

                    </div>
                </div>

            </div>


            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', margin: '0', padding: '0' }}>Sale Invoice Line Item Details</span>
                    </div>

                    <div className="table-responsive" style={{ padding: '0' }}>

                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary">
                                <tr>
                                    <th scope="col" className="text-center col-sm-1" style={{ fontWeight: 400 }}>S.No.</th>
                                    <th scope="col" className="col-sm-3 text-center" style={{ fontWeight: 400 }}><span>Item Code</span></th>


                                    <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Item Name</span></th>


                                    <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Bal. Po Qty</span></th>
                                    <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Qty</span></th>
                                    <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>UOM</span></th>
                                    <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Basic Rate</span></th>
                                    <th scope="col" className="text-center" style={{ fontWeight: 400 }}><span>Value</span></th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">1</th>
                                    <td className="item-code">
                                        <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control" list="itemCodeList" type="text" id="cell-ItemCode" />
                                        {/*{*/}
                                        {/*    itemCodeArr != null && itemCodeArr.length > 0 ?*/}

                                        {/*        (*/}
                                        {/*            <datalist className='item-code-list' id='itemCodeList'>*/}
                                        {/*                {*/}
                                        {/*                    itemCodeArr.map((obj: any) => {*/}
                                        {/*                        return <option data-value={obj.ITEMCODE}>{obj.ITEMNAME}</option>*/}
                                        {/*                    })*/}
                                        {/*                }*/}


                                        {/*            </datalist>*/}

                                        {/*        )*/}

                                        {/*        : null*/}


                                        {/*}*/}

                                    </td>
                                    <td></td>
                                    <td></td>

                                    <td className="item-code">
                                        <input style={{ margin: '0', padding: '0', width: '100%' }} className="form-control" list="itemCodeList" type="text" id="cell-ItemCode" /></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    {/*{*/}
                                    {/*    itemDetails.map((item: any) => {*/}
                                    {/*        return (*/}

                                    {/*            <>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td><input type="text" className="form-control" /></td>*/}
                                    {/*                <td>{item.UOMNAME}</td>*/}
                                    {/*                <td>{item.MRP}</td>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td></td>*/}
                                    {/*                <td>{item.CGST}</td>*/}
                                    {/*                <td>{item.SGST}</td>*/}
                                    {/*                <td>{item.SALEPRICE}</td>*/}
                                    {/*                <td>{item.IGST}</td>*/}
                                    {/*                <td>{item.GSTCAT}</td>*/}
                                    {/*            </>*/}
                                    {/*        );*/}
                                    {/*    }*/}
                                    {/*    )}*/}





                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', margin: '0', padding: '0' }}>Bill Sundry Details</span>
                    </div>
                    <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                            <thead className="thead-light table-secondary">
                                <tr>
                                    <th style={{ fontWeight: 400 }}>S. No</th>
                                    <th style={{ fontWeight: 400 }}>Bill Sundry</th>
                                    <th style={{ fontWeight: 400 }}>Narration</th>

                                    <th style={{ fontWeight: 400 }}>Amount (₹)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td></td>
                                    <td></td>


                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="card col-sm-5" style={{ padding: '0', marginRight: '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                        <span className="card-title" style={{ fontSize: '15px', color: 'white', margin: '0', padding: '0' }}>Transporter Details</span>
                    </div>

                    {/*<div className="table-responsive card-body" style={{ margin: '0', padding: '0' }}>*/}
                    {/*    <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>*/}
                    {/*        <thead className="thead-light table-secondary">*/}
                    {/*            <tr>*/}
                    {/*                <th>S. No</th>*/}
                    {/*                <th>Transporter</th>*/}
                    {/*                <th>Vehical No.</th>*/}
                    {/*                <th>Driver Name</th>*/}
                    {/*                <th>Driver Mob. No.</th>*/}
                    {/*                <th>Every Bill No.</th>*/}
                    {/*                <th>Billty No.</th>*/}

                    {/*            </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <th scope="row">1</th>*/}
                    {/*                <td></td>*/}
                    {/*                <td></td>*/}
                    {/*                <td></td>*/}
                    {/*                <td></td>*/}

                    {/*                <td></td>*/}
                    {/*                <td></td>*/}

                    {/*            </tr>*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}


                    {/*</div>*/}


                    <div className="transporter-details col-sm-12" style={{ margin: '3px 0', padding: '10px' }}>
                        <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                            <label htmlFor="transporter" className="form-label col-4">Transporter</label>
                            <input name="transporter" className="form-control col-5" type="text" />
                        </span>

                        <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                            <label htmlFor="driver" className="form-label col-4">G.R No.</label>
                            <input name="driver" className="form-control col-5" type="text" />
                        </span>
                        <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                            <label htmlFor="vehicalNo" className="form-label col-4">Vehical No.</label>
                            <input name="vehicalNo" className="form-control col-5" type="text" />
                        </span>
                        <span className="col-sm-12" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' }}>
                            <label htmlFor="mobNo" className="form-label col-4">Way Form No.</label>
                            <input name="mobNo" className="form-control col-5" type="text" />
                        </span>
                       
                    </div>



                    {/*<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '50%' }}>*/}
                    {/*    <button className="hsn-btn btn btn-sm btn-success">Save</button>*/}

                    {/*</div>*/}
                </div>
            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default SaleReturn;