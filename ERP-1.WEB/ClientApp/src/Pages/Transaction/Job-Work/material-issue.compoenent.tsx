import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';


const MaterialIssue = () => {


    let data: any[] = [{ ic: null, in: null, mc: null, mctype: null, fprocess: null, sqty: null, qty: null, uom: null, price: null, value: null, weight: null }]

    var ColDef: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'mc', headerName: 'Material Center', minWidth: 200, editable: true },
        { field: 'mctype', headerName: 'MC Type', minWidth: 200, editable: true },
        { field: 'fprocess', headerName: 'Form Process', minWidth: 200, editable: true },
        { field: 'sqty', headerName: 'Stock Qty', minWidth: 200, editable: true },
        { field: 'qty', headerName: 'Qty', minWidth: 200, editable: true },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
        { field: 'price', headerName: 'Price', minWidth: 200 },
        { field: 'value', headerName: 'Value', minWidth: 200, editable: true },
        { field: 'weight', headerName: 'Weight(KG)', minWidth: 200, editable: true },

    ]


    let dataBill: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDefBill: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'bill', headerName: 'Bill Sundary', minWidth: 100 },
        { field: 'narration', headerName: 'Narration', minWidth: 100 },
        { field: 'rate', headerName: '@', minWidth: 100 },
        { field: 'amount', headerName: 'Amount', minWidth: 100 }

    ]
    const getState = window.localStorage.getItem('state');
   
    return (
        <>
            <div className="main card firstDiv">
           
                <div className="card-title mb-2 col-12 text-center" style={{ margin: '0 auto' }}>
                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Dilevery Challan Issue To Party</span>
                    </div>
                <div className="card-body" style={{ margin: '0', padding: '0'}}>

              

                   
                   
                    <form className="form">

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Series" name="series" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Date" name="date" ipType="date" ipTitle="Enter Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Party" name="party" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Challan Type" name="challan" ipType="text" ipTitle="Enter Challan Type" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Department" name="Department" ipType="text" ipTitle="Enter Department" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="State" name="state" ipType="text" ipTitle="Enter state" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Code" name="code" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Transporter" name="transporter" ipType="text" ipTitle="Enter Transporter" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="E-Way Bill" name="ewb" ipType="text" ipTitle="Enter E-Way Bill" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Driver" name="driver" ipType="text" ipTitle="Enter Driver" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Bill No." name="bn" ipType="text" ipTitle="Enter Bill No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Vehicle No." name="vchno" ipType="text" ipTitle="Enter Vehicle No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Ref No." name="refno" ipType="text" ipTitle="Enter Ref No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="Seal No." name="seal" ipType="text" ipTitle="Enter Seal No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Picking List" name="plist" ipType="text" ipTitle="Enter Picking List" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="E-way Bill" name="ewaybill" ipType="text" ipTitle="Enter E-way Bill" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Place o Supply" name="pos" ipType="text" ipTitle="Enter Place o Supply" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                            <MasterInput2 defaultt={[]} label="PinCode" name="pincode" ipType="text" ipTitle="Enter PinCode" handleChange={[]} classCategory="form-control col-4 inp subMaster" />

                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2 defaultt={[]} label="Distance" name="distance" ipType="text" ipTitle="Enter Distance" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                            <span className="col-1 m-0"></span>
                           

                        </span>

                            </form>
                   
                </div>
               
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />


                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <WriteGrid title="Challan Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <WriteGrid title="Bill Sundry Details" h='200px' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
               
                </div>

                <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                    <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                    <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
                </span>

                </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default MaterialIssue;