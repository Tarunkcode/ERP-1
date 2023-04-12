import * as React from 'react';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const ProductionConfiguration = () => {

    let data: any[] = [{
        tick: null, plan: null, ic: null, in: null, pqty: null, prqty: null, balqty: null, rejqty: null, rejuom: null, uom: null,
        machine: null, shift: null, shiftinc: null, operator: null, conf: null, remark: null, mname: null, cavity: null, cshot: null, balshot: null, remlife: null, manpower: null, elec: null, prod: null, prodweight: null, rejweight: null,
        qcweight: null, overhead: null, fsn: null, tsn: null
}]

    var ColDef: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'tick', headerName: 'Tick', minWidth: 200 },
        { field: 'plan', headerName: 'Plan No.', minWidth: 200 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'pqty', headerName: 'Plan Qty.', minWidth: 200, editable: true },
        { field: 'prqty', headerName: 'Prod Qty.', minWidth: 200, editable: true },
        { field: 'balqty', headerName: 'Bal Qty.', minWidth: 200, editable: true },
        { field: 'rejqty', headerName: 'Rej. Qty.', minWidth: 200, editable: true },
        { field: 'rejuom', headerName: 'Rej. UOM', minWidth: 200, editable: true },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'machine', headerName: 'Machine', minWidth: 200 },
        { field: 'shift', headerName: 'Shift', minWidth: 200, editable: true },
        { field: 'shiftinc', headerName: 'Shift Incharge', minWidth: 200, editable: true },
        { field: 'operator', headerName: 'Operator', minWidth: 200, editable: true },
        { field: 'conf', headerName: 'Conf.', minWidth: 200, editable: true },
        { field: 'remark', headerName: 'Remarks', minWidth: 200, editable: true },
        { field: 'mname', headerName: 'Mold Name', minWidth: 200, editable: true },
        { field: 'cavity', headerName: 'Cavity', minWidth: 200, editable: true },
        { field: 'cshot', headerName: 'Cons. Shot', minWidth: 200, editable: true },
        { field: 'balshot', headerName: 'Bal. Shot', minWidth: 200, editable: true },
        { field: 'remlife', headerName: 'Rem Life(%)', minWidth: 200, editable: true },
        { field: 'manpower', headerName: 'Man Power', minWidth: 200, editable: true },
        { field: 'elec', headerName: 'Electricity', minWidth: 200, editable: true },
        { field: 'prod', headerName: 'Prod (Hrs.)', minWidth: 200, editable: true },
        { field: 'prodweight', headerName: 'Prod Weight', minWidth: 200, editable: true },
        { field: 'rejweight', headerName: 'Rej. Weight', minWidth: 200, editable: true },
        { field: 'qcweight', headerName: 'QC Weight', minWidth: 200, editable: true },
        { field: 'overhead', headerName: 'OverHead', minWidth: 200, editable: true },
        { field: 'fsn', headerName: 'From Sr. No.', minWidth: 200, editable: true },
        { field: 'tsn', headerName: 'To Sr. No.', minWidth: 200, editable: true },

    ]


    let dataD: any[] = [{
        ic: null, in: null, rqty: null, consqty: null, rejqty: null, uom: null, stockqty: null, fprocess: null, remark: null 
    }]

    var ColDefD: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'rqty', headerName: 'Req Qty.', minWidth: 200 },
        { field: 'consqty', headerName: 'Cons. Qty.', minWidth: 200 },
        { field: 'rejqty', headerName: 'Rej. Qty.', minWidth: 200 },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'stockqty', headerName: 'Stock Qty.', minWidth: 200 },
        { field: 'fprocess', headerName: 'From Process', minWidth: 200 },
        { field: 'remark', headerName: 'Remarks', minWidth: 200, editable: true },
       
    ]
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" style={{ color: 'white', fontWeight: 900 }} >Production Confirmation</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#branch" aria-expanded="true" aria-controls="branch" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Job Confirmation<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="branch">

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Series" name="series" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="Date" name="date" ipType="date" ipTitle="Enter Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Vch No." name="vch" ipType="text" ipTitle="Enter Vch No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    
                                </span>
                               
                            </div>
                        </fieldset>
                    </form>

                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#addDet" aria-expanded="false" aria-controls="addDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Filter<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div className="collapse" id="addDet">


                                
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Item" name="item" ipType="text" ipTitle="Enter Item" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="Process" name="Process" ipType="text" ipTitle="Enter Process" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Mould" name="mould" ipType="text" ipTitle="Enter Mould" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="DayWise Series" name="dayseries" ipType="text" ipTitle="Enter DayWise Series" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="To Date" name="to-date" ipType="date" ipTitle="Enter To Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="From Date" name="fromdate" ipType="date" ipTitle="Enter From Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                            </div>
                        </fieldset>
                    </form>
                    <button type="button" className="btn btn-primary col-1 m-3">Get Details</button>


                </div>
                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                     <WriteGrid title="Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                </div>

                <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                     <WriteGrid title="Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefD} data={dataD} />
                   
                </div>

            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 ml-2">Check Stock</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0 ml-2">Save</button>
              
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default ProductionConfiguration;