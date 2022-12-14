// React Notification
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//--------------------------------local imports---------------------------------------------------------------------------------------------------
import * as React from 'react';
import { Route, Switch } from 'react-router';
import './custom.css'
import { useEffect } from 'react';
import Layout from './components/Layout';
import LayoutLog from './components/LayoutLog';
import Secret_LayOut from './components/Secret_LayOut';
//-------------------------------------------------------Primary Login Imports -----------------------------------------------------------------------
import RegisterLayout from './components/RegisterLayout';
import LogIn from './components/Validations/Login/login.component';
import CustomerVaildate from './components/Validations/Customer-Validation/customer-validation.component';
import RegisterDomain from './components/RegisterYourDomain/register-your-domain.component';
//---------------------------------Dashboards Imports---------------------------------------------------------------------------------------------------
import Home from './components/Home';
import Sales from './Pages/DashBoards/sales/sales.component';
import Purchase from './Pages/DashBoards/purchase/purchase.component';
import ProductionPlanning from './Pages/DashBoards/production-planning/production-planning.component';
//--------------------------------------------------------Set up--------------------------------------------------------------------------------------
import HouseKeeping from './Pages/SetUp/House-Keeping/house-keeping.component';
import Approval from './Pages/SetUp/approval/approval.component';
import Inventory from "./components/SetUp/inventory.component"
import GST_Page from "./Pages/SetUp/Featutes-Option/gst.page";
import Series_Conf from './components/SetUp/series_config.component';
import BillSundry from './components/SetUp/bill-sundry.component';
import Role_Master from './components/SetUp/role-master.component';
import UserMaster_Page from './Pages/SetUp/UserMaster/user-master.page';
import SalePurchaseType_Page from './Pages/SetUp/SalePurchaseType/sale-purchase-type.page';
import GSTConf_Page from './Pages/SetUp/Featutes-Option/gst-conf.page';


//----------------------------------- Sub Master -----------------------------------------------------------------------------------------------
import Cust_Sup_Page from './Pages/Sub-Master/customer-supplier-group';
import Process_Page from './Pages/Sub-Master/process.page';

//---------------------------------Master Imports---------------------------------------------------------------------------------------------------
import AddQcPlan from './Pages/Master/AddQcPlan/add-qc-plan.component';
import AssortmentMaster from './Pages/Master/AssortmentMaster/assortment-master.component';
import BomRoutingConfig from './Pages/Master/BomRoutingConfiguration/bom-routing-config.component';
import RouteDetails from './Pages/Master/BomRoutingConfiguration/RouteDetails.component';
import BranchMaster from './Pages/Master/BranchMaster/branch-master.component';
import CostSheetDetails from './Pages/Master/CostSheet/cost-sheet-details.component';
import CusSupMaster from './Pages/Master/Customer-Supplier-Master/index';
import AddItemMaster from './Pages/Master/ItemMaster/add-item-master.component';
import AddSupplierMaster from './Pages/Master/SupplierMaster/index';
//---------------------------------Transactions Imports---------------------------------------------------------------------------------------------------
import AddSaleOrder from './Pages/Transaction/Sales/add-sale-order.component';


