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
require("../masterStyle.css");
var master_modals_1 = require("../../../components/Modals/master.modals");
var master_modals_2 = require("../../../components/Modals/master.modals");
var master_modals_3 = require("../../../components/Modals/master.modals");
var master_modals_4 = require("../../../components/Modals/master.modals");
var master_modals_5 = require("../../../components/Modals/master.modals");
var fetchApi_hoc_1 = require("../../../components/HOC/fetchApi.hoc");
var custom_input_component_1 = require("../../../components/custom-input/custom-input.component");
var ApiState = /** @class */ (function (_super) {
    __extends(ApiState, _super);
    /*static ApiContext = MasterApiContext;*/
    function ApiState(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAddressOptions = function (event) {
            event.preventDefault();
            _this.setState({
                opn: event.target.value
            });
        };
        _this.state = {
            opn: 'Corporate',
            series: [],
            delT: [],
            payT: [],
            custGp: []
        };
        _this.handleAddressOptions = function () { };
        return _this;
    }
    ApiState.prototype.componentDidMount = function () {
        var _this = this;
        try {
            //fetch series master 
            this.props.fetchApi(3, 'series').then(function (res) {
                if (res.ok)
                    return res.json();
                else
                    throw new Error('Bad Fetch 1');
            }).then(function (result) { return _this.setState({ series: result.data }); });
            //fetch del terms
            this.props.fetchApi(30, 'delterms').then(function (res) {
                if (res.ok)
                    return res.json();
                else
                    throw new Error('Bad Fetch 1');
            }).then(function (result) { return _this.setState({ delT: result.data }); });
            // fetch pay terms
            this.props.fetchApi(31, 'payterms').then(function (res) {
                if (res.ok)
                    return res.json();
                else
                    throw new Error('Bad Fetch 1');
            }).then(function (result) { return _this.setState({ payT: result.data }); });
            // fetch Customer Group
            this.props.fetchApi(1005, 'custGp').then(function (res) {
                if (res.ok)
                    return res.json();
                else
                    throw new Error('Bad Fetch 1');
            }).then(function (result) { return _this.setState({ custGp: result.data }); });
        }
        catch (err) {
            alert(err);
        }
    };
    ApiState.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "main card firstDiv" },
                React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start', backgroundColor: '#8389d4' } },
                    React.createElement("span", { className: "row-header p-0 m-0" }, "Add Customer Master")),
                React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                    React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                        React.createElement("fieldset", { className: "form-group border p-0" },
                            React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#genDetails", "aria-expanded": "true", "aria-controls": "genDetails", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                "General Details",
                                React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                    React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                            React.createElement("div", { className: "show", id: "genDetails" },
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "series", ipType: "text", label: "Series", ipTitle: "Enter Series", dataArray: this.state.series }),
                                        React.createElement(master_modals_2.SeriesMasterModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "custCode", ipType: "text", label: "Customer Code", ipTitle: "Enter Customer Code", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "custName", ipType: "text", label: "Customer Name", ipTitle: "Enter Customer Name", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "pntName", ipType: "text", label: "Print Name", ipTitle: "Enter Print Name", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "custGrp", ipType: "text", label: "Customer Group", ipTitle: "Enter Customer Group", dataArray: this.state.custGp }),
                                        React.createElement(master_modals_3.CustomerGroupModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Major Products"),
                                        React.createElement("select", { name: "majProd", className: "form-control inp", style: { height: '25px' }, title: "Major Products" },
                                            React.createElement("option", { value: "1" }, "Y"),
                                            React.createElement("option", { value: "0" }, "N")),
                                        React.createElement(master_modals_1.HiddenModal, null))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "delTerms", ipType: "text", label: "Delivery Terms", ipTitle: "Enter Delievery Terms", dataArray: this.state.delT }),
                                        React.createElement(master_modals_4.DelTermsModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "payTerms", ipType: "text", label: "Payment terms", ipTitle: "Enter Payment Terms", dataArray: this.state.payT }),
                                        React.createElement(master_modals_5.PayTermsModal, null)),
                                    React.createElement("div", { className: "col-4" })),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Opening Balance"),
                                        React.createElement("input", { type: "text", name: "opnBal", className: "form-control", style: { width: '18%' }, title: "Opening Balance" }),
                                        React.createElement("select", { className: "form-control ml-1", style: {
                                                width: '4%',
                                                height: '25px',
                                                padding: '0px'
                                            } },
                                            React.createElement("option", null, "D(-)"),
                                            React.createElement("option", null, "C(+)"))),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "cdtAmt", ipType: "text", label: "Credit Amount", ipTitle: "Enter Credit Amount", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement("div", { className: "col-4" })),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "cdtLmt", ipType: "text", label: "Credit Limit", ipTitle: "Enter Credit Limit", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Ledger Type"),
                                        React.createElement("select", { name: "custGrp", className: "form-control inp", style: { height: '25px' }, title: "Customer Group" },
                                            React.createElement("option", { value: "0" }, "Y"),
                                            React.createElement("option", { value: "1" }, "N")),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "multiCurr", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Multi Currency"),
                                        React.createElement("select", { name: "multiCurr", className: "form-control inp", style: { height: '25px' }, title: "Customer Group" },
                                            React.createElement("option", { value: "0" }, "Y"),
                                            React.createElement("option", { value: "1" }, "N")),
                                        React.createElement(master_modals_1.HiddenModal, null)))))),
                    React.createElement("div", { className: "row row-content col-12 ", style: { margin: '1em 0%', backgroundColor: 'whitesmoke' } },
                        React.createElement("span", { className: "d-flex align-items-center m-0 p-0" },
                            React.createElement(React.Fragment, null,
                                React.createElement("label", { htmlFor: "1payDate", style: { fontSize: '0.8em', width: '100%', marginLeft: '2em' }, className: "form-label" }, "First Payment Date"),
                                React.createElement("input", { className: "form-control", name: "1payDate", type: "date" }),
                                React.createElement(master_modals_1.HiddenModal, null)),
                            React.createElement(React.Fragment, null,
                                React.createElement("label", { htmlFor: "daysFreq", style: { fontSize: '0.8em', width: '100%', marginLeft: '2em' }, className: "form-label " }, "Days Frequency"),
                                React.createElement("input", { type: "text", name: "daysFreq", className: "form-control", title: "Days Frequency" }),
                                React.createElement(master_modals_1.HiddenModal, null)))),
                    React.createElement("form", { className: "form col-sm-12 row-content card-body pt-0 pb-0" },
                        React.createElement("fieldset", { className: "form-group border p-0" },
                            React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#personalDet", "aria-expanded": "false", "aria-controls": "personalDet", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                "Personal Details",
                                React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                    React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                            React.createElement("div", { className: "collapse", id: "personalDet" },
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "contPerson", ipType: "text", label: "Contact Person", ipTitle: "Enter Contact  Person", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "desg", ipType: "text", label: "Designation", ipTitle: "Enter Designation", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "chfExec", ipType: "text", label: "Chief Executive", ipTitle: "Enter Chief Executive", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "chfExcTel", ipType: "text", label: "Chief Exe. Tel. No.", ipTitle: "Enter Chief Executive Tel. No.", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "telNo", ipType: "text", label: "Tel. No.", ipTitle: "Tel. No.", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)),
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "mob", ipType: "text", label: "Mobile No.", ipTitle: "Enter Mobile No.", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null))),
                                React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement(custom_input_component_1.default, { name: "email", ipType: "text", label: "Email", ipTitle: "Enter Email", dataArray: [] }),
                                        React.createElement(master_modals_1.HiddenModal, null)))))),
                    React.createElement("div", { className: "row row-content col-12 ", style: { margin: '1em 0%', backgroundColor: 'whitesmoke' } },
                        React.createElement("span", { className: "d-flex align-items-center m-0 p-0" },
                            React.createElement(React.Fragment, null,
                                React.createElement("label", { htmlFor: "zone", style: { fontSize: '0.8em', width: '100%', marginLeft: '2em' }, className: "form-label" }, "Address. Options"),
                                React.createElement("select", { name: "zone", className: "form-control", onChange: this.handleAddressOptions },
                                    React.createElement("option", { style: { fontFamily: "trebuc" }, value: "Corporate", selected: true }, "Corporate"),
                                    React.createElement("option", { style: { fontFamily: "trebuc" }, value: "Plant" }, "Plant"),
                                    React.createElement("option", { style: { fontFamily: "trebuc" }, value: "Shipping" }, "Shipping")),
                                React.createElement("svg", { className: "m-0 ml-1 p-0", style: { width: '20px', cursor: 'pointer', visibility: 'hidden' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
                                    React.createElement("path", { d: "M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z" }))))),
                    React.createElement("div", { style: { margin: '0', width: '100%', padding: '0' }, id: "addres" },
                        React.createElement("form", { className: "form col-sm-12 row-content card-body pt-0" },
                            React.createElement("fieldset", { className: "form-group border p-0" },
                                React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#contAdd", "aria-expanded": "false", "aria-controls": "personalDet", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                                    this.state.opn,
                                    React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                        React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                                this.state.opn == "Corporate" ? (React.createElement("div", { className: "collapse", id: "contAdd" },
                                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "address", ipType: "text", label: "Address", ipTitle: "Enter Address", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "country", ipType: "text", label: "Country", ipTitle: "Enter Country", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "zone", ipType: "text", label: "Zone", ipTitle: "Enter Zone", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null))),
                                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "state", ipType: "text", label: "State", ipTitle: "Enter State", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "cty", ipType: "text", label: "City", ipTitle: "Enter City", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "tel", ipType: "tel", label: "Tel. No.", ipTitle: "Enter Telephone Number", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null))),
                                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "emailId", ipType: "text", label: "Email ID", ipTitle: "Enter Email", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "pin", ipType: "text", label: "Pin Code", ipTitle: "Enter Pin", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "pan", ipType: "text", label: "Pan", ipTitle: "Enter Pan No.", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null))),
                                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "gst", ipType: "text", label: "GST No.", ipTitle: "Enter GST", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "dist", ipType: "text", label: "Distance", ipTitle: "Enter Distance", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null)),
                                        React.createElement(React.Fragment, null,
                                            React.createElement(custom_input_component_1.default, { name: "station", ipType: "text", label: "Station", ipTitle: "Enter Station", dataArray: [] }),
                                            React.createElement(master_modals_1.HiddenModal, null))))) : null,
                                this.state.opn == "Plant" ? (React.createElement("div", { className: "collapse", id: "contAdd" },
                                    React.createElement("table", { id: "plantAddress", className: "table table-striped table-bordered table-sm", style: {
                                            width: "100%"
                                        } },
                                        React.createElement("thead", null,
                                            React.createElement("tr", null,
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "S.No"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "P/L"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Plant Name"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Address 1"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Address 2"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Country"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Zone"))),
                                        React.createElement("tbody", null,
                                            React.createElement("tr", null,
                                                React.createElement("th", null, "1"),
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
                                                React.createElement("td", null)),
                                            React.createElement("tr", null,
                                                React.createElement("th", null, "3"),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null),
                                                React.createElement("td", null)))))) : null,
                                this.state.opn == "Shipping" ? (React.createElement("div", { className: "collapse", id: "contAdd" },
                                    React.createElement("table", { id: "shippingAddress", className: "table table-striped table-bordered table-sm", style: {
                                            width: "100%"
                                        } },
                                        React.createElement("thead", null,
                                            React.createElement("tr", null,
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "S.No"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "PAN"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Address Line 1"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Address Line 2"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Address Line 3"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Address Line 4"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Country"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Zone"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "State"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "City"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Post Code"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Tel No."),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "GST"),
                                                React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Distance"))),
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
                                                React.createElement("td", null)))))) : null))),
                    React.createElement("hr", { style: { margin: '0', padding: '0' } }),
                    React.createElement("div", { className: "row card row-content col-sm-12 addSaleForm container container-fluid container-lg mb-3" },
                        React.createElement("div", { className: "card-body col-sm-12 addCustomer container container-fluid container-lg", style: { overflowX: 'auto', overflowY: 'auto' } },
                            React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0', width: '100%' } },
                                React.createElement("span", { className: "card-title", style: { fontSize: '15px', margin: '0', padding: '0' } }, "Bank Details")),
                            React.createElement("table", { id: "dtHorizontalExample", className: "table table-striped table-bordered table-sm", style: {
                                    width: "100%"
                                } },
                                React.createElement("thead", null,
                                    React.createElement("tr", null,
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "S.No"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "PAN"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Name of the Bank"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Branch"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "A/C No."),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "A/C Type"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Swift Code"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "IFSC Code"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Currency"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Country"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "GST"),
                                        React.createElement("th", { className: "text-center", style: { fontWeight: 400, backgroundColor: 'grey', color: 'white' } }, "Distance"))),
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
                                        React.createElement("td", null)))))),
                    React.createElement("hr", { style: { margin: '0', padding: '0' } }),
                    React.createElement("div", { className: "row row-content col-sm-12 addSaleForm container container-fluid container-lg" },
                        React.createElement("div", { className: "card col-sm-5", style: { padding: '0', margin: '0' } },
                            React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                                React.createElement("span", { className: "card-title", style: { fontSize: '15px', margin: '0', padding: '0' } }, "Last 3 Yrs. TurnOver")),
                            React.createElement("div", { className: "card-body table-responsive", style: { margin: '0', padding: '0' } },
                                React.createElement("table", { className: "table table-striped table-bordered table-hover table-sm", style: { margin: '0' } },
                                    React.createElement("thead", { className: "thead-light table-secondary text-center" },
                                        React.createElement("tr", null,
                                            React.createElement("th", null, "S. No"),
                                            React.createElement("th", null, "Year"),
                                            React.createElement("th", null, "TurnOver(Lacks)"))),
                                    React.createElement("tbody", null,
                                        React.createElement("tr", null,
                                            React.createElement("th", { scope: "row" }, "1"),
                                            React.createElement("td", null),
                                            React.createElement("td", null)),
                                        React.createElement("tr", null,
                                            React.createElement("th", { scope: "row" }, "2"),
                                            React.createElement("td", null),
                                            React.createElement("td", null)),
                                        React.createElement("tr", null,
                                            React.createElement("th", { scope: "row" }, "3"),
                                            React.createElement("td", null),
                                            React.createElement("td", null)))))),
                        React.createElement("div", { className: "card col-sm-6", style: { padding: '0', margin: '0' } },
                            React.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid grey', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                                React.createElement("span", { className: "card-title", style: { fontSize: '15px', margin: '0', padding: '0' } }, "Additional Docs")),
                            React.createElement("div", { className: "card-body col-12", style: { margin: '0', padding: '0' } },
                                React.createElement("span", { className: "d-flex col-sm-12 m-0 pl-0 pr-0" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "empName", style: { fontSize: '0.8em' }, className: "form-label col-3 labl2 labl" }, "Data Collected By"),
                                        React.createElement("input", { type: "text", name: "empName", className: "form-control inp" })),
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "date", style: { fontSize: '0.8em' }, className: "form-label labl2 labl" }, "Date"),
                                        React.createElement("input", { type: "date", style: { fontSize: '0.8em' }, name: "date", className: "form-control inp" }))),
                                React.createElement("span", { className: "d-flex col-sm-10 m-0 pl-0 pr-0" },
                                    React.createElement(React.Fragment, null,
                                        React.createElement("label", { htmlFor: "docs", style: { fontSize: '0.8em' }, className: "form-label ml-2" }, "Upload Docs"),
                                        React.createElement("input", { type: "file", name: "docs" })),
                                    React.createElement("span", null,
                                        React.createElement("button", { type: "button" }, "Remove"))))))),
                React.createElement("hr", { style: { margin: '0', padding: '0' } })),
            React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
                React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
                React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
                React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
    };
    return ApiState;
}(React.Component));
var AddCustomerMaster = (0, fetchApi_hoc_1.fetchMasters)(ApiState);
exports.default = AddCustomerMaster;
//# sourceMappingURL=add-customer-master.component.js.map