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
exports.Lines = exports.Pies = exports.DoubleBars = exports.Bars = void 0;
var React = require("react");
var recharts_1 = require("recharts");
// Bar graph
function Bars(_a) {
    var width = _a.width, height = _a.height, data = _a.data, dataKey1 = _a.dataKey1, fill = _a.fill, xdataKey = _a.xdataKey, props = __rest(_a, ["width", "height", "data", "dataKey1", "fill", "xdataKey"]);
    return (React.createElement(recharts_1.BarChart, { width: width, height: height, data: data, style: { marginTop: "20px" } },
        React.createElement(recharts_1.Bar, { label: true, dataKey: dataKey1, fill: fill }),
        React.createElement(recharts_1.CartesianGrid, { stroke: "#ccc", strokeDasharray: "3 3" }),
        React.createElement(recharts_1.XAxis, { dataKey: xdataKey }),
        React.createElement(recharts_1.YAxis, null),
        React.createElement(recharts_1.Tooltip, { cursor: false, contentStyle: { backgroundColor: "grey" } }),
        React.createElement(recharts_1.Legend, { layout: "vertical", verticalAlign: "top", align: "center" })));
}
exports.Bars = Bars;
function DoubleBars(_a) {
    var width = _a.width, height = _a.height, data = _a.data, dataKey1 = _a.dataKey1, dataKey2 = _a.dataKey2, fill = _a.fill, fill2 = _a.fill2, xdataKey = _a.xdataKey, props = __rest(_a, ["width", "height", "data", "dataKey1", "dataKey2", "fill", "fill2", "xdataKey"]);
    return (React.createElement(recharts_1.BarChart, { width: width, height: height, data: data, style: { marginTop: "20px" } },
        React.createElement(recharts_1.Bar, { label: true, dataKey: dataKey1, fill: fill }),
        React.createElement(recharts_1.Bar, { label: true, dataKey: dataKey2, fill: fill2 }),
        React.createElement(recharts_1.CartesianGrid, { stroke: "#ccc", strokeDasharray: "3 3" }),
        React.createElement(recharts_1.XAxis, { dataKey: xdataKey }),
        React.createElement(recharts_1.YAxis, null),
        React.createElement(recharts_1.Tooltip, { cursor: false, contentStyle: { backgroundColor: "grey" } }),
        React.createElement(recharts_1.Legend, { layout: "vertical", verticalAlign: "top", align: "center" })));
}
exports.DoubleBars = DoubleBars;
// pi charts
function Pies(_a) {
    var data = _a.data, width = _a.width, height = _a.height, dataKey = _a.dataKey, nameKey = _a.nameKey, oRadius = _a.oRadius, props = __rest(_a, ["data", "width", "height", "dataKey", "nameKey", "oRadius"]);
    return (React.createElement(recharts_1.PieChart, { width: width, height: height, style: { paddingTop: "0px", marginBottom: "30px" } },
        React.createElement(recharts_1.Pie, { data: data, dataKey: dataKey, nameKey: nameKey, cx: "50%", cy: "50%", outerRadius: oRadius, label: true }),
        React.createElement(recharts_1.Tooltip, null),
        React.createElement(recharts_1.Legend, { layout: "horizontal", verticalAlign: "bottom", align: "center" })));
}
exports.Pies = Pies;
//line graph
function Lines(_a) {
    var width = _a.width, height = _a.height, data = _a.data, xdataKey = _a.xdataKey, dataKey1 = _a.dataKey1, dataKey2 = _a.dataKey2, lineColor1 = _a.lineColor1, lineColor2 = _a.lineColor2, props = __rest(_a, ["width", "height", "data", "xdataKey", "dataKey1", "dataKey2", "lineColor1", "lineColor2"]);
    return (React.createElement(recharts_1.LineChart, { width: width, height: height, data: data },
        React.createElement(recharts_1.XAxis, { dataKey: xdataKey }),
        React.createElement(recharts_1.YAxis, null),
        React.createElement(recharts_1.CartesianGrid, { stroke: "#eee", strokeDasharray: "5 5" }),
        React.createElement(recharts_1.Line, { type: "monotone", dataKey: dataKey1, stroke: lineColor1 }),
        React.createElement(recharts_1.Line, { type: "monotone", dataKey: dataKey2, stroke: lineColor2 })));
}
exports.Lines = Lines;
//# sourceMappingURL=charts.component.js.map