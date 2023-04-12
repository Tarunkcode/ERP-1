import * as React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const Challan_Issue_Party = () => {

    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');

    let data: any[] = [{ ic: null, in: null, qty: null, uom: null, price: null, value: null, tax: null, mc: null, mct: null, pono: null, hsn: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'color', headerName: 'Color', minWidth: 200, editable: true },
    { field: 'size', headerName: 'Size', minWidth: 200 },
    { field: 'assortm', headerName: 'Assortm', minWidth: 200, editable: true },
    { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
    { field: 'mctype', headerName: 'MC Type', minWidth: 200, editable: true },
    { field: 'fprocess', headerName: 'From Process', minWidth: 200, editable: true },
    { field: 'sqty', headerName: 'Stock Qty.', minWidth: 200, editable: true },
    { field: 'qty', headerName: 'Qty', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'price', headerName: 'Price', minWidth: 200, editable: true },
    { field: 'value', headerName: 'Value', minWidth: 200, editable: true },
    { field: 'weight', headerName: 'Weight(KG)', minWidth: 200, editable: true },
   
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
                    }}>Challan Issue To Party</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Challan Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" readOnly />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="date" label="Date" ipTitle="Enter Vch. No." ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="vch" label="Vch No." ipTitle="Enter Vch No." ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="party" label="Party" ipTitle="Enter Party" ipType="text" classCategory="form-control col-4 inp" />

                                </span>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="challantype" label="Challan Type" ipTitle="Enter Challan Type" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="dep" label="Department" ipTitle="Enter Department" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="state" label="State" ipTitle="Enter State" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="code" label="Code" ipTitle="Enter Code" ipType="text" classCategory="form-control col-4 inp" />


                                </span>

                                  <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="rdate" label="Return Date" ipTitle="Enter date" ipType="date" classCategory="form-control col-4 inp" />
                                   


                                </span>



                            </fieldset>

                        </form>


                    </div>


                    {/*------------------------------------------------------------Transport Details--------------------------------------------------------------*/}

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#tdetails" aria-expanded="false" aria-controls="tdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Transport Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse" id="tdetails">



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="transporter" label="Transporter" ipTitle="Enter Transporter" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="ewb" label="E-Way Bill" ipTitle="Enter E-Way Bill" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="driver" label="Driver" ipTitle="Enter Driver" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="billty" label="Billty No" ipTitle="Enter Billty No" ipType="text" classCategory="form-control col-4 inp" />

                                </span>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="vehicleno" label="Vehicle No." ipTitle="Enter Vehicle No." ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="refno" label="Ref No." ipTitle="Enter Ref No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="ewbill" label="E-Way Bill" ipTitle="Enter E-Way Bill" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pos" label="Place Of Supply" ipTitle="Enter Place Of Supply" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                 <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="pin" label="Pincode" ipTitle="Enter Pincode" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="dis" label="Distance" ipTitle="Enter Distance" ipType="text" classCategory="form-control col-4 inp" />
                                </span>



                            </div>

                        </fieldset>

                    </form>


                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Challan Item Details" titleClr="blue" total='himanshu' OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>

            <hr style={{ margin: '0', padding: '0' }} className='mt-3' />




            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                <WriteGrid title="Bill Sundry Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
            </div>


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

export default Challan_Issue_Party;