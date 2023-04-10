import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import QcIncomingModals from '../../../components/Modals/Qc_Incoming_Modal';

const Qc_Incoming = () => {

    let data: any[] = [{
        grn: null, grndate: null, porder: null, uom: null, sn: null, bn: null, bd: null, ic: null, in: null, mno: null, grnqty: null,
       pqty: null, balqty: null, mat: null, process: null    }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
   
    { field: 'grn', headerName: 'GRN No.', minWidth: 200 },
    { field: 'grndate', headerName: 'GRN Date', minWidth: 200 },
    
    { field: 'porder', headerName: 'Purchase Ord', minWidth: 200 },
    { field: 'sn', headerName: 'Supplier Name', minWidth: 200 },
    { field: 'bn', headerName: 'Bill No.', minWidth: 200 },
    { field: 'bd', headerName: 'Bill Date', minWidth: 200 },
    { field: 'ic ', headerName: 'Item code', minWidth: 200 },
    { field: 'in ', headerName: 'Item Name', minWidth: 200 },
    { field: 'mno ', headerName: 'Model No.', minWidth: 200 },
    { field: 'grnqty ', headerName: 'GRN QTY', minWidth: 200 },
    { field: 'uom ', headerName: 'UOM', minWidth: 200 },
    { field: 'pqty ', headerName: 'Processed Qty', minWidth: 200 },
    { field: 'balqty ', headerName: 'Balance Qty', minWidth: 200 },
        { field: 'mat ', headerName: 'Mat. Center', minWidth: 200, editable: true },
    { field: 'process', headerName: 'Process', minWidth: 200,editable: true },
    
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
                    }} >QC Incoming Material</span>
                </div>

                <div className="card-body row col-sm-12 m-0 p-0" >
                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                            <div className="card-body" style={{ margin: '0', padding: '0' }}>
                                <form className="form">
                                    <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="mrnseries" label="MRN Series" ipTitle="Enter MRN Series" ipType="text" classCategory="form-control col-4 inp" />
                                        
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="supp" label="Supplier" ipTitle="Enter Supplier" ipType="text" classCategory="form-control col-4 inp" />

                                           
                                    </span>
                                        <label htmlFor="excbill" style={{ fontSize: '1rem' }} className="form-label ml-2 mr-2 mt-2">MRN Number</label>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="from" label="From" ipTitle="Enter From" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="to" label="To" ipTitle="Enter To" ipType="text" classCategory="form-control col-4 inp" />
                                    </span>

                                    <label htmlFor="excbill" style={{ fontSize: '1rem' }} className="form-label ml-2 mr-2 mt-2">Receipt Date</label>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="rfrom" label="From" ipTitle="Enter From" ipType="date" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="rto" label="To" ipTitle="Enter To" ipType="date" classCategory="form-control col-4 inp" />
                                    </span>

                                    <span className="d-flex section2 col-sm-12">

                                        <MasterInput2 name="icode" label="Item Code" ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-4 inp" />
                                        <span className="col-1 m-0"></span>
                                        <MasterInput2 name="cbn" label="Customer Bill No" ipTitle="Enter Customer Bill No" ipType="text" classCategory="form-control col-4 inp" />

                                    </span>

                                    <span className="d-flex section2 col-sm-12 mt-2">

                                        <button type="button" className="btn btn-secondary pl-0 pr-0 mb-2 ml-2" style={{ borderRadius: '21px', letterSpacing: 3, width:'200PX' }}>
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

export default Qc_Incoming;