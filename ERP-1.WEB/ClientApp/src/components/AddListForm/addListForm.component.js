"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function AddListForm() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "modal fade", id: "form", role: "dialog", "aria-labelledby": "qcPlanModalLabel", "aria-hidden": "true" },
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
                        React.createElement("button", { type: "button", className: "btn btn-secondary", "data-dismiss": "modal" }, "Cancel")))))));
}
exports.default = AddListForm;
//# sourceMappingURL=addListForm.component.js.map