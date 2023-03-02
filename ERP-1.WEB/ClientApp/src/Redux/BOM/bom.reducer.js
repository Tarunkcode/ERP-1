"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOM_STORE = void 0;
var redux_1 = require("redux");
var INITIAL_STATE = {
    BOMHeader: [{}],
    BomDetails: [],
    RoutingDetails: [],
    RoutingJobWork: [],
    RoutingOtherHead: [],
    BOMAltItem: [],
    BOMItemSupplier: [],
    BomCutComponenet: [],
    BomOtherProdDetails: [],
    BOMProcessPOH: [],
    BOMItemLocation: [],
    BOMSAMEITEM: [],
    ROUTINGOPRATIONDETAILS: [],
    BomJWDetails: [],
    RoutingMachineDetails: []
};
var bomReducer = function (STATE, action) {
    if (STATE === void 0) { STATE = INITIAL_STATE; }
    switch (action.type) {
        case "bom_struct":
            if (action.label === "BOMHeader")
                STATE.BOMHeader[0][action.key] = action.payload;
            else if (action.label === "BomDetails")
                STATE.BomDetails.push(action.payload);
            else if (action.label === "RoutingDetails")
                STATE.RoutingDetails.push(action.payload);
            else if (action.label === "RoutingOtherHead")
                STATE.RoutingOtherHead.push(action.payload);
            else if (action.label === "BOMAltItem")
                STATE.BOMAltItem.push(action.payload);
            else if (action.label === "BOMItemSupplier")
                STATE.BOMItemSupplier.push(action.payload);
            else if (action.label === "BomCutComponenet")
                STATE.BomCutComponenet.push(action.payload);
            else if (action.label === "BomOtherProdDetails")
                STATE.BomOtherProdDetails.push(action.payload);
            else if (action.label === "BOMItemLocation")
                STATE.BOMItemLocation.push(action.payload);
            else if (action.label === "BOMSAMEITEM")
                STATE.BOMSAMEITEM.push(action.payload);
            else if (action.label === "BomJWDetails")
                STATE.BomJWDetails.push(action.payload);
            else if (action.label === "RoutingMachineDetails")
                STATE.RoutingMachineDetails.push(action.payload);
            //_____________________________________configuration based______________________________________________________________________________________
            else if (action.label === "RoutingJobWork")
                STATE.RoutingJobWork.push(action.payload);
            else if (action.label === "BOMProcessPOH")
                STATE.BOMProcessPOH.push(action.payload);
            else if (action.label === "ROUTINGOPRATIONDETAILS")
                STATE.ROUTINGOPRATIONDETAILS.push(action.payload);
            else
                alert("Missing to assign properties to the fields");
    }
    return STATE;
};
exports.BOM_STORE = redux_1.createStore(bomReducer);
exports.default = bomReducer;
//# sourceMappingURL=bom.reducer.js.map