import * as React from 'react';
import { useState, useRef } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import WriteGrid from '../../../components/Grid Component/grid.component';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import RadioButton from '../../../components/RadioButton/radio-button.component';
import CustomeSwitch, { CustomeSwitch2 } from '../../../components/CustomSwitch/custom-switch.component';

const Check_Produce_Qty = () => {

    let data: any[] = [{
        sn: null, ic: null, iname: null, pqty: null, prty: null, qty: null
    }]

    var ColDef: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'iname', headerName: 'Item Name', minWidth: 200 },
        { field: 'pqty', headerName: 'Plan Qty.', minWidth: 400 },
        { field: 'prty', headerName: 'Prod. Qty.', minWidth: 400 },
        { field: 'qty', headerName: 'Quantity.', minWidth: 400 },

    ]

    let data1: any[] = [{
        sn: null, ic: null, iname: null, qty: null, uom: null, stk: null, reqqty: null
    }]

    var ColDef1: any[] = [
        { field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'iname', headerName: 'Item Name', minWidth: 200 },
        { field: 'qty', headerName: 'Quantity.', minWidth: 400 },
        { field: 'ic', headerName: 'Item Code', minWidth: 200 },
        { field: 'iname', headerName: 'Item Name', minWidth: 200 },
        { field: 'prty', headerName: 'Prod. Quantity', minWidth: 400 },
        { field: 'aic', headerName: 'Alt. ItemCode', minWidth: 400 },
        { field: 'ain', headerName: 'Alt. ItemName', minWidth: 400 },
        { field: 'puq', headerName: 'Per Unit Qty', minWidth: 400 },
        { field: 'req', headerName: 'Req Qty', minWidth: 400 },
        { field: 'stkqty', headerName: 'Stock Qty', minWidth: 400 },
        { field: 'rqfp', headerName: 'Req. Qty For Pending', minWidth: 400 },
        { field: 'bs', headerName: 'Balance Stock', minWidth: 400 },
        { field: 'uom', headerName: 'UOM', minWidth: 400 },


    ]


    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
    return (
        <>
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Check Produce Quantity As Per Current Quantity</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card-body row col-sm-12 m-0 p-0">
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Selection</legend>

                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <RadioButton label='As Per Production Indent' name='mr' id='c1' classCat='col-4 inp ml-2' lablClass='form-label col-4 labl mr-2 mt-2 labl2' />

                                    <RadioButton label='As Per Sale Order' name='ccs' id='c2' classCat='col-4 inp ml-2' lablClass='form-label col-4 labl mr-2 mt-2 labl2' />

                                    <span className="col-sm-4">
                                        <CustomeSwitch lablClass="custom-control-label col-10 m-0 ml-4" label="Check Stock Of All Material Center" id="Csoamc" name="Csoamc" classCat="form-control custom-control-input col-3 seriesConf" handleChange={() => { }} />
                                    </span>
                                </span>

                            </fieldset>
                        </form>

                    </div>



                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-12 col-sm-12">

                    <WriteGrid title="FG Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />

                </div>
                <div className="card col-12 col-sm-12 mt-3">
                    <WriteGrid title="Required Quantity" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef1} data={data1} />

                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-4 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning ml-2 mr-2 pl-0 pr-0">Quit</button>
                <button type="button" style={{ border: '2px solid ', letterSpacing: 3 }} className="btn btn-info ml-2 mr-2 pl-0 pr-0">Export</button>
            </div>

        </>
    )
}

export default Check_Produce_Qty;