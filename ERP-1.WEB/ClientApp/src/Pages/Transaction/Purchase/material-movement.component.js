"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MaterialMovement = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start', backgroundColor: '#8389d4' } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "Material InTransit Details")),
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
                                    React.createElement("div", { className: "col-2" }),
                                    React.createElement("div", { className: "col-2" })),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "material" }, "Supplier"),
                                        React.createElement("input", { className: "form-control inp", type: "text", name: "material" })),
                                    React.createElement("div", { className: "col-2" }),
                                    React.createElement("div", { className: "col-2" })),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "code" }, "Item"),
                                        React.createElement("input", { className: "form-control inp", type: "text", name: "code" })),
                                    "  ",
                                    React.createElement("div", { className: "col-2" }),
                                    React.createElement("div", { className: "col-2" }),
                                    " "),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "publicationNo" }, "From No."),
                                        React.createElement("input", { className: "form-control inp", type: "text", name: "publicationNo" })),
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { margin: '0 0 0 10em', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "publicationNo" }, "End. No."),
                                        React.createElement("input", { className: "form-control inp", type: "text", name: "publicationNo" })),
                                    React.createElement("div", { className: "col-2" })),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { margin: '0 0 0 10px', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "publicationNo" }, "From Date"),
                                        React.createElement("input", { className: "form-control inp", type: "date", name: "publicationNo" })),
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { margin: '0 0 0 10em', padding: '0', fontSize: '14px' }, className: "form-label labl", htmlFor: "publicationNo" }, "To Date"),
                                        React.createElement("input", { className: "form-control inp", type: "date", name: "publicationNo" })),
                                    React.createElement("div", { className: "col-2" })))))),
                React.createElement("hr", null),
                React.createElement("div", { className: "col-sm-12 addQcPlan container container-fluid container-lg mt-3", style: { overflowX: 'auto', overflowY: 'auto' } },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', margin: '0', padding: '0', width: '100%' } },
                        React.createElement("fieldset", { className: "form-group border p-0" },
                            React.createElement("legend", { className: "px-2", style: { fontSize: '15px', margin: '0', padding: '0' } }, "Details"),
                            React.createElement("table", { id: "dtHorizontalExample", className: "table table-striped table-bordered table-sm", style: {
                                    width: "100%"
                                } },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "S.No"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Plan No."),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Plan Month."),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Po No."),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Po Date"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Supplier"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Item Code"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Item Name"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Po. Qty"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Po.Price"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Rec. Qty"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Bal Qty."),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Dispatch Date"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Date Of Arrival"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Bill Qty"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Remark"))),
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
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null),
                                        React.createElement("td", null))))))))),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "UpDate"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "ExPort"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
};
exports.default = MaterialMovement;
//# sourceMappingURL=material-movement.component.js.map