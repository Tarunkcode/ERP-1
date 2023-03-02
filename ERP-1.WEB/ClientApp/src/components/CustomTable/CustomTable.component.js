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
exports.WriteTable = void 0;
var React = require("react");
var custom_input_component_1 = require("../custom-input/custom-input.component");
function LoadTable(_a) {
    var columns = _a.columns, dataArr = _a.dataArr;
    return (React.createElement("div", { className: "" },
        React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null, columns.map(function (head) {
                    React.createElement("th", null, head.field);
                }))),
            React.createElement("tbody", null, dataArr.map(function (row) {
                React.createElement("tr", null, columns.map(function (col) {
                    React.createElement("td", null, row[col.field]);
                }));
            })),
            React.createElement("tfoot", null))));
}
exports.default = LoadTable;
function WriteTable(_a) {
    var columns = _a.columns, dataArr = _a.dataArr, title = _a.title, getCurrentRowNo = _a.getCurrentRowNo, HandleIpSelect = _a.HandleIpSelect, addRowFunc = _a.addRowFunc, deleteRowFunc = _a.deleteRowFunc, tableProps = _a.tableProps, setRowFunc = _a.setRowFunc, firstCol = _a.firstCol, onEnterOpen$RedirectModal = _a.onEnterOpen$RedirectModal, titleClr = _a.titleClr, props = __rest(_a, ["columns", "dataArr", "title", "getCurrentRowNo", "HandleIpSelect", "addRowFunc", "deleteRowFunc", "tableProps", "setRowFunc", "firstCol", "onEnterOpen$RedirectModal", "titleClr"]);
    function RowAddDumy() {
        addRowFunc(dataArr, tableProps, setRowFunc);
    }
    return (React.createElement("div", { className: "card-body m-0 p-0 mb-1 table-responsive", style: { margin: "0", padding: "0", overflow: 'auto' } },
        React.createElement("div", { className: "text-center card-title col-12 m-0", style: titleClr ? { textAlign: "start", backgroundColor: titleClr } : { textAlign: "start" } },
            React.createElement("span", { className: "row-header p-0 m-0", style: { fontSize: '1.1rem' } }, title)),
        React.createElement("table", { className: "table table-responsive table-striped table-bordered table-sm", style: {
                width: '100%', minHeight: '30vh', borderCollapse: "separate",
                boxSizing: "border-box",
                textIndent: "initial",
                borderSpacing: "2px"
            } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "text-center", style: { backgroundColor: 'lightslategray' } },
                        React.createElement("span", { style: { fontWeight: 400, fontSize: '1.1rem', color: 'white', margin: '20px' } }, firstCol || "Sr No.")),
                    columns.map(function (head) {
                        return (React.createElement("th", { className: "text-center", style: { backgroundColor: 'lightslategray' } },
                            React.createElement("span", { style: { fontWeight: 400, fontSize: '1.1rem', color: 'white' } }, head.header)));
                    }),
                    React.createElement("th", null,
                        React.createElement("button", { type: "button", className: "btn btn-outline-success m-0 p-1 pr-2 pl-2", onClick: RowAddDumy }, "+")))),
            React.createElement("tbody", null, dataArr.map(function (row, ind) {
                return (React.createElement("tr", { key: ind, id: ind },
                    React.createElement("th", { className: "text-center", style: { fontSize: '1rem' } }, parseInt(ind) + 1),
                    columns.map(function (col) {
                        return (React.createElement("td", null,
                            React.createElement(custom_input_component_1.TableInputList, { row: ind, name: row[col.field].id, change: HandleIpSelect, width: row[col.field].width, ipType: row[col.field].ipType || "text", type: row[col.field].typeBox, ipTitle: row[col.field].ipTitle, dataArray: row[col.field].dataArray, classCategory: row[col.field].classCat, placeholder: row[col.field].placeholder, onEnterModalList: row[col.field].onEnterOpen$RedirectModal, s: "100%", id: row[col.field].name, default: row[col.field].dataArray.length !== 0 && row[col.field].defaultList.length !== 0 ? row[col.field].dataArray.findIndex(function (x) { return x.code == row[col.field].defaultList[ind][row[col.field].name]; }) : undefined })));
                        //return ( <td>{row[col.field]}</td>)
                    })));
            })))));
}
exports.WriteTable = WriteTable;
//# sourceMappingURL=CustomTable.component.js.map