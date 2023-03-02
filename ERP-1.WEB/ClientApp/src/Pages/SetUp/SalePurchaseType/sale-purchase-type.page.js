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
var custom_input_component_1 = require("../../../components/custom-input/custom-input.component");
var custom_switch_component_1 = require("../../../components/CustomSwitch/custom-switch.component");
function SalePurchaseType_Page(_a) {
    var handleChange = _a.handleChange, handlePosting = _a.handlePosting, pageTitle = _a.pageTitle, getMasterType = _a.getMasterType, configType = _a.configType, otherProps = __rest(_a, ["handleChange", "handlePosting", "pageTitle", "getMasterType", "configType"]);
    react_1.useEffect(function () {
        if (configType == '/add-sale-type') {
            getMasterType(13);
        }
        else if (configType == '/add-purchase-type') {
            getMasterType(14);
        }
    }, [configType]);
    // -------------------------------------------------------------------------------------------------------------------------
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start", backgroundColor: "#8389d4" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, pageTitle)),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_input_component_1.default, { change: handleChange, name: "Name", classCategory: "form-control inp col-4  seriesConf", ipType: "text", label: "Name", ipTitle: "Enter Name", dataArray: [] }))),
                React.createElement("span", { className: "d-flex section2 col-sm-12 mt-2 mb-2" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Tax Inclusive", id: "TaxInc", name: "TaxInc", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange })),
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Tax Exempted", id: "TaxExem", name: "TaxExem", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange })),
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Primary Group", id: "GSTEnable", name: "GSTEnable", classCat: "form-control custom-control-input col-3 seriesConf switch", handleChange: handleChange }))),
                React.createElement("span", { className: "d-flex section2 mt-1 col-sm-12" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_input_component_1.CustomSelect, { label: "GST Category", name: "GSTCat", dataArray: [{ code: 1, name: "cat-1" }, { code: 2, name: 'cat-2' }, { code: 3, name: 'cat-3' }], handleChange: handleChange, classCategory: "form-control col-4 seriesConf select" }))),
                React.createElement("span", { className: "d-flex section2 mt-1 col-sm-12" },
                    React.createElement(React.Fragment, null,
                        React.createElement(custom_input_component_1.CustomSelect, { label: "GST Type", name: "GSTType", dataArray: [{ code: 1, name: 'Enter State' }, { code: 2, name: 'Local' }, { code: 3, name: 'Export' }], handleChange: handleChange, classCategory: "form-control col-4 seriesConf select" })))),
            React.createElement("hr", { style: { margin: "0", padding: "0" } }),
            React.createElement("div", { className: "row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3" },
                React.createElement("div", { className: "card-body col-sm-12 addCustomer container container-fluid container-lg", style: { overflowX: "auto", overflowY: "auto" } },
                    React.createElement("table", { id: "dtHorizontalExample", className: "table table-responsive table-striped table-bordered table-sm", style: {
                            width: "100%",
                        } },
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("th", { className: "text-center", style: {
                                        fontWeight: 400,
                                        backgroundColor: "grey",
                                        color: "white",
                                    } }, "S.No"),
                                React.createElement("th", { className: "text-center", style: {
                                        fontWeight: 400,
                                        backgroundColor: "grey",
                                        color: "white",
                                    } }, "Bill Sundry"),
                                React.createElement("th", { className: "text-center", style: {
                                        fontWeight: 400,
                                        backgroundColor: "grey",
                                        color: "white",
                                    } }, "Nature"),
                                React.createElement("th", { className: "text-center", style: {
                                        fontWeight: 400,
                                        backgroundColor: "grey",
                                        color: "white",
                                    } }, "Type"),
                                React.createElement("th", { className: "text-center", style: {
                                        fontWeight: 400,
                                        backgroundColor: "grey",
                                        color: "white",
                                    } }, "Value"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("th", { style: { width: "100px" } }, "1"),
                                React.createElement("td", null,
                                    React.createElement("input", { onChange: handleChange, name: "BSSRNo", className: "form-control inp roleMaster", type: "number", title: "", style: { width: "340px" } })),
                                React.createElement("td", { style: { width: "340px" } },
                                    " ",
                                    React.createElement("input", { onChange: handleChange, name: "BSCode", className: "form-control inp roleMaster", type: "number", title: "", style: { width: "340px" } })),
                                React.createElement("td", { style: { width: "340px" } },
                                    " ",
                                    React.createElement("input", { onChange: handleChange, name: "BSVal", className: "form-control inp roleMaster", type: "number", title: "", style: { width: "340px" } })),
                                React.createElement("td", { style: { width: "340px" } },
                                    " ",
                                    React.createElement("input", { onChange: handleChange, name: "BSType", className: "form-control inp roleMaster", type: "number", title: "", style: { width: "340px" } }))))))),
            React.createElement("hr", { style: { margin: "0", padding: "0" } })),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 ", onClick: handlePosting }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
}
exports.default = SalePurchaseType_Page;
//# sourceMappingURL=sale-purchase-type.page.js.map