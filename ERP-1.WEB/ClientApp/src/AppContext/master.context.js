"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterApiProvider = exports.MasterApiContext = void 0;
var React = require("react");
var react_1 = require("react");
//interface IApiData {
//    masterApiData: {}
//}
//
exports.MasterApiContext = (0, react_1.createContext)({ seriesMasterData: [], delMasterData: [], payMasterData: [], customerMasterData: [] });
function MasterApiProvider(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), seriesMasterData = _b[0], setSeriesMasterData = _b[1];
    var _c = (0, react_1.useState)([]), delMasterData = _c[0], setDelMasterData = _c[1];
    var _d = (0, react_1.useState)([]), payMasterData = _d[0], setPayMasterData = _d[1];
    var _e = (0, react_1.useState)([]), customerMasterData = _e[0], setCustomerMasterData = _e[1];
    (0, react_1.useEffect)(function () {
        var urlSeries = 'http://103.25.128.155:12019/api/GetSeries?TranType=3&SrType=1&TranSubType=0';
        var urlDelTerms = 'http://103.25.128.155:12019/api/GetMasterData?MasterType=30';
        var urlPayTerms = 'http://103.25.128.155:12019/api/GetMasterData?MasterType=31';
        var urlCustomerGroup = 'http://103.25.128.155:12019/api/GetMasterData?MasterType=1005';
        var count = 1;
        var h = new Headers();
        h.append('Accept', 'application/json');
        h.append('CompCode', 'Comp0021');
        h.append('FYear', '2022');
        var sendObj = {};
        var req1 = new Request(urlSeries, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        var req2 = new Request(urlDelTerms, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        var req3 = new Request(urlPayTerms, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        var req4 = new Request(urlCustomerGroup, {
            method: 'GET',
            headers: h,
            mode: 'cors'
        });
        try {
            fetch(req1)
                .then(function (res) {
                if (res.ok) {
                    var json = res.json();
                    return json;
                }
                else {
                    throw new Error('Bad Fetch 1');
                }
            })
                .then(function (result) {
                setSeriesMasterData(result.data);
            });
            fetch(req2)
                .then(function (res) {
                if (res.ok) {
                    var json = res.json();
                    return json;
                }
                else {
                    throw new Error('Bad Fetch 2');
                }
            })
                .then(function (result) {
                setDelMasterData(result.data);
            });
            fetch(req3)
                .then(function (res) {
                if (res.ok) {
                    var json = res.json();
                    return json;
                }
                else {
                    throw new Error('Bad Fetch 3');
                }
            })
                .then(function (result) {
                setPayMasterData(result.data);
            });
            fetch(req4)
                .then(function (res) {
                if (res.ok) {
                    var json = res.json();
                    return json;
                }
                else {
                    throw new Error('Bad Fetch 4');
                }
            })
                .then(function (result) {
                setCustomerMasterData(result.data);
            });
        }
        catch (err) {
            alert(err);
        }
    }, []);
    var value = { seriesMasterData: seriesMasterData, delMasterData: delMasterData, payMasterData: payMasterData, customerMasterData: customerMasterData };
    return React.createElement(exports.MasterApiContext.Provider, { value: value }, children);
}
exports.MasterApiProvider = MasterApiProvider;
//# sourceMappingURL=master.context.js.map