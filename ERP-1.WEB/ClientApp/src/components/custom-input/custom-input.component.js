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
exports.InputList = exports.CustomSelect = exports.MasterInput = void 0;
var React = require("react");
var react_1 = require("react");
var ThemeContext_1 = require("../../AppContext/ThemeContext");
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
                        window.sessionStorage.setItem('datalist', hiddenInput.value);
                        break;
                    }
                }
            });
        else
            window.sessionStorage.setItem('datalist', '');
    }, [ref, dataArray.length != 0]);
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, label),
        React.createElement("input", { type: "hidden", name: name, className: classCategory, title: ipTitle, id: "visible-hidden" }),
        React.createElement("input", { ref: ref, list: name, type: ipType, name: name, className: classCategory, defaultValue: props.default, title: ipTitle, autoComplete: "off", id: "visible", onBlur: change }),
        dataArray != null && dataArray.length > 0 ?
            (React.createElement("datalist", { id: name }, dataArray.map(function (obj) {
                return React.createElement("option", { "data-value": obj.code }, obj.name);
            })))
            : null));
}
exports.default = CustomInput;
function MasterInput(_a) {
    var name = _a.name, defaultt = _a.defaultt, label = _a.label, ipTitle = _a.ipTitle, ipType = _a.ipType, handleChange = _a.handleChange, classCategory = _a.classCategory, props = __rest(_a, ["name", "defaultt", "label", "ipTitle", "ipType", "handleChange", "classCategory"]);
    return (React.createElement("span", { className: "row row-content d-flex section2 col-sm-12 m-0" },
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, label),
        React.createElement("input", { type: ipType, defaultValue: defaultt, name: name, className: classCategory, onBlur: handleChange, title: ipTitle, autoComplete: "off", list: name, required: true })));
}
exports.MasterInput = MasterInput;
function CustomSelect(_a) {
    var label = _a.label, name = _a.name, dataArray = _a.dataArray, handleChange = _a.handleChange, classCategory = _a.classCategory, otherProps = __rest(_a, ["label", "name", "dataArray", "handleChange", "classCategory"]);
    return (React.createElement("span", { className: "row row-content d-flex section2 col-sm-12 m-0" },
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, label),
        React.createElement("select", { name: name, className: classCategory, onBlur: handleChange, style: { height: '26px', padding: '0' } }, dataArray != null && dataArray.length > 0 ?
            dataArray.map(function (obj) {
                return (React.createElement(React.Fragment, null,
                    React.createElement("option", { value: obj.code }, obj.name)));
            }) : null)));
}
exports.CustomSelect = CustomSelect;
function InputList(_a) {
    var name = _a.name, label = _a.label, ipType = _a.ipType, ipTitle = _a.ipTitle, dataArray = _a.dataArray, change = _a.change, lablCat = _a.lablCat, row = _a.row, classCategory = _a.classCategory, placeholder = _a.placeholder, s = _a.s, id = _a.id, props = __rest(_a, ["name", "label", "ipType", "ipTitle", "dataArray", "change", "lablCat", "row", "classCategory", "placeholder", "s", "id"]);
    var _b = React.useState(true), hide = _b[0], setHide = _b[1];
    var _c = React.useState(''), listCurrentVal = _c[0], setListCurrentVal = _c[1];
    var _d = React.useState(''), defValue = _d[0], setDefValue = _d[1];
    var _e = React.useState(dataArray), filteredData = _e[0], setFilteredData = _e[1];
    var input = document.getElementById(id);
    var _f = React.useState(""), defVal = _f[0], setDefVal = _f[1];
    var theme = (0, react_1.useContext)(ThemeContext_1.ThemeContext).theme;
    var _g = React.useState(false), isDataListLoad = _g[0], setIsDataListLoad = _g[1];
    React.useEffect(function () {
        console.log('props.default', props.default);
        if (props.default === -1 || props.default === undefined) { }
        else {
            setDefVal(dataArray[props.default].name);
        }
    }, [props.default]);
    React.useEffect(function () {
        if (!dataArray || dataArray == undefined || dataArray === null || dataArray.length === 0)
            setIsDataListLoad(true);
        else
            setIsDataListLoad(false);
    }, [dataArray]);
    var SetInputData = function (e) {
        var n = e.target.id;
        var code = e.target.value;
        setListCurrentVal(code);
        /*console.log('row input', row)*/
        input.value = n;
        if (row === undefined || !row)
            change(code, name, row = null);
        else
            change(code, name, row);
        change(code, name, row);
        //console.log([n] + ":" +code)
        setHide(true);
    };
    var filterList = function () {
        var element = document.getElementById(id);
        var text = element.value;
        if (!text) {
            setFilteredData(dataArray);
        }
        else {
            var newList = dataArray.filter(function (obj) {
                var name = obj.name || "";
                name = name.toUpperCase();
                text = text.toUpperCase();
                return name.indexOf(text) > -1;
            });
            setFilteredData(newList);
        }
    };
    return (React.createElement("span", { className: "row row-content d-flex section2 col-sm-12 m-0" },
        React.createElement("label", { htmlFor: name, style: { fontSize: '0.8em' }, className: lablCat }, label),
        React.createElement("div", { className: "m-0 p-0 text-center", style: { width: 'auto', minWidth: s } },
            React.createElement("span", { className: "col-12 m-0 p-0 d-flex" },
                React.createElement("input", { type: ipType, name: name, id: id, className: "form-control p-0", defaultValue: defVal, title: ipTitle, autoComplete: "off", onFocus: function () { setHide(false); filterList(); }, onChange: filterList, placeholder: placeholder }),
                React.createElement("img", { src: './assets/load-datalist.gif', style: isDataListLoad === true ? { width: "24px", borderRadius: "6%", margin: "0 10px 0" } : { visibility: 'hidden', width: "24px", borderRadius: "6%", margin: "0 10px 0" }, className: "img-fluid erp-logo", alt: "loading..." })),
            hide === false ? (React.createElement("ul", { id: "dropdown", className: theme === 'dark' ? 'dropdown bg-dark' : 'dropdown bg-light', style: hide === true ? { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: '30vh', overflowY: 'auto', borderRadius: '2px', border: '1px solid grey', visibility: 'hidden' } : { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxWidth: s, maxHeight: '60vh', overflowY: 'auto', color: 'black', borderRadius: '2px', border: '1px solid grey' } }, filteredData != null && filteredData.length > 0 ?
                filteredData.map(function (obj) {
                    return (React.createElement(React.Fragment, null,
                        " ",
                        React.createElement("li", { className: theme === 'dark' ? 'text-left ml-1 text-light liItem m-0 p-1' : 'text-left ml-1 text-dark liItem m-0 p-1', onClick: SetInputData, id: obj.name, value: obj.code }, obj.name),
                        " "));
                }) : null)) : null)));
}
exports.InputList = InputList;
//# sourceMappingURL=custom-input.component.js.map