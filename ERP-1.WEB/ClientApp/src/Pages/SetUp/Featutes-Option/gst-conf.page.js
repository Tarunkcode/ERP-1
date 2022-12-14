"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var custom_input_component_1 = require("../../../components/custom-input/custom-input.component");
function GSTConf_Page(_a) {
    var handleChange = _a.handleChange;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "GST Configuration")),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement("label", { htmlFor: "Enable GST", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Enable GST"),
                    React.createElement("input", { type: "checkbox", onBlur: handleChange, className: "form-control custom-control-input col-3 InventoryDet", name: "", id: "", style: { cursor: 'pointer' } })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement("label", { htmlFor: "MajorProduct", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Type"),
                    React.createElement("select", { name: "Type", className: "form-control inp mb-2 Type", style: { height: "25px" }, title: "Type" },
                        React.createElement("option", { value: 1 }, "VAT"),
                        React.createElement("option", { value: 0 }, "GST"))),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { name: "GSTIN", classCategory: "form-control inp mb-2 GSTIN", ipType: "text", label: "GSTIN", ipTitle: "Enter GSTIN", dataArray: [] })),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement("label", { htmlFor: "E-Way Bill Required", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "E-Way Bill Required"),
                    React.createElement("input", { type: "checkbox", onBlur: handleChange, className: "form-control custom-control-input col-3 InventoryDet", name: "", id: "", style: { cursor: 'pointer' } })),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement("label", { htmlFor: "E-Invoice Required", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "E-Invoice Required"),
                    React.createElement("input", { type: "checkbox", onBlur: handleChange, className: "form-control custom-control-input col-3 InventoryDet", name: "", id: "", style: { cursor: 'pointer' } })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement("label", { htmlFor: "GSTCategory", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Default GST Category"),
                    React.createElement("select", { name: "TransporterDetails", className: "form-control inp mb-2 GSTCategory", style: { height: "25px" }, title: "Entert Default GST Category" },
                        React.createElement("option", { value: 1 }, "Category1"),
                        React.createElement("option", { value: 0 }, "Category"))),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement("label", { htmlFor: "TransporterDetails", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Transporter Details in Local"),
                    React.createElement("select", { name: "TransporterDetails", className: "form-control inp mb-2 TransporterDetails", style: { height: "25px" }, title: "Transporter Details" },
                        React.createElement("option", { value: 1 }, "Sales"),
                        React.createElement("option", { value: 0 }, "Purchase"))),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { name: " HSNCode", classCategory: "form-control inp mb-2 HSNCode", ipType: "number", label: "Minimum Digits for HSN", ipTitle: "Enter Minimum Digits for HSN Code", dataArray: [] })),
                React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' } },
                    React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }, className: "btn btn-info pl-0 pr-0 col-md-1 col-xs-6" }, "Save"))))));
}
exports.default = GSTConf_Page;
//# sourceMappingURL=gst-conf.page.js.map