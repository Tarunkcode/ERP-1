import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import QcIncomingModals from '../../../components/Modals/Qc_Incoming_Modal';

const Qc_Jobwork = () => {

    let data: any[] = [{
        grn: null, grndate: null, cn: null, uom: null, chn: null, cd: null, bd: null, ic: null, in: null, mno: null, jobqty: null,
        pqty: null, balqty: null, mat: null, process: null
    }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },

    { field: 'grn', headerName: 'GRN No.', minWidth: 200 },
    { field: 'grndate', headerName: 'GRN Date', minWidth: 200 },

    { field: 'cn', headerName: 'Customer Name', minWidth: 200 },
    { field: 'chn', headerName: 'Challan No.', minWidth: 200 },
    { field: 'cd', headerName: 'Challan Date', minWidth: 200 },

    { field: 'ic ', headerName: 'Item Code', minWidth: 200 },
    { field: 'in ', headerName: 'Item Name', minWidth: 200 },
    { field: 'mno ', headerName: 'Model No.', minWidth: 200 },
    { field: 'jobqty ', headerName: 'JOB QTY', minWidth: 200 },
    { field: 'uom ', headerName: 'UOM', minWidth: 200 },
    { field: 'pqty ', headerName: 'Processed Qty', minWidth: 200 },
    { field: 'balqty ', headerName: 'Balance Qty', minWidth: 200 },
    { field: 'mat ', headerName: 'Mat. Center', minWidth: 200, editable: true },
    { field: 'process', headerName: 'Process', minWidth: 200, editable: true },

    ]

    let [isItemBox, setIsItemBox]: any = React.useState(false);
    const OpenQcIncomingMat = (e: any) => {
        console.log('process value', e)

        if (e.data.process) {
            if (e.event.keyCode === 13 || e.event.key === 'Enter') {
                setIsItemBox(true);
            }
        } else { }

    }

    return (
        <>
            <QcIncomingModals isItemBox={isItemBox} setIsItemBox={setIsItemBox} />


            <div className="main card firstDiv">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }} >QC Incoming Material From Job Work</span>
                </div>

                <div className="card-body row col-sm-12 m-0 p-0" >
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="jobseries" label="JOB Series" ipTitle="Enter Job Series" ipType="text" classCategory="form-control col-4 inp" />

                                        <span className="col-1 m-0"></span>
                                        
                                        <MasterInput2 name="jobfrom" label="JOB Number From" ipTitle="Enter Job Number From" ipType="text" classCategory="form-control col-4 inp" />


                                    </span>
                                   
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="job-to" label="JOB Number To" ipTitle="Enter JOB Number To" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="rdate" label="Receipt Date From" ipTitle="Enter Receipt Date From" ipType="date" classCategory="form-control col-4 inp" />
                                    </span>

                                   
                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="rto" label="Receipt Date To" ipTitle="Enter Receipt Date To" ipType="date" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="icode" label="Item Code" ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="ccn" label="Customer Challan No" ipTitle="Enter Customer Challan No" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>

                                    </span>

                                    <span className="d-flex section2 col-sm-12 mt-2">

                                        <button type="button" className="btn btn-secondary pl-0 pr-0 mb-2 ml-2" style={{ borderRadius: '21px', letterSpacing: 3, width: '200PX' }}>
                                            Load Data
                                        </button>


                                    </span>
                                </form>

                            </div>

                        </div>

                    </div>


                    <hr />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                        <WriteGrid title="" titleClr="blue" OpenSubLayer={OpenQcIncomingMat} colDef={ColDef} data={data} />

                    </div>
                </div>
            </div>
            <div className="btn-group col-2 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>

                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>

    )
}

export default Qc_Jobwork;