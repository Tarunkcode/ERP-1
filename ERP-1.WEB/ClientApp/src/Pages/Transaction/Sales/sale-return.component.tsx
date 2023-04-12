import * as React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
const SaleReturn = () => {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

    let data: any[] = [{ ic: null, in: null, qty: null, uom: null, price: null, value: null, tax: null, mc: null, mct: null, pono: null, hsn: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'assort', headerName: 'Assortment', minWidth: 200, editable: true },
    { field: 'rt', headerName: 'Return Type', minWidth: 200 },
    { field: 'cz', headerName: 'Carton Size', minWidth: 200, editable: true },
    { field: 'bsq', headerName: 'Bal SI qty.', minWidth: 200, editable: true },
    { field: 'rq', headerName: 'Return Qty.', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'sic', headerName: 'SI Carton', minWidth: 200, editable: true },
    { field: 'rc', headerName: 'Return Carton', minWidth: 200, editable: true },
    { field: 'rate', headerName: 'Rate', minWidth: 200, editable: true },
    { field: 'value', headerName: 'Value', minWidth: 200, editable: true },
    { field: 'mcenter', headerName: 'Mat. Center', minWidth: 200, editable: true },
    { field: 'gstc', headerName: 'GST Category', minWidth: 200, editable: true },
    { field: 'cgst', headerName: 'CGST(%)', minWidth: 200, editable: true },
    { field: 'cgstamt', headerName: 'CGST Amt.', minWidth: 200, editable: true },
    { field: 'sgst', headerName: 'SGST(%)', minWidth: 200, editable: true },
    { field: 'sgstamt', headerName: 'SGST Amt.', minWidth: 200, editable: true },
    { field: 'igst', headerName: 'IGST (%)', minWidth: 200, editable: true },
    { field: 'igstamt', headerName: 'IGST Amt.', minWidth: 200, editable: true },
    { field: 'aqty', headerName: 'Alt Qty', minWidth: 200, editable: true },
    { field: 'aauom', headerName: 'Alt UOM', minWidth: 200, editable: true },


    ]





    /*------------------------------------------ BillSundry-Table-----------------------------------------------------*/

    let dataBill: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefBill: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'bill', headerName: 'Bill Sundary', minWidth: 100 },
    { field: 'narration', headerName: 'Narration', minWidth: 100 },
    { field: 'rate', headerName: '@', minWidth: 100 },
    { field: 'rs', headerName: '', minWidth: 100 },
    { field: 'amount', headerName: 'Amount(Rs.)', minWidth: 100 }



    ]
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Sale Return Against Sale</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Invoice Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" value={getSoSeries} classCategory="form-control col-4 inp" readOnly />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="date" label="Date" ipTitle="Enter Vch. No." ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="inv" label="Inv No." ipTitle="Enter Inv No." ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                </span>

                              

                            </fieldset>

                        </form>


                    </div>
                    {/*---------------------------------------Customer  Details----------------------------*/}

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#porderpdetails" aria-expanded="false" aria-controls="porderpdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Customer Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse" id="porderpdetails">



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="soldto" label="Sold To" ipTitle="Enter Sold To" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="add" label="Address" ipTitle="Enter Address" ipType="text" classCategory="form-control col-4 inp" />


                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="salefy" label="Sale F. Y" ipTitle="Enter Sale F. Y" ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="state" label="State" ipTitle="Enter State" ipType="text" classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="statecode" label="State Code" ipTitle="Enter State Code" ipType="text" classCategory="form-control col-4 inp" />
                                   
                                </span>



                            </div>

                        </fieldset>

                    </form>
                    {/*//--------------------------------------------------Delivery/Payment Details---------------------------------------------------------------//*/}

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#grbilldetails" aria-expanded="false" aria-controls="grbilldetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Delivery And Payment Terms<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse" id="grbilldetails">



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="dterm" label="Delivery Term" ipTitle="Enter Delivery Term" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="payterm" label="Payment Term" ipTitle="Enter Payment Term" ipType="text" classCategory="form-control col-4 inp" />


                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="curr" label="Currency" ipTitle="Enter Currency" ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="currrate" label="Currency Rate" ipTitle="Enter Currency Rate" ipType="date" classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="stype" label="Sale Type" ipTitle="Enter Sale Type" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="bno" label="Bill No." ipTitle="Enter Bill No" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="bdate" label="Bill Date" ipTitle="Enter Bill Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="bamt" label="Bill Amount" ipTitle="Enter Bill Amt" ipType="number" min='0' classCategory="form-control col-4 inp" />
                                </span>



                            </div>

                        </fieldset>

                    </form>

                    {/*------------------------------------------------------------Transport Details--------------------------------------------------------------*/}

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#tdetails" aria-expanded="false" aria-controls="tdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Transport Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse" id="tdetails">



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="transporter" label="Transporter" ipTitle="Enter Transporter" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="grno" label="GR No." ipTitle="Enter GR No." ipType="text" classCategory="form-control col-4 inp" />


                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="vehicleno" label="Vehicle No." ipTitle="Enter Vehicle No." ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="wayfrom" label="Way From No." ipTitle="Enter Way From No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>


                            </div>

                        </fieldset>

                    </form>

                   
                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Purchase Invoice Line Item Details" titleClr="blue" total='himanshu' OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>

            <hr style={{ margin: '0', padding: '0' }} className='mt-3' />



            <fieldset className="form-group border p-0" >
                <legend className="px-2" data-toggle="collapse" data-target="#billsundry" aria-expanded="false" aria-controls="billsundry" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bill Sundry Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                <div className="show" id="billsundry">
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteGrid title="Bill Sundry Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
                    </div>
                </div>
            </fieldset>

            <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
            </span>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default SaleReturn;