"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var custom_input_component_1 = require("../../components/custom-input/custom-input.component");
var custom_switch_component_1 = require("../../components/CustomSwitch/custom-switch.component");
var CustomTable_component_1 = require("../../components/CustomTable/CustomTable.component");
function Process_Page(_a) {
    var getMasterType = _a.getMasterType, pageTitle = _a.pageTitle, configType = _a.configType, handleChange = _a.handleChange, handlePosting = _a.handlePosting, getCurrentRowNo = _a.getCurrentRowNo, HandleOverHeadIpSelect = _a.HandleOverHeadIpSelect, HandleJobIpSelect = _a.HandleJobIpSelect, HandleOperationIpSelect = _a.HandleOperationIpSelect, defaultData = _a.defaultData, otherProps = __rest(_a, ["getMasterType", "pageTitle", "configType", "handleChange", "handlePosting", "getCurrentRowNo", "HandleOverHeadIpSelect", "HandleJobIpSelect", "HandleOperationIpSelect", "defaultData"]);
    var _b = (0, react_1.useState)(false), ToggelValue = _b[0], setToggelValue = _b[1];
    var _c = (0, react_1.useState)([]), overHeadArr = _c[0], setOverHeadArr = _c[1];
    var _d = (0, react_1.useState)([]), operationArr = _d[0], setOperationArr = _d[1];
    var _e = (0, react_1.useState)({}), masterlist = _e[0], setMasterList = _e[1];
    var _f = (0, react_1.useState)([]), oprnlist = _f[0], setOperationList = _f[1];
    var _g = (0, react_1.useState)([]), joblist = _g[0], setJobList = _g[1];
    var _h = (0, react_1.useState)([]), overheadlist = _h[0], setOverHeadList = _h[1];
    console.log("toggel Value", ToggelValue);
    React.useEffect(function () {
        getMasterType(11);
        var Req;
        var Req2;
        var h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        // Process OverHead
        var OvrHeadStr = "http://103.25.128.155:12019/api/LoadMasterData?MasterType=1030&company=" + otherProps.compCode + "&customer=" + otherProps.customer;
        // Process Operation
        var OprnStr = "http://103.25.128.155:12019/api/LoadMasterData?MasterType=1034&company=" + otherProps.compCode + "&customer=" + otherProps.customer;
        console.log('overhead', OvrHeadStr);
        console.log('operation', OprnStr);
        try {
            Req = new Request(OvrHeadStr, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            Req2 = new Request(OprnStr, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            fetch(Req).then(function (res) { return res.json(); }).then(function (res) {
                var data = res.data;
                setOverHeadArr(data);
            });
            fetch(Req2).then(function (res) { return res.json(); }).then(function (res) {
                var data = res.data;
                setOperationArr(data);
            });
        }
        catch (err) {
            alert(err);
        }
    }, []);
    React.useEffect(function () {
        if (defaultData.esmastertable !== undefined) {
            var masterlist_1 = defaultData.esmastertable[0];
            setMasterList(masterlist_1);
        }
        if (defaultData.processopration !== undefined) {
            var oprlist = defaultData.processopration;
            setOperationList(oprlist);
        }
        if (defaultData.processjobworker !== undefined) {
            var joblist_1 = defaultData.processjobworker;
            setJobList(joblist_1);
        }
        if (defaultData.processpoh !== undefined) {
            var overlist = defaultData.processpoh;
            setOverHeadList(overlist);
        }
    }, [defaultData]);
    /*    var esMasterData: object = defaultData.esMsater*/
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: "start" } },
                React.createElement("span", { className: "row-header p-0 m-0" }, pageTitle)),
            React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                        React.createElement(custom_input_component_1.default, { name: "name", change: handleChange, default: masterlist.name, classCategory: "form-control inp mb-2 pMaster", ipType: "text", label: "Process", ipTitle: "Enter Process", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { name: "c21", change: handleChange, default: masterlist.c21, classCategory: "form-control inp mb-2 pMaster select", ipType: "text", label: "Process Floor", ipTitle: "Enter Process Floor", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { name: "c22", default: masterlist.c22, change: handleChange, classCategory: "form-control inp mb-2 pMaster select", ipType: "text", label: "P Srno For ClipBoard", ipTitle: "Enter ClipBoard", dataArray: [] })),
                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                        React.createElement(custom_input_component_1.default, { name: "c23", default: masterlist.c23, change: handleChange, classCategory: "form-control inp mb-2 pMaster select", ipType: "text", label: "Debitor Account", ipTitle: "Enter Debitor Account", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { name: "c24", default: masterlist.c24, change: handleChange, classCategory: "form-control inp mb-2 pMaster select", ipType: "text", label: "Add JobWork chrgs.", ipTitle: "Enter Add JobWork chrgs.", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { default: masterlist.d1, name: "d1", change: handleChange, classCategory: "form-control inp mb-2 pMaster number", ipType: "number", label: "Tollerance (%)", ipTitle: "Enter Tollerance", dataArray: [] })),
                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                        React.createElement(custom_input_component_1.default, { default: masterlist.d2, name: "d2", change: handleChange, classCategory: "form-control inp mb-2 pMaster number", ipType: "number", label: "OverHead (%)", ipTitle: "Enter OverHead", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { name: "c25", default: masterlist.c25, change: handleChange, classCategory: "form-control inp mb-2 pMaster select", ipType: "text", label: "Material Req. before Days", ipTitle: "Enter Material Req. before Days", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { name: "d3", default: masterlist.d3, change: handleChange, classCategory: "form-control inp mb-2 pMaster number", ipType: "text", label: "Process Group No", ipTitle: "Enter Process Group No", dataArray: [] })),
                    React.createElement("span", { className: "d-flex section2 col-sm-12" },
                        React.createElement(custom_input_component_1.default, { name: "d4", default: masterlist.d4, change: handleChange, classCategory: "form-control inp mb-2 pMaster number", ipType: "number", label: "Plan Hours Per Day", ipTitle: "Enter Plan Hours Per Day", dataArray: [] }),
                        React.createElement(custom_input_component_1.default, { name: "d5", default: masterlist.d5, change: handleChange, classCategory: "form-control inp mb-2 pMaster number", ipType: "text", label: "Before Days", ipTitle: "Enter Before Days", dataArray: [] }))),
                React.createElement("div", { className: "col-4" })),
            React.createElement("hr", null),
            React.createElement("span", { className: "d-flex col-sm-12 pt-0" },
                React.createElement("div", { className: "show m-0 p-0 col-6", id: "Switch" },
                    React.createElement("span", { className: "d-flex flex-column justify-content-between section2 col-sm-12" },
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "For Job Working", id: "c1", name: "c1", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c1 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "is Accounting Posting", id: "c2", name: "c2", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c2 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Produce Qty is Greater then Paln Qty", id: "c3", name: "c3", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c3 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Change Consume Item Quantity", id: "c4", name: "c4", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c4 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Is Consume Qty Less than Req. Qty", id: "c5", name: "c5", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c5 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Is Consume Qty Zero", id: "c6", name: "c6", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c6 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Mold Req", id: "c7", name: "c7", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c7 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Minus Stock Qty in Req.", id: "c8", name: "c8", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c8 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Add New Cons. Item at Production", id: "c9", name: "c9", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c9 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Plan As Per Del. Date", id: "c10", name: "c10", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c10 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Consumption Not on Rejection", id: "c11", name: "c11", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c11 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Produce Item As Per Process In Sample Prod", id: "c12", name: "c12", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c12 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Electricity Req.", id: "c13", name: "c13", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c13 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Show in Rejection Details Report", id: "c14", name: "c14", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c14 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Enable Operator Details", id: "c15", name: "c15", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c15 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Production With Scan Data", id: "c16", name: "c16", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c16 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Time Slab Wise Production", id: "c17", name: "c17", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c17 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: "Show Rejection % In Production MIS Report", id: "c18", name: "c18", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c18 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Tollerance Not Required", id: "c19", name: "c19", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c19 })),
                        React.createElement(React.Fragment, null,
                            React.createElement(custom_switch_component_1.CustomeSwitch2, { lablClass: "custom-control-label col-9", label: " Enable Produce Item Serial No.", id: "c20", name: "c20", classCat: "form-control custom-control-input col-3 pMaster switch", handleChange: handleChange, default: masterlist.c20 })))),
                React.createElement("span", { className: "card d-flex flex-column justify-content-between section2 col-sm-6", style: { height: '100vh' } },
                    React.createElement(CustomTable_component_1.WriteTable, { HandleIpSelect: HandleOverHeadIpSelect, getCurrentRowNo: getCurrentRowNo, default: overheadlist, columns: [{ field: 'Name', header: "Name" }], dataArr: [{ Name: { name: 'poh', ipTitle: "Enter Process OverHead Name", dataArray: overHeadArr, classCat: "form-control text-center pMasterOverHead select", placeholder: "Enter Process OverHead Name" } }], title: "Process OverHead" }),
                    React.createElement(CustomTable_component_1.WriteTable, { HandleIpSelect: HandleJobIpSelect, getCurrentRowNo: getCurrentRowNo, columns: [{ field: 'Name', header: "Name" }, { field: 'JWOn', header: "Job Worker On" }], default: joblist, dataArr: [{
                                Name: { name: "jbcode", ipTitle: "Enter Job Worker Name", dataArray: [{ code: 1, name: 'dumy' }], classCat: "form-control text-center select pMasterJob", placeholder: "Enter Job Worker Name" },
                                JWOn: { name: "jobworkon", ipTitle: "Job Worker On", dataArray: [{ code: 1, name: 'Inside' }, { code: 2, name: 'Outside' }], classCat: "form-control pMasterJob select text-center", placeholder: "Select Job Worker On" }
                            }], title: "Job Worker List" }),
                    React.createElement(CustomTable_component_1.WriteTable, { HandleIpSelect: HandleOperationIpSelect, getCurrentRowNo: getCurrentRowNo, default: oprnlist, columns: [{ field: 'Oprn', header: "Operation" }], dataArr: [{ Oprn: { name: "opr", ipTitle: "Enter Process Operation Name", dataArray: operationArr, classCat: "form-control text-center pMasterOperation select", placeholder: "Enter Operation Name" } }], title: "Process Operation Details" })))),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: {
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
            } },
            React.createElement("button", { type: "button", style: {
                    border: "2px solid #33b5e5",
                    letterSpacing: 3,
                    width: "100px",
                }, className: "btn btn-info pl-0 pr-0" }, "Save"),
            React.createElement("button", { type: "button", style: {
                    border: "2px solid green",
                    letterSpacing: 3,
                    width: "200px",
                }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 ", onClick: handlePosting }, "Save & Submit"),
            React.createElement("button", { type: "button", style: { border: "2px solid red", letterSpacing: 3, width: "100px" }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
}
exports.default = Process_Page;
//# sourceMappingURL=process.page.js.map