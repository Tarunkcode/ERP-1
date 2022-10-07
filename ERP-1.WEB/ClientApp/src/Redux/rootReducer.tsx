
import { combineReducers } from 'redux';
import userReducer from './user/user.reducers';

import formDataCollectionReducer from './form-collection/formCollection.reducer';
import counterreducer from '../Counter/counter.reducer';
import { connectRouter } from 'connected-react-router';


const rootReducer = (history : any) => combineReducers({

   counter: counterreducer,
    user  :userReducer,
    router: connectRouter(history),
    saveFormData: formDataCollectionReducer

});


export default rootReducer;

