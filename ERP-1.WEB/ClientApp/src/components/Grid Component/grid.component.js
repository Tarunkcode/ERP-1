"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ag_grid_react_1 = require("ag-grid-react");
require("ag-grid-community/styles/ag-grid.css");
require("ag-grid-community/styles/ag-theme-alpine.css");
var react_2 = require("react");
var uuid_1 = require("uuid");
require("ag-grid-autocomplete-editor/dist/main.css");
require("./styles.css");
function WriteGrid(_a) {
    var data = _a.data, colDef = _a.colDef, title = _a.title, titleClr = _a.titleClr, OpenSubLayer = _a.OpenSubLayer, rest = __rest(_a, ["data", "colDef", "title", "titleClr", "OpenSubLayer"]);
    var _b = react_2.useState(null), gridApi = _b[0], setGridApi = _b[1];
    var _c = react_2.useState(null), columnApi = _c[0], setColumnApi = _c[1];
    var gridRef = React.useRef(null);
    var rowBuffer = 0;
    var _d = react_2.useState(null), rowData = _d[0], setRowData = _d[1];
    var containerStyle = react_1.useMemo(function () { return ({ width: '100%', height: '100%' }); }, []);
    var gridStyle = react_1.useMemo(function () { return ({ width: '100vw', height: 500 }); }, []);
    var defaultColDef = react_1.useMemo(function () {
        return {
            //resizable: true,
            /* editable: true,*/
            sortable: true,
            filter: true,
        };
    }, []);
    var frameworkComponents = {};
    var init100Rows = function () {
        var id = uuid_1.v4();
        var firstRow = data[0];
        var collection = [];
        for (var i = 0; i < 100; i++)
            collection.push(__assign(__assign({}, firstRow), { id: id }));
        setRowData(collection);
    };
    var initailsRowCount = function () {
        var id = uuid_1.v4();
        var firstRow = data[0];
        var collection = [];
        for (var i = 0; i < 10; i++)
            collection.push(__assign(__assign({}, firstRow), { id: id }));
        setRowData(collection);
    };
    function onGridReady(params) {
        if (title === 'Consumed Item Details') {
            init100Rows();
        }
        else {
            initailsRowCount();
        }
        setGridApi(params.api);
        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
        params.api.sizeColumnsToFit();
    }
    var gridOptions = {
        rowData: rowData,
        columnDefs: colDef,
        defaultColDef: defaultColDef,
        onCellKeyDown: OpenSubLayer,
        /*onCellKeyPress: OpenSubLayer,*/
    };
    var onAddRow = function () {
        var id = uuid_1.v4();
        var emptyRow = { id: id };
        gridApi.updateRowData({ add: [emptyRow] });
        var node = gridApi.getRowNode(id);
        gridApi.ensureIndexVisible(node.rowIndex);
    };
    React.createElement("button", { className: "p-1 m-3 btn btn-primary", onClick: onAddRow }, "Add Row ");
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "text-center col-12 m-0 card-title", style: titleClr ? { textAlign: "start" } : { textAlign: "start" } },
            React.createElement("span", { className: "row-header p-0 m-0", style: { fontSize: '1.1rem' } }, title)),
        React.createElement("div", { style: gridStyle, className: "ag-theme-alpine" },
            React.createElement(ag_grid_react_1.AgGridReact, { rowData: rowData, columnDefs: colDef, defaultColDef: defaultColDef, scrollbarWidth: 8, getRowNodeId: function (data) { return data.id; }, gridOptions: gridOptions, onGridReady: onGridReady, alwaysShowHorizontalScroll: true, alwaysShowVerticalScroll: true }))));
}
exports.default = WriteGrid;
//# sourceMappingURL=grid.component.js.map