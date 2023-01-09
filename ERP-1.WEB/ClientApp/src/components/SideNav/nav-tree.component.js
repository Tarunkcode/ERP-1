"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
//parent
function NavTree(_a) {
    var treeData = _a.treeData;
    return (React.createElement("ul", null, treeData != null && treeData.length != 0 ?
        treeData.map(function (node) { return (React.createElement(TreeNode, { node: node, key: node.Key })); }) : null));
}
exports.default = NavTree;
//child
function TreeNode(_a) {
    var node = _a.node, key = _a.key;
    var Children = node.Children, label = node.label, Key = node.Key, type = node.type, address = node.address, Mt = node.Mt, Maddress = node.Maddress;
    var _b = (0, react_1.useState)(false), showChildren = _b[0], setShowChildren = _b[1];
    var handleClick = function (e) {
        var list = document.querySelectorAll('.ram');
        list.forEach(function (curr) {
            curr.style.backgroundColor = '#fff';
            curr.style.color = 'black';
        });
        document.getElementById(Key).style.backgroundColor = 'pink';
        document.getElementById(Key).style.color = '#fff';
        console.log('e', e.target.id);
        setShowChildren(!showChildren);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", null,
            React.createElement("li", { className: "ram", id: Key, style: { backgroundColor: '#24509e', fontWeight: 600, color: 'black' } },
                type === '1' ? (React.createElement("a", { className: "p-1 pt-3 pb-3 level0", onClick: handleClick, key: type, id: Key },
                    React.createElement("span", { className: "ml-1 nav-span" }, label),
                    React.createElement("svg", { style: { width: '10px', float: 'right', marginLeft: '10px', color: 'white' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                        React.createElement("path", { d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" })))) : null,
                type === '2' ? (!Children ? (React.createElement(react_router_dom_1.NavLink, { className: "p-1 m-0 abascus", to: address },
                    React.createElement("span", { className: " ml-5 nav-span" }, label)))
                    : (React.createElement("a", { className: "p-1 pt-2 pb-2 m-0 level1", onClick: handleClick, key: type, id: Key },
                        React.createElement("span", { className: "ml-3 nav-span" }, label),
                        React.createElement("svg", { style: { width: '10px', float: 'right', marginLeft: '10px', color: 'white' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" },
                            React.createElement("path", { d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" }))))) : null,
                type === '3' ? (address === '/modify' ? ((React.createElement(react_router_dom_1.NavLink, { className: "p-1 m-0 abascus", to: { pathname: address + ("/" + Mt), state: { mAdd: "" + Maddress, mT: "" + Mt } } },
                    React.createElement("span", { className: " ml-5 nav-span" }, label)))) : (React.createElement(react_router_dom_1.NavLink, { className: "p-1 m-0 abascus", to: address },
                    React.createElement("span", { className: " ml-5 nav-span" }, label)))) : null)),
        React.createElement("ul", { "data-parent": "#sidebar" }, showChildren && React.createElement(NavTree, { treeData: Children }))));
}
//# sourceMappingURL=nav-tree.component.js.map