import MaterialIssue from './Pages/Transaction/Job-Work/material-issue.compoenent';
import MaterialRecieve from './Pages/Transaction/Job-Work/material-recieve.compoenent';
import LoosePack from './Pages/Transaction/Material-Movement/loose-pack.component';
import PackToLoose from './Pages/Transaction/Material-Movement/pack-to-loose.component';
import StockJournal from './Pages/Transaction/Material-Movement/stock-journal.component';
import StockTransfer from './Pages/Transaction/Material-Movement/stock-transfer.component';
import DayWisePlanning from './Pages/Transaction/Planning/daywise-plan.component';
import MRP from './Pages/Transaction/Planning/mrp.component';
import ProductionConfiguration from './Pages/Transaction/Planning/production-configuration.compoenent';
import ProductionIndent from './Pages/Transaction/Planning/production-indent.component';
import GateEntry from './Pages/Transaction/Purchase/gate-entry.component';
import MRN from './Pages/Transaction/Purchase/mrn.component';
import PrIndent from './Pages/Transaction/Purchase/pr-indent.component';
import PurchaseInvoice from './Pages/Transaction/Purchase/purchase-invoice.component';
import PurchaseOrder from './Pages/Transaction/Purchase/purchase-order.component';
import PurchaseQuotation from './Pages/Transaction/Purchase/purchase-quotation.component';
import PurchaseSchedules from './Pages/Transaction/Purchase/purchase-schedules.component';
import Line from './Pages/Transaction/Quality/line.component';
import OQC from './Pages/Transaction/Quality/oqc.component';
import DispatchPlan from './Pages/Transaction/Sales/dispatch-plan.component';
import Projection from './Pages/Transaction/Sales/projection.component';
import SaleInvoice from './Pages/Transaction/Sales/sale-invoice.component';
import SaleReturn from './Pages/Transaction/Sales/sale-return.component';
import SaleQuotaton from './Pages/Transaction/Sales/sales-quotation.component';
import PurchaseRequisation from './Pages/Transaction/Purchase/purchase-requisation.component';
import MaterialMovement from './Pages/Transaction/Purchase/material-movement.component';


import MarerialDispatch from './Pages/Transaction/Material-Movement/material-dispatch.component';
//---------------------------------Reports Imports---------------------------------------------------------------------------------------------------
import BalanceOnlyReport from './Pages/Reports/Balance-Only/BalanceOnly.component';
import Details from './Pages/Reports/Details/details.component';
import PendingPrDetails from './Pages/Reports/Pending-Pr-Details/pending-pr-details.component';
import prDetails from './Pages/Reports/Pr-Details/pr-details.component';
import PRPoDetails from './Pages/Reports/PR-Po-Details/pr-po-details.component';
import PurchaseOrderDetails from './Pages/Reports/Purchase-Order-Details/purchase-order-details.component';
import PendingPurchaseDetails from './Pages/Reports/PendingPurchaseDetails/Pending-Pur-Details.component';

