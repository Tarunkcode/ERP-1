"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var custom_switch_component_1 = require("../../../components/CustomSwitch/custom-switch.component");
var BomModals_1 = require("../../../components/Modals/BomModals");
var RouteDetails_component_1 = require("./RouteDetails.component");
var ag_grid_autocomplete_editor_1 = require("ag-grid-autocomplete-editor");
require("ag-grid-autocomplete-editor/dist/main.css");
var grid_component_1 = require("../../../components/Grid Component/grid.component");
function BomRoutingConfig() {
    var _a = react_1.useState(false), isCopy = _a[0], setIsCopy = _a[1];
    var history = react_router_dom_1.useHistory();
    var OpenPrompt = function (e) {
        if (e.key === 'Insert') {
            var res = confirm("Do You Wnat to Copy");
            console.log(res);
            setIsCopy(res);
        }
    };
    var _b = React.useState(false), isItemBox = _b[0], setIsItemBox = _b[1];
    var OpenBOMItemCons = function (e) {
        console.log('this is pressed', e.keyCode);
        if (e.keyCode === 13) {
            setIsItemBox(true);
        }
    };
    var data = [{ ut: null, amt: null, setup: null, cyc: null, manpow: null, ifin: null, elec: null, totOvr: null, jbWork: null, mcDep: null }];
    var ColDef = [
        {
            field: 'prc', headerName: 'Process', width: 400, cellStyle: { paddingLeft: '0', paddingRight: '0' }, cellEditor: ag_grid_autocomplete_editor_1.AutocompleteSelectCellEditor,
            cellEditorParams: {
                selectData: [
                    { label: 'Canada', value: 'CA', group: 'North America' },
                    { label: 'United States', value: 'US', group: 'North America' },
                    { label: 'Uzbekistan', value: 'UZ', group: 'Asia' },
                ],
                placeholder: 'Select an option',
            },
            valueFormatter: function (params) {
                if (params.value) {
                    return params.value.label || params.value.value || params.value;
                }
                return "";
            },
            editable: true,
        },
        { field: 'ut', headerName: 'Unit', width: 200 },
        { field: 'amt', headerName: 'Amount', width: 200 },
        { field: 'setup', headerName: 'Set Up Time', width: 200 },
        { field: 'cyc', headerName: 'Cyclic Time', width: 200 },
        { field: 'manpow', headerName: 'Manpower', width: 200 },
        { field: 'ifin', headerName: 'Is Final', width: 200 },
        { field: 'elec', headerName: 'Electricity Unit', width: 200 },
        { field: 'totOvr', headerName: 'Total OverHead', width: 200 },
        { field: 'jbWork', headerName: 'Job Work', width: 200 },
        { field: 'mcDep', headerName: 'Machine Dep.', width: 200 }
    ];
    return (React.createElement(React.Fragment, null,
        React.createElement(BomModals_1.default, { isCopy: isCopy, isBOMAlt: false, isBOMProcess: false, isBOMRouting: false, setIsCopy: setIsCopy }),
        isItemBox ? (React.createElement(RouteDetails_component_1.default, { isItemBox: isItemBox, setIsItemBox: setIsItemBox })) : null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start' } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "BOM Routing Configuration")),
            React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                    React.createElement("fieldset", { className: "form-group border p-0" },
                        React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#genDetails", "aria-expanded": "false", "aria-controls": "genDetails", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                            "Item Details",
                            React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                        React.createElement("div", { className: "collapse show", id: "genDetails" },
                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Series"),
                                    React.createElement("input", { type: "text", name: "series", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "RCode", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Routing Code"),
                                    React.createElement("input", { type: "text", name: "RCode", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "RName", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Routing Name"),
                                    React.createElement("input", { type: "text", name: "RName", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Item Code"),
                                    React.createElement("input", { type: "text", name: "custCode", className: "form-control inp", onKeyUp: OpenPrompt })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Item Name"),
                                    React.createElement("input", { type: "text", name: "custCode", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "majProd", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "UOM"),
                                    React.createElement("input", { type: "text", name: "payTerm", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Produce Quantity"),
                                    React.createElement("input", { type: "text", name: "custName", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "majProd", style: { fontSize: '1rem' }, className: "form-label labl labl2" }, "Valid From"),
                                    React.createElement("input", { type: "date", name: "payTerm", className: "form-control inp" })),
                                React.createElement("span", { className: "col-4" },
                                    React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-10 m-0 ml-4", label: "Freeze", id: "freeze", name: "freeze", classCat: "form-control custom-control-input col-3", handleChange: function () { } })))))),
                React.createElement("hr", { style: { margin: '0', padding: '0' } }),
                React.createElement(grid_component_1.default, { title: "Routing Details", titleClr: "blue", colDef: ColDef, data: data })),
            React.createElement("hr", { style: { margin: '0', padding: '0' } })),
        React.createElement("div", { className: " row col-12 pl-4" },
            React.createElement("div", { className: "col-4 mr-0", style: { float: 'left' } },
                React.createElement("label", { htmlFor: "docs", style: { fontSize: '0.8em' }, className: "form-label ml-2" }, "Upload Image"),
                React.createElement("input", { type: "file", name: "docs" })),
            React.createElement("div", { className: "btn-group col-6 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center', float: 'right' } },
                React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
                React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
                React.createElement("button", { type: "button", style: { border: '2px solid orange', letterSpacing: 3 }, className: "btn btn-warning pl-0 pr-0" }, "Quit")))));
}
exports.default = BomRoutingConfig;
//# sourceMappingURL=bom-routing-config.component.js.map