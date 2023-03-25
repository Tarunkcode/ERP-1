import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const Vendor_Quotation_Entry = () => {

    let data: any[] = [{ prno: null, itemname: null, iqty: null, unit: null, qv: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'prno', headerName: 'PR No.', minWidth: 200 },
    { field: 'itemname', headerName: 'Item Code / Name', minWidth: 200 },
    { field: 'iqty', headerName: 'Item Qty', minWidth: 200, editable: true },
    { field: 'unit', headerName: 'Unit', minWidth: 200, editable: true },
    { field: 'qv.', headerName: 'Quotation Value', minWidth: 200, editable: true },
    
    ]

    //---------------------quotation entry--------------------------------------------------------//

    let dataqty: any[] = [{ pqn: null, pname: null, ic: null, in: null, prno: null, iqty: null, unit: null, lp: null, plp: null }]

    var ColDefqty: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'pqn', headerName: 'Party Quotation No', minWidth: 250 },
    { field: 'pname', headerName: 'Party Name', minWidth: 200 },
    { field: 'ic', headerName: 'Item Code', minWidth: 200, editable: true },
    { field: 'in', headerName: 'Item Name', minWidth: 200, editable: true },
    { field: 'prno.', headerName: 'PR No', minWidth: 200, editable: true },
    { field: 'iqty.', headerName: 'ItemQty', minWidth: 200, editable: true },
    { field: 'unit.', headerName: 'Unit', minWidth: 200, editable: true },
    { field: 'lp.', headerName: 'Last Price', minWidth: 200, editable: true },
    { field: 'plp.', headerName: 'Party Last Price', minWidth: 250, editable: true },

    ]


    return (
        <>
            <div className="main card firstDiv">

                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Quotation Entry</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                           

                           
                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <MasterInput2 name="date" label="Date" ipTitle="Enter Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="quotnumber" label="Quotation Number" ipTitle="Enter Quotation Number" ipType="text" classCategory="form-control col-4 inp" />
                            </span>
                            <div className = 'd-flex justify-content-end'>
                                <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Get Item</button>
                         </div>

                        </fieldset>

                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Quotation Item" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                   </div>

                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteGrid title="Quotation Entry" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefqty} data={dataqty} />
                    </div>


                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
        
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0 ml-2">Quit</button>
            </div>
        </>
    )
}

export default Vendor_Quotation_Entry;