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
var custom_input_component_1 = require("../../../components/custom-input/custom-input.component");
var custom_switch_component_1 = require("../../../components/CustomSwitch/custom-switch.component");
function GSTConf_Page(_a) {
    var handleChange = _a.handleChange, handlePosting = _a.handlePosting, defConf = _a.defConf, HandleIpSelect = _a.HandleIpSelect, otherProps = __rest(_a, ["handleChange", "handlePosting", "defConf", "HandleIpSelect"]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "GST Configuration")),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-4" },
                    React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "Enable GST", id: "eGst", name: "eGst", classCat: "form-control custom-control-input col-3 InventoryDet switch", handleChange: handleChange, default: defConf.eGst })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_input_component_1.InputList, { label: "Type", name: "taxtype", id: "taxtype", ipType: "text", dataArray: [{ code: 1, name: 'VAT' }, { code: 2, name: 'GST' }], change: HandleIpSelect, classCategory: "form-control inp mb-2 InventoryDet ipselect", s: "20%", lablCat: "form-label labl labl2", ipTitle: "select type", placeholder: "Select From Type List", default: defConf.taxtype }))),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { change: handleChange, name: "gstint", default: defConf.gstint, classCategory: "form-control inp mb-2 InventoryDet", ipType: "text", label: "GSTIN", ipTitle: "Enter GSTIN", dataArray: [] })),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-4" },
                    React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "E-Way Bill Required", id: "ewbill", name: "ewbill", classCat: "form-control custom-control-input col-3 InventoryDet switch", handleChange: handleChange, default: defConf.ewbill })),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-4" },
                    React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "E-Invoice Required", id: "einv", name: "einv", classCat: "form-control custom-control-input col-3 InventoryDet switch", handleChange: handleChange, default: defConf.einv })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_input_component_1.InputList, { label: "Default GST Category", ipType: "text", name: "dgst", id: "dgst", dataArray: [{ code: 1, name: 'Category1' }, { code: 2, name: 'Category2' }], change: HandleIpSelect, classCategory: "form-control inp mb-2 InventoryDet ipselect", s: "20%", lablCat: "form-label labl labl2", ipTitle: "Select Default GST Category List", placeholder: "Select From Default GST Category List", default: defConf.dgst }))),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_input_component_1.InputList, { label: "Transporter details in local", ipType: "text", name: "tdsp", id: "tdsp", dataArray: [{ code: 1, name: 'Sale' }, { code: 2, name: 'Purchase' }], change: HandleIpSelect, classCategory: "form-control inp mb-2 ipselect InventoryDet", s: "20%", lablCat: "form-label labl labl2", ipTitle: "select From Transporter Det. List", placeholder: "Select From Transporter Det. List", default: defConf.tdsp }))),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { name: "mdhsn", classCategory: "form-control inp mb-2 InventoryDet", ipType: "number", change: handleChange, label: "Minimum Digits for HSN", ipTitle: "Enter Minimum Digits for HSN Code", dataArray: [], default: defConf.mdhsn })),
                React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' } },
                    React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }, className: "btn btn-info pl-0 pr-0 col-md-1 col-xs-6", onClick: handlePosting }, "Save"))))));
}
exports.default = GSTConf_Page;
//# sourceMappingURL=gst-conf.page.js.map