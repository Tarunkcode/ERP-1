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
exports.CustomeSwitch2 = void 0;
var React = require("react");
function CustomeSwitch(_a) {
    //var defaultInputState : any = React.useRef(false);
    //if (otherProps.default == 1) {
    //    defaultInputState.current = true ;
    //} else {
    //    defaultInputState.current = false ;
    var label = _a.label, id = _a.id, lablClass = _a.lablClass, handleChange = _a.handleChange, name = _a.name, classCat = _a.classCat, otherProps = __rest(_a, ["label", "id", "lablClass", "handleChange", "name", "classCat"]);
    //}
    /*  console.log('default', otherProps.default);*/
    return (React.createElement("div", { className: "custom-control custom-switch m-0 p-0  col-md-12", style: { display: 'contents' } },
        otherProps.default == '1' ? (React.createElement("input", { type: "checkbox", defaultChecked: true, onBlur: handleChange, className: classCat, name: name, id: id, style: { cursor: 'pointer' } })) :
            (React.createElement("input", { type: "checkbox", onBlur: handleChange, className: classCat, name: name, id: id, style: { cursor: 'pointer' } })),
        React.createElement("label", { className: lablClass, htmlFor: id, style: { cursor: 'pointer' } }, label)));
}
exports.default = CustomeSwitch;
function CustomeSwitch2(_a) {
    var label = _a.label, id = _a.id, lablClass = _a.lablClass, handleChange = _a.handleChange, name = _a.name, classCat = _a.classCat, otherProps = __rest(_a, ["label", "id", "lablClass", "handleChange", "name", "classCat"]);
    return (React.createElement("div", { className: "custom-control custom-switch m-0 p-0  col-md-12", style: { display: 'contents' } },
        otherProps.default == '1' ? (React.createElement("input", { type: "checkbox", defaultChecked: true, onBlur: handleChange, className: classCat, name: name, id: id, style: { cursor: 'pointer' } })) : (React.createElement("input", { type: "checkbox", onBlur: handleChange, className: classCat, name: name, id: id, style: { cursor: 'pointer' } })),
        React.createElement("label", { className: lablClass, htmlFor: id, style: { cursor: 'pointer' } }, label)));
}
exports.CustomeSwitch2 = CustomeSwitch2;
//# sourceMappingURL=custom-switch.component.js.map