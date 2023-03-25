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
var react_datalist_input_1 = require("react-datalist-input");
//import ClipLoader from 'react-spinners/ClipLoader';
function Modify_Page(_a) {
    var selectModList = _a.selectModList, handleSelect = _a.handleSelect, handleSubmit = _a.handleSubmit, props = __rest(_a, ["selectModList", "handleSelect", "handleSubmit"]);
    return (React.createElement("div", { className: "fisrtDiv col-12 container-fluid row card p-0", style: { margin: '0 auto' } },
        React.createElement("header", { className: "card-title col-12 text-center bg-secondary" },
            React.createElement("span", { style: { fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em' } }, "Modify List")),
        React.createElement("span", { className: "row-content card-body col-12" },
            React.createElement(react_datalist_input_1.default, { className: "d-flex col-12 m-0 p-0", inputProps: { className: 'col-sm-10 form-control', name: 'modify', id: "modify", style: { padding: '22px 10px', fontSize: '20px', margin: '0 8%' } }, placeholder: "Select to Modify", listboxProps: { className: 'text-left mt-5 col-sm-10', style: { padding: '22px 10px', fontSize: '20px', margin: '0 8%' } }, onSelect: function (item) { return handleSelect(item.id, item.value); }, items: selectModList })),
        React.createElement("div", { className: "card-footer col-12" },
            React.createElement("button", { className: "btn btn-warning col-sm-1", style: { margin: '0 46%' }, type: "button", onClick: handleSubmit }, "Modify"))));
}
exports.default = Modify_Page;
//# sourceMappingURL=modify.page.js.map