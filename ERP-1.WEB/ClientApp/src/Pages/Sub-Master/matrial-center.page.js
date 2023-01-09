"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var custom_input_component_1 = require("../../components/custom-input/custom-input.component");
function MatCentre(_a) {
    var HandleIpSelect = _a.HandleIpSelect, defaultData = _a.defaultData, getMasterType = _a.getMasterType, pageTitle = _a.pageTitle, configType = _a.configType, handleChange = _a.handleChange, handlePosting = _a.handlePosting;
    React.useEffect(function () {
        configType == '4' ? getMasterType(22) : null;
    }, [defaultData]);
    return (React.createElement("div", { className: "main card firstDiv" },
        React.createElement("div", { className: "card-title mb-2 col-12 text-center", style: { margin: '0 auto' } },
            React.createElement("span", { style: { fontSize: "20px" } }, pageTitle)),
        React.createElement("div", { className: "card-body", style: { margin: '0', padding: '0', minHeight: '80vh' } },
            React.createElement("div", { className: "form" },
                React.createElement("span", { className: "d-flex flex-column section2 col-sm-12" },
                    React.createElement(custom_input_component_1.MasterInput, { label: "Name", name: "name", ipType: "text", ipTitle: "", handleChange: handleChange, classCategory: "form-control col-4 subMaster" }),
                    React.createElement(custom_input_component_1.MasterInput, { label: "Alias", name: "codeStr", ipType: "text", ipTitle: "Enter Print Name", handleChange: handleChange, classCategory: "form-control col-4 subMaster" }),
                    React.createElement(custom_input_component_1.MasterInput, { label: "Print Name", name: "printName", ipType: "text", ipTitle: "Enter Print Name", handleChange: handleChange, classCategory: "form-control col-4 subMaster" }),
                    React.createElement(custom_input_component_1.InputList, { label: "Type", name: "c1", ipType: "text", ipTitle: "", dataArray: [{ code: 1, name: "Raw Material Store" }, { code: 2, name: 'Finish Good Store' }, { code: 3, name: 'Semi Finish Good Store' }, { code: 4, name: 'Production Floor' }, { code: 5, name: 'General Store' }, { code: 6, name: 'Scrap Store' }], change: HandleIpSelect, lablCat: "form-label labl labl2", classCategory: "form-control inp col-12 mb-2 subMaster ipselect", placeholder: "Select Type", s: "", id: "c1" }),
                    React.createElement(custom_input_component_1.MasterInput, { label: "Address", name: "s1", ipType: "text", ipTitle: "Enter Address - 1", handleChange: handleChange, classCategory: "form-control col-4 subMaster" }),
                    React.createElement(custom_input_component_1.MasterInput, { label: "", name: "s2", ipType: "text", ipTitle: "Enter Address - 2", handleChange: handleChange, classCategory: "form-control col-4 subMaster mt-1" }),
                    React.createElement(custom_input_component_1.MasterInput, { label: "", name: "s3", ipType: "text", ipTitle: "Enter Address - 3", handleChange: handleChange, classCategory: "form-control col-4 subMaster mt-1" }),
                    React.createElement(custom_input_component_1.MasterInput, { label: "", name: "s4", ipType: "text", ipTitle: "Enter Address - 4", handleChange: handleChange, classCategory: "form-control col-4 subMaster mt-1" }))),
            React.createElement("button", { className: "btn btn-danger p-2 m-3", onClick: handlePosting }, "Save"))));
}
exports.default = MatCentre;
//# sourceMappingURL=matrial-center.page.js.map