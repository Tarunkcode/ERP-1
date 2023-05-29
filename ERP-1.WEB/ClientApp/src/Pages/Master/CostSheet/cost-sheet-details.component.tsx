import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import WriteGrid from '../../../components/Grid Component/grid.component';
import 'ag-grid-autocomplete-editor/dist/main.css';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';


const CostSheetDetails = () => {

    let data: any[] = [{ prc: null, ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }]

    var ColDef: any[] = [{ field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
    {
        field: 'ic', headerName: 'Item Code', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            //selectData: React.useMemo(() => { return processLoad }, [processLoad]),
            placeholder: "Select Item Code"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    },
    { field: 'desc', headerName: 'Description', minWidth: 200 },
    { field: 'sc', headerName: 'Source', minWidth: 200 },
    { field: 'rate', headerName: 'Rate', minWidth: 200 },
    { field: 'cq', headerName: 'Cons. Qty', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'pq', headerName: 'Produce Qty(Avg.)', minWidth: 200 },
    { field: 'cost', headerName: 'Cost', minWidth: 200 },

    ]
    return (

        <>
            <div className="main card firstDiv">

                <div className="text-center card-title col-12" style={{ textAlign: 'start', backgroundColor: '#8389d4' }}>
                    <span className="row-header p-0 m-0" >Cost Sheet Details</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0" >
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Item Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="collapse show" id="genDetails">

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="Series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="code" label="Code" ipTitle="Enter Code" ipType="text" classCategory="form-control col-12" />
                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="Itemcode" label="Item Code" ipTitle="Enter Item Code" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="Itemname" label="Item Name" ipTitle="Enter Item Name" ipType="text" classCategory="form-control col-12" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="qty" label="Quantity" ipTitle="Enter Quantity" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="UOM" label="UOM" ipTitle="Enter UOM" ipType="text" classCategory="form-control col-12" />
                                </span>

                                {/*<span className="d-flex section2 col-sm-12">*/}

                                {/*    <MasterInput2 name="ispac" label="Is Packing" ipTitle="Enter Quantity" ipType="text" classCategory="form-control col-12" />*/}
                                {/*    <span className="col-1 m-0"></span>*/}
                                {/*    <MasterInput2 name="UOM" label="UOM" ipTitle="Enter UOM" ipType="text" classCategory="form-control col-12" />*/}
                                {/*</span>*/}

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="vf" label="Valid From" ipTitle="Enter Valid From" ipType="date" classCategory="form-control col-12" />
                                    <span className='col-1'></span>
                                    <span className="section2 col-sm-4">

                                        <CustomeSwitch lablClass="custom-control-label col-5" label="Is Packing" id="c1" name="c1" classCat="form-control custom-control-input col-4 subMaster switch" />

                                        <CustomeSwitch lablClass="custom-control-label col-5" label="Packing" id="c2" name="c2" classCat="form-control custom-control-input col-4 subMaster switch" />
                                    </span>
                                </span>

                            </div>
                        </fieldset>
                    </form>
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">



                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />
                    <form className="form col-sm-12 row-content card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Bom Cost Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div className="collapse" id="personalDet">

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="routingc" label="Routing Cost" ipTitle="Enter Routing Cost" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="exf" label="EX-Factory Amt." ipTitle="Enter EX-Factory Amt." ipType="text" classCategory="form-control col-12" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="rmcost" label="RM Cost" ipTitle="Enter RM Cost" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="Markup" label="Markup(%)" ipTitle="Enter Markup(%)" ipType="text" classCategory="form-control col-12" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="MarkupAmt" label="Markup Amt." ipTitle="Enter Markup Amt." ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="oha" label="Over Head Amt." ipTitle="Enter Over Head Amt." ipType="text" classCategory="form-control col-12" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="oh" label="Over Head(%)" ipTitle="Enter Over Head(%)" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="mrp" label="MRP" ipTitle="Enter MRP" ipType="text" classCategory="form-control col-12" />
                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="tc" label="Total Cost" ipTitle="Enter Total Cost" ipType="text" classCategory="form-control col-12" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="Discount" label="Discount" ipTitle="Enter Discount" ipType="text" classCategory="form-control col-12" />
                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="da" label="Discount Amt." ipTitle="Enter Discount Amt." ipType="text" classCategory="form-control col-12" />

                                </span>

                            </div>
                        </fieldset>
                    </form>


                </div>
            </div>
            <hr style={{ margin: '0', padding: '0' }} />
            <WriteGrid title="Consumed Item Details" w='100vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
            </div>
        </>
    );
}


export default CostSheetDetails;