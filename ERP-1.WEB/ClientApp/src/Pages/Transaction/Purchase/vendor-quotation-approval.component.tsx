import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const Vendor_Quotation_Approval = () => {

    let data: any[] = [{ select: null, qn: null, prno: null, in: null, ip1: null, ip2: null, ip3: null, qqty: null, unit: null, ap: null, qp: null, rd: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'select', headerName: 'Select', minWidth: 200 },
    { field: 'qn', headerName: 'Quotation No.', minWidth: 200 },
    { field: 'prno', headerName: 'PR No', minWidth: 200, editable: true },
    { field: 'in', headerName: 'Item Name', minWidth: 200, editable: true },
        { field: 'ip1', headerName: 'Item Param1', minWidth: 200, editable: true },
    { field: 'ip2', headerName: 'Item Param2', minWidth: 200, editable: true },
    { field: 'ip3', headerName: 'Item Param3', minWidth: 200, editable: true },
        { field: 'qqty', headerName: 'Quotation Qty', minWidth: 200 },
    { field: 'unit', headerName: 'Unit', minWidth: 200, editable: true },
    { field: 'ap', headerName: 'Actual Price', minWidth: 200, editable: true },
    { field: 'qp', headerName: 'Quotation Price', minWidth: 200, editable: true },
    { field: 'rd', headerName: 'Req. Days', minWidth: 200, editable: true },

    ]

    //---------------------vendor quotation--------------------------------------------------------//

    let dataquo: any[] = [{ sel: null, pqn: null, pn: null, in: null, pp: null, cd: null, dd: null, remark: null }]

    var ColDefquo: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },

    { field: 'sel', headerName: 'Select', minWidth: 250 },
    { field: 'pqn', headerName: 'Party Quotation No', minWidth: 250 },
    { field: 'pn', headerName: 'Party Name', minWidth: 200, editable: true },
    { field: 'in', headerName: 'Item Name', minWidth: 200, editable: true },
    { field: 'pp.', headerName: 'Party Price', minWidth: 200, editable: true },
    { field: 'cd.', headerName: 'Credit Days', minWidth: 200, editable: true },
    { field: 'dd', headerName: 'Delivery Days', minWidth: 200, editable: true },
    { field: 'remark', headerName: 'Remark', minWidth: 200, editable: true },
    
    ]


    return (
        <>
            <div className="main card firstDiv">

                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }} >Quotation Approval</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" style={{ fontSize: '1.1rem' }}>Quotation Details</legend>

                            <label htmlFor="excbill" style={{ fontSize: '1rem' }} className="form-label ml-2 mr-2 mt-2">Quotation Requisition No.</label>  

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2 name="from" label="From" ipTitle="Enter From" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="to" label="To" ipTitle="Enter to" ipType="text" classCategory="form-control col-4 inp" />
                                
                            </span>

                            <label htmlFor="excbill" style={{ fontSize: '1rem' }} className="form-label ml-2 mr-2 mt-2">Quotation Requisition Date</label>

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2 name="from-date" label="From" ipTitle="Enter From" ipType="date" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                                <MasterInput2 name="to-date" label="To" ipTitle="Enter to" ipType="date" classCategory="form-control col-4 inp" />

                            </span>

                            <span className="d-flex section2 col-sm-12">

                                <MasterInput2 name="iname" label="Item Name" ipTitle="Enter Item Name" ipType="text" classCategory="form-control col-4 inp" />
                                <span className="col-1 m-0"></span>
                               
                            <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Load Quotation</button>

                            </span>



                        </fieldset>

                    </form>
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteGrid title="" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                    <div className='d-flex justify-content-center'>
                        <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '300px', borderRadius: '19px' }} onClick={() => { }} className="btn mr-2 ml-2 btn-secondary mt-2 mb-2 pl-0 pr-0 ">Load Vendor Quotation</button>
                        </div>
                    </div>
                        <hr style={{ margin: '0', padding: '0' }} />

                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        <WriteGrid title="Vendor Quotation's" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefquo} data={dataquo} />
                    </div>


                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid grey', letterSpacing: 3 }} className="btn btn-secondary pl-0 pr-0">Approve Quotation</button>

                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0 ml-2">Quit</button>
            </div>
        </>
    )
}

export default Vendor_Quotation_Approval;