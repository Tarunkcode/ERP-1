import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

const Plan_Date_Change = () => {

    let data: any[] = [{ pno: null, pdate: null, process: null, ic: null, in: null, fromdate: null, todate: null, qty: null }]

    var ColDef: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'pno', headerName: 'Plan No', minWidth: 200 },
        { field: 'pdate', headerName: 'Plan Date', minWidth: 200 },
        { field: 'process', headerName: 'Process', minWidth: 200 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'fromdate', headerName: 'From Date', minWidth: 200 },
        { field: 'todate', headerName: 'To Date', minWidth: 200 },
        { field: 'qty', headerName: 'Quantity', minWidth: 200 },


    ]

    return (
        <>
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Add Production Plan</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card-body row col-sm-12 m-0 p-0">
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Indent Details</legend>

                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <MasterInput2 name="Series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="iname" label="Item Name" ipTitle="Enter Item Name" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <MasterInput2 name="color" label="Color" ipTitle="Enter color" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="assortment" label="Assortment" ipTitle="Enter Assortment" ipType="text" classCategory="form-control col-4 inp" />
                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="fdate" label="Date From" ipTitle="Enter Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="tdate" label="To" ipTitle="Enter To Date" ipType="date" classCategory="form-control col-4 inp" />
                                </span>


                                <span className='d-flex section2 col-sm-12 mt-2 mb-2'>

                                    <MasterInput2 name="plan" label="Plan No" ipTitle="Enter Plan No" ipType="text" classCategory="form-control inp col-4" />
                                </span>
                                <div className="col-12 mt-2 d-flex justify-content-between">
                                    <button className="p-0 btn btn-secondary mb-2" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px', height: '40px' }}>Load</button>
                                </div>
                            </fieldset>
                        </form>

                    </div>



                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-12 col-sm-12">

                    <WriteGrid title="Generated Plan Details" w='97.8vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />

                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-2 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Change</button>
                {/*<button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>*/}
                {/*<button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>*/}
                {/*<button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 ml-2">Export</button>*/}
            </div>

        </>
    )
}

export default Plan_Date_Change;