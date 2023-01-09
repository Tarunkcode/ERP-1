import 'bootstrap/dist/css/bootstrap.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import ThemeProvider from './AppContext/ThemeContext';
import { createBrowserHistory } from 'history';
import './Fonts/trebuc.ttf';

import App from './App';



// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;

// Get the application-wide store instance, prepopulating with state from the server where available.
import configureStore from './store/configureStore'
import { history } from './store/configureStore';
import register from './components/Notifications/registerServiceWorker';


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/*  <DomainProvider>*/}
            <ThemeProvider>
                <App />
            </ThemeProvider>
            {/*</DomainProvider>*/}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));

register();
