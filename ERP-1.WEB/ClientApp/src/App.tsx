//--------------------------------local imports---------------------------------------------------------------------------------------------------
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import './custom.css'
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import LayoutLog from './components/LayoutLog';
import Secret_LayOut from './components/Secret_LayOut';
//-------------------------------------------------------Primary Login Imports -----------------------------------------------------------------------
import RegisterLayout from './components/RegisterLayout';
import LogIn from './components/Login/login.component';
import RegisterDomain from './components/RegisterYourDomain/register-your-domain.component';
//---------------------------------Dashboards Imports---------------------------------------------------------------------------------------------------
import Home from './components/Home';
import Sales from './components/sales/sales.component';
import Purchase from './components/purchase/purchase.component';
import ProductionPlanning from './components/production-planning/production-planning.component';
//--------------------------------------------------------Set up--------------------------------------------------------------------------------------
import HouseKeeping from './components/House-Keeping/house-keeping.component';
import Approval from './components/approval/approval.component';
import FeaturesOptions from './components/Featutes-Option/features-option.component';
//---------------------------------Master Imports---------------------------------------------------------------------------------------------------
import AddQcPlan from './components/Master/AddQcPlan/add-qc-plan.component';
import AssortmentMaster from './components/Master/AssortmentMaster/assortment-master.component';
import BomRoutingConfig from './components/Master/BomRoutingConfiguration/bom-routing-config.component';
import RouteDetails from './components/Master/BomRoutingConfiguration/RouteDetails.component';
import BranchMaster from './components/Master/BranchMaster/branch-master.component';
import CostSheetDetails from './components/Master/CostSheet/cost-sheet-details.component';
import AddCustomerMaster from './components/Master/CustomerMaster/add-customer-master.component';
import AddItemMaster from './components/Master/ItemMaster/add-item-master.component';
import AddSupplierMaster from './components/Master/SupplierMaster/add-supplier-master.component';
//---------------------------------Transactions Imports---------------------------------------------------------------------------------------------------
import AddSaleOrder from './components/AddSaleOrder/add-sale-order.component';


import MaterialIssue from './components/Transaction/Job-Work/material-issue.compoenent';
import MaterialRecieve from './components/Transaction/Job-Work/material-recieve.compoenent';
import LoosePack from './components/Transaction/Material-Movement/loose-pack.component';
import PackToLoose from './components/Transaction/Material-Movement/pack-to-loose.component';
import StockJournal from './components/Transaction/Material-Movement/stock-journal.component';
import StockTransfer from './components/Transaction/Material-Movement/stock-transfer.component';
import DayWisePlanning from './components/Transaction/Planning/daywise-plan.component';
import MRP from './components/Transaction/Planning/mrp.component';
import ProductionConfiguration from './components/Transaction/Planning/production-configuration.compoenent';
import ProductionIndent from './components/Transaction/Planning/production-indent.component';
import GateEntry from './components/Transaction/Purchase/gate-entry.component';
import MRN from './components/Transaction/Purchase/mrn.component';
import PrIndent from './components/Transaction/Purchase/pr-indent.component';
import PurchaseInvoice from './components/Transaction/Purchase/purchase-invoice.component';
import PurchaseOrder from './components/Transaction/Purchase/purchase-order.component';
import PurchaseQuotation from './components/Transaction/Purchase/purchase-quotation.component';
import PurchaseSchedules from './components/Transaction/Purchase/purchase-schedules.component';
import Line from './components/Transaction/Quality/line.component';
import OQC from './components/Transaction/Quality/oqc.component';
import DispatchPlan from './components/Transaction/Sales/dispatch-plan.component';
import Projection from './components/Transaction/Sales/projection.component';
import SaleInvoice from './components/Transaction/Sales/sale-invoice.component';
import SaleReturn from './components/Transaction/Sales/sale-return.component';
import SaleQuotaton from './components/Transaction/Sales/sales-quotation.component';
import PurchaseRequisation from './components/Transaction/Purchase/purchase-requisation.component';
import MaterialMovement from './components/Transaction/Purchase/material-movement.component';


import MarerialDispatch from './components/Material-Dispatch/material-dispatch.component';
//---------------------------------Reports Imports---------------------------------------------------------------------------------------------------
import BalanceOnlyReport from './components/Report/Balance-Only/BalanceOnly.component';
import Details from './components/Report/Details/details.component';
import PendingPrDetails from './components/Report/Pending-Pr-Details/pending-pr-details.component';
import prDetails from './components/Report/Pr-Details/pr-details.component';
import PRPoDetails from './components/Report/PR-Po-Details/pr-po-details.component';
import PurchaseOrderDetails from './components/Report/Purchase-Order-Details/purchase-order-details.component';
import PendingPurchaseDetails from './components/Report/PendingPurchaseDetails/Pending-Pur-Details.component';

