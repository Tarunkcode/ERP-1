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
exports.store = void 0;
var redux_1 = require("redux");
var user_types_1 = require("./user.types"); // store the state of our current User
var INITIAL_STATE = {
    currentUser: {
        domain: '',
        port: '',
        FY: '',
    }
};
var userReducer = function (state, action) {
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case user_types_1.UserActionTypes.SET_CURRENT_USER:
            state = __assign(__assign({}, state), { currentUser: state.currentUser + action.payload });
    }
    return __assign({}, state);
};
exports.store = (0, redux_1.createStore)(userReducer);
exports.default = userReducer;
//# sourceMappingURL=user.reducers.js.map