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
var modify_page_1 = require("../../Pages/Modify/modify.page");
var react_toastify_1 = require("react-toastify");
var react_router_dom_1 = require("react-router-dom");
var ClipLoader_1 = require("react-spinners/ClipLoader");
var Modify_Child = /** @class */ (function (_super) {
    __extends(Modify_Child, _super);
    function Modify_Child(props) {
        var _this = _super.call(this, props) || this;
        _this.compCode = window.localStorage.getItem('compCode') || "";
        _this.customer = window.localStorage.getItem('customer') || "";
        _this.username = window.sessionStorage.getItem('username') || "";
        _this.FetchLoadingSubMasterData = function (mType) {
            var urlLoadModify = "http://103.25.128.155:12019/api/LoadMasterData?MasterType=" + mType + "&Company=" + _this.compCode + "&Customer=" + _this.customer;
            console.log('url load modify', urlLoadModify);
            var req;
            var h = new Headers();
            h.append('Accept', 'application/json');
            h.append('Content-Type', 'application/json');
            h.append('CompCode', 'ESERPDB');
            h.append('FYear', '0');
            req = new Request(urlLoadModify, {
                method: 'GET',
                headers: h,
                mode: 'cors'
            });
            try {
                /* fetch(req).then((res: any) =>  res.json() ).then((res: any) => { if (res.data.length !== 0) { const dataArr = res.data; this.setState({ selectModList: dataArr }); console.log('list to load', dataArr) } else { toast.info('No data Found') } });*/
                fetch(req).then(function (res) { return res.json(); }).then(function (res) {
                    _this.setState({ selectModList: res.data });
                    res.data.length === 0 ? (react_toastify_1.toast.info('No data Found')) : null;
                });
                _this.setState({ Loader: false });
            }
            catch (err) {
                alert(err);
            }
        };
        _this.handleSelect = function (code, name) {
            console.log(name + ':' + code);
            _this.setState({ fetchCode: code });
        };
        _this.handleSubmit = function () {
            if (!_this.state.fetchCode) {
                react_toastify_1.toast.info('Please Select one Term to Modify');
            }
            else
                _this.props.history.push({ pathname: _this.state.address, state: { code: _this.state.fetchCode } });
            //<Redirect to={{ pathname: this.state.address, state: { code: this.state.fetchCode } }} />
        };
        _this.state = {
            selectModList: [],
            address: '',
            masterType: '',
            Loader: false,
            fetchCode: ''
        };
        return _this;
    }
    Modify_Child.prototype.componentDidMount = function () {
        this.setState({ Loader: true });
        var master = this.props.match.params.master;
        var mAdd = this.props.location.state.mAdd;
        this.setState({ address: mAdd });
        if (!this.props.location.state) { }
        else {
            this.FetchLoadingSubMasterData(master);
        }
    };
    Modify_Child.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.match.params.master !== this.props.match.params.master)
            this.FetchLoadingSubMasterData(this.props.match.params.master);
    };
    Modify_Child.prototype.render = function () {
        return (React.createElement(React.Fragment, null, this.state.Loader === true ? (React.createElement(ClipLoader_1.default, { color: "#52bfd9", size: 100, loading: this.state.Loader })) : (React.createElement(modify_page_1.default, { selectModList: this.state.selectModList, handleSelect: this.handleSelect.bind(this), handleSubmit: this.handleSubmit }))));
    };
    return Modify_Child;
}(React.Component));
var Modify = (0, react_router_dom_1.withRouter)(Modify_Child);
exports.default = Modify;
//# sourceMappingURL=modify.component.js.map