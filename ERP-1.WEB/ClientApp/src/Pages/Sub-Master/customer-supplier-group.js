"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var custom_input_component_1 = require("../../components/custom-input/custom-input.component");
function Cust_Sup_Page(_a) {
    var handleChange = _a.handleChange;
    var _b = (0, react_1.useState)(false), PrimaryGroup = _b[0], setPrimaryGroup = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "Customer Group")),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { name: "Name", classCategory: "form-control inp Name", ipType: "text", label: "Name", ipTitle: "Enter Name", dataArray: [] })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(custom_input_component_1.default, { name: "Alias", classCategory: "form-control inp mb-2 Alias", ipType: "text", label: "Alias", ipTitle: "Enter Alias", dataArray: [] })),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement("label", { htmlFor: "Primary Group", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Primary Group"),
                    React.createElement("input", { type: "checkbox", onBlur: handleChange, className: "form-control custom-control-input col-3 InventoryDet", name: "", id: "", style: { cursor: 'pointer' } })),
                React.createElement("span", { className: "d-flex section2 col-sm-12" }, PrimaryGroup === false ? (React.createElement(React.Fragment, null,
                    React.createElement("label", { htmlFor: "GSTCategory", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Under Group"),
                    React.createElement("select", { name: "TransporterDetails", className: "form-control inp mb-2 GSTCategory", style: { height: "25px" }, title: "Entert Default GST Category" },
                        React.createElement("option", { value: 1 }, "group1"),
                        React.createElement("option", { value: 0 }, "group")))) : null),
                React.createElement("span", { className: "d-flex section2 mb-2 col-sm-12" },
                    React.createElement("label", { htmlFor: "Is Import/Export", style: { fontSize: "0.8em" }, className: "form-label labl labl2" }, "Is Import/Export"),
                    React.createElement("input", { type: "checkbox", onBlur: handleChange, className: "form-control custom-control-input col-3 InventoryDet", name: "", id: "", style: { cursor: 'pointer' } })),
                React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-start', alignItems: 'center' } },
                    React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3, width: "100px" }, className: "btn btn-info pl-0 pr-0 col-md-1 col-xs-6" }, "Save"))))));
}
exports.default = Cust_Sup_Page;
//# sourceMappingURL=customer-supplier-group.js.map