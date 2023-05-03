import { createStore } from 'redux';


interface IAction {
    type: string,
    payload: any,
    key: any,
    label: string
}
//interface IState {
//    Process: object,
//    ConsItem: object,
//    AltItem: object,
//    ProduceItem: object,
//    OtherProduceItem: object,
//    JobWork: object,
//    Operation: object,

//}
interface IState {
    BOMHeader: any,
    BomDetails :any[],
    RoutingDetails: any[],
    RoutingJobWork: any[],
    RoutingOtherHead: any[],
    BOMAltItem: any[],
    BOMItemSupplier: any[],
    BomCutComponenet: any[],
    BomOtherProdDetails: any[],
    BOMProcessPOH: any[],
    BOMItemLocation: any[],
    BOMSAMEITEM: any[],
    ROUTINGOPRATIONDETAILS: any[],
    BomJWDetails: any[],
    RoutingMachineDetails: any[]

}
const INITIAL_STATE: IState = {
    BOMHeader: {},
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
}

const bomReducer = (STATE = INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case "bom_struct":
            if (action.label === "BOMHeader") STATE.BOMHeader[action.key] = action.payload;

            else if (action.label === "RoutingDetails") STATE.RoutingDetails = action.payload;
            else if (action.label === "BomDetails") STATE.BomDetails = action.payload;
            else if (action.label === "RoutingOtherHead") STATE.RoutingOtherHead[action.key] = action.payload;
            else if (action.label === "BOMAltItem") STATE.BOMAltItem[action.key] = action.payload;
            else if (action.label === "BOMItemSupplier") STATE.BOMItemSupplier[action.key] = action.payload;
            else if (action.label === "BomCutComponenet") STATE.BomCutComponenet[action.key] = action.payload;
            else if (action.label === "BomOtherProdDetails") STATE.BomOtherProdDetails[action.key] = action.payload
            else if (action.label === "BOMItemLocation") STATE.BOMItemLocation[action.key] = action.payload
            else if (action.label === "BOMSAMEITEM") STATE.BOMSAMEITEM[action.key] = action.payload
            else if (action.label === "BomJWDetails") STATE.BomJWDetails[action.key] = action.payload
            else if (action.label === "RoutingMachineDetails") STATE.RoutingMachineDetails[action.key] = action.payload

//_____________________________________configuration based______________________________________________________________________________________


            else if (action.label === "RoutingJobWork") STATE.RoutingJobWork[action.key] = action.payload
            else if (action.label === "BOMProcessPOH") STATE.BOMProcessPOH[action.key] = action.payload
            else if (action.label === "ROUTINGOPRATIONDETAILS") STATE.ROUTINGOPRATIONDETAILS[action.key] = action.payload
            else alert("Missing to assign properties to the fields")
    }

    return STATE;
}

export const BOM_STORE = createStore(bomReducer)

export default bomReducer;