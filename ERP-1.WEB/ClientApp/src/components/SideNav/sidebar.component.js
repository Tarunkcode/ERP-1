"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var nav_tree_component_1 = require("../SideNav/nav-tree.component");
function Sidebar(_a) {
    var state = _a.state;
    var _b = (0, react_1.useState)([]), source = _b[0], setSource = _b[1];
    var roleStr = window.sessionStorage.getItem('roleCode');
    var roleCode = parseInt(roleStr);
    React.useEffect(function () {
        var url = "http://103.25.128.155:12019/api/LoadUserManuTree?RC=" + roleCode;
        console.log(url);
        var h = new Headers();
        h.append('Accept', 'application/json');
        h.append('Content-Type', 'application/json');
        h.append('CompCode', 'ESERPDB');
        h.append('FYear', '0');
        var req1;
        req1 = new Request(url, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        try {
            fetch(req1).then(function (res) { return res.json(); }).then(function (r) { setSource(JSON.parse(r.data)); });
        }
        catch (err) {
            alert(err);
        }
    }, []);
    return (React.createElement("nav", { className: "accordion active", id: "sidebar" },
        React.createElement("ul", { className: "list-unstyled components" },
            React.createElement("div", { className: "sidebar-header", style: { margin: "0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #798cd4", padding: "0" } },
                React.createElement("img", { src: './assets/erpLogo.png', style: { width: "56vw", borderRadius: "6%", margin: "0" }, className: "img-fluid erp-logo", alt: "Responsive image" })),
            React.createElement("p", { className: "text-center text-white", style: { margin: '0', padding: '0' } },
                React.createElement("span", { style: { fontWeight: "bolder", color: "black", margin: '0' } }, "FY :"),
                " ",
                state.Fy),
            source.length !== 0 ? (React.createElement(nav_tree_component_1.default, { treeData: source })) : null)));
}
exports.default = Sidebar;
//# sourceMappingURL=sidebar.component.js.map