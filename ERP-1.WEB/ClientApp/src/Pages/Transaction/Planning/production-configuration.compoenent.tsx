import * as React from 'react';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";

const ProductionConfiguration = () => {

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
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >Production Confirmation</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#branch" aria-expanded="true" aria-controls="branch" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Job Confirmation<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="branch">
                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Prod Series</label>
                                        <input type="text" name="series" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="series" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Date</label>
                                        <input type="date" name="custCode" className="form-control inp" />
                                    </>
                                    <>
                                        <label htmlFor="majProd" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Vch No.</label>
                                        <input type="text" name="delTerm" className="form-control inp" />
                                    </>
                                  
                                </span>

                                <span className="d-flex section2 col-sm-10">
                                </span>
                            </div>
                        </fieldset>
                    </form>

                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#addDet" aria-expanded="false" aria-controls="addDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Filter<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div className="collapse" id="addDet">

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="contPerson" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Item</label>
                                        <input type="text" name="contPerson" className="form-control inp" />
                                    </>


                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="desg" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Process</label>
                                        <input type="text" name="desg" className="form-control inp" />
                                    </>

                                    <>
                                        <label htmlFor="mob" style={{ fontSize: '0.8em' }} className="form-label labl labl2">Mould</label>
                                        <input type="text" name="mob" className="form-control inp" />
                                    </>
                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="cheifExe" style={{ fontSize: '0.8em' }} className="form-label labl labl2">DayWise Series</label>
                                        <input type="text" name="cheifExe" className="form-control inp" />
                                    </>

                                </span>

                                <span className="d-flex section2 col-sm-10">
                                    <>
                                        <label htmlFor="cheifExeTelNo" style={{ fontSize: '0.8em' }} className="form-label labl labl2">To Date</label>
                                        <input type="date" name="cheifExeTelNo" className="form-control inp" />
                                    </>

                                    <>
                                        <label htmlFor="fax" style={{ fontSize: '0.8em' }} className="form-label labl labl2">From Date</label>
                                        <input type="date" name="fax" className="form-control inp" />
                                    </>
                                   
                                </span>

                            </div>
                        </fieldset>
                    </form>
                    <button type="button" className="btn btn-primary col-1 m-3">Get Details</button>


                </div>
                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card">

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Item Details</span>
                        </div>

                        <div className="table-responsive" style={{ padding: '0' }}>

                            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                <thead className="thead-light table-secondary text-center">
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col" style={{ padding: '0 12em' }}><span>Tick </span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Plan No.</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Item COde</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Item Name</span></th>

                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Plan Qty.</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Prod. Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Bal Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Rej Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Rej UoM</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Qc Qty</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >UoM</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Machine</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Shift</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Shift Incharge</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Operator</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Conf.</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Remarks</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Mold Name</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Cavity</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Cons. Shot</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Bal. Shot</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Rem Life(%)</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >ManPower</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Electricity</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Prod (Hrs.)</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Prod Weight</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >Rej Weight</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >QC Weight</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >OverHead</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >From Sr.No.</span></th>
                                        <th scope="col" style={{ padding: '0 2em' }} ><span style={{ margin: '0 10px' }}  >To Sr.No.</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
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

                </div>

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card col-sm-10" style={{ padding: '0', margin: '0', minHeight: '20vh' }}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>
                            <span className="card-title" style={{ fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' }}>Details</span>
                        </div>
                        <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                            <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                <thead className="thead-light table-secondary text-center">
                                    <tr>
                                        <th>S. No</th>
                                        <th>Item COde</th>
                                        <th>Item Name</th>

                                        <th>Req Qty</th>
                                        <th>Cons. Qty</th>
                                        <th>Rej Qty</th>
                                        <th>UOM</th>
                                        <th>Stock Qty</th>
                                        <th>From Process</th>
                                        <th>Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
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
                   
                </div>

            </div>
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 ml-2">Check Stock</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0 ml-2">Save</button>
              
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default ProductionConfiguration;