import PendingPerforma from './components/Report/Sale-Report/pending-performa/pending-performa.component';
import PendingSaleOrder from './components/Report/Sale-Report/pending-sale-order/pending-sale-order.component';
import SaleInvoiceDetails from './components/Report/Sale-Report/sale-invoice-details/sale-invoice-details.component';
import SaleOrderDetails from './components/Report/Sale-Report/sale-order-details/sale-order-details.component';
import SaleRegister from './components/Report/Sale-Report/sale-register/sale-register.component';
//---------------------------------Additional Imports---------------------------------------------------------------------------------------------------
import Nothing from './components/nothing';
import Test from './components/test';
import PendingOrder from './components/pending-order/pending-order.component';
import TotalOrder from './components/total-order/total-order.component';
import TotalPi from './components/total-pi/total-pi.component'; 
  
function App() {
    const [showResult, setShowResult] = useState(false)
    const setDefault : any = React.useRef(0);

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
                            setDefault.current = 1;
                            setShowResult(true);
                            break;
                        }

                    }
                }
                else {
                    console.log('data not found in domain array fetch Status = -1');
                    setDefault.current = 2;
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
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales", "/add-sale-order", "/total-order", "/total-pi", "/pending-order", "/features-option", "/approval", "/house-keeping", "/balance-only", "/details", "/pr-details", "/pending-pr-details", "/purchase-order-details", "/pending-purchase-details", "/pr-po-details", "/material-dispatch", "/sale-order-details", "/pending-sale-order", "/sale-invoice-details", "/sale-register", "/pending-performa", "/add-customer-master", "/add-supplier-master", "/add-item-master", "/cost-sheet-details", "/bom-routing-configuration", "/add-qc-plan", "/add-assortment-master", "/add-branch-master", "/test",
                    "/material-issue",
                    "/material-recieve",
                    "/loose-pack",
                    "/pack-to-loose",
                    "/stock-journal",
                    "/stock-transfer",
                    "/daywise-plan",
                    "/mrp",
                    "/production-confirmation",
                    "/production-indent",
                    "/gate-entry",
                    "/mrn",
                    "/pr-indent",
                    "/purchase-invoice",
                    "/purchase-order",
                    "/purchase-quotation",
                    "/purchase-schedules",
                    "/line",
                    "/oqc",
                    "/dispatch-plan",
                    "/projection",
                    "/sale-invoice",
                    "/sales-return",
                    "/sale-quotation",
                    "/purchase-requisation",
                   
                    "/material-movement"




                ]}>
                <Layout>
                        <Route exact path='/Home' component={Home} />
                        <Route exact path='/Purchase' component={Purchase} />
                        <Route exact path='/production-and-planning' component={ProductionPlanning} />
                        <Route exact path='/sales' component={Sales} />
                        <Route exact path='/add-sale-order' component={AddSaleOrder} />
                        <Route exact path='/total-order' component={TotalOrder} />
                        <Route exact path='/total-pi' component={TotalPi} />
                       
                        <Route exact path='/pending-order' component={PendingOrder} />
                        <Route exact path='/features-option' component={FeaturesOptions} />
                        <Route exact path='/approval' component={Approval} />
                        <Route exact path='/house-keeping' component={HouseKeeping} />
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
                        <Route exact path='/test' component={Test} />
                     

                        {/*Transaction */}
                        <Route exact path='/material-issue' component={MaterialIssue} />
                        <Route exact path="/material-recieve" component={MaterialRecieve} />
                        <Route exact path="/loose-pack" component={LoosePack} />
                        <Route exact path="/pack-to-loose" component={PackToLoose} />
                        <Route exact path="/stock-journal" component={StockJournal} />
                        <Route exact path="/stock-transfer" component={StockTransfer} />
                        <Route exact path="/daywise-plan" component={DayWisePlanning} />
                        <Route exact path="/mrp" component={MRP} />
                        <Route exact path="/production-confirmation" component={ProductionConfiguration} />
                        <Route exact path="/production-indent" component={ProductionIndent} />
                        <Route exact path="/gate-entry" component={GateEntry} />
                        <Route exact path="/mrn" component={MRN} />
                        <Route exact path="/pr-indent" component={PrIndent} />
                        <Route exact path="/purchase-invoice" component={PurchaseInvoice} />
                        <Route exact path="/purchase-order" component={PurchaseOrder} />
                        <Route exact path="/purchase-quotation" component={PurchaseQuotation} />
                        <Route exact path="/purchase-schedules" component={PurchaseSchedules} />
                        <Route exact path="/line" component={Line} />
                        <Route exact path="/oqc" component={OQC} />
                        <Route exact path="/dispatch-plan" component={DispatchPlan} />
                        <Route exact path="/projection" component={Projection} />
                        <Route exact path="/sale-invoice" component={SaleInvoice} />
                        <Route exact path="/sales-return" component={SaleReturn} />
                        <Route exact path="/sale-quotation" component={SaleQuotaton} />
                        <Route exact path="/purchase-requisation" component={PurchaseRequisation} />
                        <Route exact path="/material-movement" component={MaterialMovement} />
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
            <Route path={["/route-details"]}>
                <Secret_LayOut>
                        <Route exact path='/route-details' component={RouteDetails} />

                </Secret_LayOut>
            </Route>

          

                <Route exact path="/" component={setDefault.current == 1 ? LogIn : Nothing} />

                <Route exact path="/" component={ setDefault.current == 2 ? RegisterDomain : Nothing} />
            

                  
        </Switch>
</>
    );

}

export default App;