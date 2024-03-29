"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var user_reducers_1 = require("./user/user.reducers");
var counter_reducer_1 = require("../Counter/counter.reducer");
var connected_react_router_1 = require("connected-react-router");
var rootReducer = function (history) { return (0, redux_1.combineReducers)({
    counter: counter_reducer_1.default,
    user: user_reducers_1.default,
    router: (0, connected_react_router_1.connectRouter)(history)
}); };
exports.default = rootReducer;
//# sourceMappingURL=rootReducer.js.map