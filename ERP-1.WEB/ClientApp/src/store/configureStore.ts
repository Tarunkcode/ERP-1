import logger from 'redux-logger';

import rootReducer from '../Redux/rootReducer';

import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'

//import { ConnectedRouter } from 'connected-react-router';

//const middlewares = [logger];

//const store = createStore(rootReducer, applyMiddleware(...middlewares));

//export default store;

export const history = createBrowserHistory();
export default function configureStore() {
    const store = createStore(
        rootReducer(history), // root reducer with router state
      
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
         /*       ...middlewares*/
            ),
        ),
    )

    return store
}

