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
var react_router_dom_1 = require("react-router-dom");
var BomModals_1 = require("./BomModals");
var RouteDetails = /** @class */ (function (_super) {
    __extends(RouteDetails, _super);
    function RouteDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RouteDetails.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "card col-12 p-3 pt-0", style: { overflow: 'auto' } },
                React.createElement("div", { className: "text-center card-title col-12 bg-info", style: { textAlign: 'start' } },
                    React.createElement("span", { className: "row-header p-0 m-0" }, "BOM Process Item Details")),
                React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                    React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                        React.createElement("fieldset", { className: "form-group border p-0" },
                            React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#genDetails", "aria-expanded": "false", "aria-controls": "genDetails", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                "Item Details",
                                React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                    React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                            React.createElement("div", { className: "collapse show", id: "genDetails" },
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Item Name"),
                                        React.createElement("input", { type: "text", name: "series", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "RCode", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Color"),
                                        React.createElement("input", { type: "text", name: "RCode", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "RName", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Assortment"),
                                        React.createElement("input", { type: "text", name: "RName", className: "form-control inp" }))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Satge No."),
                                        React.createElement("input", { type: "text", name: "custCode", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Process"),
                                        React.createElement("input", { type: "date", name: "payTerm", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Overhead Amt."),
                                        React.createElement("input", { type: "date", name: "payTerm", className: "form-control inp" }))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Quantity"),
                                        React.createElement("input", { type: "text", name: "custName", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "UOM"),
                                        React.createElement("input", { type: "text", name: "payTerm", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Alt UOM"),
                                        React.createElement("input", { type: "text", name: "payTerm", className: "form-control inp" }))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Amount"),
                                        React.createElement("input", { type: "text", name: "custName", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "SetUp Time"),
                                        React.createElement("input", { type: "text", name: "payTerm", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Cycle Time"),
                                        React.createElement("input", { type: "text", name: "payTerm", className: "form-control inp" }))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "jobW", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "JOB Work"),
                                        React.createElement("select", { name: "jobW", className: "form-control inp", style: { height: '25px' } },
                                            React.createElement("option", { value: "1" }, "Y"),
                                            React.createElement("option", { value: "0" }, "N"))),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Machine Department"),
                                        React.createElement("input", { type: "text", name: "payTerm", className: "form-control inp" })))))),
                    React.createElement("hr", { style: { margin: '0', padding: '0' } }),
                    React.createElement("div", { className: "row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3" },
                        React.createElement("div", { className: "card-body col-sm-12 addCustomer container container-fluid container-lg", style: { overflowX: 'auto', overflowY: 'auto' } },
                            React.createElement("div", { className: "text-center card-title col-12 bg-info m-0", style: { textAlign: 'start' } },
                                React.createElement("span", { className: "row-header p-0 m-0" }, "Route Details")),
                            React.createElement("table", { id: "dtHorizontalExample", className: "table table-striped table-bordered table-sm", style: {
                                    width: "100%"
                                } },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Item Code"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Description"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Cons. Aty"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "UOM"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "isProcess Dep."),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Alt Item"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Operation"))),
                                React.createElement("tbody", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", null, "1"),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: true, isBOMProcess: false, isBOMRouting: false })),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: false, isBOMProcess: false, isBOMRouting: true }))),
                                    React.createElement("tr", null,
                                        React.createElement("th", null, "2"),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: true, isBOMProcess: false, isBOMRouting: false })),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: false, isBOMProcess: false, isBOMRouting: true }))),
                                    React.createElement("tr", null,
                                        React.createElement("th", null, "3"),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: true, isBOMProcess: false, isBOMRouting: false })),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: false, isBOMProcess: false, isBOMRouting: true }))))))),
                    React.createElement("hr", { style: { margin: '0', padding: '0' } }),
                    React.createElement("div", { className: "row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3" },
                        React.createElement("div", { className: "card-body col-sm-12 addCustomer container container-fluid container-lg", style: { overflowX: 'auto', overflowY: 'auto' } },
                            React.createElement("div", { className: "text-center card-title col-12 bg-info m-0", style: { textAlign: 'start' } },
                                React.createElement("span", { className: "row-header p-0 m-0" }, "Produce Item Details")),
                            React.createElement("table", { id: "dtHorizontalExample", className: "table table-striped table-bordered table-sm", style: {
                                    width: "100%"
                                } },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Item Code"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Description"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Quantity"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "UOM"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Other Product"))),
                                React.createElement("tbody", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", null, "1"),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: false, isBOMProcess: true, isBOMRouting: false }))),
                                    React.createElement("tr", null,
                                        React.createElement("th", null, "2"),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: false, isBOMProcess: true, isBOMRouting: false }))),
                                    React.createElement("tr", null,
                                        React.createElement("th", null, "3"),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null,
                                            React.createElement(BomModals_1.default, { isBOMAlt: false, isBOMProcess: true, isBOMRouting: false }))))))))),
            React.createElement("hr", { style: { margin: '0', padding: '0' } }),
            React.createElement("button", { type: "button", style: { border: '2px solid #42ba96', letterSpacing: 3 }, className: "btn btn-success p-2 m-3 col-1" }, "Save"),
            React.createElement(React.Fragment, null,
                React.createElement(react_router_dom_1.NavLink, { to: "/bom-routing-configuration" },
                    React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger p-2 m-3 col-1" }, "Quit")))));
    };
    return RouteDetails;
}(React.Component));
exports.default = RouteDetails;
//# sourceMappingURL=RouteDetails.component.js.map