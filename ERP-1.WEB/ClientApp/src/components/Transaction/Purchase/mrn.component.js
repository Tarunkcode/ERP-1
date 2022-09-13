"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("react-datepicker/dist/react-datepicker.css");
var MRN = function () {
    var getSoSeries = window.sessionStorage.getItem('so-series');
    var getAccName = window.sessionStorage.getItem('acc-name');
    var getState = window.localStorage.getItem('state');
    var state = JSON.parse(getState);
    var getCompCode = window.sessionStorage.getItem('compCode');
    var _a = React.useState([]), itemCodeArr = _a[0], setItemCodeArr = _a[1];
    var kinda = React.useRef('');
    var _b = React.useState([]), masterDetails = _b[0], setMasterDetails = _b[1];
    var _c = React.useState(''), changeItemCode = _c[0], setChangeItemCode = _c[1];
    var _d = React.useState(''), changeItemName = _d[0], setChangeItemName = _d[1];
    var _e = React.useState([{ UOMNAME: '', MRP: '', SGST: '', CGST: '', IGST: '', GSTCAT: '', SALEPRICE: '' }]), wholeLineItem = _e[0], setWholeLineItem = _e[1];
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
    var _f = (0, react_1.useState)(new Date("2022-04-01")), startDate = _f[0], setStartDate = _f[1];
    var _g = (0, react_1.useState)(new Date), endDate = _g[0], setEndDate = _g[1];
    var _h = (0, react_1.useState)("2022-04-01"), changeStartDate = _h[0], setChangeStartDate = _h[1];
    var _j = (0, react_1.useState)(defaultDate), changeEndDate = _j[0], setChangeEndDate = _j[1];
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (React.createElement("div", { className: "firstDiv" },
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "row row-content col-sm-12", style: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '10px 0 0 0', padding: '0' } },
                React.createElement("span", { className: "card-title", style: {
                        fontSize: '15px', color: 'white', fontWeight: 900, padding: '0',
                        margin: '0'
                    } }, "Add Matrial Reciept On Challan")),
            React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                React.createElement("div", { className: "card addSalecard" },
                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '44vh' } },
                        React.createElement("form", { className: "form" },
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-date" }, "Series"),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "so-date" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-date" }, "Supplier"),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "so-date" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0 30px 0 10px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-date" }, "MRN Type"),
                                    React.createElement("input", { className: "form-control col-sm-6", type: "text", name: "so-date" }))),
                            React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "MR Date"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "date", name: "sold-to", value: getAccName })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "address" }, "MR No."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "address", value: masterDetails.ADDRESSNAME })))))),
                React.createElement("div", { className: "card addSalecard" },
                    React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '28vh' } },
                        React.createElement("form", { className: "form" },
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" }, "Number"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "delievery-terms", value: masterDetails.DELTERM })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "open-po" }, "Date"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "date", name: "open-po" }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" }, "Challan Unit"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "delievery-terms", value: masterDetails.DELTERM })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "open-po" }, "Amount"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "open-po" }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" }, "Excise Bill (Y/N)"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "checkbox", name: "delievery-terms", value: masterDetails.DELTERM })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "open-po" }, "Currency"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "open-po" }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" }, "Purchase Type"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "delievery-terms", value: masterDetails.DELTERM })),
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "open-po" }, "Exch Rate"),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "open-po" }))),
                            React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                                React.createElement(React.Fragment, null,
                                    " ",
                                    React.createElement("label", { style: { margin: '0px 25px 0px 16px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "delievery-terms" }, "Ref. No."),
                                    React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "delievery-terms", value: masterDetails.DELTERM, readOnly: true })),
                                React.createElement("div", { className: "col-2" })),
                            React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "open-po" },
                                "Upload Bill",
                                React.createElement("input", { type: "file" }))))))),
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
                                React.createElement("td", null))))))),
        React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
};
exports.default = MRN;
//# sourceMappingURL=mrn.component.js.map