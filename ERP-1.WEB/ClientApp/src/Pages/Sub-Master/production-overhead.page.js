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
var react_1 = require("react");
var custom_input_component_1 = require("../../components/custom-input/custom-input.component");
function ProductionOverHead_Page(_a) {
    var handleChange = _a.handleChange, pageTitle = _a.pageTitle, handlePosting = _a.handlePosting, configType = _a.configType, getMasterType = _a.getMasterType, defaultData = _a.defaultData, props = __rest(_a, ["handleChange", "pageTitle", "handlePosting", "configType", "getMasterType", "defaultData"]);
    (0, react_1.useEffect)(function () {
        console.log('def', defaultData);
        configType == '42' ? getMasterType(1034) : null;
        configType == '38' ? getMasterType(1030) : null;
    }, [defaultData]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, pageTitle)),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { name: "name", default: defaultData.name, change: handleChange, classCategory: "form-control inp subMaster", ipType: "text", label: "Name", ipTitle: "Enter Name", dataArray: [] })))),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center', } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3, width: "100px", marginLeft: "400px" }, className: "btn btn-info pl-0 pr-0 col-xs-6 col-md-1", onClick: handlePosting }, "Save"))));
}
exports.default = ProductionOverHead_Page;
//# sourceMappingURL=production-overhead.page.js.map