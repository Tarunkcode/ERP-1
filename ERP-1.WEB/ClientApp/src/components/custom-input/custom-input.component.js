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
function CustomInput(_a) {
    var name = _a.name, label = _a.label, ipType = _a.ipType, ipTitle = _a.ipTitle, dataArray = _a.dataArray, change = _a.change, props = __rest(_a, ["name", "label", "ipType", "ipTitle", "dataArray", "change"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, label),
        React.createElement("input", { type: ipType, name: name, className: "form-control inp", title: ipTitle, autoComplete: "off", list: name, onBlur: change }),
        dataArray != null && dataArray.length > 0 ?
            (React.createElement("datalist", { id: name }, dataArray.map(function (obj) {
                return React.createElement("option", { "data-value": obj.code }, obj.name);
            })))
            : null));
}
exports.default = CustomInput;
//# sourceMappingURL=custom-input.component.js.map