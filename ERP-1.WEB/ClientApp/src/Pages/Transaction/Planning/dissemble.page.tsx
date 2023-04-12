import * as React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
const Dissemble_Page = () => {

    let data: any[] = [{ ic: null, in: null, mc: null, mctype: null, fp: null, stockqty: null, qty: null, uom: null}]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'mc', headerName: 'Material Center', minWidth: 200 },
    { field: 'mctype', headerName: 'Mc type', minWidth: 200 },
    { field: 'fp', headerName: 'From Process', minWidth: 200 },
    { field: 'stockqty', headerName: 'Stock Qty', minWidth: 200 },
    { field: 'qty', headerName: 'Quantity', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
   
    ]





    /*------------------------------------------ Consume Item-Table-----------------------------------------------------*/

    let dataBill: any[] = [{ ic: null, in: null, fp: null, prodqty: null, okqty: null, uom: null, mc: null, rqty: null, scrapqty: null }]

    var ColDefBill: any[] = [

        { field: 'srno', headerName: 'S.No.', minWidth: 200, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'mc', headerName: 'Material Center', minWidth: 200 },
        { field: 'fp', headerName: 'From Process', minWidth: 200 },
        { field: 'prodqty', headerName: 'Prod Qty', minWidth: 200 },
        { field: 'okqty', headerName: 'Ok Qty', minWidth: 200 },
        { field: 'rqty', headerName: 'Rej. Qty', minWidth: 200 },
        { field: 'scrapqty', headerName: 'Scrap Qty', minWidth: 200 },
        { field: 'uom', headerName: 'UOM', minWidth: 200 },
     ,


    ]
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    }}>Dissemble Production</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Dissemble</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pseries" label="Prod. Series" ipTitle="Enter Prod. Series" ipType="text" classCategory="form-control col-4 inp" readOnly />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="date" label="Date" ipTitle="Enter date" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="vch" label="Vch No." ipTitle="Enter Vch No." ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="process" label="Process" ipTitle="Enter Process" ipType="text" classCategory="form-control col-4 inp" />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="toprocess" label="To Process" ipTitle="Enter To Process" ipType="text" classCategory="form-control col-4 inp" />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="mc" label="Mc" ipTitle="Enter Mc" ipType="text" classCategory="form-control col-4 inp" />
                                </span>


                            </fieldset>

                        </form>


                    </div>
                   
                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>

            <hr style={{ margin: '0', padding: '0' }} className='mt-3' />




            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                <WriteGrid title="Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefBill} data={dataBill} />
            </div>



            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 mr-2">Dissemble</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default Dissemble_Page;