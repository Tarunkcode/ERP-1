import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { MasterApiProvider } from '../src/AppContext/master.context';
import { createBrowserHistory } from 'history';
import './Fonts/trebuc.ttf';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddCustomerMaster from '../src/Pages/Master/CustomerMaster/add-customer-master.component';

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;

// Get the application-wide store instance, prepopulating with state from the server where available.
import configureStore from './store/configureStore'
import { history } from './store/configureStore';


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/*<MasterApiProvider>*/}
              <App />
            {/*</MasterApiProvider>*/}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
