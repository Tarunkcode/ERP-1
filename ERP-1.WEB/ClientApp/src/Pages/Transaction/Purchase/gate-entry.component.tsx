﻿import * as React from 'react';
import UnderConstruction from '../../../components/under-construction';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import DatalistInput from 'react-datalist-input';
import WriteGrid from '../../../components/Grid Component/grid.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
const GateEntry = () => {
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

    let data: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'desc', headerName: 'Description', minWidth: 200 },
    { field: 'qty', headerName: 'Order Qty.', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'aqty', headerName: 'Already Qty', minWidth: 200 },
    { field: 'prq', headerName: 'Pend. Rect. Qty.', minWidth: 200, editable: true },
    { field: 'crq', headerName: 'Cur. Rec. Qty.', minWidth: 200, editable: true },
    { field: 'price', headerName: 'Price', minWidth: 200, editable: true },
        { field: 'puom', headerName: 'Per. UOM', minWidth: 200, editable: true },
        { field: 'value', headerName: 'Value', minWidth: 200, editable: true },
        { field: 'plant', headerName: 'Plant', minWidth: 200, editable: true },
        { field: 'matcenter', headerName: 'Mat. Center', minWidth: 200, editable: true },
        { field: 'batch', headerName: 'Batch No.', minWidth: 200, editable: true },
        { field: 'pono', headerName: 'PO. NO.', minWidth: 200, editable: true },
        { field: 'taxamt', headerName: 'Tax Amt.', minWidth: 200, editable: true },
        { field: 'itemamt', headerName: 'Item Amt.', minWidth: 200, editable: true },
        { field: 'netamt', headerName: 'Net Amt.', minWidth: 200, editable: true },
    ]


    return (
        <>
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Add Gate Entry</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                   
                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Gate Entry Details</legend>

                               
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" value={getSoSeries} classCategory="form-control col-4 inp" readOnly />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="geno" label="GE. Number" ipTitle="Enter GE. No." ipType="text" value={getAccName!} classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="supplier" label="Supplier" ipTitle="Enter Supplier" ipType="text"  classCategory="form-control col-4 inp"  />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="ponum" label="PO. Number" ipTitle="Enter PO. Number" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="pocurrency" label="PO. Currency" ipTitle="Enter PO Currency" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="ge-date" label="GE. Date" ipTitle="Enter GE Date" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="ge-by" label="GE. By" ipTitle="Enter GE By" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        
                                    </span>
                                    <span className="d-flex flex-column section2 col-sm-12" style={{ marginLeft: '30px' }}>
                                        <CustomeSwitch lablClass="custom-control-label col-9" label="Against PO." id="c1" name="c1" classCat="form-control custom-control-input col-2 subMaster switch mt-2" />
                                       
                                    </span>
                                 
                                </fieldset>

                            </form>
                      

                    </div>

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#billdetails" aria-expanded="false" aria-controls="billdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bill Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse" id="billdetails">


                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="billnumber" label="Bill Number" ipTitle="Enter Bill Number" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>

                                <MasterInput2 name="billunit" label="Bill Unit" ipTitle="Enter Bill Unit" ipType="text"  classCategory="form-control col-4 inp" />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="billamt" label="Bill Amount" ipTitle="Enter Bill Amount" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>

                                    <>
                                        <label htmlFor="billtype" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2 labl2">Bill Type</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Bill Type'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'billtype' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[]}
                                        />

                                    </span>
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                    <>
                                            <label htmlFor="excbill" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2 labl2">Excisable Bill</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Excisable Bill'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'excbill' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                                items={[{ id: 1, value: 'Y' }, { id: 2, value: 'N' }]}
                                        />

                                    </span>
                                <span className="col-1 m-0"></span>

                                <MasterInput2 name="currency" label="Currency" ipTitle="Enter Currency" ipType="number" min='0' classCategory="form-control col-4 inp" />
                            </span>


                            <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="billamt" label="Bill Amount" ipTitle="Enter Bill Amount" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>

                                    <MasterInput2 name="exc-rate" label="Exchange Rate" ipTitle="Enter Exchange Rate" ipType="text" classCategory="form-control col-4 inp" />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="eway" label=" E-Way Bill" ipTitle="Enter E-Way Bill" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>


                                </span>
                                </div>

                        </fieldset>

                    </form>
                </div>

            </div>
                <div className="card-footer row row-content col-sm-12 form-group" style={{ margin: '0', padding: '0' }}>
                    <span className='col-sm-2'>
                    <label style={{ margin: '0' }} className='label-control'>Transporter</label>
                    <input style={{ margin: '0',width:'100%' }} type="text" className='form-control' value={masterDetails.CUSTTYPE} readOnly />
                    </span>
                    <span className='col-sm-2'>
                        <label style={{ margin: '0' }} className=' label-control'>Vehicle Type</label>
                        <input style={{ margin: '0', width: '100%' }} type="text" className='form-control' value={masterDetails.STATENAME} readOnly />
                   </span>
                    <span className='col-sm-2'>
                        <label style={{ margin: '0', }} className='label-control'>Number</label>
                        <input style={{ margin: '0', width: '100%' }} type="text" className='form-control' value={masterDetails.SCHEME} readOnly />
                    </span>

                    <span className='col-sm-2'>
                        <label style={{ margin: '0' }} className='label-control'>Driver Name</label>
                        <input style={{ margin: '0', width: '100%' }} type="text" className='form-control' value={masterDetails.PAYTO} readOnly />
                    </span>
                    <span className='col-sm-2'>
                        <label style={{ margin: '0' }} className=' label-control'>Bilty No.</label>
                        <input style={{ margin: '0',width:'100%' }} type="text" className='form-control' />
                     </span>
            </div>

           
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Gate Entry Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                    </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

                <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                    <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                    <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
                </span>
        </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default GateEntry;