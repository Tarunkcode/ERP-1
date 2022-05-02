
import * as React from 'react';
import { Route, Switch } from 'react-router';
import Layout from './components/Layout';
import LayoutLog from './components/LayoutLog';
import Home from './components/Home';
import './custom.css'
import LogIn from './components/Login/login.component';
import { useEffect, useState } from 'react';

import { BrowserRouter } from 'react-router-dom';
import Purchase from './components/purchase/purchase.component';
import ProductionPlanning from './components/production-planning/production-planning.component'
import Sales from './components/sales/sales.component';


function App() {


    return (

        <Switch>
            <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales"]}>
                <Layout>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Purchase' component={Purchase} />
                    <Route exact path='/production-and-planning' component={ProductionPlanning} />
                    <Route exact path='/sales' component={Sales} />
                </Layout>
            </Route>

            <Route path={["/"]}>
                <LayoutLog>

                    <Route exact path='/' component={LogIn} />

                </LayoutLog>
            </Route>


        </Switch>

    );


}

export default App;