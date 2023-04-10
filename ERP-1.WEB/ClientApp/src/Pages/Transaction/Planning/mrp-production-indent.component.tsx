import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

const Mrp_Production_Indent = () => {

    let data: any[] = [{
        sn: null, idno: null, date: null, duedate: null, formonth: null, ic: null, iname: null, iqty: null, exqty: null, balqty: null, mrpqty: null,
        uom: null, stkqty: null, cons: null, toll: null, tollqty: null, totalmrp: null
    }]

    var ColDef: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'idno', headerName: 'Indent No.', minWidth: 400 },
        { field: 'date', headerName: 'Date', minWidth: 200 },
        { field: 'duedate', headerName: 'DueDate', minWidth: 200 },
        { field: 'formonth', headerName: 'For Month', minWidth: 200 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'iname', headerName: 'Item Name', minWidth: 200 },
        { field: 'iqty', headerName: 'IndentQty', minWidth: 200 },
        { field: 'exqty', headerName: 'ExplodedQty', minWidth: 200 },
        { field: 'balqty', headerName: 'Balance Qty', minWidth: 200 },
        { field: 'mrpqty', headerName: 'MRP Qty', minWidth: 200 },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'stkqty', headerName: 'StockQty', minWidth: 200 },
        { field: 'cons', headerName: 'Cons.', minWidth: 200 },
        { field: 'toll', headerName: 'Toll(%)', minWidth: 200 },
        { field: 'tollqty', headerName: 'Toll(Qty)', minWidth: 200 },
        { field: 'totalmrp', headerName: 'Total MRP', minWidth: 200 },

    ]

    let data1: any[] = [{
        sn: null, idno: null, date: null, duedate: null, formonth: null, ic: null, iname: null, iqty: null, exqty: null, balqty: null, mrpqty: null,
        uom: null, stkqty: null, cons: null, toll: null, tollqty: null, totalmrp: null
    }]

    var ColDef1: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'idno', headerName: 'Indent No.', minWidth: 400 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'iname', headerName: 'Item Name', minWidth: 200 },
        { field: 'iqty', headerName: 'IndentQty', minWidth: 200 },
        { field: 'psrn', headerName: 'PSrN', minWidth: 200 },
        { field: 'process', headerName: 'Process', minWidth: 200 },
        { field: 'bomic', headerName: 'BOMItemCode', minWidth: 200 },
        { field: 'in', headerName: 'ItemName', minWidth: 200 },
        { field: 'reqqty', headerName: 'Req. Qty', minWidth: 200 },
        { field: 'stkqty', headerName: 'StockQty', minWidth: 200 },
        { field: 'ppqty', headerName: 'Pend.Plan Qty', minWidth: 200 },
        { field: 'ppoqty', headerName: 'Pend.Po Qty', minWidth: 200 },
        { field: 'prqty', headerName: 'PR Qty', minWidth: 200 },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },

    ]


    return (
        <>
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>MRP On Production Indent</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card-body row col-sm-12 m-0 p-0">
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Selection</legend>

                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <MasterInput2 name="Series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="item" label="Item" ipTitle="Enter item" ipType="text" classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="fdate" label="From" ipTitle="Enter from" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="todate" label='To' ipTitle="Enter to" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <div className="col-12 mt-2 d-flex justify-content-end">
                                    <button className="p-0 btn btn-secondary mb-2" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', height: '40px' }}>Load</button>
                                </div>
                            </fieldset>
                        </form>

                    </div>



                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-12 col-sm-12">

                    <WriteGrid title="Indent Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                    <span className="d-flex section2 col-sm-12 justify-content-end">
                        <label className='form-label labl ml-2 mr-2 mt-3 labl2'>From</label>
                        {/* <MasterInput2 name="from" label="From" ipTitle="Enter from" ipType="text" classCategory="form-control col-4 inp" />*/}
                        <span className="col-1 m-0"></span>
                        <button type="button" className="btn btn-secondary pl-0 pr-0 ml-2 mt-3 mb-2" style={{ width: '167px' }}>MRP Run</button>
                    </span>
                </div>
                <div className="card col-12 col-sm-12 mt-3">
                    <WriteGrid OpenSubLayer={() => { }} colDef={ColDef1} data={data1} />

                </div>
                <form className="row-content form col-sm-12 pt-0">

                    <span className="d-flex section2 col-sm-12 mt-2">

                        <MasterInput2 name="preries" label="PR Series" ipTitle="Enter PR Series" ipType="text" classCategory="form-control col-4 inp" />
                        <span className="col-1 m-0"></span>

                        <MasterInput2 name="date" label="Date" ipTitle="Enter Date" ipType="date" classCategory="form-control col-4 inp" />
                    </span>



                    <span className="d-flex section2 col-sm-12">

                        <MasterInput2 name="vch" label='VchNo.' ipTitle="Enter VchNo" ipType="text" classCategory="form-control col-4 inp" />
                        <span className="col-1 m-0"></span>
                        <button type="button" className="btn btn-secondary pl-0 pr-0 ml-2 mt-3 mb-2" style={{ width: '167px' }}>Re-Run</button>
                    </span>

                </form>
            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-4 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>

                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning ml-2 mr-2 pl-0 pr-0">Quit</button>
            </div>

        </>
    )
}

export default Mrp_Production_Indent;