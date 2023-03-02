"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var LoosePack = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "main card firstDiv" },
            React.createElement("div", { className: "text-center card-title col-12", style: { textAlign: 'start', backgroundColor: '#8389d4' } },
                React.createElement("span", { className: "row-header p-0 m-0" }, "Loose Pair Packing")),
            React.createElement("div", { className: "card-body row col-sm-12 m-0 p-0" },
                React.createElement("form", { className: "row-content form col-sm-12 pt-0" },
                    React.createElement("fieldset", { className: "form-group border p-0" },
                        React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#branch", "aria-expanded": "true", "aria-controls": "branch", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                            "Loose Packing Details",
                            React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0 96v320c0 35.34 28.65 64 64 64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2 230.7 352 224 352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120 192h208c9.531 0 18.19 5.656 21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                        React.createElement("div", { className: "collapse show", id: "branch" },
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Series"),
                                    React.createElement("input", { type: "text", name: "custCode", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "majProd", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Vch No."),
                                    React.createElement("input", { type: "text", name: "delTerm", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "series", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Date"),
                                    React.createElement("input", { type: "date", name: "series", className: "form-control inp" })))))),
                React.createElement("form", { className: "form col-sm-12 row-content card-body pt-0 pb-0" },
                    React.createElement("fieldset", { className: "form-group border p-0" },
                        React.createElement("legend", { className: "px-2", "data-toggle": "collapse", "data-target": "#addDet", "aria-expanded": "false", "aria-controls": "addDet", style: { fontSize: '1.1rem', cursor: 'pointer' } },
                            "Packing Items Details",
                            React.createElement("svg", { className: "ml-1", style: { width: '15px' }, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512" },
                                React.createElement("path", { d: "M384 32H64C28.65 32 0 60.65 0    96v320c0  35.34 28.65 64 64  64h320c35.35 0 64-28.66 64-64V96C448 60.65 419.3 32 384 32zM345.6 232.3l-104 112C237 349.2    230.7 352 224   352s-13.03-2.781-17.59-7.656l-104-112c-6.5-7-8.219-17.19-4.407-25.94C101.8 197.7 110.5 192 120   192h208c9.531  0 18.19 5.656   21.1 14.41C353.8 215.2 352.1 225.3 345.6 232.3z" }))),
                        React.createElement("div", { className: "collapse", id: "addDet" },
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "contPerson", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Item"),
                                    React.createElement("input", { type: "text", name: "contPerson", className: "form-control inp col-4" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "desg", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Color"),
                                    React.createElement("input", { type: "text", name: "desg", className: "form-control inp" }))),
                            React.createElement("span", { className: "d-flex section2 col-sm-10" },
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "cheifExe", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Assortment"),
                                    React.createElement("input", { type: "text", name: "cheifExe", className: "form-control inp" })),
                                React.createElement(React.Fragment, null,
                                    React.createElement("label", { htmlFor: "fax", style: { fontSize: '0.8em' }, className: "form-label labl labl2" }, "Category"),
                                    React.createElement("input", { type: "text", name: "fax", className: "form-control inp" }))),
                            React.createElement("button", { type: "submit", className: "btn btn-primary col-1 m-3 p-0" }, "Load Details"))))),
            React.createElement("hr", { style: { margin: '0', padding: '0' } })),
        React.createElement("div", { className: "btn-group col-12 mt-3", style: { display: 'flex', justifyContent: 'flex-end', alignItems: 'center' } },
            React.createElement("button", { type: "button", style: { border: '2px solid #33b5e5', letterSpacing: 3 }, className: "btn btn-info pl-0 pr-0 col-2" }, "Save"),
            React.createElement("button", { type: "button", style: { border: '2px solid red', letterSpacing: 3 }, className: "btn btn-danger pl-0 pr-0 col-2 ml-2" }, "Quit"))));
};
exports.default = LoosePack;
//# sourceMappingURL=loose-pack.component.js.map