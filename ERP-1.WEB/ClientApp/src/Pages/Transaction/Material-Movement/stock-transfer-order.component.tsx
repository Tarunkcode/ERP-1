import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import RadioButton from '../../../components/RadioButton/radio-button.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
const Stock_Transfer_Order = () => {
    

 
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------

    let data: any[] = [{ ic: null, in: null, qty: null, uom: null, cavity: null, mold: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'qty', headerName: 'Quantity.', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'cavity', headerName: 'Cavity', minWidth: 200, editable: true },
    { field: 'mold', headerName: 'Mold', minWidth: 200 }

    ]

    //----------------------Required Item Details------------------------------------//
    let datareq: any[] = [{ ic: null, in: null, fc: null, uom: null, rqty: null, stock: null, mc: null }]

    var ColDefreq: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
    { field: 'fc', headerName: 'Floor Stock', minWidth: 200, editable: true },
    { field: 'rqty', headerName: 'Req. Qty', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'stock', headerName: 'Stock', minWidth: 200 },
    { field: 'mc', headerName: 'Material Center', minWidth: 250 }

    ]

    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Stock Transfer Order</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Stock Transfer Order Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text"  classCategory="form-control col-4 inp"  />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="vch" label="Vch. No." ipTitle="Enter Vch. No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="date" label="Date" ipTitle="Enter date" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <>
                                        <label htmlFor="process" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Process</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Process'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'process' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[]}
                                        />

                                    </span>
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                 
                                    <>
                                        <label htmlFor="itemtype" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 labl2">Item Type</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Item Type'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'itemtype' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[]}
                                        />

                                    </span>
                                </span>

                            </fieldset>

                        </form>


                    </div>

                    
                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="FG Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">

                <WriteGrid title="Required Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefreq} data={datareq} />
            </div>

       

            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </div>
    )
}

export default Stock_Transfer_Order;