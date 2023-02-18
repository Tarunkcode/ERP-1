"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store1 = void 0;
var redux_1 = require("redux");
var INITIAL_STATE = {
    AccountMaster: [{}],
    AddressDetail: [{}],
    BankDetail: [{}],
    AccProductCurrency: [{}],
    CommercialDetail: [{}],
    AccountBillByBillDetail: [{}],
    AccMasterSeries: [{}],
    ItemMaster: {}
};
var formDataCollectionReducer = function (STATE, action) {
    if (STATE === void 0) { STATE = INITIAL_STATE; }
    switch (action.type) {
        case "AddOnFormData":
            if (action.label == "AccountMaster")
                STATE.AccountMaster[0][action.key] = action.payload; //checked
            else if (action.label == "AddressDetail")
                STATE.AddressDetail[0][action.key] = action.payload; //checked
            else if (action.label == "BankDetail")
                STATE.BankDetail[0][action.key] = action.payload; // checked
            else if (action.label == "AccProductCurrency")
                STATE.AccProductCurrency[0][action.key] = action.payload;
            else if (action.label == "CommercialDetail")
                STATE.CommercialDetail[0][action.key] = action.payload;
            else if (action.label == "AccountBillByBillDetail")
                STATE.AccountBillByBillDetail[0][action.key] = action.payload;
            else if (action.label == "AccMasterSeries")
                STATE.AccMasterSeries[0][action.key] = action.payload;
            else if (action.label == "ItemMaster")
                STATE.ItemMaster[action.key] = action.payload;
            else
                alert("set wrong label error");
    }
    return STATE;
};
exports.store1 = (0, redux_1.createStore)(formDataCollectionReducer);
exports.default = formDataCollectionReducer;
//# sourceMappingURL=formCollection.reducer.js.map