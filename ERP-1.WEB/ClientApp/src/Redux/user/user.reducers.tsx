import { useState } from 'react';
import { createStore } from 'redux';
import { UserActionTypes } from './user.types' // store the state of our current User
const INITIAL_STATE = {
    currentUser: {
        domain: '',
        port: '',
        Fy: '',
       }
}
const userReducer = (state = INITIAL_STATE, action: any) => {

    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            state = {
                ...state,
                currentUser: state.currentUser + action.payload
            };
    }
    return { ...state };
}
export const store = createStore(userReducer)

export default userReducer;