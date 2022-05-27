

import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Layout from './components/Layout';
import LayoutLog from './components/LayoutLog';
import RegisterLayout from './components/RegisterLayout';
import Home from './components/Home';
import './custom.css'
import LogIn from './components/Login/login.component';
import { useEffect, useState } from 'react';

import { BrowserRouter, useLocation } from 'react-router-dom';
import Purchase from './components/purchase/purchase.component';
import ProductionPlanning from './components/production-planning/production-planning.component'
import Sales from './components/sales/sales.component';
import RegisterDomain from './components/RegisterYourDomain/register-your-domain.component';

function App() {
   

    var [domain, setDomain]: any = React.useState('');
    const currentDomain = window.location.hostname;

    console.log(currentDomain)
    const RenderApp = async () => {

        try {
            var domainUrl = "http://localhost:16067/api/getall";
           await fetch(domainUrl).then(res => res.json()).then(result => {
                console.log(result)

                if (result != null && result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].sUrl == currentDomain) {
                            setDomain(domain);
                        }
                    }
                    console.log('Matched Domain', domain);
                  
                }
                else {
                    console.log('data not found in domain array fetch Status = -1')
                    return <RegisterDomain />

                }

            })

        }

        catch (Ex) {
            alert("calling api's failed ")
        }


    }
    RenderApp();
    console.log('domain', domain);

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

            <Route path={["/Login"]}>
                <LayoutLog>
                    

                  <Route exact path='/Login' component={LogIn} />
                </LayoutLog>
            </Route>


            <Route path={["/register"]}>
                <RegisterLayout>


                    <Route exact path='/register' component={RegisterDomain} />

                </RegisterLayout>
            </Route>
                   
            <Route exact path="/">
                {domain != '' ? <Redirect to="/Login" /> : <RegisterDomain />}
            </Route>
                   
                  
                       
                 
           

            

        </Switch>

    );


}

export default App;