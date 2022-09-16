"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("react-datepicker/dist/react-datepicker.css");
var react_datepicker_1 = require("react-datepicker");
var react_1 = require("react");
var SaleReturn = function () {
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
            React.createElement("div", { className: "row row-content col-sm-12", style: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                React.createElement("span", { className: "card-title", style: {
                        fontSize: '15px', color: 'white', padding: '0',
                        margin: '0'
                    } }, "Sale Return Against Sale")),
            React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg d-flex flex-row p-0 m-0" },
                React.createElement("div", { style: { width: '50%', margin: '0', padding: '0', display: 'flex', flexDirection: 'column' } },
                    React.createElement("div", { className: "card addSalecard", style: { width: '100%', padding: '0 20px' } },
                        React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0' } },
                            React.createElement("form", { className: "form" },
                                React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-3", htmlFor: "series" }, "Series"),
                                        React.createElement("span", { className: "col-sm-5", style: { color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' } }, "Series"))),
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
                                        React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "so-no" })))))),
                    React.createElement("div", { className: "card addSalecard", style: { width: '100%', padding: '0 20px', minHeight: '31vh' } },
                        React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0' } },
                            React.createElement("form", { className: "form" },
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-3", htmlFor: "del-date" }, "Sold To"),
                                        React.createElement("input", { className: "form-control col-sm-5", type: "text", name: "del-date" }))),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-3", htmlFor: "po-no" }, "Address"),
                                        React.createElement("textarea", { className: "form-control col-sm-6", name: "po-no" }),
                                        " ")),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                    React.createElement("div", { style: { visibility: 'hidden' } },
                                        React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-3" }),
                                        React.createElement("input", { className: "form-control col-sm-5", type: "text" }),
                                        " ")),
                                React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "bill-curr" }, "Sale F.y"),
                                        React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "bill-curr" }),
                                        " "),
                                    React.createElement(React.Fragment, null,
                                        " ",
                                        React.createElement("label", { style: { padding: '0', fontSize: '14px', marginLeft: '50px' }, className: "form-label col-sm-2", htmlFor: "curr-rate" }, "State & State Code"),
                                        React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "curr-rate" }),
                                        " ")))))),
                React.createElement("div", { className: "card addSalecard", style: { width: '50%' } },
                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '20 0' } },
                        React.createElement("form", { className: "form" },
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" },
                                        "Del. Terms ",
                                        React.createElement("i", { style: { color: 'red', marginLeft: '5px' } }, "*")),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "delievery-terms" }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" },
                                        "Payment Terms ",
                                        React.createElement("i", { style: { color: 'red', marginLeft: '5px' } }, "*")),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "delievery-terms" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "bill-curr" }, "Bill Currency"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "bill-curr" }),
                                    " "),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { padding: '0', fontSize: '14px', marginLeft: '50px' }, className: "form-label col-sm-2", htmlFor: "curr-rate" }, "Curr. Rate"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "curr-rate" }),
                                    " ")),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "upload-bill" }, "Sale Type"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "upload-bill" }),
                                    " ")),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0px' } },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "series" }, "Bill No."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "number" })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { padding: '0', fontSize: '14px', marginLeft: '50px' }, className: "form-label col-sm-2", htmlFor: "bill-date" }, "Bill Date"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "date", name: "bill-date" }),
                                    " ")),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "bill-amt" }, "Bill Amt."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "bill-amt" }),
                                    " "))))))),
        React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "card" },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', margin: '0', padding: '0' } }, "Sale Invoice Line Item Details")),
                React.createElement("div", { className: "table-responsive", style: { padding: '0' } },
                    React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                        React.createElement("thead", { className: "thead-light table-secondary" },
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "col", className: "text-center col-sm-1", style: { fontWeight: 400 } }, "S.No."),
                                React.createElement("th", { scope: "col", className: "col-sm-3 text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Item Code")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Item Name")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Assortment")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Return Type")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Carton Size")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Bal SI Qty")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Return Qty")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "UoM")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "SI Carton")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Return Carton")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Rate")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Value")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Mat.Center")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "GST Category")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "CGST(%)")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "CGST Amt")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "SGST(%)")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "SGST AMt")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "IGST(%)")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "IGST Amt")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Alt Qty")),
                                React.createElement("th", { scope: "col", className: "text-center", style: { fontWeight: 400 } },
                                    React.createElement("span", null, "Alt.UoM")))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "row" }, "1"),
                                React.createElement("td", { className: "item-code" },
                                    React.createElement("input", { style: { margin: '0', padding: '0', width: '100%' }, className: "form-control", list: "itemCodeList", type: "text", id: "cell-ItemCode" })),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", { className: "item-code" },
                                    React.createElement("input", { style: { margin: '0', padding: '0', width: '100%' }, className: "form-control", list: "itemCodeList", type: "text", id: "cell-ItemCode" })),
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
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null))))))),
        React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "card col-sm-6", style: { padding: '0', margin: '0' } },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', margin: '0', padding: '0' } }, "Bill Sundry Details")),
                React.createElement("div", { className: "card-body table-responsive", style: { margin: '0', padding: '0' } },
                    React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                        React.createElement("thead", { className: "thead-light table-secondary" },
                            React.createElement("tr", null,
                                React.createElement("th", { style: { fontWeight: 400 } }, "S. No"),
                                React.createElement("th", { style: { fontWeight: 400 } }, "Bill Sundry"),
                                React.createElement("th", { style: { fontWeight: 400 } }, "Narration"),
                                React.createElement("th", { style: { fontWeight: 400 } }, "Amount (\u20B9)"))),
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "row" }, "1"),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null)))))),
            React.createElement("div", { className: "card col-sm-5", style: { padding: '0', marginRight: '0' } },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', margin: '0', padding: '0' } }, "Transporter Details")),
                React.createElement("div", { className: "transporter-details col-sm-12", style: { margin: '3px 0', padding: '10px' } },
                    React.createElement("span", { className: "col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' } },
                        React.createElement("label", { htmlFor: "transporter", className: "form-label col-4" }, "Transporter"),
                        React.createElement("input", { name: "transporter", className: "form-control col-5", type: "text" })),
                    React.createElement("span", { className: "col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' } },
                        React.createElement("label", { htmlFor: "driver", className: "form-label col-4" }, "G.R No."),
                        React.createElement("input", { name: "driver", className: "form-control col-5", type: "text" })),
                    React.createElement("span", { className: "col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' } },
                        React.createElement("label", { htmlFor: "vehicalNo", className: "form-label col-4" }, "Vehical No."),
                        React.createElement("input", { name: "vehicalNo", className: "form-control col-5", type: "text" })),
                    React.createElement("span", { className: "col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', textAlign: 'left', alignItems: 'space-around', width: '100%', margin: '0', padding: '0' } },
                        React.createElement("label", { htmlFor: "mobNo", className: "form-label col-4" }, "Way Form No."),
                        React.createElement("input", { name: "mobNo", className: "form-control col-5", type: "text" }))))),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
};
exports.default = SaleReturn;
//# sourceMappingURL=sale-return.component.js.map