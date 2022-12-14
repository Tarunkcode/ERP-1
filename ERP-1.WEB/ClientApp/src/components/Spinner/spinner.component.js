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
require("./spinner.styles.css");
var ClipLoader_1 = require("react-spinners/ClipLoader");
function Spinner(_a) {
    var isShow = _a.isShow, otherProps = __rest(_a, ["isShow"]);
    return (React.createElement(React.Fragment, null, isShow === true ? (React.createElement("div", { style: { width: '100px', margin: 'auto', display: 'block' } },
        React.createElement(ClipLoader_1.default, { color: "#52bfd9", size: 100 }))) : null));
}
;
exports.default = Spinner;
//# sourceMappingURL=spinner.component.js.map