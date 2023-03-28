"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var custom_input_component_1 = require("../../../components/custom-input/custom-input.component");
var custom_switch_component_1 = require("../../../components/CustomSwitch/custom-switch.component");
var react_datalist_input_1 = require("react-datalist-input");
var grid_component_1 = require("../../../components/Grid Component/grid.component");
var load_grid_component_1 = require("../../../components/Grid Component/load-grid.component");
var ag_grid_autocomplete_editor_1 = require("ag-grid-autocomplete-editor");
function SalePurchaseType_Page(_a) {
    var showBranchCode = _a.showBranchCode, defGstCatName = _a.defGstCatName, vccode = _a.vccode, defaultLoad = _a.defaultLoad, handleChange = _a.handleChange, handlePosting = _a.handlePosting, pageTitle = _a.pageTitle, getMasterType = _a.getMasterType, configType = _a.configType, SelectList = _a.SelectList, gstCat = _a.gstCat, billSundry = _a.billSundry, getTableData = _a.getTableData, pagecode = _a.pagecode, otherProps = __rest(_a, ["showBranchCode", "defGstCatName", "vccode", "defaultLoad", "handleChange", "handlePosting", "pageTitle", "getMasterType", "configType", "SelectList", "gstCat", "billSundry", "getTableData", "pagecode"]);
    react_1.useEffect(function () {
        if (configType == '/add-sale-type') {
            getMasterType(13);
        }
        else if (configType == '/add-purchase-type') {
            getMasterType(14);
        }
    }, [configType]);
    // -------------------------------------------------------------------------------------------------------------------------
    var ColDef = [{ maxWidth: 150, field: 'bssrno', headerName: "Sr No.", valueGetter: 'node.rowIndex + 1' },
        {
            field: 'bscode', headerName: 'Bill Sundry Description', maxWidth: 600, minWidth: 600, cellStyle: { paddingLeft: '0', paddingRight: '0' },
            cellEditor: ag_grid_autocomplete_editor_1.default,
            cellEditorParams: {
                required: true,
                selectData: React.useMemo(function () { return billSundry; }, [billSundry]),
                placeholder: "Select a Process"
            }, onCellValueChanged: function (params) {
                if (params.oldValue !== params.newValue) {
                    params.data.bstype = params.newValue.type;
                    params.data.nature = params.newValue.nature;
                    params.data.bsval = params.newValue.value;
                    params.api.refreshCells({ force: true });
                }
            },
            valueFormatter: function (params) {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return params.label;
            },
            editable: true
        },
        { field: 'nature', headerName: 'Nature', minWidth: 200 },
        { field: 'bstype', headerName: 'Type', minWidth: 200 },
        { field: 'bsval', headerName: 'Value', minWidth: 200, editable: true },];
    var data = vccode == 0 ? [{ bscode: null, nature: null, bstype: null, bsval: null }] : defaultLoad.sptypedetail;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, pageTitle)),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.MasterInput3, { defaultt: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].name : '', handleChange: handleChange, name: "name", classCategory: "form-control inp col-4  seriesConf", ipType: "text", label: "Name", ipTitle: "Enter Name" }),
                    React.createElement("span", { className: "col-1 m-0" }),
                    React.createElement(custom_switch_component_1.CustomeSwitch2, { default: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].taxinc : '', lablClass: "custom-control-label col-8", label: "Tax Inclusive", id: "taxinc", name: "taxinc", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    pagecode == 13 ? (React.createElement(React.Fragment, null,
                        React.createElement("label", { htmlFor: "gsttype", style: { fontSize: '1rem' }, className: "form-label labl col-2 ml-2 mr-2 labl2" }, "GST Type"),
                        React.createElement("span", { className: "col-4 m-0 p-0", style: { width: '100%' } },
                            React.createElement(react_datalist_input_1.default, { value: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].gsttype == 1 ? "Enter State" : defaultLoad.sptypeheader[0].gsttype == 2 ? "Local" : defaultLoad.sptypeheader[0].gsttype == 3 ? "Export" : '' : '', className: "d-flex col-12 m-0 p-0", inputProps: { className: 'form-control inp  datalist col-12  seriesConf', name: 'gsttype' }, listboxProps: { className: 'text-left mt-5' }, onSelect: function (item) { return SelectList(item); }, items: [{ id: 1, value: 'Enter State', name: "gsttype" }, { id: 2, value: 'Local', name: 'gsttype' }, { id: 3, value: 'Export', name: 'gsttype' }] })))) : (React.createElement(custom_input_component_1.MasterInput3, { defaultt: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].defaultvalue : '', handleChange: handleChange, name: "defaultvalue", classCategory: "form-control inp col-4  seriesConf select", ipType: "number", label: "Default Value", ipTitle: "Enter Default Value (%)" })),
                    React.createElement("span", { className: "col-1 m-0" }),
                    React.createElement(custom_switch_component_1.CustomeSwitch2, { default: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].taxexem : '', lablClass: "custom-control-label col-8", label: "GST Exempted", id: "taxexem", name: "taxexem", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement("label", { htmlFor: "usefor", style: { fontSize: '1rem' }, className: "form-label labl col-2 ml-2 mr-2 labl2" }, "Use For"),
                    React.createElement("span", { className: "col-4 m-0 p-0", style: { width: '100%' } },
                        React.createElement(react_datalist_input_1.default, { value: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].usefor == 1 ? "Company" : defaultLoad.sptypeheader[0].usefor == 2 ? "Branch" : "" : '', className: "d-flex col-12 m-0 p-0", inputProps: { className: 'form-control inp  datalist col-12  seriesConf', name: 'usefor' }, listboxProps: { className: 'text-left mt-5' }, onSelect: function (item) { return SelectList(item); }, items: [{ id: 1, value: 'Company', name: 'usefor' }, { id: 2, value: 'Branch', name: 'usefor' }] })),
                    React.createElement("span", { className: "col-1 m-0" }),
                    pagecode == 13 ? (React.createElement(custom_switch_component_1.CustomeSwitch2, { default: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].itemwisetax : '', lablClass: "custom-control-label col-8", label: "Item Wise Tax", id: "itemwisetax", name: "itemwisetax", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange }))
                        : (React.createElement(custom_switch_component_1.CustomeSwitch2, { default: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].importpurchase : '', lablClass: "custom-control-label col-8", label: "Import Purchase", id: "importpurchase", name: "importpurchase", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange }))),
                showBranchCode ? (React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.MasterInput3, { defaultt: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].branchcode : '', handleChange: handleChange, name: "branchcode", classCategory: "form-control inp col-4  seriesConf select", ipType: "text", label: "Branch Code", ipTitle: "Enter Branch Code" }),
                    React.createElement("span", { className: "col-1 m-0" }),
                    React.createElement("span", { className: "col-4 m-0" }))) : null,
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    pagecode == 13 ? (React.createElement(React.Fragment, null,
                        React.createElement("label", { htmlFor: "gstcat", style: { fontSize: '1rem' }, className: "form-label labl col-2 ml-2 mr-2 labl2" }, "GST Category"),
                        React.createElement("span", { className: "col-4 m-0 p-0", style: { width: '100%' } },
                            React.createElement(react_datalist_input_1.default, { value: defGstCatName, className: "d-flex col-12 m-0 p-0", inputProps: { className: 'form-control inp  datalist col-12  seriesConf', name: 'gstcat' }, listboxProps: { className: 'text-left mt-5' }, onSelect: function (item) { return SelectList(item); }, items: gstCat })))) : (React.createElement(custom_input_component_1.MasterInput3, { handleChange: function () { }, name: "", classCategory: "form-control inp col-4  seriesConf select invisible", ipType: "text", label: "", ipTitle: "" })),
                    React.createElement("span", { className: "col-1 m-0" }),
                    pagecode == 13 ? (React.createElement(custom_switch_component_1.CustomeSwitch2, { default: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].gstenable : '', lablClass: "custom-control-label col-8", label: "GST", id: "gstenable", name: "gstenable", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange }))
                        : (React.createElement(custom_switch_component_1.CustomeSwitch2, { default: defaultLoad.sptypeheader ? defaultLoad.sptypeheader[0].perlineitem : '', lablClass: "custom-control-label col-8", label: "Per Line Item", id: "perlineitem", name: "perlineitem", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange }))))),
        React.createElement("hr", null),
        vccode == '0' ? React.createElement(grid_component_1.default, { title: "Bill Sundry Details", titleClr: "blue", OpenSubLayer: function () { }, colDef: ColDef, data: data, collect: getTableData, srProps: "bssrno" })
            : React.createElement(load_grid_component_1.default, { title: "Bill Sundry Details", titleClr: "blue", OpenSubLayer: function () { }, colDef: ColDef, data: data, collect: getTableData, srProps: "bssrno" }),
        React.createElement("hr", null),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 ", onClick: handlePosting }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
}
exports.default = SalePurchaseType_Page;
//# sourceMappingURL=sale-purchase-type.page.js.map