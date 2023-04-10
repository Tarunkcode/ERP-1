import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const DispatchPlan = () => {

    let data: any[] = [{ qcparameter: null, desc: null, smp: null, uom: null, targetval: null, lowerval: null, upperval: null, narration: null, qctype: null, measuringmethod: null }]

    var ColDef: any[] = [
        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },

        { field: 'itemcode', headerName: 'Item Code', minWidth: 200 },

        { field: 'itemname', headerName: 'Item Name', minWidth: 200 },
        { field: 'sono', headerName: 'So.No.', minWidth: 200 },
        { field: 'cpn', headerName: 'Cust. Po. No.', minWidth: 200 },
        { field: 'podate ', headerName: 'Po Date', minWidth: 200 },
        { field: 'balaty', headerName: 'Bal. Aty.', minWidth: 200 },
        { field: 'qty ', headerName: 'Qty', minWidth: 200 },
        { field: 'uom ', headerName: 'UOM', minWidth: 200 },
        { field: 'aqty', headerName: 'Alt. Qty,', minWidth: 200 },
        { field: 'altuom ', headerName: 'Alt. UOM', minWidth: 200 },
        { field: 'price ', headerName: 'Price', minWidth: 200 },
        { field: 'value ', headerName: 'Value', minWidth: 200 },
        { field: 'opnpo', headerName: 'Opn. Po.', minWidth: 200 },

    ]

    return (
        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >Dispatch Schedule</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>DS Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Series" name="series" ipType="text" ipTitle="Enter Code" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="Vch No." name="vch" ipType="text" ipTitle="Enter Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>
                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="cd" name="series" ipType="text" ipTitle="Enter Cancel Dispatch" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="Vch Date" name="date" ipType="date" ipTitle="Enter Vch Date" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="Month" name="month" ipType="date" ipTitle="Enter Month" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 defaultt={[]} label="Customer" name="cust" ipType="text" ipTitle="Enter Customer" handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 defaultt={[]} label="P.O No." name="pon" ipType="text" ipTitle="Enter P.O No." handleChange={[]} classCategory="form-control col-4 inp subMaster" />
                                    <span className="col-1 m-0"></span>
                                   
                                </span>
                      

                          
                            </div>
                        </fieldset>
                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">  
                            <WriteGrid title="Customer Item Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />
                  


                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            </div>
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default DispatchPlan;