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
var AssortmentMaster = /** @class */ (function (_super) {
    __extends(AssortmentMaster, _super);
    function AssortmentMaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssortmentMaster.prototype.render = function () {
        return (React.createElement("div", { className: "firstDiv" },
            React.createElement("div", { className: "row row-content card containet-fluid col-12 p-0" },
                React.createElement("div", { className: "row row-header card-title col-sm-12", style: { display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#8389d4', margin: '0', padding: '0' } },
                    React.createElement("span", { style: {
                            fontSize: '15px', color: 'white', padding: '0',
                            margin: '0'
                        } }, "Add Material Dispatch")),
                React.createElement("div", { className: "col-12 card-body d-flex row-body" },
                    React.createElement(React.Fragment, null,
                        React.createElement("label", { htmlFor: "sizeSet", className: "form-label labl", style: { fontSize: '0.8rem' } }, "Size Set"),
                        React.createElement("input", { type: "text", className: "form-control inp", name: "sizeSet" })),
                    React.createElement(React.Fragment, null,
                        React.createElement("label", { htmlFor: "noOfSizes", className: "form-label labl ml-3", style: { fontSize: '0.8rem' } }, "No. Of Sizes"),
                        React.createElement("input", { type: "text", className: "form-control inp", name: "noOfSizes" })))),
            React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
                React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0" }, "Save"),
                React.createElement("button", { type: "button", style: { border: '2px solid green', letterSpacing: 3 }, className: "btn btn-success mr-2 ml-2 pl-0 pr-0 " }, "Save & Submit"),
                React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0" }, "Quit"))));
    };
    return AssortmentMaster;
}(React.Component));
exports.default = AssortmentMaster;
//# sourceMappingURL=assortment-master.component.js.map