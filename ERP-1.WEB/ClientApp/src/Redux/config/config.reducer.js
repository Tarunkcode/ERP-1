"use strict";
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
exports.store2 = void 0;
var redux_1 = require("redux");
var INITIAL_STATE = {
    InventoryDet: [{}],
    seriesConf: {},
    roleMaster: [],
    subMaster: {
        'EsMasterTable': [{}],
        'EsPaymentTermDet': []
    }
};
var configReducer = function (STATE, action) {
    var _a, _b;
    if (STATE === void 0) { STATE = INITIAL_STATE; }
    switch (action.type) {
        case "changeConfig":
            if (action.label == "InventoryDet")
                STATE.InventoryDet[0] = action.payload;
            else if (action.label == "seriesConf")
                STATE.seriesConf[action.key] = action.payload;
            else if (action.label == "roleMaster")
                STATE.roleMaster.push((_a = {}, _a[action.key] = action.payload, _a));
            else if (action.label == "subMaster") {
                var obj = __assign(__assign({}, STATE.subMaster['EsMasterTable'][0]), (_b = {}, _b[action.key] = action.payload, _b));
                STATE.subMaster['EsMasterTable'][0] = obj;
            }
            else if (action.label == "modifySubMaster") {
                STATE.subMaster['EsMasterTable'][0] = action.payload;
            }
        /* else alert("set wrong label error");*/
        case 'table':
            if (action.label == "tableRow") {
                STATE.subMaster.EsPaymentTermDet = action.payload;
            }
    }
    return STATE;
};
exports.store2 = (0, redux_1.createStore)(configReducer);
exports.default = configReducer;
//# sourceMappingURL=config.reducer.js.map