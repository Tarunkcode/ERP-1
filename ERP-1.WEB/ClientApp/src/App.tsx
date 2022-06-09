

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
import CreditNote from './components/credit-note/credit-note.component';
import Sale from './components/sale/sale.component';
import DebitNote from './components/debit-note/debit-note.component';
import LedgerUs from './components/ledger-us/ledger-us.component';
import PendingOrder from './components/pending-order/pending-order.component';
import TotalOrder from './components/total-order/total-order.component';
import TotalPi from './components/total-pi/total-pi.component';

  
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

    }, [domain])

 
 
    return (
        <>
        <Switch>
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales", "/add-sale-order","/total-order","/total-pi","/sale","/pending-order","/ledger-us","/debit-note","/credit-note"]}>
                <Layout>
                    <Route exact path='/Home' component={Home} />
                    <Route exact path='/Purchase' component={Purchase} />
                    <Route exact path='/production-and-planning' component={ProductionPlanning} />
                        <Route exact path='/sales' component={Sales} />
                        <Route exact path='/add-sale-order' component={AddSaleOrder} />
                    <Route exact path='/total-order' component={TotalOrder} />
                    <Route exact path='/total-pi' component={TotalPi} />
                    <Route exact path='/sale' component={Sale} />
                    <Route exact path='/pending-order' component={PendingOrder} />
                    <Route exact path='/ledger-us' component={LedgerUs} />
                    <Route exact path='/debit-note' component={DebitNote} />
                    <Route exact path='/credit-note' component={CreditNote} />

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