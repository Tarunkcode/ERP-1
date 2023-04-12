import * as React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
const Sample_Trail_Production = () => {

    let data: any[] = [{ ic: null, in: null, pqty: null, qcqty: null, rejqty: null, scrapqty: null, uom: null, machine: null, shift: null, shiftinc: null, mc: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'pqty', headerName: 'Prod Qty.', minWidth: 200 },
    { field: 'qcqty', headerName: 'Qc Qty', minWidth: 200 },
    { field: 'rejqty', headerName: 'Rej Qty', minWidth: 200 },
    { field: 'scrapqty', headerName: 'Scrap Qty', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'machine', headerName: 'Machine', minWidth: 200 },
    { field: 'shift', headerName: 'Shift', minWidth: 200 },
    { field: 'shiftinc', headerName: 'Shift Incharge', minWidth: 200 },
    { field: 'mc', headerName: 'Material Center', minWidth: 200 },


    ]





    /*------------------------------------------ Consume Item-Table-----------------------------------------------------*/

    let dataBill: any[] = [{ ic: null, in: null, reqqty: null, consqty: null, rqty: null, uom: null, mc: null, sqty: null }]

    var ColDefBill: any[] = [

        { field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 100 },
        { field: 'in', headerName: 'Item Name', minWidth: 100 },
        { field: 'reqqty', headerName: 'Req. Qty', minWidth: 100 },
        { field: 'consqty', headerName: 'Cons. Qty', minWidth: 100 },
        { field: 'rqty', headerName: 'Rej. Qty', minWidth: 100 },
        { field: 'uom', headerName: 'UOM', minWidth: 100 },
        { field: 'mc', headerName: 'Material Center', minWidth: 100 },
        { field: 'sqty', headerName: 'Stock Qty', minWidth: 100 },


    ]
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Sample Production Confirmation</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Sample Confirmation</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pseries" label="Prod. Series" ipTitle="Enter Prod. Series" ipType="text" classCategory="form-control col-4 inp" readOnly />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="date" label="Date" ipTitle="Enter date" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="vch" label="Vch No." ipTitle="Enter Vch No." ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                </span>



                            </fieldset>

                        </form>


                    </div>
                    {/*---------------------------------------Customer  Details----------------------------*/}

                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#porderpdetails" aria-expanded="false" aria-controls="porderpdetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Sample Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse" id="porderpdetails">



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="cust" label="Customer" ipTitle="Enter Customer" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="process" label="Process" ipTitle="Enter Process" ipType="text" classCategory="form-control col-4 inp" />


                                </span>



                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="item" label="Item" ipTitle="Enter Item" ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="remark" label="Remark" ipTitle="Enter Remark" ipType="text" classCategory="form-control col-4 inp" />
                                </span>


                            </div>

                        </fieldset>

                    </form>


                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Produce Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>

            <hr style={{ margin: '0', padding: '0' }} className='mt-3' />




            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                <WriteGrid title="Consume Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
            </div>



            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 mr-2">Check Stock</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default Sample_Trail_Production;