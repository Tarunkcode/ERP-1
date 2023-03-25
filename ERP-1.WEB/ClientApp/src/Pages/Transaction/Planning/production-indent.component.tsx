import * as React from 'react';
import { MasterInput2 } from '../../../components/custom-input/custom-input.component';
import { AutocompleteSelectCellEditor } from 'ag-grid-autocomplete-editor';
import 'ag-grid-autocomplete-editor/dist/main.css';
import WriteGrid from '../../../components/Grid Component/grid.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';

const ProductionIndent = () => {

    let data: any[] = [{ ic: null, in: null, qty: null, uom: null, price: null, value: null, duedate: null }]

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

    {
        field: 'in', headerName: 'Item Name', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,

            placeholder: "Select Item Name"
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return "";
        },
        editable: true

    },
    { field: 'qty', headerName: 'Qty', minWidth: 200 },
    { field: 'uom', headerName: 'UOM', minWidth: 200 },
    { field: 'price', headerName: 'Price', minWidth: 200 },
    { field: 'value', headerName: 'Value', minWidth: 200 },
    { field: 'duedate', headerName: 'Due Date', minWidth: 200 },

    ]

    return (
        <>
            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="row row-content col-sm-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' }}>

                    <span className="card-title" style={{
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    }}>Add Production Indent</span>

                </div>
                <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                    <div className="card-body row col-sm-12 m-0 p-0">
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Indent Details</legend>
                                
                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <MasterInput2 name="Series" label="Series" ipTitle="Enter Series" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="Vch" label="Vch No." ipTitle="Enter Vch No." ipType="text" classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="date" label="Date" ipTitle="Enter Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="formonth" label="For Month" ipTitle="Enter For Month" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    {/*<MasterInput2 name="excel" label="Excel File Details" ipTitle="Enter Date" ipType="file" classCategory="form-control col-4 inp" />*/}
                                    {/*<span className="col-1 m-0"></span>*/}
                                    {/*<MasterInput2 name="formonth" label="For Month" ipTitle="Enter For Month" ipType="date" classCategory="form-control col-4 inp" />*/}
                                </span>

                                <span className='d-flex section2 col-sm-12 mt-2 mb-2'>
                                 
                                    <MasterInput2 name="eud" label="Excel File Details" ipTitle="Enter Excel File Details" ipType="file" classCategory="col-4 uploaddoc" />
                                </span>
                                <div className="col-12 mt-2 d-flex justify-content-between">
                                    <button className="p-0 btn btn-info mb-2" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius: '19px', height: '40px' }}>Import</button>
</div>
                            </fieldset>
                            </form>
               
                    </div>
                    <div className="card-body row col-sm-12 m-0 p-0">
                      
                        <form className="row-content form col-sm-12 pt-0">
                            <fieldset className="form-group border p-0" >
                                <legend className="px-2" data-toggle="collapse" data-target="#sale" aria-expanded="true" aria-controls="sale" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Sale Order Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                <div className="show" id="sale">
                               
                                <span className="d-flex section2 col-sm-12 mt-2">

                                    <MasterInput2 name="FromDate" label="From Date" ipTitle="Enter From Date" ipType="date" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="ToDate" label="To Date" ipTitle="Enter To Date" ipType="date" classCategory="form-control col-4 inp" />
                                </span>



                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="ItemGroup" label="Item Group" ipTitle="Enter Item Group" ipType="text" classCategory="form-control col-4 inp" />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="formonth" label="For Month" ipTitle="Enter For Month" ipType="date" classCategory="form-control col-4 inp" />
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="duedate" label="Due Date" ipTitle="Enter Due Date" ipType="date" classCategory="form-control col-4 inp duedate" style={{ marginLeft: '20px' }} />
                                    <span className="col-2 m-0"></span>

                                    {/* <MasterInput2 name="ageproj" label="Age Projection" ipTitle="Enter Due Date" ipType="checkbox" classCategory="form-control col-4 inp duedate" />*/}


                                    </span>

                                    <span className="d-flex section2 col-sm-12 mb-2">
                                    <CustomeSwitch lablClass="custom-control-label col-8" label="Age Projection" id="c1" name="c1" classCat="form-control custom-control-input col-4 subMaster switch" />
                                        </span>

                                {/*<span className="d-flex section2 col-sm-12">*/}


                                {/*    <button type="button" className="btn btn-primary col-4" style={{ marginLeft: '10px' }}>Load Sale Order</button>*/}
                                {/*    <span className="col-2 m-0"></span>*/}

                                {/*    <button type="button" className="btn btn-secondary col-4" style={{ marginLeft: '24px' }}>Load Item as M.S.L</button>*/}
                                {/*    </span>*/}
                                    <div className="col-12 mt-2 mb-2 d-flex justify-content-between">

                                        <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '200px', borderRadius:'19px' }} onClick={() => { }} className="btn btn-primary mr-2 ml-2 pl-0 pr-0 ">Load Sale Order</button>
                                        <button type="button" style={{ border: '2px solid ', letterSpacing: 3, width: '230px', borderRadius: '19px' }} className="btn btn-secondary pl-0 pr-0">Load Item as M.S.L</button>
            
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        

                    </div>


                </div>

            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />

            <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                <div className="card col-12 col-sm-12">

                    <WriteGrid title="Item Details" w='97.8vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />

                </div>
                <div className="card col-12 col-sm-12 mt-3">
                    <WriteGrid title="Sub BOM Details" w='97.8vw' titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} />

                    <button type="button" className="btn btn-primary pl-0 pr-0 ml-2 mt-3 mb-2" style={{ borderRadius: '25px', width: '167px' }}>Load Sub BOM Item</button>
                </div>
            </div>
            <hr style={{ border: '2px solid grey', opacity: '0.5' }} />
            <div className="btn-group col-6 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} onClick={() => { }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 ">Save & Submit</button>
                <button type="button" style={{ border: '2px solid orange', letterSpacing: 3 }} className="btn btn-warning pl-0 pr-0">Quit</button>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-primary pl-0 pr-0 ml-2">Export</button>
            </div>

        </>
    )
}

export default ProductionIndent;