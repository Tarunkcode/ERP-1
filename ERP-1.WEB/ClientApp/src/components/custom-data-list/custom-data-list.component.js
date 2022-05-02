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
require("./custom-data-list.styles.css");
function CustomDataList(_a) {
    var For = _a.For, Name = _a.Name, Id = _a.Id, Type = _a.Type, label = _a.label, props = __rest(_a, ["For", "Name", "Id", "Type", "label"]);
    return (React.createElement("div", { className: "wrapper col-sm-2 form-group", style: { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } },
        React.createElement("div", { className: "card-body crd", style: { backgroundColor: "#cbcad9" } },
            React.createElement("label", { style: { fontSize: "12px", padding: "0" }, htmlFor: For, className: "form-label col-sm-12" }, label),
            React.createElement("input", { name: Name, type: Type, className: "form-control form-select col-sm-12 section", list: Id }),
            props.dataArray != null && props.dataArray.length > 0 ?
                (React.createElement("datalist", { className: Name, id: Id }, props.dataArray.map(function (obj) {
                    return React.createElement("option", { "data-value": obj.StateCode }, obj.StateName);
                })))
                : console.log('fine'))));
}
exports.default = CustomDataList;
//# sourceMappingURL=custom-data-list.component.js.map