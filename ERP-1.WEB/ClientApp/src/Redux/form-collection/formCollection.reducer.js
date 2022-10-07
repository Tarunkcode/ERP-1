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
exports.store1 = void 0;
var redux_1 = require("redux");
var INITIAL_STATE = {};
var formDataCollectionReducer = function (state, action) {
    var _a;
    if (state === void 0) { state = INITIAL_STATE; }
    switch (action.type) {
        case "AddOnFormData":
            state = __assign(__assign({}, state), (_a = {}, _a[action.key] = action.payload, _a));
    }
    return state;
};
exports.store1 = (0, redux_1.createStore)(formDataCollectionReducer);
exports.default = formDataCollectionReducer;
//# sourceMappingURL=formCollection.reducer.js.map