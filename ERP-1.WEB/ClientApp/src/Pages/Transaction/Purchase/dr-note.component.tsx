import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import RadioButton from '../../../components/RadioButton/radio-button.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
const Dr_Note = () => {
   

    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
  
  
    let data: any[] = [{
        mrnno: null, md: null, bn: null, bd: null, supp: null, ic: null, in: null, aq: null, uom: null, bq: null, poprice: null, billprice: null, billamt: null, poacamt: null,
        variance: null, dni: null, dnn: null, cnr: null, cnn: null}]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'mrnno', headerName: 'MRN No', minWidth: 200 },
    { field: 'md', headerName: 'MRN Date', minWidth: 200 },
    { field: 'bn', headerName: 'Bill No', minWidth: 200, editable: true },
    { field: 'bd', headerName: 'Bill Date', minWidth: 200 },
    { field: 'supp', headerName: 'Supplier', minWidth: 200, editable: true },
    { field: 'ic', headerName: 'Item Code', minWidth: 200, editable: true },
    { field: 'in', headerName: 'Item Name', minWidth: 200, editable: true },
    { field: 'aq', headerName: 'Accept Qty.', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'bq', headerName: 'Bill Qty.', minWidth: 200, editable: true },
    { field: 'poprice', headerName: 'P.O Price', minWidth: 200, editable: true },
    { field: 'billprice', headerName: 'Bill Price', minWidth: 200, editable: true },
    { field: 'billamt', headerName: 'Bill Amount', minWidth: 200, editable: true },
    { field: 'poacamt', headerName: 'P.O/ Actual Amount', minWidth: 250, editable: true },
    { field: 'variance', headerName: 'Variance', minWidth: 200, editable: true },
    { field: 'dni', headerName: 'Dr Note Issue', minWidth: 200, editable: true },
    { field: 'dnn', headerName: 'Dr Note No.', minWidth: 200, editable: true },
    { field: 'cnr', headerName: 'Cr Note Receive', minWidth: 200, editable: true },
    { field: 'cnn', headerName: 'Cr Note No.', minWidth: 200, editable: true },


    ]

  

    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Dr. Note</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Selection</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text"  classCategory="form-control col-4 inp"  />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="itemgroup" label="Item Group" ipTitle="Enter Item Group" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="cate" label="Category" ipTitle="Enter Category" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="brand" label="Brand" ipTitle="Enter Brand" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="item" label="Item" ipTitle="Enter Item" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="party" label="Party Group" ipTitle="Enter Party Group" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="party" label="Party" ipTitle="Enter Party" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="fromd" label="From Date" ipTitle="Enter From Date" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                
                                    <MasterInput2 name="to" label="To" ipTitle="Enter From Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Load Details</button>
                                </span>

                            </fieldset>

                        </form>


                    </div>

                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                <WriteGrid title="Dr. Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                <div className='d-flex justify-content-start'>
                    <button type="button" style={{ border: '2px solid #33b5e5 ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-info mt-2 mb-2 pl-0 pr-0 ">Save</button>
                    <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Email</button>
                    <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Print</button>
                    <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Export</button>
                    <button type="button" style={{ border: '2px solid orange', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-warning mt-2 mb-2 pl-0 pr-0 ">Quit</button>
                </div>
            </div>

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />




        </div>
    )
}

export default Dr_Note;