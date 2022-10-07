import { useState } from 'react';


import { createStore } from 'redux';
interface IAction {
    payload: string,
    type: string,
    key:string
}
const INITIAL_STATE: any = {}
const formDataCollectionReducer = (state = INITIAL_STATE, action: IAction) => {

    switch (action.type) {
        case "AddOnFormData":
            state = {
                ...state,
            [action.key] : action.payload 
            }
            
    }
    return state
}
export const store1 = createStore(formDataCollectionReducer)

export default formDataCollectionReducer;