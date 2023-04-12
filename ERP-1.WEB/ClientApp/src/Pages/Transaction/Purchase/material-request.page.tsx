import * as React from 'react';
import UnderConstruction from '../../../components/under-construction';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const Material_Request = () => {

    let data: any[] = [{ ic: null, in: null, qty: null, uom: null, sqty: null, remark: null }]

    var ColDef: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'qty', headerName: 'Quantity', minWidth: 200, editable: true },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'sqty', headerName: 'Stock Qty', minWidth: 200, editable: true },
        { field: 'remark', headerName: 'Remark', minWidth: 200, editable: true },

    ]

    return (
        <>
            <div className="main card firstDiv">

                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }} >Material Request</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" style={{ fontSize: '1.1rem' }}>Request Details</legend>

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="date" label="Date" ipTitle="Enter Date" ipType="date" classCategory="form-control col-4 inp" />
                            </span>

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2 name="vch" label="Vch. No." ipTitle="Enter PR Type" ipType="date" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="process" label="Process" ipTitle="Enter Process" ipType="text" classCategory="form-control col-4 inp" />
                            </span>

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2 name="req" label="Requested By" ipTitle="Enter Requested By" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                               
                            </span>

                        </fieldset>

                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />

                    <WriteGrid title="Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />




                </div>
                <hr style={{ margin: '0', padding: '0' }} />

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

export default Material_Request;