import PendingPerforma from './Pages/Reports/Sale-Report/pending-performa/pending-performa.component';
import PendingSaleOrder from './Pages/Reports/Sale-Report/pending-sale-order/pending-sale-order.component';
import SaleInvoiceDetails from './Pages/Reports/Sale-Report/sale-invoice-details/sale-invoice-details.component';
import SaleOrderDetails from './Pages/Reports/Sale-Report/sale-order-details/sale-order-details.component';
import SaleRegister from './Pages/Reports/Sale-Report/sale-register/sale-register.component';
//---------------------------------Additional Imports---------------------------------------------------------------------------------------------------
import Nothing from './components/nothing';
import Modify from './Pages/modify.component';
import List from './components/List/list.component';
import YetNotStarted from './Pages/YetNotStarted'
import { DomainContext } from './AppContext/domainContext.component';
import Notify from '../src/components/Notifications/index';




  
function App() {
  
    //const setDefault : any = React.useRef(0);

    //var [domain, setDomain]: any = React.useState('');
   
    //const currentDomain = window.location.hostname;

    //console.log('current domain',currentDomain)


    useEffect(() => {
     
        document.body.style.zoom = "85%";

    }, [])

    var { defaultState} = React.useContext(DomainContext)
    
    return (
        <>
           <ToastContainer/>
        <Switch>
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales", "/add-sale-order", "/features-option", "/approval", "/house-keeping", "/balance-only", "/details", "/pr-details", "/pending-pr-details", "/purchase-order-details", "/pending-purchase-details", "/pr-po-details", "/material-dispatch", "/sale-order-details", "/pending-sale-order", "/sale-invoice-details", "/sale-register", "/pending-performa", "/add-customer-master", "/add-supplier-master", "/add-item-master", "/cost-sheet-details", "/bom-routing-configuration", "/add-qc-plan", "/add-assortment-master", "/add-branch-master",
                    "/add-MatIssue",
                    "/material-recieve",
                    "/loose-pack",
                    "/pack-to-loose",
                    '/add-cost-sheet-details',
                    '/add-bom-routing-configuration-master',
                    '/add-series-configuration',
                    "/stock-journal",
                    "/stock-transfer",
                    '/add-role-master-configuration',
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
                    "/add-sale-type",
                    "/add-purchase-type",
                    "/projection",
                    "/sale-invoice",
                    "/sales-return",
                    "/sale-quotation",
                    "/purchase-requisation",
                    "/modify",
                    '/list',
                    "/material-movement",
                    "/feature-option/gst",
                    "/feature-option/inventory/1",
                    "/feature-option/job-work/5",
                    "/feature-option/production-and-planning/4",
                    "/feature-option/purchase/3",
                    "/feature-option/quality-check/6",
                    "/feature-option/sale/2",
                    "/series-configuration",
                    "/role-master-configuration",
                    "/bill-sundry",
                    "/user-master",
                    '/Import-Customer',
                    '/Import-Supplier',
                    '/Import-Item',
                    '/Import-Qc-Plan',
                    '/Item-Opening-Stock',
                    '/add-customer-group',
                    '/add-supplier-group',
                    '/add-item-group',
                    '/add-material-center',
                    '/add-machine',
                    '/add-mold',
                    '/add-qc-parameter',
                    '/add-sampling-type',
                    '/add-delivery-term',
                    '/add-payment-term',
                    '/add-product-type',
                    '/add-product-category',
                    '/add-employee',
                    '/add-shift',
                    '/add-bill-sundry',
                    '/add-brand',
                    '/add-unit',
                    '/add-currency',
                    '/add-process',
                    '/add-state',
                    '/add-city',
                    '/add-zone',
                    '/add-discount-type',
                    '/add-qc-type',
                    '/add-cost-center',
                    '/add-vehical-type',
                    '/add-parameter-master',
                    '/add-bank',
                    '/add-bank-branch',
                    '/add-option-text-field',
                    '/add-measuring-methord',
                    '/add-delivery-schedule',
                    '/add-bin',
                    '/add-dispatch-type',
                    '/add-port',
                    '/add-cash-center',
                    '/add-reason',
                    '/add-production-overhead',
                    '/add-business-nature',
                    '/add-clearance',
                    '/add-component',
                    '/add-production-opration',
                    '/add-sub-category',
                    '/add-worktype',
                    '/add-machine-portion',
                    '/add-user-master',
                    '/add-methord',
                    '/add-standard',
                    '/add-stand',
                    '/add-item-description',
                    '/add-item-defact-point',
                    '/add-production-time-slab',
                    '/add-complaint-nature',
                    '/add-complaint-component',
                    '/add-component-vendor',
                    '/add-component-deviation',
                    '/add-scan-format',
                    '/add-digital-signature',
                    '/add-mrp',
                    '/add-sample',
                    '/Rpt-Search',
                    '/add-sale-order',
                    "/add-projection-details",
                    "/add-PR",
                    "/add-sample",

                    "/add-Quotation",
                    "/add-Vendor-Quot-Entry",
                    "/add-Po-PR",
                    "/add-Po-QT",
                    "/add-Po",
                    "/add-PS",
                    "/add-GE",
                    "/add-MRN",
                    "/add-Dr-Note",
                    "/add-Purchase",
                    '/add-Dir-Purchase',
                    '/add-Cash-Issue',
                    "/add-Cash-Receipt",
                    "/add-Qc-Inc",
                    "/add-Qc-Out",
                    "/add-JW",
                    "/add-Rework",
                    "/add-SmpProd",
                    "/add-PR",
                    "/add-SJ",
                    "/add-ST",
                    "/add-STO",
                    "/add-PPI",
                    "/add-PDC",
                    "/add-DWP",
                    "/add-DWPP",
                    "/add-POH",
                    "/add-MatReq",

                    '/material-issue',

                    "/add-BDE",
                    "/add-Chitp",
                    "/add-Chrfp",
                    "/add-BDR",
                    "/add-TTE",
                    "/addd-TBE",
                    "/add-PC",
                    "/Tran-ANCI",
                    "/add-Diss",
                    "/add-MDT",
                    "/add-MMP",
                    "/add-MMW",
                    "/add-ReWork",
                    "/add-STP",
                    "/add-DA",
                    "/add-PI",
                    '/add-SI',
                    '/add-MMP',
                    '/add-SR',
                    "/add-mrp",
                    "/material-recieve",
                    "/add-ind",
                    "/add-loose-pack",
                    "/add-pack-to-loose",
                    "/add-material-movement",
                    '/add-material-dispatch',
                    '/add-gst-category',
                    '/tran-list',
                    '/tran-modify',
                    '/add-Vendor-Quot-Comp',
                    '/add-TBE'
                ]}>
                    <Layout>
                        {/*Dashboards*/}
                        <Route exact path='/Home' component={Home} />
                        <Route exact path='/Purchase' component={Purchase} />
                        <Route exact path='/production-and-planning' component={ProductionPlanning} />
                        <Route exact path='/sales' component={Sales} />



                        <Route exact path='/modify' component={Modify} />
                        <Route exact path='/list' component={List} />


                        {/*Configuration*/}
                        <Route exact path="/feature-option/gst" component={GSTConf_Page} />
                        <Route exact path="/feature-option/inventory/1" component={Inventory} />
                        <Route exact path="/feature-option/job-work/5" component={Inventory} />
                        <Route exact path="/feature-option/production-and-planning/4" component={Inventory} />
                        <Route exact path="/feature-option/purchase/3" component={Inventory} />
                        <Route exact path="/feature-option/quality-check/6" component={Inventory} />
                        <Route exact path="/feature-option/sale/2" component={Inventory} />

                        <Route exact path="/add-series-configuration" component={Series_Conf} />

                        <Route exact path="/add-role-master-configuration" component={Role_Master} />
                        <Route exact path="/add-gst-category" component={GST_Page} />

                        <Route exact path='/add-user-master' component={UserMaster_Page} />
                        {/*/add-sale-type*/} {/*/add-purchase-type*/}
                        <Route exact path="/bill-sundry" component={BillSundry} />
                        <Route exact path='/house-keeping' component={HouseKeeping} />
                        <Route exact path='/approval' component={Approval} />
                        <Route exact path='/add-sale-type' component={SalePurchaseType_Page} />
                        <Route exact path='/add-purchase-type' component={SalePurchaseType_Page} />


                        {/*SubMaster*/}

                      
                        <Route exact path='/add-customer-group' component={Cust_Sup_Page} />
                        <Route exact path='/add-supplier-group' component={Cust_Sup_Page} />
                        <Route exact path='/add-item-group' component={YetNotStarted} />
                        <Route exact path='/add-material-center' component={YetNotStarted} />
                        <Route exact path='/add-machine' component={YetNotStarted} />
                        <Route exact path='/add-mold' component={YetNotStarted} />
                        <Route exact path='/add-qc-parameter' component={YetNotStarted} />
                        <Route exact path='/add-sampling-type' component={YetNotStarted} />
                        <Route exact path='/add-delivery-term' component={YetNotStarted} />
                        <Route exact path='/add-payment-term' component={YetNotStarted} />
                        <Route exact path='/add-product-type' component={YetNotStarted} />
                        <Route exact path='/add-product-category' component={YetNotStarted} />
                        <Route exact path='/add-employee' component={YetNotStarted} />
                        <Route exact path='/add-shift' component={YetNotStarted} />
                        <Route exact path='/add-bill-sundry' component={YetNotStarted} />
                        <Route exact path='/add-brand' component={YetNotStarted} />
                        <Route exact path='/add-unit' component={YetNotStarted} />
                        <Route exact path='/add-currency' component={YetNotStarted} />
                        <Route exact path='/add-process' component={Process_Page} />
                        <Route exact path='/add-state' component={YetNotStarted} />
                        <Route exact path='/add-city' component={YetNotStarted} />
                        <Route exact path='/add-zone' component={YetNotStarted} />
                        <Route exact path='/add-discount-type' component={YetNotStarted} />
                        <Route exact path='/add-qc-type' component={YetNotStarted} />
                        <Route exact path='/add-cost-center' component={YetNotStarted} />
                        <Route exact path='/add-vehical-type' component={YetNotStarted} />
                        <Route exact path='/add-parameter-master' component={YetNotStarted} />
                        <Route exact path='/add-bank' component={YetNotStarted} />
                        <Route exact path='/add-bank-branch' component={YetNotStarted} />
                        <Route exact path='/add-option-text-field' component={YetNotStarted} />
                        <Route exact path='/add-measuring-methord' component={YetNotStarted} />
                        <Route exact path='/add-delivery-schedule' component={YetNotStarted} />
                        <Route exact path='/add-bin' component={YetNotStarted} />
                        <Route exact path='/add-dispatch-type' component={YetNotStarted} />
                        <Route exact path='/add-port' component={YetNotStarted} />
                        <Route exact path='/add-cash-center' component={YetNotStarted} />
                        <Route exact path='/add-reason' component={YetNotStarted} />
                        <Route exact path='/add-production-overhead' component={YetNotStarted} />
                        <Route exact path='/add-business-nature' component={YetNotStarted} />
                        <Route exact path='/add-clearance' component={YetNotStarted} />
                        <Route exact path='/add-component' component={YetNotStarted} />
                        <Route exact path='/add-production-opration' component={YetNotStarted} />
                        <Route exact path='/add-sub-category' component={YetNotStarted} />
                        <Route exact path='/add-worktype' component={YetNotStarted} />
                        <Route exact path='/add-machine-portion' component={YetNotStarted} />
                        <Route exact path='/add-methord' component={YetNotStarted} />
                        <Route exact path='/add-standard' component={YetNotStarted} />
                        <Route exact path='/add-stand' component={YetNotStarted} />
                        <Route exact path='/add-item-description' component={YetNotStarted} />
                        <Route exact path='/add-item-defact-point' component={YetNotStarted} />
                        <Route exact path='/add-production-time-slab' component={YetNotStarted} />
                        <Route exact path='/add-complaint-nature' component={YetNotStarted} />
                        <Route exact path='/add-complaint-component' component={YetNotStarted} />
                        <Route exact path='/add-component-vendor' component={YetNotStarted} />
                        <Route exact path='/add-component-deviation' component={YetNotStarted} />
                        <Route exact path='/add-scan-format' component={YetNotStarted} />
                        <Route exact path='/add-digital-signature' component={YetNotStarted} />
                       
                    
                       
                        {/*Master*/}
                        <Route exact path='/add-customer-master' component={CusSupMaster} />
                        <Route exact path='/add-supplier-master' component={AddSupplierMaster} />
                        <Route exact path='/add-item-master' component={AddItemMaster} />
                        <Route exact path='/add-cost-sheet-details' component={CostSheetDetails} />
                        <Route exact path="/add-bom-routing-configuration-master" component={BomRoutingConfig} />
                        <Route exact path='/add-branch-master' component={BranchMaster} />
                        <Route exact path='/add-Qc-Plan' component={AddQcPlan} />
                        <Route exact path='/Import-Customer' component={YetNotStarted} />
                        <Route exact path='/Import-Supplier' component={YetNotStarted} />
                        <Route exact path='/Import-Item' component={YetNotStarted} />
                        <Route exact path='/Import-Qc-Plan' component={YetNotStarted} />
                        <Route exact path='/Item-Opening-Stock' component={YetNotStarted} />


                       {/* <Route exact path='/add-assortment-master' component={AssortmentMaster} />*/}
                      
                     

                        {/*Transaction */}
                        <Route exact path='/tran-list' component={YetNotStarted} />
                        <Route exact path='/tran-modify' component={YetNotStarted} />
                        <Route exact path='/add-sale-order' component={AddSaleOrder} />
                        <Route exact path="/add-projection-details" component={Projection} />
                        <Route exact path="/add-PR" component={PurchaseRequisation} />
                        <Route exact path="/add-sample" component={YetNotStarted} />

                        <Route exact path="/add-Quotation" component={PurchaseQuotation} />
                        <Route exact path="/add-Vendor-Quot-Entry" component={YetNotStarted} />
                        <Route exact path="/add-Po-PR" component={YetNotStarted} />
                        <Route exact path="/add-Po-QT" component={YetNotStarted} />
                        <Route exact path="/add-Po" component={PurchaseOrder} />
                        <Route exact path="/add-PS" component={PurchaseSchedules} />
                        <Route exact path="/add-GE" component={GateEntry} />
                        <Route exact path="/add-MRN" component={MRN} />
                        <Route exact path="/add-Dr-Note" component={YetNotStarted} />
                        <Route exact path="/add-Purchase" component={YetNotStarted} />
                        <Route exact path='/add-Dir-Purchase' component={YetNotStarted} />
                        <Route exact path='/add-Cash-Issue' component={YetNotStarted} />
                        <Route exact path="/add-Cash-Receipt" component={YetNotStarted} />
                        <Route exact path="/add-Qc-Inc" component={YetNotStarted} />
                        <Route exact path="/add-Qc-Out" component={OQC} />
                        <Route exact path="/add-JW" component={YetNotStarted} />
                        <Route exact path="/add-Rework" component={YetNotStarted} />
                        <Route exact path="/add-SmpProd" component={YetNotStarted} />
                        <Route exact path="/add-TBE" component={YetNotStarted} />
                       
                        <Route exact path="/add-SJ" component={StockJournal} />
                        <Route exact path="/add-ST" component={StockTransfer} />
                        <Route exact path="/add-STO" component={YetNotStarted} />
                        <Route exact path="/add-PPI" component={YetNotStarted} />
                        <Route exact path="/add-PDC" component={YetNotStarted} />
                        <Route exact path="/add-DWP" component={DayWisePlanning} />
                        <Route exact path="/add-DWPP" component={YetNotStarted} />
                        <Route exact path="/add-POH" component={YetNotStarted} />
                        <Route exact path="/add-MatReq" component={YetNotStarted} />

                        <Route exact path='/add-MatIssue' component={MaterialIssue} />
                        <Route exact path='/add-Vendor-Quot-Comp' component={YetNotStarted} />

                        <Route exact path="/add-BDE" component={YetNotStarted} />
                        <Route exact path="/add-Chitp" component={YetNotStarted} />
                        <Route exact path="/add-Chrfp" component={YetNotStarted} />
                        <Route exact path="/add-BDR" component={YetNotStarted} />
                        <Route exact path="/add-TTE" component={YetNotStarted} />
                        <Route exact path="/addd-TBE" component={YetNotStarted} />
                        <Route exact path="/add-PC" component={ProductionConfiguration} />
                        <Route exact path="/Tran-ANCI" component={YetNotStarted} />
                        <Route exact path="/add-Diss" component={YetNotStarted} />
                        <Route exact path="/add-MDT" component={YetNotStarted} />
                        <Route exact path="/add-MMP" component={YetNotStarted} />
                        <Route exact path="/add-MMW" component={YetNotStarted} />
                        <Route exact path="/add-ReWork" component={YetNotStarted} />
                        <Route exact path="/add-STP" component={YetNotStarted} />
                        <Route exact path="/add-DA" component={DispatchPlan} />
                        <Route exact path="/add-PI" component={PurchaseInvoice} />
                        <Route exact path='/add-SI' component={SaleInvoice} />
                        <Route exact path='/add-MMP' component={YetNotStarted} />
                        <Route exact path='/add-SR' component={SaleReturn} />
                        <Route exact path="/add-mrp" component={MRP} />
                        <Route exact path="/material-recieve" component={MaterialRecieve} />
                        <Route exact path="/add-ind" component={ProductionIndent} />
                        <Route exact path="/add-loose-pack" component={LoosePack} />
                        <Route exact path="/add-pack-to-loose" component={PackToLoose} />
                        <Route exact path="/add-material-movement" component={MaterialMovement} />
                        <Route exact path='/add-material-dispatch' component={MarerialDispatch} />
                     

              
               
                        
                       
                       
                  
                
                    
                
                    
                       
                     
                     
                   
                       
                        {/*<Route exact path="/line" component={Line} />*/}
                        {/*<Route exact path="/purchase-quotation" component={PurchaseQuotation} />*/}
                        {/*<Route exact path="/sale-quotation" component={SaleQuotaton} />*/}
         




                        {/*REPORT*/}
                        <Route exact path='/Rpt-Search' component={YetNotStarted} />
                  


                        {/*<Route exact path='/balance-only' component={BalanceOnlyReport} />*/}
                        {/*<Route exact path='/details' component={Details} />*/}
                        {/*<Route exact path='/pending-pr-details' component={PendingPrDetails} />*/}
                        {/*<Route exact path='/pending-purchase-details' component={PendingPurchaseDetails} />*/}
                        {/*<Route exact path='/pr-details' component={prDetails} />*/}
                        {/*<Route exact path='/pr-po-details' component={PRPoDetails} />*/}
                        {/*<Route exact path='/purchase-order-details' component={PurchaseOrderDetails} />*/}

                        {/*<Route exact path='/sale-order-details' component={SaleOrderDetails} />*/}
                        {/*<Route exact path='/pending-sale-order' component={PendingSaleOrder} />*/}
                        {/*<Route exact path='/sale-invoice-details' component={SaleInvoiceDetails} />*/}
                        {/*<Route exact path='/sale-register' component={SaleRegister} />*/}
                        {/*<Route exact path='/pending-performa' component={PendingPerforma} />*/}
                    </Layout>
            </Route>

                <Route path={["/Login", "/notify"]}>
                <LayoutLog>
                    
                        <Route exact path='/notify' component={Notify}/>
                        <Route exact path='/Login' component={LogIn} />
                        {/*<Route exact path="/Login" render={(props) => <LogIn {...props} />} />*/}
                </LayoutLog>
            </Route>


            <Route path={["/register", "/"]}>
                <RegisterLayout>
                   <Route exact path="/" component={CustomerVaildate} />
                    <Route exact path='/register' component={RegisterDomain} />

                </RegisterLayout>
            </Route>
            <Route path={["/route-details"]}>
                <Secret_LayOut>
                        <Route exact path='/route-details' component={RouteDetails} />
                  
                </Secret_LayOut>
            </Route>


                {/*{defaultState == 1 ?*/}
                {/*    (<Route exact path="/" render={(props) => <LogIn {...props} />} />) : (<Route exact path="/" component={Nothing} />)}*/}
                {/*{defaultState == 2 ? (<Route exact path="/" component={RegisterDomain} />) : (<Route exact path="/" component={Nothing} />)}*/}
              {/*  <Route exact path="/" component={defaultState == 2 ? RegisterDomain : Nothing} />*/}
            

                  
        </Switch>
</>
    );

}

export default App;