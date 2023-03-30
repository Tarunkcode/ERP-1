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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ag_grid_react_1 = require("ag-grid-react");
require("ag-grid-community/styles/ag-grid.css");
require("ag-grid-community/styles/ag-theme-alpine.css");
var react_2 = require("react");
require("ag-grid-autocomplete-editor/dist/main.css");
require("./styles.css");
function WriteGrid(_a) {
    var data = _a.data, colDef = _a.colDef, title = _a.title, titleClr = _a.titleClr, OpenSubLayer = _a.OpenSubLayer, collect = _a.collect, srProps = _a.srProps, rest = __rest(_a, ["data", "colDef", "title", "titleClr", "OpenSubLayer", "collect", "srProps"]);
    var _b = react_2.useState(null), gridApi = _b[0], setGridApi = _b[1];
    var _c = react_2.useState(null), columnApi = _c[0], setColumnApi = _c[1];
    var gridRef = React.useRef(null);
    var rowBuffer = 0;
    var _d = react_2.useState(null), rowData = _d[0], setRowData = _d[1];
    var containerStyle = react_1.useMemo(function () { return ({ width: '100%', height: '100%' }); }, []);
    var gridStyle = react_1.useMemo(function () { return ({ width: '98vw', height: 500 }); }, []);
    var firstRow = data[0];
    var defaultColDef = react_1.useMemo(function () {
        return {
            //resizable: true,
            /* editable: true,*/
            sortable: true,
            filter: true,
        };
    }, []);
    var CustomFunctionalities = function (e) {
        var _a;
        if (e.event.key === 'Enter') {
            gridApi.navigateToNextHeader();
        }
        else if (e.event.key === 'F9') {
            // get index
            var inDex = e.rowIndex;
            // copy rowData
            var copy = __spreadArray([], rowData);
            // remove row
            copy.splice(inDex, 1);
            //rearrange s.r
            var lastInd = copy.length;
            copy.map(function (item, ind) {
                item[srProps] = ind + 1;
            });
            copy.push(__assign(__assign({}, firstRow), (_a = {}, _a[srProps] = lastInd + 1, _a)));
            // SET New values to grid
            setRowData(__spreadArray([], copy));
        }
        //refresh columns 
        gridApi.refreshCells({ force: true });
    };
    var init100Rows = function () {
        var _a;
        var collection = [];
        for (var i = 0; i < 100; i++)
            collection.push(__assign(__assign({}, firstRow), (_a = {}, _a[srProps] = 1 + i, _a)));
        setRowData(collection);
    };
    var initailsRowCount = function () {
        var _a;
        var collection = [];
        for (var i = 0; i < 10; i++)
            collection.push(__assign(__assign({}, firstRow), (_a = {}, _a[srProps] = 1 + i, _a)));
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
        collect(params.api);
        setColumnApi(params.columnApi);
        params.api.sizeColumnsToFit();
        params.api.sizeColumnsToFit();
    }
    var onCellClicked = function (e) {
        //let keyArr: any[] = Object.keys(rowData[0]);
        var clickedOn = parseInt(e.rowIndex);
        var checkOnIndex = clickedOn - 1;
        var copiedObj = rowData[checkOnIndex];
        if (checkOnIndex !== -1) {
            var isremove = delete copiedObj[srProps];
            if (isremove === true && JSON.stringify(copiedObj) === JSON.stringify(firstRow)) {
                alert('Please Fill Previous Row First');
                gridApi.stopEditing();
            }
            else {
                gridApi.startEditingCell(e);
            }
        }
    };
    var gridOptions = {
        rowData: rowData,
        columnDefs: colDef,
        defaultColDef: defaultColDef,
        onCellKeyDown: OpenSubLayer,
    };
    var onAddRow = function () {
        var _a;
        var lastrow = gridApi.getDisplayedRowAtIndex(gridApi.getLastDisplayedRow());
        var lastIndex = lastrow.rowIndex;
        console.log('length++', lastrow.rowIndex);
        var emptyRow = (_a = {}, _a[srProps] = lastIndex + 2, _a);
        gridApi.updateRowData({ add: [emptyRow] });
    };
    //const getTableData = () => {
    //    let items: any[] = [];
    //    this.gridapi.foreachnode(function (node) {
    //        items.push(node.data);
    //    });
    //    return items;
    //}
    // setup the grid after the page has finished loading
    return (React.createElement(React.Fragment, null,
        React.createElement("button", { className: "p-1 m-3 btn btn-primary", onClick: onAddRow }, "Add Row "),
        React.createElement("div", { className: "text-center col-12 m-0 card-title", style: titleClr ? { textAlign: "start" } : { textAlign: "start" } },
            React.createElement("span", { className: "row-header p-0 m-0", style: { fontSize: '1.1rem' } }, title)),
        React.createElement("div", { id: "myGrid", style: gridStyle, className: "ag-theme-alpine" },
            React.createElement(ag_grid_react_1.AgGridReact, { onCellKeyPress: onCellClicked, rowData: rowData, columnDefs: colDef, defaultColDef: defaultColDef, scrollbarWidth: 8, getRowNodeId: function (data) { return data.id; }, onCellKeyDown: CustomFunctionalities, enableCellEditingOnBackspace: true, gridOptions: gridOptions, onGridReady: onGridReady, alwaysShowHorizontalScroll: true, alwaysShowVerticalScroll: true }))));
}
exports.default = WriteGrid;
//# sourceMappingURL=grid.component.js.map