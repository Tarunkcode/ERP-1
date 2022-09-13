"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("react-datepicker/dist/react-datepicker.css");
var react_datepicker_1 = require("react-datepicker");
//import UnderConstruction from '../../under-construction';
var SaleInvoice = function () {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    var getState = window.localStorage.getItem('state');
    var state = JSON.parse(getState);
    var getCompCode = window.sessionStorage.getItem('compCode');
    var _a = React.useState([]), masterDetails = _a[0], setMasterDetails = _a[1];
    //------------ default date block-----------------------------------------------------------------------------------------------------------------------
    var today = new Date();
    var format = today.toString().slice(4, 15);
    var yearOnly = format.slice(7, 11);
    var dateOnly = format.slice(4, 6);
    var MonthOnly = format.slice(0, 3);
    var monthNo = 0;
    if (MonthOnly.toLowerCase() == "jan")
        monthNo = 1;
    else if (MonthOnly.toLowerCase() == "feb")
        monthNo = 2;
    else if (MonthOnly.toLowerCase() == "mar")
        monthNo = 3;
    else if (MonthOnly.toLowerCase() == "apr")
        monthNo = 4;
    else if (MonthOnly.toLowerCase() == "may")
        monthNo = 5;
    else if (MonthOnly.toLowerCase() == "jun")
        monthNo = 6;
    else if (MonthOnly.toLowerCase() == "jul")
        monthNo = 7;
    else if (MonthOnly.toLowerCase() == "aug")
        monthNo = 8;
    else if (MonthOnly.toLowerCase() == "sep")
        monthNo = 9;
    else if (MonthOnly.toLowerCase() == "oct")
        monthNo = 10;
    else if (MonthOnly.toLowerCase() == "nov")
        monthNo = 11;
    else if (MonthOnly.toLowerCase() == "dec")
        monthNo = 12;
    var defaultDate = yearOnly + "-" + monthNo + "-" + dateOnly;
    var _b = (0, react_1.useState)(new Date("2022-04-01")), startDate = _b[0], setStartDate = _b[1];
    var _c = (0, react_1.useState)(new Date), endDate = _c[0], setEndDate = _c[1];
    var _d = (0, react_1.useState)("2022-04-01"), changeStartDate = _d[0], setChangeStartDate = _d[1];
    var _e = (0, react_1.useState)(defaultDate), changeEndDate = _e[0], setChangeEndDate = _e[1];
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (React.createElement("div", { className: "firstDiv" },
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "row row-content col-sm-12", style: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' } },
                React.createElement("span", { className: "card-title", style: {
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    } }, "Add Sale Invoice")),
            React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                React.createElement("div", { className: "card addSalecard" },
                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '50vh' } },
                        React.createElement("form", { className: "form" },
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 2px' } },
                                React.createElement("label", { style: { margin: '0 30px 0 12px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "series" }, "Series"),
                                React.createElement("span", { style: { color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' } }, getSoSeries)),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { style: { margin: '0 46px 0 10px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "del-date" }, "Date"),
                                    React.createElement(react_datepicker_1.default, { name: "startDate", className: "startDate form-control col-sm-10 m-0", selectsStart: true, dateFormat: "MMM dd, yyyy", closeOnScroll: true, selected: startDate, onChange: function (k) {
                                            setStartDate(k);
                                            var format = k.toString().slice(4, 15);
                                            var yearOnly = format.slice(7, 11);
                                            var dateOnly = format.slice(4, 6);
                                            var MonthOnly = format.slice(0, 3);
                                            var monthNo = 0;
                                            if (MonthOnly.toLowerCase() == "jan")
                                                monthNo = 1;
                                            else if (MonthOnly.toLowerCase() == "feb")
                                                monthNo = 2;
                                            else if (MonthOnly.toLowerCase() == "mar")
                                                monthNo = 3;
                                            else if (MonthOnly.toLowerCase() == "apr")
                                                monthNo = 4;
                                            else if (MonthOnly.toLowerCase() == "may")
                                                monthNo = 5;
                                            else if (MonthOnly.toLowerCase() == "jun")
                                                monthNo = 6;
                                            else if (MonthOnly.toLowerCase() == "jul")
                                                monthNo = 7;
                                            else if (MonthOnly.toLowerCase() == "aug")
                                                monthNo = 8;
                                            else if (MonthOnly.toLowerCase() == "sep")
                                                monthNo = 9;
                                            else if (MonthOnly.toLowerCase() == "oct")
                                                monthNo = 10;
                                            else if (MonthOnly.toLowerCase() == "nov")
                                                monthNo = 11;
                                            else if (MonthOnly.toLowerCase() == "dec")
                                                monthNo = 12;
                                            var fDate = yearOnly + "-" + monthNo + "-" + dateOnly;
                                            console.log(fDate);
                                            setChangeStartDate(fDate);
                                        } })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-no" }, "Inv No."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "so-no" }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" },
                                        "Customer ",
                                        React.createElement("i", { style: { color: 'red', marginLeft: '5px' } }, "*")),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "delievery-terms", value: masterDetails.DELTERM }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" },
                                        "Po. No. ",
                                        React.createElement("i", { style: { color: 'red', marginLeft: '5px' } }, "*")),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "delievery-terms", value: masterDetails.DELTERM }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" },
                                        "Tran Type ",
                                        React.createElement("i", { style: { color: 'red', marginLeft: '5px' } }, "*")),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "delievery-terms", value: masterDetails.DELTERM }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "Distance"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sold-to", value: getAccName })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "State"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sold-to", value: getAccName }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "Against Pck."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sold-to", value: getAccName })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "Pck.no."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sold-to", value: getAccName })))))),
                React.createElement("div", { className: "card addSalecard" },
                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '50vh' } },
                        React.createElement("form", { className: "form" },
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" }, "Del. Terms"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "delievery-terms", value: masterDetails.DELTERM, readOnly: true })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "open-po" }, "Pck. Type"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "open-po" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "payment-terms" }, "Pay. Terms"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "payment-terms", value: masterDetails.PAYTERM, readOnly: true })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "upload-po" }, "Ref No."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "upload-po" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "currency" }, "Currency"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "currency" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sale-type" }, "Sale Type"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sale-type", readOnly: true, value: masterDetails.TAXNAME }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "po-no" }, "Currency Rate"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "po-no" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sale-type" }, "No Of Pallets"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sale-type" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "po-no" }, "Dis. Through"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "po-no" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sale-type" }, "Revers Charge"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sale-type" })))))))),
        React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "card" },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' } }, "Line Item Details")),
                React.createElement("div", { className: "table-responsive", style: { padding: '0' } },
                    React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                        React.createElement("thead", { className: "thead-light table-secondary text-center" },
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "col" }, "S.No."),
                                React.createElement("th", { scope: "col", style: { padding: '0 12em' } },
                                    React.createElement("span", null, "ItemCode ")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "ItemName")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Quantity")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Uom")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "MRP")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Basic.Rate")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Sale.Rate")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Amount.Rate")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Dis(%)")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Dis.Sale.Rate")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Dis(\u20B9)")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Amount")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "S.Dis(%)")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "S.Dis.Amt")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Amount")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "GST(%)")))),
                        React.createElement("tbody", null))))),
        React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "card col-sm-5", style: { padding: '0', margin: '0', minHeight: '20vh' } },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' } }, "Bill Sundry Details")),
                React.createElement("div", { className: "card-body table-responsive", style: { margin: '0', padding: '0' } },
                    React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                        React.createElement("thead", { className: "thead-light table-secondary text-center" },
                            React.createElement("tr", null,
                                React.createElement("th", null, "S. No"),
                                React.createElement("th", null, "Bill Sundary"),
                                React.createElement("th", null, "Narration"),
                                React.createElement("th", null, "@"),
                                React.createElement("th", null, "Amount (\u20B9)"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "row" }, "1"),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null)))))),
            React.createElement("div", { className: "card col-sm-6", style: { padding: '0', margin: '0', minHeight: '20vh' } },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' } }, "HSN Details")),
                React.createElement("div", { className: "table-responsive card-body", style: { margin: '0', padding: '0' } },
                    React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                        React.createElement("thead", { className: "thead-light table-secondary text-center" },
                            React.createElement("tr", null,
                                React.createElement("th", null, "S. No"),
                                React.createElement("th", null, "HSN No."),
                                React.createElement("th", null, "Quantity"),
                                React.createElement("th", null, "UOM"),
                                React.createElement("th", null, "Tot. Amt"),
                                React.createElement("th", null, "Taxable Amt."),
                                React.createElement("th", null, "GST %"),
                                React.createElement("th", null, "IGST Amt"),
                                React.createElement("th", null, "GST"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "row" }, "1"),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null))))))),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
};
exports.default = SaleInvoice;
//# sourceMappingURL=sale-invoice.component.js.map