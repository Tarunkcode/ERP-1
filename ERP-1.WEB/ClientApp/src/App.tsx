

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
import BalanceOnlyReport from './components/Report/Balance-Only/BalanceOnly.component';
import Details from './components/Report/Details/details.component';
import PendingPrDetails from './components/Report/Pending-Pr-Details/pending-pr-details.component';
import prDetails from './components/Report/Pr-Details/pr-details.component';
import PRPoDetails from './components/Report/PR-Po-Details/pr-po-details.component';
import PurchaseOrderDetails from './components/Report/Purchase-Order-Details/purchase-order-details.component';
import PendingPurchaseDetails from './components/Report/PendingPurchaseDetails/Pending-Pur-Details.component';
import MarerialDispatch from './components/Material-Dispatch/material-dispatch.component';
import PendingPerforma from './components/Report/Sale-Report/pending-performa/pending-performa.component';
import PendingSaleOrder from './components/Report/Sale-Report/pending-sale-order/pending-sale-order.component';
import SaleInvoiceDetails from './components/Report/Sale-Report/sale-invoice-details/sale-invoice-details.component';
import SaleOrderDetails from './components/Report/Sale-Report/sale-order-details/sale-order-details.component';
import SaleRegister from './components/Report/Sale-Report/sale-register/sale-register.component';
import AddQcPlan from './components/Master/AddQcPlan/add-qc-plan.component';
import AssortmentMaster from './components/Master/AssortmentMaster/assortment-master.component';
import BomRoutingConfig from './components/Master/BomRoutingConfiguration/bom-routing-config.component';
import BranchMaster from './components/Master/BranchMaster/branch-master.component';
import CostSheetDetails from './components/Master/CostSheet/cost-sheet-details.component';
import AddCustomerMaster from './components/Master/CustomerMaster/add-customer-master.component';
import AddItemMaster from './components/Master/ItemMaster/add-item-master.component';
import AddSupplierMaster from './components/Master/SupplierMaster/add-supplier-master.component';
  
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
                        if (result[i].currentDomain == currentDomain) {
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
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales", "/add-sale-order", "/total-order", "/total-pi", "/sale", "/pending-order", "/ledger-us", "/debit-note", "/credit-note", "/balance-only", "/details", "/pr-details", "/pending-pr-details", "/purchase-order-details", "/pending-purchase-details", "/pr-po-details", "/material-dispatch", "/sale-order-details", "/pending-sale-order", "/sale-invoice-details", "/sale-register", "/pending-performa", "/add-customer-master", "/add-supplier-master", "/add-item-master", "/cost-sheet-details", "/bom-routing-configuration", "/add-qc-plan", "/add-assortment-master", "/add-branch-master"]}>
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
                        <Route exact path='/balance-only' component={BalanceOnlyReport} />
                        <Route exact path='/details' component={Details} />
                        <Route exact path='/pending-pr-details' component={PendingPrDetails} />
                        <Route exact path='/pending-purchase-details' component={PendingPurchaseDetails} />
                        <Route exact path='/pr-details' component={prDetails} />
                        <Route exact path='/pr-po-details' component={PRPoDetails} />
                        <Route exact path='/purchase-order-details' component={PurchaseOrderDetails} />
                        <Route exact path='/material-dispatch' component={MarerialDispatch} />

                        <Route exact path='/sale-order-details' component={SaleOrderDetails} />
                        <Route exact path='/pending-sale-order' component={PendingSaleOrder} />
                        <Route exact path='/sale-invoice-details' component={SaleInvoiceDetails} />
                        <Route exact path='/sale-register' component={SaleRegister} />
                        <Route exact path='/pending-performa' component={PendingPerforma} />

                        {/*Master*/}

                        <Route exact path='/add-qc-plan' component={AddQcPlan} />
                        <Route exact path='/add-assortment-master' component={AssortmentMaster} />
                        <Route exact path="/bom-routing-configuration" component={BomRoutingConfig} />
                        <Route exact path='/add-branch-master' component={BranchMaster} />
                        <Route exact path='/cost-sheet-details' component={CostSheetDetails} />
                        <Route exact path='/add-customer-master' component={AddCustomerMaster} />
                        <Route exact path='/add-item-master' component={AddItemMaster} />
                        <Route exact path='/add-supplier-master' component={AddSupplierMaster} />
                    

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