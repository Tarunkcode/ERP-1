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
    var columns = _a.columns, dataArr = _a.dataArr, title = _a.title, getCurrentRowNo = _a.getCurrentRowNo, HandleIpSelect = _a.HandleIpSelect, addRowFunc = _a.addRowFunc, deleteRowFunc = _a.deleteRowFunc, props = __rest(_a, ["columns", "dataArr", "title", "getCurrentRowNo", "HandleIpSelect", "addRowFunc", "deleteRowFunc"]);
    return (React.createElement("div", { className: "card-body m-0 p-0 mb-1 table-responsive", style: { margin: "0", padding: "0", overflow: 'auto' } },
        React.createElement("div", { className: "text-center card-title col-12 m-0", style: { textAlign: "start" } },
            React.createElement("span", { className: "row-header p-0 m-0" }, title)),
        React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: "0", width: '100%' } },
            React.createElement("thead", { className: "thead-light table-secondary text-center" },
                React.createElement("tr", null,
                    React.createElement("th", null, "S.No."),
                    columns.map(function (head) {
                        return (React.createElement("th", null, head.header));
                    }),
                    React.createElement("th", null,
                        React.createElement("button", { type: "button", className: "btn btn-outline-success m-0 p-1 pr-2 pl-2", onClick: addRowFunc }, "+")))),
            React.createElement("tbody", null, dataArr.map(function (row, ind) {
                return (React.createElement("tr", { key: ind, id: ind },
                    React.createElement("th", null, parseInt(ind) + 1),
                    columns.map(function (col) {
                        return (React.createElement("td", null,
                            React.createElement(custom_input_component_1.InputList, { row: ind, name: row[col.field].name, change: HandleIpSelect, ipType: "text", ipTitle: row[col.field].ipTitle, dataArray: row[col.field].dataArray, classCategory: row[col.field].classCat, placeholder: row[col.field].placeholder, s: "100%", id: row[col.field].name, default: row[col.field].dataArray.length !== 0 && row[col.field].defaultList.length !== 0 ? row[col.field].dataArray.findIndex(function (x) { return x.code == row[col.field].defaultList[ind][row[col.field].name]; }) : undefined })));
                        //return ( <td>{row[col.field]}</td>)
                    }),
                    ind === dataArr.length - 1 ? (React.createElement("td", null,
                        React.createElement("button", { type: "button", className: "btn btn-outline-danger m-0 p-1 pr-2 pl-2", onClick: function () { return deleteRowFunc(ind); } }, "x"))) : React.createElement("td", null)));
            })))));
}
exports.WriteTable = WriteTable;
//# sourceMappingURL=CustomTable.component.js.map