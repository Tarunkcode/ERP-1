"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var user_reducers_1 = require("./user/user.reducers");
var formCollection_reducer_1 = require("./form-collection/formCollection.reducer");
var counter_reducer_1 = require("../Counter/counter.reducer");
var connected_react_router_1 = require("connected-react-router");
var config_reducer_1 = require("./config/config.reducer");
var bom_reducer_1 = require("../Redux/BOM/bom.reducer");
var rootReducer = function (history) { return redux_1.combineReducers({
    counter: counter_reducer_1.default,
    user: user_reducers_1.default,
    router: connected_react_router_1.connectRouter(history),
    saveFormData: formCollection_reducer_1.default,
    saveConfigData: config_reducer_1.default,
    bomData: bom_reducer_1.default
}); };
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map