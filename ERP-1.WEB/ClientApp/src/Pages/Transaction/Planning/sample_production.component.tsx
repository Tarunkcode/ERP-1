import * as React from 'react';

import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import DatalistInput from 'react-datalist-input';
import WriteGrid from '../../../components/Grid Component/grid.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
const Sampling = () => {
   
    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
  
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    let data: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'name', headerName: 'Name', minWidth: 200 },
    { field: 'desc', headerName: 'Description', minWidth: 200 },
    { field: 'pqty', headerName: 'Purchase. Qty', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'price', headerName: 'Price', minWidth: 200, editable: true },
    { field: 'cqty', headerName: 'Consumed Qty.', minWidth: 200, editable: true },
    { field: 'puom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'cvalue', headerName: 'Consume Value', minWidth: 200, editable: true },
    { field: 'purvalue', headerName: 'Purchase Value', minWidth: 250, editable: true },
   
    ]

    //-----------------------------Out Side Consumed Item---------------------------------//
    let dataOut: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefOut: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'name', headerName: 'Name', minWidth: 200 },
    { field: 'pqty', headerName: 'Purchase. Qty', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'price', headerName: 'Price', minWidth: 200, editable: true },
    { field: 'cqty', headerName: 'Consumed Qty.', minWidth: 200, editable: true },
    { field: 'puom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'cvalue', headerName: 'Consume Value', minWidth: 200, editable: true },
    { field: 'purvalue', headerName: 'Purchase Value', minWidth: 250, editable: true },

    ]

    //----------------------------------Routing Details---------------------------------------------//


    let dataRout: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefRout: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 30, valueGetter: 'node.rowIndex + 1' },
    { field: 'process', headerName: 'Process', minWidth: 200 },
    { field: 'amount', headerName: 'Amount', minWidth: 200, editable: true },
    { field: 'jw', headerName: 'Job Work(Y/N)', minWidth: 200 },
 
    ]

    return (
        <>
            <div className="firstDiv" >


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                        <span className="card-title" style={{
                            fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                            margin: '0'
                        }}>Sample Production</span>

                    </div>
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                        <div className="card-body row col-sm-12 m-0 p-0" >
                            <form className="row-content form col-sm-12 pt-0">
                                <fieldset className="form-group border p-0" >
                                    <legend className="px-2" style={{ fontSize: '1.1rem' }}>General Details</legend>


                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="code" label="Code" ipTitle="Enter Code" ipType="text"  classCategory="form-control col-4 inp"/>
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="name" label="Name" ipTitle="Enter Name" ipType="text"  classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="st-date" label="Start Date" ipTitle="Enter Start Date" ipType="date" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="qty" label="Quantity" ipTitle="Enter Quantity" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="uom" label="UOM" ipTitle="Enter UOM" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>

                                        <MasterInput2 name="currency" label="Currency" ipTitle="Enter Currency" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="designer" label="Designer" ipTitle="Enter Designer" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="source" label="Source" ipTitle="Enter Source" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>

                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="brand" label="Brand" ipTitle="Enter Brand" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="customer" label="Customer" ipTitle="Enter Customer" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>
                                  
                                </fieldset>

                            </form>


                        </div>

                  
                    </div>

                </div>
               


                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Raw Material Consumed From Stock" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                </div>



                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Out Side Consumed Item" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefOut} data={dataOut} />
                </div>

                <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Routing Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefRout} data={dataRout} />
                </div>
                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

                <form className="row-content form col-sm-12 pt-0">
                    <fieldset className="form-group border p-0" >
                        <legend className="px-2" data-toggle="collapse" data-target="#billdetails" aria-expanded="false" aria-controls="billdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Sample Produce Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                        <div className="collapse" id="billdetails">


                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="weight" label="Weight" ipTitle="Enter Weight" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>

                                <MasterInput2 name="wtuom" label="WT. Uom" ipTitle="Enter WT. Uom" ipType="text" classCategory="form-control col-4 inp" />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="othercost" label="Other Cost" ipTitle="Enter Other Cost" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="end-date" label="End Date" ipTitle="Enter End Date" ipType="date" classCategory="form-control col-4 inp" />
                              

                               
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="man-cost" label="Man Cost" ipTitle="Enter Man Cost" ipType="text"  classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>

                                <MasterInput2 name="total-cost" label="Total Cost" ipTitle="Enter Total Cost" ipType="text"  classCategory="form-control col-4 inp" />
                            </span>


                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="prod-days" label="Prod. Days" ipTitle="Enter Prod. Days" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>

                                <MasterInput2 name="blocked" label="Blocked" ipTitle="Enter Blocked" ipType="text" classCategory="form-control col-4 inp" />
                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="matcenter" label="Material Center" ipTitle="Enter Material Center" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="purcqty" label="Purchase Qty." ipTitle="Enter Purchase Qty." ipType="text" classCategory="form-control col-4 inp" />


                            </span>

                            <span className="d-flex section2 col-sm-12">
                                <MasterInput2 name="puramt" label="Purchase Amt." ipTitle="Enter Purchase Amt." ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="consum-qty" label="Consumed Qty." ipTitle="Enter Consumed Qty." ipType="text" classCategory="form-control col-4 inp" />


                            </span>
                            <span className="d-flex section2 col-sm-12">
                              
                                <MasterInput2 name="consum-amt" label="Consumed Amt." ipTitle="Enter Consumed Amt." ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="const-pair" label="Cost/Pair" ipTitle="Enter Cost/Pair" ipType="text" classCategory="form-control col-4 inp" />


                            </span>
                        </div>

                    </fieldset>

                </form>
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

export default Sampling;