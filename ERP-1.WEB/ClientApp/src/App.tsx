

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
import AddSaleOrder from './components/AddSaleOrder/add-sale-order.component'
import RegisterDomain from './components/RegisterYourDomain/register-your-domain.component';

  
function App() {
    const [showResult, setShowResult] = useState(false)
    

    var [domain, setDomain]: any = React.useState('');
   
    const currentDomain = window.location.hostname;

    console.log('current domain',currentDomain)


    useEffect(() => {
     
        document.body.style.zoom = "85%";

    }, [])

    useEffect(() => {

       
        

        try {

            var domainUrl = `http://${window.location.host}/api/getall`;
              fetch(domainUrl).then(res => res.json()).then(result => {
                console.log(result)
                  if (result.status == true) {

                      if (result.sURL == currentDomain) {
                          setDomain(result.sURL);
                          setShowResult(true)
                      
                      }
                     

                  }
                      
                  
                else {
                    console.log('data not found in domain array fetch Status = -1')
                    setShowResult(false)
                }

           })


        }

        catch (Ex) {
            alert("calling api's failed ")
        }

    }, [domain])

 
 
    return (
        <>

    
        <Switch>
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales", "/add-sale-order"]}>
                <Layout>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Purchase' component={Purchase} />
                    <Route exact path='/production-and-planning' component={ProductionPlanning} />
                        <Route exact path='/sales' component={Sales} />
                        <Route exact path='/add-sale-order' component={AddSaleOrder} />

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
                   
          

                <Route exact path="/" component={domain != '' && showResult == true ? LogIn : RegisterDomain} />
            

                  
        </Switch>
</>
    );

}

export default App;