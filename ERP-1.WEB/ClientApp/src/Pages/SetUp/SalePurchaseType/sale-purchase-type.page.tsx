
import * as React from 'react';
import { useState, useEffect } from 'react';
import CustomInput, { CustomSelect, MasterInput3 } from '../../../components/custom-input/custom-input.component';
import { CustomeSwitch2 } from '../../../components/CustomSwitch/custom-switch.component';

import DatalistInput from 'react-datalist-input';
import WriteGrid from '../../../components/Grid Component/grid.component';
import LoadGrid from '../../../components/Grid Component/load-grid.component';
import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import { store2 } from '../../../Redux/config/config.reducer';
export default function SalePurchaseType_Page({ showBranchCode, defGstCatName, vccode, defaultLoad, handleChange, handlePosting, pageTitle, getMasterType, configType, SelectList, gstCat, billSundry, getTableData, pagecode, ...otherProps }: any) {

    useEffect(() => {
        if (configType == '/add-sale-type') {
            getMasterType(13)
        }
        else if (configType == '/add-purchase-type') {
            getMasterType(14)
        }
    }, [configType])

    // -------------------------------------------------------------------------------------------------------------------------
    var ColDef: any[] = [{ maxWidth: 150, field: 'bssrno', headerName: "Sr No.", valueGetter: 'node.rowIndex + 1', cellStyle: {paddingLeft:'20px    '} },
    {
        field: 'bscode', headerName: 'Bill Sundry Description', maxWidth: 600, minWidth: 600, cellStyle: { paddingLeft: '0', paddingRight: '0' },

        cellEditor: AutocompleteSelectCellEditor,
        cellEditorParams: {
            required: true,
            selectData: React.useMemo(() => { return billSundry }, [billSundry]),
            autocomplete: {
                customize: function ({ input, inputRect, container, maxHeight }: any) {
                    if (maxHeight < 100) {
                        container.style.top = '';
                        container.style.bottom = (window.innerHeight - inputRect.bottom + input.offsetHeight) + 'px';
                        container.style.maxHeight = '200px';
                    }
                }
            }
        },
        onCellValueChanged: (params: any) => {
            if (params.oldValue !== params.newValue) {

                params.data.bstype = params.newValue.type;
                params.data.nature = params.newValue.nature;
                params.data.bsval = params.newValue.value;

                params.api.refreshCells({ force: true });
            }
        },
        valueFormatter: (params: any) => {
            if (params.value) {
                return params.value.label || params.value.value || params.value;
            }
            return params.label;
        },
        editable: true

    },
    { field: 'nature', headerName: 'Nature', minWidth: 200 },
    { field: 'bstype', headerName: 'Type', minWidth: 200 },
    { field: 'bsval', headerName: 'Value', minWidth: 200, editable: true },

    ]

    let data: any[] = vccode == 0 ? [{ bscode: null, nature: null, bstype: null, bsval: null }] : defaultLoad.sptypedetail;

    return (
        <>
            <div className="main card firstDiv">
                <div
                    className="text-center card-title col-12"
                    style={{ textAlign: "start", backgroundColor: "#8389d4" }}
                >
                    <span className="row-header p-0 m-0">{pageTitle}</span>
                </div>
                <form className="row-content form col-sm-12 pt-0">



                    <span className="d-flex section2 col-sm-12">

                        <MasterInput3
                            defaultt={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].name : ''}
                            handleChange={handleChange}
                            name="name"
                            classCategory="form-control inp col-4  seriesConf"
                            ipType="text"
                            label="Name"
                            ipTitle="Enter Name"

                        />
                        <span className="col-1 m-0"></span>

                        <CustomeSwitch2
                            default={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].taxinc : ''}
                            lablClass="custom-control-label col-8" label="Tax Inclusive" id="taxinc" name="taxinc" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />
                    </span>
                    <span className="d-flex section2 col-sm-12">

                        {
                            pagecode == 13 ? (
                                <>
                                    <label htmlFor="gsttype" style={{ fontSize: '1rem' }} className="form-label labl col-2 ml-2 mr-2 labl2">GST Type</label>

                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].gsttype == 1 ? "Enter State" : defaultLoad.sptypeheader[0].gsttype == 2 ? "Local" : defaultLoad.sptypeheader[0].gsttype == 3 ? "Export" : '' : ''}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp  datalist col-12  seriesConf', name: 'gsttype' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => SelectList(item)}
                                            items={[{ id: 1, value: 'Enter State', name: "gsttype" }, { id: 2, value: 'Local', name: 'gsttype' }, { id: 3, value: 'Export', name: 'gsttype' }]}
                                        />

                                    </span>
                                </>
                            ) : (<MasterInput3
                                    defaultt={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].defaultvalue : ''}
                                handleChange={handleChange}
                                name="defaultvalue"
                                classCategory="form-control inp col-4  seriesConf select"
                                ipType="number"
                                label="Default Value"
                                ipTitle="Enter Default Value (%)"

                            />)
                        }


                        <span className="col-1 m-0"></span>


                        <CustomeSwitch2
                            default={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].taxexem : ''}
                            lablClass="custom-control-label col-8" label="GST Exempted" id="taxexem" name="taxexem" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />


                    </span>
                    <span className="d-flex section2 col-sm-12">

                        <label htmlFor="usefor" style={{ fontSize: '1rem' }} className="form-label labl col-2 ml-2 mr-2 labl2">Use For</label>

                        <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                            <DatalistInput
                                value={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].usefor == 1 ? "Company" : defaultLoad.sptypeheader[0].usefor == 2 ? "Branch" : "" : ''}
                                className="d-flex col-12 m-0 p-0"
                                inputProps={{ className: 'form-control inp  datalist col-12  seriesConf', name: 'usefor' }}
                                listboxProps={{ className: 'text-left mt-5' }}

                                onSelect={(item: any) => SelectList(item)}
                                items={[{ id: 1, value: 'Company', name: 'usefor' }, { id: 2, value: 'Branch', name: 'usefor' }]}
                            />

                        </span>

                        <span className="col-1 m-0"></span>
                        {
                            pagecode == 13 ? (<CustomeSwitch2
                                default={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].itemwisetax : ''}
                                lablClass="custom-control-label col-8" label="Item Wise Tax" id="itemwisetax" name="itemwisetax" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />)

                                : (<CustomeSwitch2
                                    default={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].importpurchase : ''}
                                    lablClass="custom-control-label col-8" label="Import Purchase" id="importpurchase" name="importpurchase" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />)
                        }


                    </span>
                    {
                        showBranchCode ? (
                            <span className="d-flex section2 col-sm-12">
                                <MasterInput3
                                    defaultt={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].branchcode : ''}
                                    handleChange={handleChange}
                                    name="branchcode"
                                    classCategory="form-control inp col-4  seriesConf select"
                                    ipType="text"
                                    label="Branch Code"
                                    ipTitle="Enter Branch Code"

                                />
                                <span className="col-1 m-0"></span>
                                <span className="col-4 m-0"></span>
                            </span>
                        ) : null
                    }
                    <span className="d-flex section2 col-sm-12">
                        {
                            pagecode == 13 ? (
                                <>

                                    <label htmlFor="gstcat" style={{ fontSize: '1rem' }} className="form-label labl col-2 ml-2 mr-2 labl2">GST Category</label>

                                    <span className="col-4 m-0 p-0" style={{ width: '100%' }}>
                                        <DatalistInput
                                            value={defGstCatName}
                                            className="d-flex col-12 m-0 p-0"
                                            inputProps={{ className: 'form-control inp  datalist col-12  seriesConf', name: 'gstcat' }}
                                            listboxProps={{ className: 'text-left mt-5' }}

                                            onSelect={(item: any) => SelectList(item)}
                                            items={gstCat}
                                        />

                                    </span>
                                </>
                            ) : (<MasterInput3

                                handleChange={() => { }}
                                name=""

                                    classCategory="form-control inp col-4  seriesConf select invisible"
                                ipType="text"
                                label=""
                                ipTitle=""

                            />)
                        }

                        <span className="col-1 m-0"></span>
                        {
                            pagecode == 13 ? (<CustomeSwitch2
                                default={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].gstenable : ''}
                                lablClass="custom-control-label col-8" label="GST" id="gstenable" name="gstenable" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />)
                                : (
                                    <CustomeSwitch2
                                        default={defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].perlineitem : ''}
                                        lablClass="custom-control-label col-8" label="Per Line Item" id="perlineitem" name="perlineitem" classCat="form-control custom-control-input col-3 seriesConf switch" handleChange={handleChange} />)
                        }




                    </span>
                   


                </form>

            </div>
            <hr />
            {
                vccode == '0' ? <WriteGrid title="Bill Sundry Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} collect={getTableData} srProps="bssrno" />
                    : <LoadGrid title="Bill Sundry Details" titleClr="blue" OpenSubLayer={() => { }} colDef={ColDef} data={data} collect={getTableData} srProps="bssrno" />
            }
            <hr />

            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 " onClick={handlePosting}>Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
        </>
    );
}