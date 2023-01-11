"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var custom_input_component_1 = require("../../../components/custom-input/custom-input.component");
var custom_switch_component_1 = require("../../../components/CustomSwitch/custom-switch.component");
var master_modals_1 = require("../../../components/Modals/master.modals");
require("../masterStyle.css");
var AddItemMaster = /** @class */ (function (_super) {
    __extends(AddItemMaster, _super);
    function AddItemMaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddItemMaster.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "main card firstDiv" },
                React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start' } },
                    React.createElement("span", { className: "row-header p-0 m-0" }, "Item Master")),
                React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                    React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                        React.createElement("fieldset", { className: "form-group border p-0" },
                            React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#genDetails", "aria-expanded": "true", "aria-controls": "genDetails", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                "Item Details",
                                React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                    React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                            React.createElement("div", { className: "collapse show", id: "genDetails" },
                                React.createElement("span", { className: "d-flex flex-row section2 col-sm-12" },
                                    React.createElement(custom_input_component_1.MasterInput, { name: "series", label: "Series", ipTitle: "Enter Series", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "name", label: "Name", ipTitle: "Enter Name", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "printname", label: "Print Name", ipTitle: "Enter Print Name", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" })),
                                React.createElement("span", { className: "d-flex flex-row section2 col-sm-12" },
                                    React.createElement(custom_input_component_1.MasterInput, { name: "code", label: "Code", ipTitle: "Enter Code", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "sizedependent", label: "Size Dependent", ipTitle: "Enter Size Dependent", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "matcenter", label: "MatCenter", ipTitle: "Enter MatCenter", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" })),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(custom_input_component_1.MasterInput, { name: "uom", label: "UOM", ipTitle: "Enter UOM", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "altUom", label: "Alt UOM", ipTitle: "Enter Alt UOM", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "convfact", label: "Conv Fact", ipTitle: "Enter Conv Fact", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" })),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(custom_input_component_1.MasterInput, { name: "convtype", label: "Conv Type", ipTitle: "Enter Conv Type", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "netwt", label: "Net Wt.", ipTitle: "Enter Net Weight", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "grossWt", label: "Gross Weight", ipTitle: "Enter Gross Weight", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" })),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(custom_input_component_1.MasterInput, { name: "valtype", label: "Val. Type", ipTitle: "Enter Val Type", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "opnstock", label: "Open Stock", ipTitle: "Enter Open Stock", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "gst", label: "GST", ipTitle: "Enter GST", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" })),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(custom_input_component_1.MasterInput, { name: "hsn", label: "HSN/ SA No.", ipTitle: "Enter HSN", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "saleacc", label: "Sale Account", ipTitle: "Enter Sale Account", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }),
                                    React.createElement(custom_input_component_1.MasterInput, { name: "puracc", label: "Purchase Account", ipTitle: "Enter Purchase Account", ipType: "text", handleChange: function () { }, classCategory: "form-control inp" }))))),
                    React.createElement("form", { className: "form col-sm-12 row-content card-body pt-0 pb-0" },
                        React.createElement("fieldset", { className: "form-group border p-0" },
                            React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#otherDetails", "aria-expanded": "false", "aria-controls": "otherDetails", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                "Other Details",
                                React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                    React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                            React.createElement("div", { id: "otherDetails", className: "collapse row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                                React.createElement("div", { className: "card addSalecard col-sm-4" },
                                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '36vh' } },
                                        React.createElement("form", { className: "form" },
                                            React.createElement("span", { className: "d-flex section2 col-sm-12 mt-3" },
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "salePrice", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Sale.Price"),
                                                    React.createElement("input", { type: "text", name: "salePrice", className: "form-control inp" })),
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "per", style: { fontSize: '0.8em' }, className: "form-label col-2" }, "Per"),
                                                    React.createElement("input", { type: "text", name: "per", className: "form-control inp" }))),
                                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "purPrice", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Purchase Price"),
                                                    React.createElement("input", { type: "text", name: "purPrice", className: "form-control inp" })),
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "per", style: { fontSize: '0.8em' }, className: "form-label col-2" }, "Per"),
                                                    React.createElement("input", { type: "text", name: "per", className: "form-control inp" }))),
                                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "mrp", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "MRP."),
                                                    React.createElement("input", { type: "text", name: "mrp", className: "form-control inp" })),
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "per", style: { fontSize: '0.8em' }, className: "form-label col-2" }, "Per"),
                                                    React.createElement("input", { type: "text", name: "per", className: "form-control inp" }))),
                                            React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                                React.createElement(React.Fragment, null,
                                                    React.createElement("label", { htmlFor: "selfValuation", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Self Valuation Price"),
                                                    React.createElement("input", { type: "text", name: "selfValuation", className: "form-control col-7" })))))),
                                React.createElement("div", { className: "card addSalecard col-sm-4" },
                                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '36vh' } },
                                        React.createElement("form", { className: "form" },
                                            React.createElement("span", { className: "d-flex flex-column section2 col-sm-12 mt-3" },
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "group", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Group"),
                                                    React.createElement("input", { type: "text", name: "group", className: "form-control col-5" })),
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "type", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Type"),
                                                    React.createElement("input", { type: "text", name: "type", className: "form-control col-5" })),
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "category", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Category"),
                                                    React.createElement("input", { type: "text", name: "category", className: "form-control col-5" })),
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "category", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Sub Category"),
                                                    React.createElement("input", { type: "text", name: "category", className: "form-control col-5" }))),
                                            React.createElement("span", { className: "d-flex flex-column section2 col-sm-12" },
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "brand", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Brand"),
                                                    React.createElement("input", { type: "text", name: "brand", className: "form-control col-5" })),
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "brand", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Clearance"),
                                                    React.createElement("input", { type: "text", name: "brand", className: "form-control col-5" })),
                                                React.createElement("div", { className: "m-0 p-0 d-flex flex-row" },
                                                    React.createElement("label", { htmlFor: "nature", style: { fontSize: '0.8em' }, className: "form-label col-4" }, "Nature"),
                                                    React.createElement("select", { id: "nature", className: "form-control col-5 p-0", style: { height: '25px' } },
                                                        React.createElement("option", { value: "Item" }, "Item"),
                                                        React.createElement("option", { value: "Service" }, "Service"),
                                                        React.createElement("option", { value: "Asset" }, "Asset"))))))),
                                React.createElement("div", { className: "card addSalecard col-sm-4" },
                                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '36vh' } },
                                        React.createElement("form", { className: "form" },
                                            React.createElement("span", { className: "d-flex flex-column section2 col-sm-8" },
                                                React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "Parameterized", id: "c1", name: "c1", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: function () { } }),
                                                React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "Bil Sun", id: "c2", name: "c2", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: function () { } }),
                                                React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "QC Applicable", id: "c3", name: "c3", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: function () { } }),
                                                React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "Quotation", id: "c4", name: "c4", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: function () { } }),
                                                React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "is blocked", id: "c5", name: "c5", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: function () { } }),
                                                React.createElement(custom_switch_component_1.default, { lablClass: "custom-control-label col-9", label: "Batch Managed", id: "c6", name: "c6", classCat: "form-control custom-control-input col-3 subMaster switch", handleChange: function () { } })))))))),
                    React.createElement("hr", { style: { margin: '0', padding: '0' } }),
                    React.createElement("div", { className: "detailsComponent m-0 p-0  col-12" })),
                React.createElement("hr", { style: { margin: '0', padding: '0' } })),
            React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
                React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
                React.createElement(master_modals_1.StockMasterModal, null),
                React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
    };
    return AddItemMaster;
}(React.Component));
exports.default = AddItemMaster;
//# sourceMappingURL=add-item-master.component.js.map