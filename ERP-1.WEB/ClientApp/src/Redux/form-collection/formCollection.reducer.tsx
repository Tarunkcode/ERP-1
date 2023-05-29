﻿import { useState } from 'react';


import { createStore } from 'redux';
interface IAction {
    payload: any,
    type: string,
    key: string,
    label: string
}
interface IState {
    AccountMaster: any[],
    AddressDetail: any[],
    BankDetail: any[],
    AccProductCurrency: any[],
    CommercialDetail: any[],
    AccountBillByBillDetail: any[],
    AccMasterSeries: any[],
    ItemMaster: any,
    BranchMasterClass: any,
    QCPlanClass: any
}


const INITIAL_STATE: IState = {
    AccountMaster: [{}],
    AddressDetail: [{}],
    BankDetail: [],
    AccProductCurrency: [{}],
    CommercialDetail: [{}],
    AccountBillByBillDetail: [{}],
    AccMasterSeries: [{}],
    ItemMaster: {},
    BranchMasterClass: {},
    QCPlanClass: {
        "QCPlanHeader": {},
        "QCPlanDetails": []
    }
}

const formDataCollectionReducer = (STATE = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        case "AddOnFormData":
            if (action.label == "AccountMaster") STATE.AccountMaster[0][action.key] = action.payload;//checked
            else if (action.label == "AddressDetail") STATE.AddressDetail[0][action.key] = action.payload; //checked
            else if (action.label == "ShippingAddressDetail") {
                STATE.AddressDetail = [];
                STATE.AddressDetail.push(action.payload);//checked
            }
            else if (action.label == "PlantAddressDetail") {
                STATE.AddressDetail = [];
                STATE.AddressDetail.push(action.payload);//checked
            }
            else if (action.label == "BankDetail") {
                STATE.BankDetail.push(action.payload);// checked
            }
            else if (action.label == "AccProductCurrency") STATE.AccProductCurrency[0][action.key] = action.payload;

            else if (action.label == "CommercialDetail") STATE.CommercialDetail[0][action.key] = action.payload;

            else if (action.label == "AccountBillByBillDetail") STATE.AccountBillByBillDetail[0][action.key] = action.payload;

            else if (action.label == "AccMasterSeries") STATE.AccMasterSeries[0][action.key] = action.payload;

            else if (action.label == "ItemMaster") STATE.ItemMaster[action.key] = action.payload;
            /*else alert("set wrong label error");*/

        case "AddQcPlan":
            if (action.label == "QCPlanHeader") STATE.QCPlanClass.QCPlanHeader[action.key] = action.payload;
            else if (action.label == "QCPlanDetails") STATE.QCPlanClass.QCPlanDetails = action.payload;
           /* else alert("set wrong label error");*/


        case "AddBranch": STATE.BranchMasterClass[action.key] = action.payload;

    }
    return STATE
}
export const store1 = createStore(formDataCollectionReducer)

export default formDataCollectionReducer;