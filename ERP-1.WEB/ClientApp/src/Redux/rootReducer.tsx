﻿

import { combineReducers } from 'redux';
import userReducer from './user/user.reducers';

import formDataCollectionReducer from './form-collection/formCollection.reducer';
import counterreducer from '../Counter/counter.reducer';
import { connectRouter } from 'connected-react-router';
import configReducer from './config/config.reducer';
import bomReducer from '../Redux/BOM/bom.reducer';
const rootReducer = (history: any) => combineReducers({

   counter: counterreducer,
    user  :userReducer,
    router: connectRouter(history),
    saveFormData: formDataCollectionReducer,
    saveConfigData: configReducer,
    bomData : bomReducer

});


export default rootReducer;

