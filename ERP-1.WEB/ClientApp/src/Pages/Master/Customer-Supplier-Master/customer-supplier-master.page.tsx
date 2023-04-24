import AutocompleteSelectCellEditor from 'ag-grid-autocomplete-editor';
import * as React from 'react';
import { toast } from 'react-toastify';
import { CustomSelect, MasterInput2 } from '../../../components/custom-input/custom-input.component';
import AutoComp from '../../../components/custom-input/droplist/droplist.component';
import CustomeSwitch from '../../../components/CustomSwitch/custom-switch.component';
import { NumericEditor } from '../../../components/Grid Component/EnterOnlyNumbers';

import WriteGrid from '../../../components/Grid Component/grid.component';
import LoadGrid from '../../../components/Grid Component/load-grid.component';


export function CusSupMaster({ handleChangeField, opn, opnName, title, handleAddressOptions, handleSave$Submit, formDataCollection, accountType, series, collectAccSelectedItem, defaultData, collectAddSelectedItem, masters, getShippingTableData, getPlantTableData, getBankTableData, vccode, handleAddressDetailsChange, FetchErrorList, addressType, ...otherProps }: any) {

    const bankColDef = [
        { minWidth: 150, maxWidth: 150, field: 'srno', headerName: "Sr No.", valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '20px', textAlign: 'right' } },
        {
            field: 'name', header: "Name Of Bank", maxWidth: 400, minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },

            cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.bank }, [masters.bank]),
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

        },
        {
            field: 'address', header: "Branch", maxWidth: 400, minWidth: 400, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.branch }, [masters.branch]),
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
        },
        { field: 'acno', header: "Account Number", maxWidth: 400, minWidth: 400, editable: true, cellEditor: NumericEditor },
        {
            field: 'acctype', header: "Account Type", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: [{ label: 'Saving', value: 'Saving' }, { label: 'Current', value: "Current" }],
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
        },
        {
            field: 'swiftcode', header: "Swift Code", maxWidth: 400, minWidth: 400, editable: true,
            onCellValueChanged: (params: any) => {
                if (params.oldValue !== params.newValue) {

                    let length = params.newValue.length;
                    if (length < 8 || length > 11) {
                        params.data.swiftcode = null;
                        params.api.refreshCells({ force: true });
                        toast.info('Invalid Swift Code')

                    } else { }
                }
            }
        },
        {
            field: 'ifsccode', header: "IFSC Code", maxWidth: 400, minWidth: 400, editable: true,
            onCellValueChanged: (params: any) => {
                if (params.oldValue !== params.newValue) {

                    let length = params.newValue.length;
                    if (length !== 11) {
                        params.data.ifsccode = null;
                        params.api.refreshCells({ force: true });
                        toast.info('Invalid IFSC Code')

                    } else { }
                }
            }
        },
        {
            field: 'currency', header: "Currency", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.currency }, [masters.currency]),
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
        },
        {
            field: 'country', header: "Country", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.country }, [masters.country]),
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
            }, editable: true
        },


    ]
    let bankData: any[] = [{
        "name": null, "address": null, "acno": null, "acctype": null, "swiftcode": null,
        "ifsccode": null, "currency": null, "country": null
    }]


    const shippingColDef = [
        { maxWidth: 150, field: 'srno', headerName: "Sr No.", valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '20px' } },
        { field: 'pan', header: "PAN", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address1', header: "Address-1", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address2', header: "Address-2", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address3', header: "Address-3", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address4', header: "Address-4", maxWidth: 400, minWidth: 400, editable: true },
        {
            field: 'country', header: "Country", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.country }, [masters.country]),
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
            }, editable: true },
        {
            field: 'zone', header: "Zone", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.zone }, [masters.zone]),
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
            }, editable: true },
        {
            field: 'state', header: "State", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.state }, [masters.state]),
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
            }, editable: true},
        {
            field: 'city', header: "City", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.city }, [masters.city]),
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
            }, editable: true},
        { field: 'postcode', header: "Post Code", maxWidth: 200, minWidth: 200, editable: true },
        { field: 'tel', header: "Tel No.", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'gstno', header: "GST", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'distance', header: "Distance", maxWidth: 200, minWidth: 200, editable: true }
    ]
    let shippingData: any[] = [{
        "pan": null, "address1": null, "address2": null, "address3": null, "address4": null, "country": null, "zone": null, "state": null, "city": null, "postcode": null, "tel": null, "gstno": null, "distance": null
    }]

    const plantColDef = [
        { maxWidth: 150, field: 'srno', headerName: "Sr No.", valueGetter: 'node.rowIndex + 1', cellStyle: { paddingLeft: '20px' } },
        { field: 'pan', header: "PAN", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address1', header: "Address-1", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address2', header: "Address-2", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address3', header: "Address-3", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'address4', header: "Address-4", maxWidth: 400, minWidth: 400, editable: true },
        {
            field: 'country', header: "Country", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.country }, [masters.country]),
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
            }, editable: true },
        {
            field: 'zone', header: "Zone", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.zone }, [masters.zone]),
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
            }, editable: true },
        {
            field: 'state', header: "State", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.state }, [masters.state]),
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
            }, editable: true },
        {
            field: 'city', header: "City", maxWidth: 200, minWidth: 200, cellEditor: AutocompleteSelectCellEditor,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(() => { return masters.city }, [masters.city]),
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
            }, editable: true },
        { field: 'postcode', header: "Post Code", maxWidth: 200, minWidth: 200, editable: true },
        { field: 'tel', header: "Tel No.", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'gstno', header: "GST", maxWidth: 400, minWidth: 400, editable: true },
        { field: 'distance', header: "Distance", maxWidth: 200, minWidth: 200, editable: true }
    ]
    let plantData: any[] = [{
        "pan": null, "address1": null, "address2": null, "address3": null, "address4": null, "country": null,
        "zone": null, "state": null, "city": null, "postcode": null, "tel": null, "gstno": null, "distance": null
    }]

    return (
        <>
            <div className="main card firstDiv" >
                <form className="form" id="form m-0 p-0">

                <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                    <span className="row-header p-0 m-0" >{title}</span>
                </div>
                <div className="card-body row col-sm-12 m-0 p-0">
                    <form className="row-content form col-sm-12 pt-0">
                        <fieldset className="form-group border p-0" >
                            <legend className="px-2" data-toggle="collapse" data-target="#genDetails" aria-expanded="true" aria-controls="genDetails" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>General Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                            <div className="show" id="genDetails">
                                <span className="d-flex section2 col-sm-12">

                                        <AutoComp name="series" label="Series" ipTitle="Select Series" list={series} ipType="text" collect={collectAccSelectedItem} classCategory="form-control col-4 AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].seriesname : null} isMandate={true} />
                                    <span className="col-1 m-0"></span>


                                        <MasterInput2 name="codestr" label={accountType == 1 ? "Customer Code" : "Supplier Code"} ipTitle={accountType == 1 ? "Enter Customer Code" : "Enter Supplier Code"} ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].codestr : null} isMandate={true}/>

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="name" label={accountType == 1 ? "Customer Name" : "Supplier Name"} ipTitle={accountType == 1 ? "Enter Customer Name" : "Enter Supplier Name"} ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].name : null} isMandate={true} />
                                    <span className="col-1 m-0"></span>


                                        <MasterInput2 name="printname" label="Print Name" ipTitle="Enter Print Name" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].printname : null} isMandate={ true} />


                                </span>

                                <span className="d-flex section2 col-sm-12">
                                        <AutoComp name="group" label={accountType == 1 ? "Customer Group" : "Supplier Group"} ipTitle={accountType == 1 ? "Enter Customer Group" : "Enter Supplier Group"} ipType="text" list={accountType == 1 && masters ? masters.custGp : masters.supGp} collect={collectAccSelectedItem} classCategory="form-control col-4 AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].groupname : null} isMandate={true} />
                                    <span className="col-1 m-0"></span>

                                    <AutoComp name="ledgertype" label="Ledger Type" ipTitle="Ledger Type" ipType="text" list={[{ label: 'Ledger', value: "Ledger" }, { label: 'Sub-Ledger', value: "Sub-Ledger" }]} collect={collectAccSelectedItem} classCategory="form-control col-4 AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].ledgertype : null} />


                                </span>
                                <span className="d-flex section2 col-sm-12">

                                        <AutoComp name="delterm" label="Delivery Terms" ipTitle="Enter Delivery Terms" ipType="text" list={masters ? masters.delTerms : []} collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].deltermname : null} isMandate={true} />

                                    <span className="col-1 m-0"></span>

                                        <AutoComp name="payterm" label="Payment terms" ipTitle="Enter Payment terms" ipType="text" list={masters ? masters.PayTerms : []} collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].paytermname : null} isMandate={true}/>
                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="opbal" label="Opening Balance" ipTitle="Enter Opening Balance" ipType="numeric" handleChange={handleChangeField} classCategory="form-control col-12 float AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].opbal : null} />
                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="paydate" label="1st payment Date" ipTitle="Enter Payment terms" ipType="date" handleChange={handleChangeField} classCategory="form-control col-12 AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].paydate : null} />


                                </span>

                                <span className="d-flex section2 col-sm-12">

                                    <MasterInput2 name="dayfreq" label="Days Frequency" ipTitle="Enter Days Frequency" ipType="numeric" handleChange={handleChangeField} classCategory="form-control col-12 float AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].dayfreq : null} />
                                    <span className="col-1 m-0"></span>

                                    <AutoComp name="tax" label="Tax" ipTitle="Enter Tax" ipType="text" list={masters ? masters.gstCat : []} collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].taxname : null} />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <AutoComp name="type" label="Type" ipTitle="Select Type" list={[{ value: 1, label: 'Dealer' }, { value: 2, label: 'Sub Dealer' }, { value: 3, label: 'Distributer' }, { value: 4, label: 'Other' }]} ipType="text" collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].typename : null} />



                                    <span className="col-1 m-0"></span>

                                    <CustomSelect classCategory="form-control col-4 AccountMaster" handleChange={handleChangeField} name="scheme" label="Scheme" def={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].scheme : null} />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <AutoComp name="payto" label="Pay / To" ipTitle="Select Pay/To" list={[{ value: 1, label: 'Paid' }, { value: 2, label: 'To Pay' }]} ipType="text" collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].paytoname : null} />

                                    <span className="col-1 m-0"></span>

                                    <AutoComp name="nature" label="Nature" ipTitle="Enter Nature" ipType="text" list={masters ? masters.nature : []} collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].naturename : null} />

                                </span>


                                <span className="d-flex section2 col-sm-12">

                                    <AutoComp name="multicurrency" label="Multi Currency" ipTitle="Enter MultiCurrency" ipType="text" list={masters ? masters.currency : []} collect={collectAccSelectedItem} classCategory="form-control col-4 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].multicurrencyname : null} />
                                    <span className="col-1 m-0"></span>
                                    <CustomSelect classCategory="form-control col-4 AccountMaster" handleChange={handleChangeField} name="majorproduct" label="Major Product" def={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].majorproduct : 0} />
                                </span>
                                <div className="card col-sm-12 p-4 mt-4">
                                    <span className="form col-sm-12 row-content card-body pt-0 pb-0 px-2">
                                        <span className="d-flex flex-row justifi-content-space-around section2 col-sm-4" style={{ marginLeft: '23px' }}>
                                            <CustomeSwitch lablClass="custom-control-label col-6" label="Is Block" id="c1" name="c1" classCat="form-control custom-control-input col-3 subMaster  switch AccountMaster" handleChange={handleChangeField} default={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].c1 : 0} />
                                            <CustomeSwitch lablClass="custom-control-label col-6" label="Enable TCS" id="c2" name="c2" classCat="form-control custom-control-input col-3 subMaster switch AccountMaster" handleChange={handleChangeField} default={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].c2 : 0} />
                                        </span>

                                    </span>
                                </div>
                            </div>
                        </fieldset>
                    </form>

                    {/*<div className="card addSalecard col-sm-12">*/}
                    {/*    <div className="card-body" style={{ margin: '0', padding: '0', minHeight: '36vh' }}>*/}

                    {/*    </div>*/}
                    {/*</div>*/}

                    <form className="form col-sm-12 row-con`tent card-body pt-0 pb-0">
                        <fieldset className="form-group border p-0">
                            <legend className="px-2" data-toggle="collapse" data-target="#personalDet" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>Personal Details<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>
                            <div className="collapse" id="personalDet">

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pdperson" label="Contact Person" ipTitle="Enter Pay To" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].pdperson : null} />
                                    <span className="col-1 m-0"></span>
                                        <MasterInput2 name="pdmob" label="Mobile No." ipTitle="Enter Mobile No." ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].pdmob : null} key4validate="mobile" getErrorList={FetchErrorList } />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                        <MasterInput2 name="pdemail" label="Email" ipTitle="Enter Email" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].pdemail : null} key4validate="email" getErrorList={FetchErrorList} />

                                    <span className="col-1 m-0"></span>
                                    <MasterInput2 name="pddesignation" label="Designation" ipTitle="Enter Designation" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].pddesignation : null} />

                                </span>

                                <span className="d-flex section2 col-sm-12">
                                    <MasterInput2 name="pdexe" label="Chief Executive" ipTitle="Enter Chief Executive" ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].pdexe : null} />
                                    <span className="col-1 m-0"></span>
                                        <MasterInput2 name="pdexetel" label="Chief Exe. Mob." ipTitle="Enter Chief Exe. Mobile No." ipType="text" handleChange={handleChangeField} classCategory="form-control col-12 str AccountMaster" defaultt={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].pdexetel : null} key4validate="mobile" getErrorList={FetchErrorList}/>

                                </span>

                                <span className="d-flex section2 col-sm-12">



                                </span>

                            </div>
                        </fieldset>
                    </form>
                    <div className="row card-footer col-12" style={{ margin: '1em 0%' }}>
                        <span className="d-flex col-12 align-items-center m-0 p-0">
                            <>
                                <label htmlFor="addresstype" style={{ fontSize: '1em', width: '100%', marginLeft: '2em' }} className="form-label col-2">Address Options</label>
                                <select name="addresstype" className="form-control str AddressDetail col-3" onChange={handleAddressOptions} >

                                    <option key="Corporate" style={{ fontFamily: "trebuc" }} value={1} selected >Corporate</option>
                                    <option key="Plant" style={{ fontFamily: "trebuc" }} value={2} >Plant</option>
                                    {
                                        accountType == 1 ? (<option key="Shipping" style={{ fontFamily: "trebuc" }} value={3}>Shipping</option>) : null
                                    }

                                </select>
                                <svg className="m-0 ml-1 p-0" style={{ width: '20px', cursor: 'pointer', visibility: 'hidden' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" /></svg>

                            </>
                        </span>

                    </div>

                    <div style={{ margin: '0', width: '100%', padding: '0' }} id="addres">
                        <form className="form col-sm-12 row-content card-body pt-0">

                            <fieldset className="form-group border p-0 pb-4">
                                <legend className="px-2" data-toggle="collapse" data-target="#contAdd" aria-expanded="false" aria-controls="personalDet" style={{ fontSize: '1.1rem', cursor: 'pointer' }}>{opnName}<svg className="ml-1" style={{ width: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" /></svg></legend>

                                {

                                    addressType == 1 ? (
                                        <div className="collapse" id="contAdd">
                                            <span className="d-flex section2 col-sm-12">
                                                    <MasterInput2 name="email" classCategory="form-control col-12 str AddressDetail" ipType="text" label="Email ID" ipTitle="Enter Email" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].email : null} key4validate="email" getErrorList={FetchErrorList} />

                                                <span className="col-1 m-0"></span>
                                                    <MasterInput2 name="tel" classCategory="form-control col-12 str AddressDetail" ipType="tel" label="Mobile No." ipTitle="Enter Mobile Number" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].tel : null} key4validate="mobile" getErrorList={FetchErrorList}/>


                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                    <MasterInput2 name="address1" classCategory="form-control col-12 str AddressDetail" ipType="text" label="Address" ipTitle="Enter Address" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].address1 : null} length={60} isMandate={true}/>
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="address2" classCategory="form-control col-12 str AddressDetail" ipType="text" label="" ipTitle="Enter Address" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].address2 : null} length={60} />


                                                {/*    <MasterInput2 name="zone" classCategory="form-control inp AddressDetail" ipType="text" label="Zone" ipTitle="Enter Zone" dataArray={masters.zone} change={handleChangeField} />*/}
                                                {/*    <HiddenModal />*/}
                                                {/*</>*/}

                                            </span>

                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="address3" classCategory="form-control col-12 str AddressDetail" ipType="text" label="" ipTitle="Enter Address" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].address3 : null} length={60} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="address4" classCategory="form-control col-12 str AddressDetail" ipType="text" label="" ipTitle="Enter Address" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].address4 : null} length={60} />


                                            </span>

                                            <span className="d-flex section2 col-sm-12">


                                                    <AutoComp name="country" ipType="text" label="Country" ipTitle="Enter Country" list={masters ? masters.country : []} collect={collectAddSelectedItem} classCategory="form-control col-4 AddressDetail" defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].countryname : null} isMandate={true} />
                                                <span className="col-1 m-0"></span>

                                                <AutoComp name="zone" ipType="text" label="Zone" ipTitle="Enter Zone" list={masters ? masters.zone : []} collect={collectAddSelectedItem} classCategory="form-control col-4 AddressDetail" defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].zonename : null} />

                                            </span>

                                            <span className="d-flex section2 col-sm-12">

                                                    <AutoComp name="state" ipType="text" label="State" ipTitle="Enter State" list={masters ? masters.state : []} collect={collectAddSelectedItem} classCategory="form-control col-4 AddressDetail" defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].statename : null} isMandate={true}/>


                                                <span className="col-1 m-0"></span>

                                                    <AutoComp name="city" ipType="text" label="City" ipTitle="Enter City" list={masters ? masters.city : []} collect={collectAddSelectedItem} classCategory="form-control col-4 AddressDetail" defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].cityname : null} isMandate={true}/>
                                            </span>
                                            <span className="d-flex section2 col-sm-12">
                                                <MasterInput2 name="station" classCategory="form-control col-12 str AddressDetail" ipType="text" label="Station" ipTitle="Enter Station" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].station : null} />
                                                <span className="col-1 m-0"></span>
                                                <MasterInput2 name="postcode" classCategory="form-control col-12 str AddressDetail" ipType="text" label="Pin Code" ipTitle="Enter Pin Code" handleChange={handleAddressDetailsChange} defaultt={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail[0].postcode : null} />
                                            </span>

                                        </div>
                                    ) : null
                                }
                                {
                                        addressType == 2 ? (
                                        <div className="collapse row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3" id="contAdd">
                                            {/* Address Details*/}
                                            {
                                                vccode == 0 ? (<WriteGrid title="Plant Details" titleClr="blue" OpenSubLayer={() => { }} colDef={plantColDef} data={plantData} collect={getPlantTableData} srProps="srno" />
                                                ) : (<LoadGrid title="Plant Details" titleClr="blue" OpenSubLayer={() => { }} colDef={plantColDef} data={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail : []} collect={getPlantTableData} srProps="srno" firstRow={plantData} />
                                                )
                                            }

                                        </div>
                                    ) : null
                                }
                                {
                                        addressType == 3 ? (
                                        <div className="collapse row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3" id="contAdd">
                                            {/* Address Details*/}
                                            {
                                                vccode == 0 ? (
                                                    <WriteGrid title="Shipping Details" titleClr="blue" OpenSubLayer={() => { }} colDef={shippingColDef} data={shippingData} collect={getShippingTableData} srProps="srno" />
                                                ) : (<LoadGrid title="Shipping Details" titleClr="blue" OpenSubLayer={() => { }} colDef={shippingColDef} collect={getShippingTableData} srProps="srno" data={defaultData && defaultData.addressdetail && defaultData.addressdetail.length > 0 ? defaultData.addressdetail : []} firstRow={shippingData} />
                                                )
                                            }

                                        </div>
                                    ) : null
                                }
                            </fieldset>

                        </form>
                    </div>
                    <hr style={{ margin: '0', padding: '0' }} />
                    <div className="row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3">
                        {/* Bank Details*/}
                        {
                            vccode == 0 ?
                                (<WriteGrid title="Bank Details" titleClr="blue" OpenSubLayer={() => { }} colDef={bankColDef} data={bankData} collect={getBankTableData} srProps="srno" />)
                                : (<LoadGrid title="Bank Details" titleClr="blue" OpenSubLayer={() => { }} colDef={bankColDef} collect={getBankTableData} srProps="srno" data={defaultData && defaultData.bankdetail && defaultData.bankdetail.length > 0 ? defaultData.bankdetail : []} firstRow={bankData} />)
                        }
                    </div>

                    <hr style={{ margin: '0', padding: '0' }} />

                    <div className="row row-content col-sm-12 addSaleForm container container-fluid container-lg">
                        {
                            accountType == 1 ? (
                                <div className="card col-sm-5" style={{ padding: '0', margin: '0' }}>

                                    <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                        <span className="row-header p-0 m-0" >Last 3 Years TurnOver</span>
                                    </div>
                                    <div className="card-body table-responsive" style={{ margin: '0', padding: '0' }}>
                                        <table className="table table-striped table-bordered table-hover table-sm" style={{ margin: '0' }}>
                                            <thead className="thead-light table-secondary text-center">
                                                <tr>
                                                    <th style={{ fontSize: '1rem' }}>S. No</th>
                                                    <th style={{ fontSize: '1rem' }}>Year</th>
                                                    <th style={{ fontSize: '1rem' }}>TurnOver(Lacks)</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td> <input name="year1" className="form-control inp str AccountMaster" type="number" title="Enter Year No." onBlur={handleChangeField} style={{ width: '99%', margin: 'auto' }} autoComplete="off" defaultValue={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].year1 : null} /></td>
                                                    <td> <input name="turnover1" className="form-control inp float AccountMaster" type="number" title="Enter Turnover 1" onBlur={handleChangeField} style={{ width: '99%', margin: 'auto' }} autoComplete="off" defaultValue={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].turnover1 : null} /></td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td><input name="year2" className="form-control inp str AccountMaster" type="number" title="Enter Year No." onBlur={handleChangeField} style={{ width: '99%', margin: 'auto' }} defaultValue={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].year2 : null} /></td>
                                                    <td><input name="turnover2" className="form-control inp float AccountMaster" type="number" title="Enter Year No." onBlur={handleChangeField} style={{ width: '99%', margin: 'auto' }} autoComplete="off" defaultValue={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].turnover2 : null} /></td>


                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td><input name="year3" className="form-control inp str AccountMaster" type="number" title="Enter Year No." onBlur={handleChangeField} style={{ width: '99%', margin: 'auto' }} defaultValue={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].year3 : null} /></td>
                                                    <td><input name="turnover3" className="form-control inp float AccountMaster" type="number" title="Enter Year No." onBlur={handleChangeField} style={{ width: '99%', margin: 'auto' }} autoComplete="off" defaultValue={defaultData && defaultData.accountmaster && defaultData.accountmaster.length > 0 ? defaultData.accountmaster[0].turnover3 : null} /></td>


                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            ) : null
                        }

                        <div className="card col-sm-6" style={{ padding: '0', margin: '0' }}>
                            <div className="text-center card-title col-12" style={{ textAlign: 'start' }}>
                                <span className="row-header p-0 m-0" >Additional Docs</span>
                            </div>

                            <div className="card-body col-12" style={{ margin: '0', padding: '0' }}>

                                <span className="d-flex col-sm-12 m-0 pl-0 pr-0">
                                    <>
                                        <label htmlFor="empName" style={{ fontSize: '1rem' }} className="form-label col-2 labl2 labl">Data Collected By</label>
                                        <input type="text" name="empName" className="form-control str AccountMaster inp col-4 AccountMaster" />
                                    </>
                                    <>
                                        <label htmlFor="date" style={{ fontSize: '1rem' }} className="form-label labl2 col-2 labl pt-2">Date</label>
                                        <input type="date" style={{ fontSize: '1em' }} name="date" className="form-control inp col-3 AccountMaster" />
                                    </>

                                </span>

                                <span className="d-flex col-sm-10 m-0 pl-0 pr-0">
                                    <>
                                        <label htmlFor="docs" style={{ fontSize: '0.8em' }} className="form-label ml-2">Upload Docs</label>
                                        <input type="file" name="docs" className="AccountMaster" />
                                    </>
                                    <span>
                                        <button type="button">Remove</button>
                                    </span>


                                </span>
                            </div>

                        </div>
                    </div>


                </div>
                <hr style={{ margin: '0', padding: '0' }} />
            <div className="btn-group col-12 mt-3" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <button type="button" style={{ border: '2px solid #33b5e5', letterSpacing: 3 }} className="btn btn-info pl-0 pr-0">Save</button>
                <button type="button" style={{ border: '2px solid green', letterSpacing: 3 }} className="btn btn-success mr-2 ml-2 pl-0 pr-0 " onClick={handleSave$Submit}>Save & Submit</button>
                <button type="button" style={{ border: '2px solid red', letterSpacing: 3 }} className="btn btn-danger pl-0 pr-0">Quit</button>
            </div>
                </form>
            </div>
        </>
    );

}