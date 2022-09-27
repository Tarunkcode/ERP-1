"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Modify(props) {
    return (React.createElement("div", { className: "fisrtDiv col-12 container-fluid row card p-0", style: { margin: '0 auto' } },
        React.createElement("header", { className: "card-title col-12 text-center bg-secondary" },
            React.createElement("span", { style: { fontSize: '20px', color: '#fff', fontWeight: 'bolder', padding: '1em 2em' } }, "Modify List")),
        React.createElement("span", { className: "row-content card-body col-12" },
            React.createElement("input", { type: "text", className: "col-12 col-sm-6 form-control", placeholder: "Search Term" })),
        React.createElement("div", { className: "card-footer col-12" },
            React.createElement("button", { className: "btn btn-warning col-6 col-sm-1 float-right", type: "button" }, "Modify"))));
}
exports.default = Modify;
//# sourceMappingURL=modify.component.js.map