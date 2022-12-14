"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./tree.styles.css");
//parent
function Tree2(_a) {
    var treeData = _a.treeData, handleChange = _a.handleChange;
    return (React.createElement("ul", null, treeData != null && treeData.length != 0 ?
        treeData.map(function (node) { return (React.createElement(TreeNode2, { node: node, handleChange: handleChange })); }) : null));
}
exports.default = Tree2;
//child
function TreeNode2(_a) {
    var node = _a.node, handleChange = _a.handleChange;
    var Children = node.Children, label = node.label, Key = node.Key, type = node.type;
    var _b = (0, react_1.useState)(false), showChildren = _b[0], setShowChildren = _b[1];
    //var isNodeChecked = document.getElementById
    //useState(() => { },[])
    var handleClick = function (e) {
        var list = document.querySelectorAll('.ram');
        /* getParentCode(e.target.id)*/
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
        React.createElement("ul", { style: { marginBottom: "10px", borderLeft: "1px solid black", } },
            React.createElement("li", { className: "ram", id: Key },
                React.createElement("span", null,
                    React.createElement("a", { className: "m-1 p-1 Snode", onClick: handleClick, key: type, id: Key, style: { border: '1px solid black', cursor: 'pointer' } }, label)),
                React.createElement("input", { type: "checkbox", id: Key, onBlur: handleChange, className: "col-1 m-0 p-0" }))),
        React.createElement("ul", { style: { paddingLeft: "10px", borderLeft: "1px solid black", marginLeft: '40px' } }, showChildren && React.createElement(Tree2, { treeData: Children, handleChange: handleChange }))));
}
//# sourceMappingURL=tree2.component.js.map