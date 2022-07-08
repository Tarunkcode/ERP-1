

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
import AddSaleOrder from './components/AddSaleOrder/add-sale-order'
import Sales from './components/sales/sales.component';
import RegisterDomain from './components/RegisterYourDomain/register-your-domain.component';
import BalanceOnlyReport from './components/Report/Balance-Only/BalanceOnly.component';
import Details from './components/Report/Details/details.component';
import PendingPrDetails from './components/Report/Pending-Pr-Details/pending-pr-details.component';
import prDetails from './components/Report/Pr-Details/pr-details.component';
import PRPoDetails from './components/Report/PR-Po-Details/pr-po-details.component';
import PurchaseOrderDetails from './components/Report/Purchase-Order-Details/purchase-order-details.component';
import PendingPurchaseDetails from './components/Report/PendingPurchaseDetails/Pending-Pur-Details.component';
import MarerialDispatch from './components/Material-Dispatch/material-dispatch.component';
  
function App() {
    const [showResult, setShowResult] = useState(false)
    

    var [domain, setDomain]: any = React.useState('');
   
    const currentDomain = window.location.hostname;

    console.log(currentDomain)
    


    useEffect(() => {

       
        

        try {
    
            var domainUrl = `http://${window.location.host}/api/getall`;
            console.log('domainUrl', domainUrl)
              fetch(domainUrl).then(res => res.json()).then(result => {
                console.log(result)

                if (result != null && result.length > 0) {
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].sUrl == currentDomain) {
                            setDomain(result[i].sUrl);
                            setShowResult(true)
                            break;
                        }
                   
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

    }, [])

 
 
    return (
        <>

    
        <Switch>
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales", "/add-sale-order", "/balance-only", "/details", "/pr-details", "/pending-pr-details", "/purchase-order-details", "/pending-purchase-details", "/pr-po-details","/material-dispatch"]}>
                <Layout>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Purchase' component={Purchase} />
                    <Route exact path='/production-and-planning' component={ProductionPlanning} />
                    <Route exact path='/sales' component={Sales} />
                    <Route exact path='/add-sale-order' component={AddSaleOrder} />
                    <Route exact path='/balance-only' component={BalanceOnlyReport} />
                        <Route exact path='/details' component={Details} />
                        <Route exact path='/pending-pr-details' component={PendingPrDetails} />
                        <Route exact path='/pending-purchase-details' component={PendingPurchaseDetails} />
                        <Route exact path='/pr-details' component={prDetails} />
                        <Route exact path='/pr-po-details' component={PRPoDetails} />
                        <Route exact path='/purchase-order-details' component={PurchaseOrderDetails} />
                        <Route exact path='/material-dispatch' component={MarerialDispatch} />
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