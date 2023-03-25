import * as React from 'react';
import DatalistInput from 'react-datalist-input';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import WriteGrid from '../../../components/Grid Component/grid.component';

const StockTransfer = () => {

    let data: any[] = [{ bill: null, narration: null, rate: null, amount: null }]

    var ColDef: any[] = [{ field: 'srno', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    { field: 'ic', headerName: 'Item Code', minWidth: 200 },
    { field: 'in', headerName: 'Item Name', minWidth: 200 },
        { field: 'sq', headerName: 'Stock Qty', minWidth: 200, editable: true },
        { field: 'sv', headerName: 'Stock Value', minWidth: 200 },
        { field: 'ap', headerName: 'Avg.Price', minWidth: 200, editable: true },
    { field: 'qty', headerName: 'Qty.', minWidth: 200, editable: true },
        { field: 'pq', headerName: 'Pend. Qty', minWidth: 200, editable: true },
    { field: 'uom', headerName: 'UOM', minWidth: 200, editable: true },
    { field: 'value', headerName: 'Value', minWidth: 200, editable: true },
    { field: 'remark', headerName: 'Remark', minWidth: 200, editable: true }
   
    ]
    return (
        <>
            <div className="main card firstDiv">

               <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Stock Transfer</span>
                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">

                    <div className="card-body row col-sm-12 m-0 p-0" >
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem' }}>Material Receipt Details</legend>


                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="vchno" label="Vch. NO." ipTitle="Enter Vch NO." ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="date" label="Date" ipTitle="Enter Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>

                                    <MasterInput2 name="fmc" label="From Mat. Center" ipTitle="Enter From Material Center" ipType="text" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="tmc" label="To Mat. Center" ipTitle="Enter Date" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <>
                                        <label htmlFor="actionper" style={{ fontSize: '1rem' }} className="form-label labl ml-2 mr-2 mt-2 labl2">Action Performed</label>
                                    </>
                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            placeholder={'Select Action Performed'}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp col-12 datalist int', name: 'actionper' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => { console.log('id', item.id); }}
                                            items={[]}
                                        />

                                    </span>
                                </span>
                                <span className="d-flex flex-column section2 mb-2 col-sm-12" style={{ marginLeft: '30px' }}>
                                    <CustomeSwitch lablClass="custom-control-label col-9" label="Is Return" id="c1" name="c1" classCat="form-control custom-control-input col-2 subMaster switch mt-2" />

                                </span>

                                
                        </fieldset>
                    </form>
                    </div>
                
                    <hr style={{ margin: '0', padding: '0' }} />

                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                    <WriteGrid title="Transfer Item Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
                        </div>

               
                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            <span className="d-flex section2 col-sm-12 mb-2 mt-2">
                <label htmlFor="s1" style={{ fontSize: '1em' }} className="form-label mr-2 ml-2 labl labl2">Remark</label>
                <textarea name="s1" style={{ borderColor: '#86a4c3' }} placeholder="Enter Remark" rows={2} cols={7} className="form-control col-10 subMaster" />
            </span>
            </div>

            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    )
}

export default StockTransfer;