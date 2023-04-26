import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import * as React from 'react';
import { useState } from 'react';
import { MasterInput2 } from '../../components/custom-input/custom-input.component';
import AutoComp from '../../components/custom-input/droplist/droplist.component';
import  CustomeSwitch  from '../../components/CustomSwitch/custom-switch.component';

import WriteGrid from '../../components/Grid Component/grid.component';
import LoadGrid from '../../components/Grid Component/load-grid.component';

export default function Process_Page({ getMasterType, pageTitle, configType, handleChange, handlePosting, defaultData, virtualCode, operation, overhead, jobwork, collectOverHeadApi, collectJobApi, collectOperationApi, collectList, materialCenter, ...otherProps }: any) {
    React.useEffect(() => {
 
        console.log('default data', defaultData.esmastertable )
    }, [defaultData])

    const operationColDef = [{ field: 'srno', header: "Sr No.", maxWidth: 100, minWidth: 100, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '20px    ' } }, {
        field: 'opr', header: "Operation", maxWidth: 480, minWidth: 480, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return operation }, [operation]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            }
        },

        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true
    }];
   
    const operationData = [{ srno: 1, 'opr': null }];


    const overheadColDef = [{ field: 'srno', header: "Sr No.", maxWidth: 100, minWidth: 100, valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '20px    ' } }, {
        field: 'poh', header: "Name", maxWidth: 480, minWidth: 480, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return overhead }, [overhead]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            }
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true }]

    const overheadData = [{ srno: 1, 'poh': null }];


    const JobColDef = [{ field: 'srno', header: "Sr No.", maxWidth: 100, minWidth: 100 }, {
        field: 'jbcode', header: "Name", maxWidth: 480, minWidth: 480, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return jobwork }, [jobwork]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                },
                showOnFocus: true

            }
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true
    }, {
        field: 'jobworkon', header: "Job Worker On", maxWidth: 480, minWidth: 480, cellStyle: { paddingLeft: '0', paddingRight: '0' },

            cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: [{ label: 'Inside', value: 1}, {label: 'Outside', value: 2}],
                autocomplete: {
                    customize: function ({ input, inputRect, container, maxHeight }: any) {
                        if (maxHeight < 100) {
                            container.style.top = '';
                            container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                            container.style.maxHeight = '200px';
                        }
                    },
                    showOnFocus: true

                }
            },
            valueFormatter: (params: any) => {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return params.label;
            },
            editable: true
        }]

    const jobData = [{ srno: 1, jbcode: null, jobworkon : null }]
 
    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start" }}
                >
                    <span className="row-header p-0 m-0">Add Process Master</span>
                </div>
                {/* ------------------------------TextBox------------------------------------------------------------------------------------------- */}
                <form className="row-content form col-sm-12 pt-0">


                    <>
                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2
                                name="name"
                                handleChange={handleChange}
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].name : ''}
                                classCategory="form-control col-12 pMaster"
                                ipType="text"
                                label="Process"
                                ipTitle="Enter Process"

                            />
                            <span className="col-1 m-0"></span>
                            <AutoComp name="c21" label="Process Floor" ipTitle="Select Process Floor" list={materialCenter} defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c21 : ''} collect={collectList} classCategory="form-control col-4 inp" isMandate={true} />
                           
                        </span>
                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2
                                name="c22"
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c22 : ''}
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster select"
                                ipType="number"
                                label="P Srno For ClipBoard"
                                ipTitle="Enter ClipBoard"

                            />
                            <span className="col-1 m-0"></span>
                            <AutoComp name="c23" label="Debitor Account" ipTitle="Select Debitor Account" list={jobwork} defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c23 : ''} collect={ collectList} classCategory="form-control col-4 inp" isMandate={true} />
                           
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2
                                name="c24"
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c24 : ''}
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster select"
                                ipType="number"
                                label="Add JobWork chrgs."
                                ipTitle="Enter Add JobWork chrgs."

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].d1 : ''}
                                name="d1"
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster number"
                                ipType="number"
                                label="Tollerance (%)"
                                ipTitle="Enter Tollerance"

                            />
                        </span>
                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].d2 : ''}
                                name="d2"
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster number"
                                ipType="number"
                                label="OverHead (%)"
                                ipTitle="Enter OverHead"

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                name="c25"
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c25 : ''}
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster select"
                                ipType="number"
                                label="Material Req. before Days"
                                ipTitle="Enter Material Req. before Days"

                            />
                        </span>
                        <span className="d-flex section2 col-sm-12">
                            <MasterInput2
                                name="d3"
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].d3 : ''}
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster number"
                                ipType="number"
                                label="Process Group No"
                                ipTitle="Enter Process Group No"

                            />
                            <span className="col-1 m-0"></span>
                            <MasterInput2
                                name="d4"
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].d4 : ''}
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster number"
                                ipType="number"
                                label="Plan Hours Per Day"
                                ipTitle="Enter Plan Hours Per Day"

                            />
                        </span>

                        <span className="d-flex section2 col-sm-12">

                            <MasterInput2
                                name="d5"
                                defaultt={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].d5 : ''}
                                handleChange={handleChange}
                                classCategory="form-control col-12 pMaster number"
                                ipType="number"
                                label="Before Days"
                                ipTitle="Enter Before Days"


                            />
                        </span>
                    </>
                    <div className="col-4"></div>

                </form>
                {/* -------------------------------------------------CheckBox-------------------------------------------------------------------- */}
                <hr />
                <span className="d-flex col-sm-12 pt-0">

                    <div className="show m-0 p-0 col-6" id="Switch">
                        <span className="d-flex flex-column justify-content-between section2 col-sm-12">

                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="For Job Working" id="c1" name="c1" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c1 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="is Accounting Posting" id="c2" name="c2" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c2 : ''} />
                            </>

                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Produce Qty is Greater then Paln Qty" id="c3" name="c3" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c3 : ''} />
                            </>



                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Change Consume Item Quantity" id="c4" name="c4" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c4 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Is Consume Qty Less than Req. Qty" id="c5" name="c5" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c5 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Is Consume Qty Zero" id="c6" name="c6" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c6 : ''} />
                            </>




                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Mold Req" id="c7" name="c7" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c7 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Minus Stock Qty in Req." id="c8" name="c8" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c8 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Add New Cons. Item at Production" id="c9" name="c9" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c9 : ''} />
                            </>



                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Plan As Per Del. Date" id="c10" name="c10" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c10 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Consumption Not on Rejection" id="c11" name="c11" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c11 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Produce Item As Per Process In Sample Prod" id="c12" name="c12" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c12 : ''} />
                            </>


                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Electricity Req." id="c13" name="c13" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c13 : ''} />
                            </>

                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Show in Rejection Details Report" id="c14" name="c14" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c14 : ''} />
                            </>


                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Enable Operator Details" id="c15" name="c15" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c15 : ''} />
                            </>

                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Production With Scan Data" id="c16" name="c16" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c16 : ''} />
                            </>
                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Time Slab Wise Production" id="c17" name="c17" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c17 : ''} />
                            </>

                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label="Show Rejection % In Production MIS Report" id="c18" name="c18" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c18 : ''} />
                            </>

                            <>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Tollerance Not Required" id="c19" name="c19" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c19 : ''} />
                            </><>
                                <CustomeSwitch lablClass="custom-control-label col-9" label=" Enable Produce Item Serial No." id="c20" name="c20" classCat="form-control custom-control-input col-3 pMaster switch" handleChange={handleChange} default={defaultData.esmastertable && defaultData.esmastertable.length > 0 ? defaultData.esmastertable[0].c20 : ''} />
                            </>

                            {/*<div className="col-4"></div>*/}
                        </span>
                    </div>
                    <div className="card d-flex flex-column section2 col-sm-6">
                        {
                            virtualCode === 0 ? (<WriteGrid title="Process OverHead" titleClr="blue" OpenSubLayer={() => { }} colDef={overheadColDef} data={overheadData} collect={collectOverHeadApi} srProps="srno" H={200} />) : (<LoadGrid title="Process OverHead" titleClr="blue" OpenSubLayer={() => { }} colDef={overheadColDef} data={defaultData.processpoh} collect={collectOverHeadApi} srProps="srno" H={200} firstRow={overheadData} />)
                        }
                       
                        {
                            virtualCode === 0 ? (<WriteGrid title="Job Worker List" titleClr="blue" OpenSubLayer={() => { }} colDef={JobColDef} data={jobData} collect={collectJobApi} srProps="srno" H={200} />) : (<LoadGrid title="Job Worker List" titleClr="blue" OpenSubLayer={() => { }} colDef={JobColDef} data={defaultData.processjobworker} collect={collectJobApi} srProps="srno" H={200} firstRow={jobData} />)
                        }
                       
                        {
                            virtualCode === 0 ? (<WriteGrid title="Process Operation Details" titleClr="blue" OpenSubLayer={() => { }} colDef={operationColDef} data={operationData} collect={collectOperationApi} srProps="srno" H={200} />) : (<LoadGrid title="Process Operation Details" titleClr="blue" OpenSubLayer={() => { }} colDef={operationColDef} data={defaultData.processopration} collect={collectOperationApi} srProps="srno" H={200} firstRow={operationData} />)
                        }
                        

                    </div>

                </span>
                {/*---------------------------------------------------Tables-----------------------------------------------------------------  */}

            </div>
            <div
                className="btn-group col-12 mt-3"
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                }}
            >
                <button
                    type="button"
                    style={{
                        border: "2px solid #33b5e5",
                        letterSpacing: 3,
                        width: "100px",
                    }}
                    className="btn btn-info pl-0 pr-0"
                >
                    Save
                </button>
                <button
                    type="button"
                    style={{
                        border: "2px solid green",
                        letterSpacing: 3,
                        width: "200px",
                    }}
                    className="btn btn-success mr-2 ml-2 pl-0 pr-0 "
                    onClick={handlePosting}
                >
                    Save & Submit
                </button>
                <button
                    type="button"
                    style={{ border: "2px solid red", letterSpacing: 3, width: "100px" }}
                    className="btn btn-danger pl-0 pr-0"
                >
                    Quit
                </button>
            </div>
        </>
    );
}