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
var custom_button_component_1 = require("../custom-button/custom-button.component");
require("./register-your-domain.styles.css");
var RegisterDomain = /** @class */ (function (_super) {
    __extends(RegisterDomain, _super);
    function RegisterDomain(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFYChange = function (e) {
            _this.setState({
                FY: e.target.value
            });
        };
        _this.handleRegistration = function (event) {
            event.preventDefault();
            try {
                var url = "http://localhost:16067/api/SaveDomain";
                var data = _this.state;
                console.log('data', data);
                fetch(url, {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    body: JSON.stringify(data)
                }).then(function (result) {
                    result.json().then(function (res) {
                        console.log('res', res);
                    });
                });
            }
            catch (error) {
                console.log(error);
            }
        };
        _this.state = {
            sURL: '',
            sPort: '',
            FY: ''
        };
        _this.handleDomainChange = _this.handleDomainChange.bind(_this);
        _this.handlePortChange = _this.handlePortChange.bind(_this);
        _this.handleFYChange = _this.handleFYChange.bind(_this);
        return _this;
    }
    RegisterDomain.prototype.handleDomainChange = function (e) {
        this.setState({
            sURL: e.target.value
        });
    };
    RegisterDomain.prototype.handlePortChange = function (e) {
        this.setState({
            sPort: e.target.value
        });
    };
    RegisterDomain.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: "outer-container" },
                React.createElement("div", { className: "card", style: { backgroundColor: "grey" } },
                    React.createElement("span", { className: "page_Header" }, "Register Your Domain"),
                    React.createElement("span", { className: "content_Header" }, "Excellent ERP"),
                    React.createElement("div", { className: "inner-container" },
                        React.createElement("form", { onSubmit: this.handleRegistration.bind(this) },
                            React.createElement("input", { type: "text", name: "domain", id: "domain", className: "form-control input-fields", required: true, placeholder: "Domain Address", onChange: this.handleDomainChange }),
                            React.createElement("input", { type: "text", name: "port", id: "port", className: "form-control input-fields", required: true, placeholder: "Port No.", onChange: this.handlePortChange }),
                            React.createElement("input", { type: "text", name: "fy", id: "fy", className: "form-control input-fields", required: true, placeholder: "Financial Year", onChange: this.handleFYChange }),
                            React.createElement(custom_button_component_1.default, { type: "submit", className: 'custom-button btn-danger' }, "Register Now"))),
                    React.createElement("div", { className: "footer2" },
                        React.createElement("h6", null,
                            " Developed By Excellent Softwares ",
                            React.createElement("br", null),
                            " ",
                            React.createElement("span", null, " \u00A9 2022 "),
                            " "))))));
    };
    return RegisterDomain;
}(React.Component));
exports.default = RegisterDomain;
//# sourceMappingURL=register-your-domain.component.js.map