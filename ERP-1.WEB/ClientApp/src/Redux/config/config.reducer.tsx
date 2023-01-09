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
    subMaster: any,
    pMaster : any

}


const INITIAL_STATE: IState = {
    InventoryDet: [{}],
    seriesConf: {},
    roleMaster: [],
    subMaster: {
        'EsMasterTable': [{}],
        'EsPaymentTermDet': []
    },
    pMaster: {
        'esmastertable': [{}],
        'processjobworker': [],
        'processpoh': [],
        'processopration': []
    }
    
}

const configReducer = (STATE = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        case "changeConfig":
            if (action.label === "InventoryDet") {

                STATE.InventoryDet[0] = action.payload;
            }
            else if (action.label === "seriesConf") STATE.seriesConf[action.key] = action.payload;
            else if (action.label === "roleMaster") STATE.roleMaster.push({ [action.key]: action.payload })
            else if (action.label === 'pMaster') STATE.pMaster.esmastertable[0][action.key] = action.payload;

            else if (action.label === 'pMasterJob')
            {
                STATE.pMaster.processjobworker[parseInt(action.key)] = { ...STATE.pMaster.ProcessJobWorker[parseInt(action.key)], ...action.payload }
            } // action.payload carry table row Obj
            else if (action.label === 'pMasterOverHead') STATE.pMaster.processpoh[parseInt(action.key)] = (action.payload) // action.payload carry table row Obj
            else if (action.label === 'pMasterOperation') STATE.pMaster.processopration[parseInt(action.key)] = (action.payload) // action.payload carry table row Obj


            else if (action.label == "subMaster") {
                var obj = { ...STATE.subMaster['EsMasterTable'][0], [action.key]: action.payload }
    
                STATE.subMaster['EsMasterTable'][0] = obj;
            }
            else if (action.label == "modifySubMaster") {

                STATE.subMaster['EsMasterTable'][0] = action.payload;
            }
            else if (action.label == "modify_P_ESMaster") {

                STATE.pMaster.esmastertable[0] = action.payload;
            }
            else if (action.label == "modify_P_Job") {

                STATE.pMaster.processjobworker = action.payload;
            }
            else if (action.label == "modify_P_overHead") {

                STATE.pMaster.processpoh = action.payload
            }
            else if (action.label == "modify_P_oprn") {

                STATE.pMaster.processopration = action.payload;
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