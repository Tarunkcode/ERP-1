"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var PurcahseInvoice = function () {
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
                    } }, "Pending MRN for Purchase")),
            React.createElement("div", { className: "row row-content card col-sm-12 addSaleForm container container-fluid container-lg" },
                React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '28vh', width: '100%' } },
                    React.createElement("form", { className: "form col-7 ml-1" },
                        React.createElement("span", { className: "form-group col-sm-12", style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0', padding: '10px 2px' } },
                            React.createElement("label", { style: { margin: '0 30px 0 12px', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "series" }, "MRN Series"),
                            React.createElement("span", { style: { color: 'red', fontWeight: 'bold', fontSize: '15px', margin: '0', padding: '0' } }, getSoSeries)),
                        React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0 10px', padding: '10px 0' } },
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0 28px 0 0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-date" }, "Supplier"),
                                React.createElement("input", { className: "form-control col-sm-5", type: "text", name: "so-date" }))),
                        React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "MRN No. From"),
                                React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sold-to", value: getAccName })),
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "address" }, "MRN No. To"),
                                React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "address", value: masterDetails.ADDRESSNAME }))),
                        React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'space-around', margin: '0', padding: '10px 0' } },
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "sold-to" }, "Reciept Date From"),
                                React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "sold-to", value: getAccName })),
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "address" }, "Reciept Date To"),
                                React.createElement("input", { className: "form-control col-sm-3", type: "text", name: "address", value: masterDetails.ADDRESSNAME }))),
                        React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0 10px', padding: '10px 0' } },
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0 28px 0 0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-date" }, "Item Code"),
                                React.createElement("input", { className: "form-control col-sm-5", type: "text", name: "so-date" }))),
                        React.createElement("span", { className: 'form-group col-sm-12', style: { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', margin: '0 10px', padding: '10px 0' } },
                            React.createElement(React.Fragment, null,
                                " ",
                                React.createElement("label", { style: { margin: '0 28px 0 0', padding: '0', fontSize: '14px' }, className: "form-label col-sm-2", htmlFor: "so-date" }, "Customer Bill No."),
                                React.createElement("input", { className: "form-control col-sm-5", type: "text", name: "so-date" }))),
                        React.createElement("div", { className: "col-12" }),
                        React.createElement("button", { type: "submit", className: "btn btn-primary m-2 col-2 d-flex flex-start" }, "Load Data"))))),
        React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
        React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
            React.createElement("div", { className: "card" },
                React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' } }, "Pending Mrn For Purchase Details")),
                React.createElement("div", { className: "table-responsive", style: { padding: '0' } },
                    React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                        React.createElement("thead", { className: "thead-light table-secondary text-center" },
                            React.createElement("tr", null,
                                React.createElement("th", { scope: "col" }, "S.No."),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "GRN.No")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "GRN Date")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Purchase Ord")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Supplier Name")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Bill No.")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Bill Date")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Item Code")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Description")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Model No.")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "GRN Qty")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "UoM")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Processed Qty")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Balance Qty")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Mat.Center")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Process")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "GRSRNO")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Batch No.")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Color")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "Size")),
                                React.createElement("th", { scope: "col", style: { padding: '0 2em' } },
                                    React.createElement("span", { style: { margin: '0 10px' } }, "P3")))),
                        React.createElement("tbody", null, wholeLineItem.map(function (obj, i) {
                            return (React.createElement("tr", null,
                                React.createElement("th", { scope: "row", className: "text-center" }, i + 1),
                                React.createElement("td", null, kinda.current),
                                React.createElement("td", null,
                                    React.createElement("input", { type: "text", className: "form-control", required: true })),
                                React.createElement("td", null, obj.UOMNAME),
                                React.createElement("td", null, obj.MRP),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null, obj.CGST),
                                React.createElement("td", null, obj.SGST),
                                React.createElement("td", null, obj.SALEPRICE),
                                React.createElement("td", null, obj.IGST),
                                React.createElement("td", null, obj.GSTCAT),
                                i == wholeLineItem.length - 2 ? (React.createElement("button", { type: "button", value: i },
                                    React.createElement("i", null,
                                        React.createElement("svg", { style: { width: '21px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512" },
                                            React.createElement("path", { d: "M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" }))))) : null,
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null),
                                React.createElement("td", null)));
                        }))))))));
};
exports.default = PurcahseInvoice;
//# sourceMappingURL=purchase-invoice.component.js.map