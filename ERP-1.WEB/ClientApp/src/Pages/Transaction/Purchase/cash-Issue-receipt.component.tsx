import * as React from 'react';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import RadioButton from '../../../components/RadioButton/radio-button.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import DatalistInput from 'react-datalist-input';
const Cash_Issue_Receipt = () => {

    const [config, setConfig]: any = React.useState('');

    React.useEffect(() => {

        let id: string = window.location.pathname;
        console.log('id', id)
        let splits: any = id.split('/');
        console.log('s', splits)
        setConfig({
            configType: splits[splits.length - 1]
        })


    }, [])
    console.log('iddddddddd', config.configType)


    //------------ default date block-----------------------------------------------------------------------------------------------------------------------


    let data: any[] = [{
        value: null, number: null, total: null, stock: null, samt: null
  }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'value', headerName: 'Value', minWidth: 200 },
    { field: 'number', headerName: 'Number', minWidth: 200 },
    { field: 'total', headerName: 'Total', minWidth: 200, editable: true },
    { field: 'stock', headerName: 'Stock No.', minWidth: 200 },
    { field: 'samt', headerName: 'Stock Amt.', minWidth: 200, editable: true },
    
    ]

    let dataRec: any[] = [{
        value: null, number: null, total: null, stock: null, samt: null
    }]

    var ColDefRec: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'value', headerName: 'Value', minWidth: 200 },
    { field: 'number', headerName: 'Number', minWidth: 200 },
    { field: 'total', headerName: 'Total', minWidth: 200, editable: true },
   
    ]



    return (
        <div className="firstDiv" >


            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>{`${config.configType === 'add-Cash-Issue' ? 'Cash Issue' : config.configType === 'add-Cash-Receipt' ? 'Cash receipt': '' }`}</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Cash Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="vch" label="Vch. No." ipTitle="Enter Vch. No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="date" label="Date" ipTitle="Enter From Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="cash" label="Cash Center" ipTitle="Enter Cash Center" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                {config.configType === 'add-Cash-Issue' ? 

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="issueto" label="Issue To" ipTitle="Enter Issue To" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    </span>
                                    : ''}
                            </fieldset>

                        </form>


                    </div>

                </div>

            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                {config.configType === 'add-Cash-Issue' ?
                    <WriteGrid title="Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                    : config.configType === 'add-Cash-Receipt' ? (
                        <WriteGrid title="Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDefRec} data={dataRec} />
                        ): ''
                    }
            </div>
                <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                    <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                    <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
            </span>

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>

            </div>
    )
}

export default Cash_Issue_Receipt;