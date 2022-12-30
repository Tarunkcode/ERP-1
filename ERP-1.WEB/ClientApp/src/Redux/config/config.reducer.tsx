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
    roleMaster: any[],
    subMaster: any

}


const INITIAL_STATE: IState = {
    InventoryDet: [{}],
    seriesConf: {},
    roleMaster: [],
    subMaster: {
        'EsMasterTable': [{}],
        'EsPaymentTermDet': []
    }
    
}

const configReducer = (STATE = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        case "changeConfig":
            if (action.label == "InventoryDet") STATE.InventoryDet[0] = action.payload;
            else if (action.label == "seriesConf") STATE.seriesConf[action.key] = action.payload;
            else if (action.label == "roleMaster") STATE.roleMaster.push({ [action.key]: action.payload })
       


            else if (action.label == "subMaster") {
                var obj = { ...STATE.subMaster['EsMasterTable'][0], [action.key]: action.payload }
    
                STATE.subMaster['EsMasterTable'][0] = obj;
            }
            else if (action.label == "modifySubMaster") {

                STATE.subMaster['EsMasterTable'][0] = action.payload;
            }
           /* else alert("set wrong label error");*/
        case 'table':
            if (action.label == "tableRow") {
       
                STATE.subMaster.EsPaymentTermDet = action.payload
            }
    }
    return STATE
}
export const store2 = createStore(configReducer)

export default configReducer;