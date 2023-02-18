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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownShift = exports.TableInputList = exports.InputList = exports.CustomSelect = exports.MasterInput = void 0;
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
        React.createElement("label", { htmlFor: name, style: { fontSize: '1rem' }, className: "form-label labl labl2 mr-2 ml-2" }, label),
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
    return (
    /*<span className="row row-content d-flex section2 col-sm-12 m-0">*/
    React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: name, style: { fontSize: '1rem' }, className: "form-label labl ml-2 mr-2 labl2" }, label),
        React.createElement("input", { type: ipType, defaultValue: defaultt, name: name, className: classCategory, onBlur: handleChange, title: ipTitle, autoComplete: "off", list: name, required: true }))
    /*  </span>*/
    );
}
exports.MasterInput = MasterInput;
function CustomSelect(_a) {
    var label = _a.label, name = _a.name, dataArray = _a.dataArray, handleChange = _a.handleChange, classCategory = _a.classCategory, otherProps = __rest(_a, ["label", "name", "dataArray", "handleChange", "classCategory"]);
    return (React.createElement("span", { className: "row row-content d-flex section2 col-sm-12 m-0" },
        React.createElement("label", { htmlFor: name, style: { fontSize: '1rem' }, className: "form-label labl ml-2 mr-2 labl2" }, label),
        React.createElement("select", { name: name, className: classCategory, onBlur: handleChange, style: { height: '26px', padding: '0' } }, dataArray != null && dataArray.length > 0 ?
            dataArray.map(function (obj) {
                return (React.createElement(React.Fragment, null,
                    React.createElement("option", { value: obj.code }, obj.name)));
            }) : null)));
}
exports.CustomSelect = CustomSelect;
function InputList(_a) {
    var name = _a.name, label = _a.label, ipType = _a.ipType, ipTitle = _a.ipTitle, dataArray = _a.dataArray, change = _a.change, lablCat = _a.lablCat, row = _a.row, classCategory = _a.classCategory, placeholder = _a.placeholder, s = _a.s, id = _a.id, type = _a.type, width = _a.width, props = __rest(_a, ["name", "label", "ipType", "ipTitle", "dataArray", "change", "lablCat", "row", "classCategory", "placeholder", "s", "id", "type", "width"]);
    var _b = React.useState(true), hide = _b[0], setHide = _b[1];
    var _c = React.useState(''), listCurrentVal = _c[0], setListCurrentVal = _c[1];
    var _d = React.useState(''), defValue = _d[0], setDefValue = _d[1];
    var _e = React.useState(dataArray), filteredData = _e[0], setFilteredData = _e[1];
    var input = document.getElementById(id);
    var _f = React.useState(""), defVal = _f[0], setDefVal = _f[1];
    var theme = react_1.useContext(ThemeContext_1.ThemeContext).theme;
    var _g = React.useState(false), isDataListLoad = _g[0], setIsDataListLoad = _g[1];
    React.useEffect(function () {
        if (props.default === -1 || props.default === undefined || dataArray.length === 0) { }
        else if (props.default >= dataArray.length) {
            alert('Array size exceed Error in Input List');
        }
        else if (props.default.length === 0) {
        }
        else {
            setDefVal(dataArray[props.default].name);
        }
    }, [props.default, dataArray]);
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
        //if (row === undefined || !row) change(code, name, row)
        //else change(code , name , row )
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
        React.createElement("label", { htmlFor: name, style: { fontSize: '1rem' }, className: lablCat }, label),
        React.createElement("div", { className: "m-1 p-0 text-center", style: { width: 'auto', minWidth: s } },
            React.createElement("span", { className: "col-12 m-0 p-0 d-flex" },
                React.createElement("input", { type: ipType, name: name, id: id, className: "form-control", defaultValue: defVal, title: ipTitle, autoComplete: "off", onFocus: function () { setHide(false); filterList(); }, onChange: filterList, placeholder: placeholder, style: { position: 'relative', width: width, margin: '0 auto', padding: '18px 5px' } }),
                type == 1 ? null : React.createElement("img", { src: './assets/load-datalist.gif', style: isDataListLoad === true ? { width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' } : { visibility: 'hidden', width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' }, className: "img-fluid erp-logo", alt: "loading..." })),
            hide === false ? (React.createElement("ul", { id: "dropdown", className: theme === 'dark' ? 'dropdown bg-dark' : 'dropdown bg-light', style: hide === true ? { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: '30vh', overflowY: 'auto', borderRadius: '2px', border: '1px solid grey', visibility: 'hidden' } : { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxWidth: s, maxHeight: '60vh', overflowY: 'auto', color: 'black', borderRadius: '2px', border: '1px solid grey' } }, filteredData != null && filteredData.length > 0 ?
                filteredData.map(function (obj) {
                    return (React.createElement(React.Fragment, null,
                        " ",
                        React.createElement("li", { className: theme === 'dark' ? 'text-left ml-1 text-light liItem m-0 p-1' : 'text-left ml-1 text-dark liItem m-0 p-1', onClick: SetInputData, id: obj.name, value: obj.code }, obj.name),
                        " "));
                }) : null)) : null)));
}
exports.InputList = InputList;
//------------------------------------ table input ------------------------------------------
function TableInputList(_a) {
    var name = _a.name, label = _a.label, ipType = _a.ipType, ipTitle = _a.ipTitle, dataArray = _a.dataArray, change = _a.change, lablCat = _a.lablCat, row = _a.row, classCategory = _a.classCategory, placeholder = _a.placeholder, s = _a.s, id = _a.id, type = _a.type, width = _a.width, onEnterModalList = _a.onEnterModalList, props = __rest(_a, ["name", "label", "ipType", "ipTitle", "dataArray", "change", "lablCat", "row", "classCategory", "placeholder", "s", "id", "type", "width", "onEnterModalList"]);
    var _b = React.useState(true), hide = _b[0], setHide = _b[1];
    var _c = React.useState(''), listCurrentVal = _c[0], setListCurrentVal = _c[1];
    var _d = React.useState(''), defValue = _d[0], setDefValue = _d[1];
    var _e = React.useState(dataArray), filteredData = _e[0], setFilteredData = _e[1];
    var input = document.getElementById(id);
    var _f = React.useState(""), defVal = _f[0], setDefVal = _f[1];
    var theme = react_1.useContext(ThemeContext_1.ThemeContext).theme;
    var _g = React.useState(false), isDataListLoad = _g[0], setIsDataListLoad = _g[1];
    React.useEffect(function () {
        if (props.default === -1 || props.default === undefined || dataArray.length === 0) { }
        else if (props.default >= dataArray.length) {
            alert('Array size exceed Error in Input List');
        }
        else if (props.default.length === 0) {
        }
        else {
            setDefVal(dataArray[props.default].name);
        }
    }, [props.default, dataArray]);
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
        //if (row === undefined || !row) change(code, name, row)
        //else change(code , name , row )
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
    return (React.createElement("div", { className: "m-0 p-2 text-center", style: { width: 'auto', minWidth: s } },
        React.createElement("input", { type: ipType, name: name, id: id, className: "form-control", defaultValue: defVal, title: ipTitle, autoComplete: "off", onKeyUp: onEnterModalList, onFocus: function () { setHide(false); filterList(); }, onChange: filterList, placeholder: placeholder, style: { position: 'relative', width: width, margin: '0 auto', padding: '18px 5px' } }),
        type == 1 ? null : React.createElement("img", { src: './assets/load-datalist.gif', style: isDataListLoad === true ? { width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' } : { visibility: 'hidden', width: "24px", borderRadius: "6%", margin: "0 10px 0", position: 'absolute', right: '0' }, className: "img-fluid erp-logo", alt: "loading..." }),
        hide === false && type != 1 ? (React.createElement("ul", { id: "dropdown", className: theme === 'dark' ? 'dropdown bg-dark' : 'dropdown bg-light', style: hide === true ? { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxHeight: 'auto', overflowY: 'auto', borderRadius: '2px', border: '1px solid grey', visibility: 'hidden' } : { listStyle: 'none', marginTop: '2px', zIndex: 1000, position: 'absolute', width: 'auto', minWidth: s, maxWidth: s, maxHeight: 'auto', overflowY: 'auto', color: 'black', borderRadius: '2px', border: '1px solid grey' } }, filteredData != null && filteredData.length > 0 ?
            filteredData.map(function (obj) {
                return (React.createElement(React.Fragment, null,
                    " ",
                    React.createElement("li", { className: theme === 'dark' ? 'text-left ml-1 text-light liItem m-0 p-1' : 'text-left ml-1 text-dark liItem m-0 p-1', onClick: SetInputData, id: obj.name, value: obj.code }, obj.name),
                    " "));
            }) : null)) : null));
}
exports.TableInputList = TableInputList;
var downshift_1 = require("downshift");
function DownShift(_a) {
    var params = _a.params, rest = __rest(_a, ["params"]);
    var items = [
        { value: 'Harper Lee', title: 'To Kill a Mockingbird' },
        { value: 'Lev Tolstoy', title: 'War and Peace' },
        { value: 'Fyodor Dostoyevsy', title: 'The Idiot' },
        { value: 'Oscar Wilde', title: 'A Picture of Dorian Gray' },
        { value: 'George Orwell', title: '1984' },
        { value: 'Jane Austen', title: 'Pride and Prejudice' },
        { value: 'Marcus Aurelius', title: 'Meditations' }
    ];
    React.useEffect(function () {
        console.log('params', params);
    }, [params]);
    return (React.createElement(downshift_1.default, { onChange: function (selection) { console.log(selection); }, itemToString: function (item) { return (item ? item.title : ''); } }, function (_a) {
        var getInputProps = _a.getInputProps, getItemProps = _a.getItemProps, getLabelProps = _a.getLabelProps, getMenuProps = _a.getMenuProps, getToggleButtonProps = _a.getToggleButtonProps, isOpen = _a.isOpen, inputValue = _a.inputValue, highlightedIndex = _a.highlightedIndex, selectedItem = _a.selectedItem, getRootProps = _a.getRootProps;
        return (React.createElement("div", null,
            React.createElement("div", { className: "flex shadow-sm bg-white gap-0.5" },
                React.createElement("input", __assign({ placeholder: "Best book ever", className: "w-full p-1.5 ag-grid-auto", style: { height: '30px', width: "100%", padding: '18px 8px', border: 'none' } }, getInputProps()))),
            React.createElement("ul", __assign({}, getMenuProps(), { style: { listStyle: 'none' } }), isOpen
                ? items
                    .filter(function (item) { return !inputValue || item.value.includes(inputValue); })
                    .map(function (item, index) { return (React.createElement("li", __assign({}, getItemProps({
                    key: item.value,
                    index: index,
                    item: item,
                    style: {
                        backgroundColor: highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                })), item.value)); })
                : null)));
    }));
}
exports.DownShift = DownShift;
//# sourceMappingURL=custom-input.component.js.map