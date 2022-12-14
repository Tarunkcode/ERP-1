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
exports.CustomSelect = exports.MasterInput = void 0;
var React = require("react");
function CustomInput(_a) {
    var name = _a.name, label = _a.label, ipType = _a.ipType, ipTitle = _a.ipTitle, dataArray = _a.dataArray, change = _a.change, classCategory = _a.classCategory, props = __rest(_a, ["name", "label", "ipType", "ipTitle", "dataArray", "change", "classCategory"]);
    var ref = React.useRef(null);
    React.useEffect(function () {
        if (ref.current != null && dataArray.length != 0)
            ref.current.addEventListener('input', function (e) {
                var input = e.target, list = input.getAttribute('list'), options = document.querySelectorAll('#' + list + ' option'), hiddenInput = (document.getElementById(input.getAttribute('id') + '-hidden')), inputValue = input.value;
                hiddenInput.value = inputValue;
                for (var i = 0; i < options.length; i++) {
                    var option = options[i];
                    if (option.innerText === inputValue) {
                        hiddenInput.value = option.getAttribute('data-value');
                        window.localStorage.setItem('key', hiddenInput.value);
                        break;
                    }
                }
            });
        else
            window.localStorage.setItem('key', '');
    }, [ref, dataArray.length != 0]);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, label),
        React.createElement("input", { type: "hidden", name: name, className: classCategory, title: ipTitle, id: "visible-hidden" }),
        React.createElement("input", { ref: ref, list: name, type: ipType, name: name, className: classCategory, title: ipTitle, autoComplete: "off", id: "visible", onBlur: change }),
        dataArray != null && dataArray.length > 0 ?
            (React.createElement("datalist", { id: name }, dataArray.map(function (obj) {
                return React.createElement("option", { "data-value": obj.code }, obj.name);
            })))
            : null));
}
exports.default = CustomInput;
function MasterInput(_a) {
    var name = _a.name, label = _a.label, ipTitle = _a.ipTitle, ipType = _a.ipType, handleChange = _a.handleChange, classCategory = _a.classCategory, props = __rest(_a, ["name", "label", "ipTitle", "ipType", "handleChange", "classCategory"]);
    return (React.createElement("span", { className: "row row-content d-flex section2 col-sm-12 m-0" },
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label mr-2 col-4" }, label),
        React.createElement("input", { type: ipType, name: name, className: classCategory, onBlur: handleChange, title: ipTitle, autoComplete: "off", list: name, required: true })));
}
exports.MasterInput = MasterInput;
function CustomSelect(_a) {
    var label = _a.label, name = _a.name, dataArray = _a.dataArray, handleChange = _a.handleChange, classCategory = _a.classCategory, otherProps = __rest(_a, ["label", "name", "dataArray", "handleChange", "classCategory"]);
    return (React.createElement("span", { className: "row row-content d-flex section2 col-sm-12 m-0" },
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label mr-2 col-4" }, label),
        React.createElement("select", { name: name, className: classCategory, onBlur: handleChange, style: { height: '26px', padding: '0' } }, dataArray != null && dataArray.length > 0 ?
            dataArray.map(function (obj) {
                return (React.createElement(React.Fragment, null,
                    React.createElement("option", { value: obj.code }, obj.name)));
            }) : null)));
}
exports.CustomSelect = CustomSelect;
//# sourceMappingURL=custom-input.component.js.map