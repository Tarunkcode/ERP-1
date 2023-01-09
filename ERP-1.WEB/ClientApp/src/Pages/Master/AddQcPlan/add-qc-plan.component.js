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
var AddQcPlan = /** @class */ (function (_super) {
    __extends(AddQcPlan, _super);
    function AddQcPlan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddQcPlan.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "modal fade", id: "qcPlanCopy", role: "dialog", "aria-labelledby": "qcPlanModalLabel", "aria-hidden": "true" },
                React.createElement("div", { className: "modal-dialog", role: "document" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("h5", { className: "modal-title", id: "qcPlanLabel" }, "QC Plan Copy Details"),
                            React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                React.createElement("span", { "aria-hidden": "true" }, "\u00D7"))),
                        React.createElement("div", { className: "modal-body" },
                            React.createElement(React.Fragment, null,
                                React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label col-12", htmlFor: "material" }, "Material"),
                                React.createElement("input", { className: "form-control col-12 p-0", type: "text", name: "material" }))),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { type: "button", className: "btn btn-primary" }, "Copy"),
                            React.createElement("button", { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, "Cancel"))))),
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: "main card firstDiv" },
                    React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start', backgroundColor: '#8389d4' } },
                        React.createElement("span", { className: "row-header p-0 m-0" }, "Add QC Plan")),
                    React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                            React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                                React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0' } },
                                    React.createElement("form", { className: "form" },
                                        React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 0px' } },
                                            React.createElement(React.Fragment, null,
                                                " ",
                                                React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "series" }, "Series"),
                                                React.createElement("input", { className: "form-control inp", type: "text", name: "series" })),
                                            React.createElement(React.Fragment, null,
                                                " ",
                                                React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "code" }, "Code"),
                                                React.createElement("input", { className: "form-control inp", type: "text", name: "code" })),
                                            React.createElement(React.Fragment, null,
                                                " ",
                                                React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "publicationNo" }, "Pub. No."),
                                                React.createElement("input", { className: "form-control inp", type: "text", name: "publicationNo" }))),
                                        React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                            React.createElement(React.Fragment, null,
                                                " ",
                                                React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "material" }, "Material"),
                                                React.createElement("input", { className: "form-control inp", type: "text", name: "material" })),
                                            React.createElement(React.Fragment, null,
                                                " ",
                                                React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "description" }, "Desc."),
                                                React.createElement("input", { className: "form-control inp", type: "text", name: "description" })),
                                            React.createElement("div", { className: "col-2" })))))),
                        React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                            React.createElement("fieldset", { className: "form-group border p-0" },
                                React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#validation", "aria-expanded": "false", "aria-controls": "validation", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                    "Validation",
                                    React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                        React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                                React.createElement("div", { className: "collapse", id: "validation" },
                                    React.createElement("span", { className: "d-flex section2 col-sm-10 m-0 mb-2 pl-0 pr-0" },
                                        React.createElement(React.Fragment, null,
                                            React.createElement("label", { htmlFor: "validFrom", style: { fontSize: '0.8em' }, className: "form-label labl m-0" }, "ValidFrom"),
                                            React.createElement("input", { type: "date", name: "validFrom", className: "form-control inp" })),
                                        React.createElement(React.Fragment, null,
                                            React.createElement("label", { htmlFor: "validTo", style: { fontSize: '0.8em' }, className: "form-label unit labl labl2" }, "ValidTo"),
                                            React.createElement("input", { type: "date", name: "validTo", className: "form-control inp" })))))),
                        React.createElement("button", { type: "button", className: "mt-3", "data-toggle": "modal", "data-target": "#qcPlanCopy" }, "QC Plan Copy"),
                        React.createElement("hr", null),
                        React.createElement("div", { className: "col-sm-12 addQcPlan container container-fluid container-lg mt-3", style: { overflowX: 'auto', overflowY: 'auto' } },
                            React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', margin: '0', padding: '0', width: '100%' } },
                                React.createElement("fieldset", { className: "form-group border p-0" },
                                    React.createElement("legend", { className: "px-2", style: { fontSize: '15px', margin: '0', padding: '0' } }, "Specification"),
                                    React.createElement("table", { id: "dtHorizontalExample", className: "table table-striped table-bordered table-sm", style: {
                                            width: "100%"
                                        } },
                                        React.createElement("thead", null,
                                            React.createElement("tr", null,
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "S.No"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Quality Parameter(MIC)"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Desc."),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Sampling Plan"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "UOM"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Target Value"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Lower Value"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Upper Value"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Narration"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "QC Type"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Measuring Method"))),
                                        React.createElement("tbody", null,
                                            React.createElement("tr", null,
                                                React.createElement("th", null, "1"),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null)),
                                            React.createElement("tr", null,
                                                React.createElement("th", null, "2"),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null)),
                                            React.createElement("tr", null,
                                                React.createElement("th", null, "3"),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null))))))))),
                React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
                    React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
                    React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
                    React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit")))));
    };
    return AddQcPlan;
}(React.Component));
exports.default = AddQcPlan;
//# sourceMappingURL=add-qc-plan.component.js.map