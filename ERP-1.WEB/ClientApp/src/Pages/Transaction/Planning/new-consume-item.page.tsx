import * as React from 'react';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
const New_Consume_item = () => {
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------

    let data: any[] = [{ vch: null, pno: null, pdate: null, ic: null, in: null, prodqty: null, qcqty: null, uom: null, rejqty: null, totalqty: null }]

    var ColDef: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'vch', headerName: 'Vch No', minWidth: 200 },
        { field: 'pno', headerName: 'Plan No', minWidth: 200 },
        { field: 'pdate', headerName: 'Plan Date', minWidth: 200 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
       
        { field: 'prodqty', headerName: 'Prod. Qty', minWidth: 200 },
        { field: 'qcqty', headerName: 'Qc Qty', minWidth: 200 },
        { field: 'rejqty', headerName: 'Rej. Qty', minWidth: 200 },
        { field: 'totalqty', headerName: 'Total Qty', minWidth: 200 },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
       
       

    ]

    let datad: any[] = [{ ic: null, in: null, reqty: null, uom: null, uqty: null, stockqty: null }]

    var ColDefd: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 50, maxWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 100 },
        { field: 'in', headerName: 'Item Name', minWidth: 100 },
        { field: 'uqty', headerName: '/Unit Qty', minWidth: 100 },
        { field: 'reqty', headerName: 'Req. Qty', minWidth: 100 },
        { field: 'stockqty', headerName: 'Stock Qty', minWidth: 100 },
        { field: 'uom', headerName: 'UOM', minWidth: 100 },
    ]


    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', color: 'white' }}>
                    <span className="row-header p-0 m-0" >Add New Consume Item</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#branch" aria-expanded="true" aria-controls="branch" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="branch">

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2
                                        name="series"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp subMaster"
                                        ipType="text"
                                        label="Series"
                                        ipTitle='Enter Series'
                                    />
                                    <span className='col-1 m-0'></span>
                                    <MasterInput2
                                        name="dep"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp "
                                        ipType="text"
                                        label="Department"
                                        ipTitle='Enter Date'

                                    />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2
                                        name="process"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp "
                                        ipType="text"
                                        label="Process"
                                        ipTitle='Enter Process'

                                    />
                                    <span className='col-1 m-0'></span>
                                    <MasterInput2
                                        name="shift"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp"
                                        ipType="text"
                                        label="Shift"
                                        ipTitle='Enter Shift'

                                    />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2
                                        name="app"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp "
                                        ipType="text"
                                        label="All Pending Plan"
                                        ipTitle='Enter Process'

                                    />
                                    <span className='col-1 m-0'></span>
                                    <MasterInput2
                                        name="item"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp"
                                        ipType="text"
                                        label="Item"
                                        ipTitle='Enter Item'

                                    />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2
                                        name="dfrom"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp "
                                        ipType="date"
                                        label="Date From"
                                        ipTitle='Enter Date From'

                                    />
                                    <span className='col-1 m-0'></span>
                                    <MasterInput2
                                        name="dto"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp"
                                        ipType="date"
                                        label="Date To"
                                        ipTitle='Enter Item'

                                    />

                                </span>
                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2
                                        name="vch"
                                        handleChange={[]}
                                        defaultt={[]}
                                        classCategory="form-control col-4 inp "
                                        ipType="text"
                                        label="Vch No."
                                        ipTitle='Enter Vch No.'

                                    />
                                    <span className='col-1 m-0'></span>


                                </span>

                            </div>
                        </fieldset>
                    </form>


                    <button type="button" className="btn btn-primary col-1 m-3">Load</button>


                </div>
                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <WriteGrid title="Plan Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />

                </div>

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <WriteGrid title="Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefd} data={datad} />

                </div>


            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Print</button>
                <button type="button" style={{ border: '2px solid gold', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0 ml-2">Export</button>
                {/*<button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 ml-2">Check Stock</button>*/}
                {/*<button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>*/}
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 ml-2 pr-0">Quit</button>
            </div>
        </>
    )
}

export default New_Consume_item;