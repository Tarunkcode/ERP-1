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
var custom_input_component_1 = require("../../components/custom-input/custom-input.component");
//import ClipLoader from 'react-spinners/ClipLoader';
function Modify_Page(_a) {
    var selectModList = _a.selectModList, handleSelect = _a.handleSelect, handleSubmit = _a.handleSubmit, props = __rest(_a, ["selectModList", "handleSelect", "handleSubmit"]);
    return (React.createElement("div", { className: "fisrtDiv col-12 container-fluid row card p-0", style: { margin: '0 auto' } },
        React.createElement("header", { className: "card-title col-12 text-center bg-secondary" },
            React.createElement("span", { style: { fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em' } }, "Modify List")),
        React.createElement("span", { className: "row-content card-body col-12" },
            React.createElement(custom_input_component_1.InputList, { name: "modify", label: "", id: "modify", ipType: "text", ipTitle: "Select to Modify", dataArray: selectModList, change: handleSelect, classCategory: "col-12 col-sm-6 form-control", placeholder: "Select to Modify", lablCat: "", s: "50vw" })),
        React.createElement("div", { className: "card-footer col-12" },
            React.createElement("button", { className: "btn btn-warning col-6 col-sm-1 float-right", type: "button", onClick: handleSubmit }, "Modify"))));
}
exports.default = Modify_Page;
//# sourceMappingURL=modify.page.js.map