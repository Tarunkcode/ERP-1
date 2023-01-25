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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentRowNo = exports.DeleteRow = exports.AddRow = void 0;
var AddRow = function (arr, tableProps, func) {
    var _a;
    if (arr.length !== 0) {
        var mArr = __spreadArray([], arr, true);
        var obj = arr[0];
        var attrArr = Object.getOwnPropertyNames(obj);
        var ob = mArr[mArr.length - 1]; // first instance
        var tempArr = [{}];
        for (var i = 0; i < attrArr.length; i++) {
            var code = ob[attrArr[i]].name;
            var ob2 = __assign(__assign({}, ob[attrArr[i]]), { name: code + 1 }); // latest instance
            var latest = (_a = {}, _a[attrArr[i]] = ob2, _a);
            tempArr[0] = __assign(__assign({}, tempArr[0]), latest);
        }
        mArr.push(tempArr[0]);
        func(mArr);
    }
    else {
        func(tableProps);
    }
};
exports.AddRow = AddRow;
var DeleteRow = function (index, tableState, func) {
    var arr = __spreadArray([], tableState, true);
    var i = parseInt(index);
    arr.splice(i, 1);
    func(arr);
};
exports.DeleteRow = DeleteRow;
var getCurrentRowNo = function (val) {
    return { sNo: val };
};
exports.getCurrentRowNo = getCurrentRowNo;
//# sourceMappingURL=table.js.map