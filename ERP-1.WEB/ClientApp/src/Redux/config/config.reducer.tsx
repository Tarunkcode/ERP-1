import { useState } from 'react';


import { createStore } from 'redux';
interface IAction {
    payload: any,
    type: string,
    key: string,
    label: string
}
interface IState {
    InventoryDet: any[],
    seriesConf: any,
    roleMaster : any[]
}


const INITIAL_STATE: IState = {
    InventoryDet: [{}],
    seriesConf: {},
    roleMaster: []
}

const configReducer = (STATE = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        case "changeConfig":
            if (action.label == "InventoryDet") STATE.InventoryDet[0][action.key] = action.payload;
            else if (action.label == "seriesConf") STATE.seriesConf[action.key] = action.payload;
            else if (action.label == "roleMaster") STATE.roleMaster.push({ [action.key]: action.payload })
           
           /* else alert("set wrong label error");*/
     
    }
    return STATE
}
export const store2 = createStore(configReducer)

export default configReducer;