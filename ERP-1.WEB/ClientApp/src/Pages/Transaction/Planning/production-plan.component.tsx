import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';

import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
const From_Prodiction_Indent = () => {



    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    
    let data: any[] = [{ ic: null, in: null, fc: null, uom: null, rqty: null, stock: null, mc: null }]

    var ColDef: any[] = [{ field: 'inno', headerName: 'Indent No.', minWidth: 200, },
    { field: 'idate', headerName: 'Indent date', minWidth: 200 },
    { field: 'dd', headerName: 'Due Date', minWidth: 200 }, 
    { field: 'ic', headerName: 'Item Code', minWidth: 200, editable: true },
    { field: 'in', headerName: 'Item Name', minWidth: 200, editable: true },
    { field: 'iqty', headerName: 'Indent Qty.', minWidth: 200, editable: true },
    { field: 'pq', headerName: 'Planed Qty.', minWidth: 200 },
    { field: 'bqty', headerName: 'Bal Qty', minWidth: 200 },
    { field: 'pqty', headerName: 'Prod. Qty', minWidth: 200 },
    { field: 'plan', headerName: 'Plan Qty', minWidth: 200 },
    { field: 'noplan', headerName: 'No. Of Plan', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },


    ]

    //-----------------------------Plan Routing Details------------------------------------------------------------
    let dataPlan: any[] = [{ ic: null, in: null, fc: null, uom: null, rqty: null, stock: null, mc: null }]

    var ColDefPlan: any[] = [{ field: 'srno', headerName: 'Sr. No.', minWidth: 200, valueGetter: 'node.rowIndex + 1' },
    { field: 'ino', headerName: 'Indent No', minWidth: 200 },
    { field: 'fd', headerName: 'From Date', minWidth: 200 },
        { field: 'td', headerName: 'To Date', minWidth: 200 },
        { field: 'fgc', headerName: 'FG Code', minWidth: 200 },
        { field: 'psrn', headerName: 'PSrN', minWidth: 200 },
        { field: 'process', headerName: 'Process', minWidth: 200 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200, editable: true },
        { field: 'in', headerName: 'Item Name', minWidth: 200, editable: true },
        { field: 'pq', headerName: 'ProcessQty', minWidth: 200, editable: true },
        { field: 'toll', headerName: 'Toll(%)', minWidth: 200, editable: true },
        { field: 'tq', headerName: 'Toll(Qty.)', minWidth: 200 },
        { field: 'adjqty', headerName: 'Adj. Qty', minWidth: 200 },
        { field: 'pqty', headerName: 'Prod. Qty', minWidth: 200 },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'mp', headerName: 'Manpower', minWidth: 200 },
        { field: 'elec', headerName: 'Electricity', minWidth: 200 },
        { field: 'plan', headerName: 'Plan(Hrs)', minWidth: 200 },
        { field: 'oha', headerName: 'OverHeadAmt', minWidth: 200 },


    ]

    //------------------------Consume Item Details------------------------------------------------------

    let dataCon: any[] = [{ ic: null, in: null, fc: null, uom: null, rqty: null, stock: null, mc: null }]

    var ColDefCon: any[] = [{ field: 'psno', headerName: 'PlanSrNo', minWidth: 200, },
    { field: 'ino', headerName: 'IndentNo', minWidth: 200 },
    { field: 'fgc', headerName: 'FG Code', minWidth: 200 },
    { field: 'psrno', headerName: 'PsrNo', minWidth: 200, editable: true },
    { field: 'process', headerName: 'Process', minWidth: 200, editable: true },
    { field: 'itemsr', headerName: 'ItemSr', minWidth: 200, editable: true },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'rqty', headerName: 'Req. Qty', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'fp', headerName: 'From Process', minWidth: 200 },

    ]

    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Production Plan From Production Indent</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Production Plan Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="vch" label="Vch. No." ipTitle="Enter Vch. No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="date" label="Date" ipTitle="Enter date" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    
                                </span>

                            </fieldset>

                        </form>
                    </div>
                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                <form className="row-content form col-sm-12 pt-0">
                  
                    <fieldset className="form-group border p-0" >
                        <legend className="px-2" style={{ fontSize: '1.1rem' }}>Search Data</legend>

                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                            <span className="col-1 m-0"></span>

                            <MasterInput2 name="item" label="Item" ipTitle="Enter Item" ipType="text" classCategory="form-control col-4 inp" />
                        </span>

                        <span className="d-flex section2 col-sm-12">
                        <MasterInput2 name="fdate" label="From Date" ipTitle="Enter date" ipType="date" classCategory="form-control col-4 inp" />

                            <span className="col-1 m-0"></span>
                        <MasterInput2 name="to" label="To" ipTitle="Enter date" ipType="date" classCategory="form-control col-4 inp" />

                        </span>

                        <div className="col-12 mt-2 mb-2 d-flex justify-content-end">

                            
                            <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '170px', borderRadius: '19px' }} className="btn btn-secondary pl-0 pr-0">Load</button>

                        </div>

                        </fieldset>
         

                </form>

                <WriteGrid title="" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Plan Routing Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefPlan} data={dataPlan} />
            </div>

            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Consume Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefCon} data={dataCon} />
            </div>



            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default From_Prodiction_Indent;