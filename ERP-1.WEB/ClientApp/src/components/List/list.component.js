"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_datalist_input_1 = require("react-datalist-input");
require("react-datalist-input/dist/styles.css");
var custom_input_component_1 = require("../custom-input/custom-input.component");
var grid_component_1 = require("../Grid Component/grid.component");
require("ag-grid-autocomplete-editor/dist/main.css");
var ag_grid_autocomplete_editor_1 = require("ag-grid-autocomplete-editor");
var List = function () {
    var data = [{ prc: null, ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }];
    var ColDef = [{ field: 'sn', headerName: 'S.No.', minWidth: 100, valueGetter: 'node.rowIndex + 1' },
        {
            field: 'code', headerName: 'Codestr', minWidth: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' },
            cellEditor: ag_grid_autocomplete_editor_1.default,
            cellEditorParams: {
                required: true,
                //selectData: React.useMemo(() => { return processLoad }, [processLoad]),
                placeholder: "Codestr"
            },
            valueFormatter: function (params) {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return "";
            },
            editable: true
        },
        { field: 'name', headerName: 'Name', minWidth: 200, editable: true },
        { field: 'group', headerName: 'Group', minWidth: 200, editable: true },
        { field: 'pg', headerName: 'Parent Group', minWidth: 200, editable: true },
        { field: 'opb', headerName: 'OP Bal.(DR)', minWidth: 200, editable: true },
        { field: 'opc', headerName: 'OP Bal.(CR)', minWidth: 200, editable: true },
        { field: 'dt', headerName: 'Del. Term', minWidth: 200, editable: true },
        { field: 'pt', headerName: 'Payment Term', minWidth: 200, editable: true },
        { field: 'contact', headerName: 'Contact', minWidth: 200, editable: true },
        { field: 'mbile', headerName: 'Mobile No.', minWidth: 200, editable: true },
        { field: 'email', headerName: 'Email Id', minWidth: 200, editable: true },
        { field: 'gst', headerName: 'GST No.', minWidth: 200, editable: true },
        { field: 'pan', headerName: 'PAN No.', minWidth: 200, editable: true },
        { field: 'add1', headerName: 'Address1', minWidth: 200, editable: true },
        { field: 'add2', headerName: 'Address2', minWidth: 200, editable: true },
        { field: 'add3', headerName: 'Address3', minWidth: 200, editable: true },
        { field: 'add4', headerName: 'Address4', minWidth: 200, editable: true },
        { field: 'country', headerName: 'Country', minWidth: 200, editable: true },
        { field: 'zone', headerName: 'Zone', minWidth: 200, editable: true },
        { field: 'state', headerName: 'State', minWidth: 200, editable: true },
        { field: 'city', headerName: 'City', minWidth: 200, editable: true },
        { field: 'tel', headerName: 'Tel. No.', minWidth: 200, editable: true },
        { field: 'pin', headerName: 'Pin No.', minWidth: 200, editable: true },
        { field: 'station', headerName: 'Station', minWidth: 200, editable: true }];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start' } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "List")),
            React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                    React.createElement("fieldset", { className: "form-group border p-0" },
                        React.createElement("legend", { className: "px-2", style: { fontSize: '1.1rem', cursor: 'pointer' } }, []),
                        React.createElement("div", { className: "show", id: "genDetails" },
                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '1rem' }, className: "form-label labl ml-2 mr-2 labl2" }, "Series")),
                                React.createElement("span", { className: "col-4 m-0 p-0", style: { width: '100%' } },
                                    React.createElement(react_datalist_input_1.default, { className: "d-flex col-12 m-0 p-0", inputProps: { className: 'form-control inp col-12 datalist int', name: 'series' }, listboxProps: { className: 'text-left mt-5' }, onSelect: function (item) { console.log('id', item.id); }, items: [{ id: 1, value: 'Himanshu' }, { id: 2, value: 'Tarun' }] })),
                                React.createElement("span", { className: 'col-1' }),
                                React.createElement(custom_input_component_1.MasterInput2, { name: "codestr", classCategory: "form-control inp col-4", ipType: "date", label: "From Date", ipTitle: "", dataArray: [] })),
                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                React.createElement(custom_input_component_1.MasterInput2, { name: "name", classCategory: "form-control inp col-4", ipType: "date", label: 'To Date', ipTitle: '', dataArray: [] }),
                                React.createElement("span", { className: 'col-1' }),
                                React.createElement("button", { type: "button", className: "btn pl-2 pr-0 mt-3 mb-2 col-2", style: { borderRadius: '21px', color: 'white', backgroundColor: "rgb(121, 140, 212)", letterSpacing: 3, marginLeft: '10%', top: '-11px' }, "data-toggle": "modal", "data-target": "#qcPlanCopy" }, "GetDetails"))))),
                React.createElement("hr", null),
                React.createElement(grid_component_1.default, { title: "Grid", w: '100vw', titleClr: "blue", OpenSubLayer: function () { }, colDef: ColDef, data: data }))),
        React.createElement("div", { className: "btn-group col-6 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Export"),
            React.createElement("button", { type: "button", style: { border: '2px solid orange', letterSpacing: 3 }, className: "btn btn-warning pl-0 pr-0 ml-2 mr-2" }, "Quit"))));
};
exports.default = List;
//<span>This is Under Construction...</span>
//           <UnderConstruction />
//# sourceMappingURL=list.component.js.map