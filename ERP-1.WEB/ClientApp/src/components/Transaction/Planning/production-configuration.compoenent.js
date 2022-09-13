"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("react-datepicker/dist/react-datepicker.css");
var ProductionConfiguration = function () {
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
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start', backgroundColor: '#8389d4' } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "Production Confirmation")),
            React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                    React.createElement("fieldset", { className: "form-group border p-0" },
                        React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#branch", "aria-expanded": "true", "aria-controls": "branch", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                            "Job Confirmation",
                            React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                        React.createElement("div", { className: "collapse show", id: "branch" },
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Prod Series"),
                                    React.createElement("input", { type: "text", name: "series", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Date"),
                                    React.createElement("input", { type: "date", name: "custCode", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Vch No."),
                                    React.createElement("input", { type: "text", name: "delTerm", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-10" })))),
                React.createElement("form", { className: "form col-sm-12 row-content card-body pt-0 pb-0" },
                    React.createElement("fieldset", { className: "form-group border p-0" },
                        React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#addDet", "aria-expanded": "false", "aria-controls": "addDet", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                            "Filter",
                            React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                        React.createElement("div", { className: "collapse", id: "addDet" },
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "contPerson", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Item"),
                                    React.createElement("input", { type: "text", name: "contPerson", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "desg", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Process"),
                                    React.createElement("input", { type: "text", name: "desg", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "mob", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Mould"),
                                    React.createElement("input", { type: "text", name: "mob", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "cheifExe", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "DayWise Series"),
                                    React.createElement("input", { type: "text", name: "cheifExe", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "cheifExeTelNo", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "To Date"),
                                    React.createElement("input", { type: "date", name: "cheifExeTelNo", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "fax", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "From Date"),
                                    React.createElement("input", { type: "date", name: "fax", className: "form-control inp" })))))),
                React.createElement("button", { type: "button", className: "btn btn-primary col-1 m-3" }, "Get Details")),
            React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
            React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                React.createElement("div", { className: "card" },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                        React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' } }, "Item Details")),
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
                            React.createElement("tbody", null, wholeLineItem.map(function (obj, i) {
                                return (React.createElement("tr", null,
                                    React.createElement("th", { scope: "row", className: "text-center" }, i + 1),
                                    React.createElement("td", { className: "item-code" },
                                        React.createElement("input", { style: { margin: '0', padding: '0', width: '100%' }, className: "form-control text-center", list: "itemCodeList", type: "text", id: "cell-ItemCode" }),
                                        itemCodeArr != null && itemCodeArr.length > 0 ?
                                            (React.createElement("datalist", { className: 'item-code-list', id: 'itemCodeList' }, itemCodeArr.map(function (obj) {
                                                return React.createElement("option", { "data-value": obj.ITEMCODE }, obj.ITEMNAME);
                                            })))
                                            : null),
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
                                                React.createElement("path", { d: "M576 384C576 419.3 547.3 448 512 448H205.3C188.3 448 172 441.3 160 429.3L9.372 278.6C3.371 272.6 0 264.5 0 256C0 247.5 3.372 239.4 9.372 233.4L160 82.75C172 70.74 188.3 64 205.3 64H512C547.3 64 576 92.65 576 128V384zM271 208.1L318.1 256L271 303C261.7 312.4 261.7 327.6 271 336.1C280.4 346.3 295.6 346.3 304.1 336.1L352 289.9L399 336.1C408.4 346.3 423.6 346.3 432.1 336.1C442.3 327.6 442.3 312.4 432.1 303L385.9 256L432.1 208.1C442.3 199.6 442.3 184.4 432.1 175C423.6 165.7 408.4 165.7 399 175L352 222.1L304.1 175C295.6 165.7 280.4 165.7 271 175C261.7 184.4 261.7 199.6 271 208.1V208.1z" }))))) : null));
                            })))))),
            React.createElement("hr", { style: { border: '2px solid grey', opacity: '0.5' } }),
            React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                React.createElement("div", { className: "card col-sm-10", style: { padding: '0', margin: '0', minHeight: '20vh' } },
                    React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                        React.createElement("span", { className: "card-title", style: { fontSize: '15px', color: 'white', fontWeight: 900, margin: '0', padding: '0' } }, "Details")),
                    React.createElement("div", { className: "card-body table-responsive", style: { margin: '0', padding: '0' } },
                        React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                            React.createElement("thead", { className: "thead-light table-secondary text-center" },
                                React.createElement("tr", null,
                                    React.createElement("th", null, "S. No"),
                                    React.createElement("th", null, "Plan No."),
                                    React.createElement("th", null, "Item COde"),
                                    React.createElement("th", null, "Item Name"),
                                    React.createElement("th", null, "Req Qty"),
                                    React.createElement("th", null, "UOM"),
                                    React.createElement("th", null, "Stock Qty"))),
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("th", { scope: "row" }, "1"),
                                    React.createElement("td", null),
                                    React.createElement("td", null),
                                    React.createElement("td", null),
                                    React.createElement("td", null),
                                    React.createElement("td", null),
                                    React.createElement("td", null)))))))),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-primary pl-0 pr-0 ml-2" }, "Check Stock"),
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0 ml-2" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
};
exports.default = ProductionConfiguration;
//# sourceMappingURL=production-configuration.compoenent.js.map