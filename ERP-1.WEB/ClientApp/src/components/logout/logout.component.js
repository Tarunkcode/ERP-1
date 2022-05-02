"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogOut = void 0;
var React = require("react");
var react_router_1 = require("react-router");
require("./logout.styles.css");
function LogOut() {
    var history = (0, react_router_1.useHistory)();
    var handleLogOut = function () {
        localStorage.clear();
        history.push('/');
    };
    return (React.createElement("span", null,
        React.createElement("i", { className: "fas fa-sign-out-alt" }),
        React.createElement("a", { href: "#", onClick: handleLogOut }, "Log Out")));
}
exports.LogOut = LogOut;
//# sourceMappingURL=logout.component.js.map