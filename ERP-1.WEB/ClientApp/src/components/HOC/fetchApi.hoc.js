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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMasters = void 0;
var React = require("react");
function fetchMasters(Component) {
    var MasterApi = /** @class */ (function (_super) {
        __extends(MasterApi, _super);
        function MasterApi(props) {
            var _this = _super.call(this, props) || this;
            //urlStr = this.props.url;
            _this.fetchApi = function (masterCode, label) {
                var urlStr = "http://103.25.128.155:12019/api/GetSeries?TranType=" + masterCode + "&SrType=1&TranSubType=0";
                var urlDelTerms = "http://103.25.128.155:12019/api/GetMasterData?MasterType=" + masterCode;
                var urlPayTerms = "http://103.25.128.155:12019/api/GetMasterData?MasterType=" + masterCode;
                var urlCustomerGroup = "http://103.25.128.155:12019/api/GetMasterData?MasterType=" + masterCode;
                var req;
                var h = new Headers();
                h.append('Accept', 'application/json');
                h.append('CompCode', 'Comp0021');
                h.append('FYear', '2022');
                switch (label) {
                    case 'series':
                        req = new Request(urlStr, {
                            method: 'GET',
                            headers: h,
                            mode: 'cors'
                        });
                        return fetch(req);
                    case 'delterms':
                        req = new Request(urlDelTerms, {
                            method: 'GET',
                            headers: h,
                            mode: 'cors'
                        });
                        return fetch(req);
                    case 'payterms':
                        req = new Request(urlPayTerms, {
                            method: 'GET',
                            headers: h,
                            mode: 'cors'
                        });
                        return fetch(req);
                    case 'custGp':
                        req = new Request(urlCustomerGroup, {
                            method: 'GET',
                            headers: h,
                            mode: 'cors'
                        });
                        return fetch(req);
                    default: alert('Something Went Wrong');
                }
            };
            _this.state = {
                series: [],
                fetchApi: function () { }
            };
            return _this;
        }
        MasterApi.prototype.render = function () {
            return (React.createElement(Component, __assign({ fetchApi: this.fetchApi }, this.props)));
        };
        return MasterApi;
    }(React.Component));
    return MasterApi;
}
exports.fetchMasters = fetchMasters;
//# sourceMappingURL=fetchApi.hoc.js.map