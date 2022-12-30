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
var custom_switch_component_1 = require("../../components/CustomSwitch/custom-switch.component");
function Cust_Sup_Page(_a) {
    var getMasterType = _a.getMasterType, pageTitle = _a.pageTitle, configType = _a.configType, handleChange = _a.handleChange, handlePosting = _a.handlePosting, defaultData = _a.defaultData, HandleIpSelect = _a.HandleIpSelect, otherProps = __rest(_a, ["getMasterType", "pageTitle", "configType", "handleChange", "handlePosting", "defaultData", "HandleIpSelect"]);
    React.useEffect(function () {
        if (configType == '1')
            getMasterType(1005);
        else if (configType == '2')
            getMasterType(111);
        else
            alert('wrong path set in db');
    }, []);
    var dArr = [{ code: 1, name: 'Tarun' }, { code: 2, name: 'Akhilesh' }, { code: 3, name: 'Raghav' }, { code: 4, name: 'Santosh' }, { code: 5, name: 'Narayan' }];
    var _b = (0, react_1.useState)(false), PrimaryGroup = _b[0], setPrimaryGroup = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, pageTitle)),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { change: handleChange, default: defaultData.name, name: "name", classCategory: "form-control inp subMaster", ipType: "text", label: "Name", ipTitle: "Enter Name", dataArray: [] })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { change: handleChange, name: "codeStr", default: defaultData.codeStr, classCategory: "form-control inp mb-2 subMaster", ipType: "text", label: "Alias", ipTitle: "Enter Alias", dataArray: [] })),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-4" },
                    React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", default: defaultData.c1, label: "Primary Group", id: "c1", name: "c1", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: handleChange })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" }, 
                /*CustomSelect({ */
                PrimaryGroup === false ? (React.createElement(React.Fragment, null,
                    React.createElement(custom_input_component_1.InputList, { label: "Under Group", id: "parentGrp", lablCat: "form-label labl labl2", name: "parentGrp", default: defaultData.parentGrp, dataArray: dArr, change: HandleIpSelect, placeholder: "select under group", s: "20%", classCategory: "form-control inp mb-2 subMaster ipselect" }))) : null),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-4" },
                    React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", default: defaultData.c2, label: "is Import/Export", id: "c2", name: "c2", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: handleChange })),
                React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' } },
                    React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }, className: "btn btn-info pl-0 pr-0 col-md-1 col-xs-6", onClick: handlePosting }, "Save"))))));
}
exports.default = Cust_Sup_Page;
//# sourceMappingURL=customer-supplier-group.js.map