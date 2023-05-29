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
import saletype$purtype from "./components/SetUp/saleType-purchaseType.component"
import GSTCategory_Page from "./Pages/SetUp/GSTCategory/gst-category.page";
import Series_Conf from './components/SetUp/series_config.component';
import BillSundry from './components/SetUp/bill-sundry.component';
import role from './components/SetUp/role-master.component';
import UserMaster from './Pages/SetUp/UserMaster/user-master.page';
import SalePurchaseType_Page from './Pages/SetUp/SalePurchaseType/sale-purchase-type.page';
import GSTConf_Page from './Pages/SetUp/Featutes-Option/gst-conf.page';


//----------------------------------- Sub Master -----------------------------------------------------------------------------------------------
import Cust_Sup_Page from './Pages/Sub-Master/customer-supplier-group';
import Process_Page from './Pages/Sub-Master/process.page';
import Currency_Page from './Pages/Sub-Master/currency.page';
import PaymentTerm_Page from './Pages/Sub-Master/payment-term.page';
import ItemGroup_Page from './Pages/Sub-Master/item-group.page';

import ProductType_Page from './Pages/Sub-Master/product-type.page';
import SubUnit_Page from './Pages/Sub-Master/sub-unit.page';
import SubMaster from './components/SubMasters/submaster.component';
import Process from './components/SubMasters/process-submaster.component';
import MatCentre from '../src/Pages/Sub-Master/matrial-center.page';
import QcParam_SampleType from '../src/Pages/Sub-Master/qc-parameter.component';

//---------------------------------Master Imports---------------------------------------------------------------------------------------------------
import AddQcPlanComponent from './components/Masters/qc-plan.component';
import AssortmentMaster from './Pages/Master/AssortmentMaster/assortment-master.component';
import BOM from './components/Masters/bom_routing.component';
//import RouteDetails from './Pages/Master/BomRoutingConfiguration/RouteDetails.component';
import BranchMasterComponent from './components/Masters/branch-master.component';
import CostSheetDetails from './Pages/Master/CostSheet/cost-sheet-details.component';

import CusSupMaster from './components/Masters/customer.component';
import AddItemMaster from './Pages/Master/ItemMaster/add-item-master.component';
import AddSupplierMaster from './components/Masters/supplier.component';


//---------------------------------Transactions Imports---------------------------------------------------------------------------------------------------
import AddSaleOrder from './Pages/Transaction/Sales/add-sale-order.component';
import Tran_Modify from './components/Modify/tran_modify.component';
import Tran_List from './components/List/tran_list.component';
import Qc_Jobwork from './Pages/Transaction/Quality/qc-jobwork.component';
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
import Production_Overhead from './Pages/Transaction/Planning/production-overhead.page';
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
import Qc_Incoming from './Pages/Transaction/Quality/qc-incoming-material.component';
import Mrp_Production_Indent from './Pages/Transaction/Planning/mrp-production-indent.component';
import Daily_Plan_Print from './Pages/Transaction/Planning/daily-plan-print.page';
import Plan_Date_Change from './Pages/Transaction/Planning/plan-date-change.page';
import MarerialDispatch from './Pages/Transaction/Material-Movement/material-dispatch.component';
import Material_Request from './Pages/Transaction/Purchase/material-request.page';
import New_Consume_item from './Pages/Transaction/Planning/new-consume-item.page';
import Sample_Trail_Production from './Pages/Transaction/Planning/sample-or-trail-production.page';
import Dissemble_Page from './Pages/Transaction/Planning/dissemble.page';
import Challan_Receipt_Party from './Pages/Transaction/Challan/challan-receipt-from-party.page';
import Challan_Issue_Party from './Pages/Transaction/Challan/challan-issue-to-party.page';
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
import Modify from './components/Modify/modify.component';
import List from './components/List/list.component';
import YetNotStarted from './Pages/YetNotStarted'

import Notify from '../src/components/Notifications/index';


import ProductionOverHead_Page from './Pages/Sub-Master/production-overhead.page';
import IMaster from './components/Masters/item.component';
import GridA from './Pages/ag-grid';
import SuccessFullyModify from './Pages/successfully_modify';
import State_Page from './Pages/Sub-Master/state-page';
import City_Page from './Pages/Sub-Master/city-page';
import Zone_Page from './Pages/Sub-Master/zone-page';
import Direct_Purchase from './Pages/Transaction/Purchase/direct-purchase-invoice.component';
import PurcahseInvoice from './Pages/Transaction/Purchase/purchase-invoice.component';
import Stock_Transfer_Order from './Pages/Transaction/Material-Movement/stock-transfer-order.component';
import From_Prodiction_Indent from './Pages/Transaction/Planning/production-plan.component';
import Sampling from './Pages/Transaction/Planning/sample_production.component';
import Vendor_Quotation_Entry from './Pages/Transaction/Purchase/vendor-quotation-entry.component';
import Vendor_Quotation_Approval from './Pages/Transaction/Purchase/vendor-quotation-approval.component';
import Dr_Note from './Pages/Transaction/Purchase/dr-note.component';
import Cash_Issue_Receipt from './Pages/Transaction/Purchase/cash-Issue-receipt.component';

import Test from './components/test';
import ConfigProvider from './AppContext/ConfigContext';



function App() {

    //const setDefault : any = React.useRef(0);

    //var [domain, setDomain]: any = React.useState('');

    //const currentDomain = window.location.hostname;

    //console.log('current domain',currentDomain)


    useEffect(() => {
        document.body.style.zoom = "82%";
        //var w = window.innerWidth; 
        //console.log('w', w)
        //if (w > 0 && w <= 1268) document.body.style.zoom = "72%";
        //if (w > 1218 && w <= 1268) document.body.style.zoom = "82%";
        //  else if (w > 1268 && w <= 1318) document.body.style.zoom = "82%"; 
        //  else if (w > 1318 && w <= 1368) document.body.style.zoom = "87%";
        //  else if (w > 1368 && w <= 1418) document.body.style.zoom = "92%";
        //  else if (w > 1418 && w <= 1468) document.body.style.zoom = "97%";
        //  else if (w > 1468 && w <= 1518) document.body.style.zoom = "105%";
        //  else document.body.style.zoom = "120%";


    }, [window.innerWidth])



    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Switch>
                <Route path={["/Home", "/Purchase", "/production-and-planning", "/sales",
                    "/add-sale-order", "/material-dispatch", "/sale-order-details", "/pending-sale-order", "/sale-invoice-details", "/sale-register", "/pending-performa", "/add-customer-master", "/add-supplier-master", "/add-item-master", "/cost-sheet-details", "/bom-routing-configuration", "/add-qc-plan", "/add-assortment-master", "/add-branch-master",
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
                    "/add-purchase-order",
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
                    "/modify/:master",
                    '/list/:master',
                    "/material-movement",
                    "/feature-option/gst",
                    "/feature-option/inventory/1",
                    "/feature-option/job-work/5",
                    "/feature-option/production-and-planning/2",
                    "/feature-option/purchase/3",
                    "/feature-option/quality-check/4",
                    "/feature-option/sale/6",
                    "/series-configuration",
                    '/add-user-master',
                    "/role-master-configuration",
                    "/bill-sundry",
                    "/user-master",
                    '/Import-Customer',
                    '/Import-Supplier',
                    '/Import-Item',
                    '/Import-Qc-Plan',
                    '/Item-Opening-Stock',


                    '/add-customer-group/1',
                    '/add-supplier-group/2',
                    '/add-item-group/3',
                    '/add-material-center/4',
                    '/add-machine/5',
                    '/add-mold/6',
                    '/add-qc-parameter/7',
                    '/add-sampling-type/8',
                    '/add-delivery-term/9',
                    '/add-payment-term/10',
                    '/add-product-type/11',
                    '/add-product-category/12',
                    '/add-employee/13',
                    '/add-shift/14',
                    '/add-bill-sundry/15',
                    '/add-brand/16',
                    '/add-unit/17',
                    '/add-currency/18',
                    '/add-process/19',
                    '/add-state/20',
                    '/add-city/21',
                    '/add-zone/22',
                    '/add-discount-type/23',
                    '/add-qc-type/24',
                    '/add-cost-center/25',
                    '/add-vehical-type/26',
                    '/add-parameter-master/27',
                    '/add-bank/28',
                    '/add-bank-branch/29',
                    '/add-option-text-field/30',
                    '/add-measuring-methord/31',
                    '/add-delivery-schedule/32',
                    '/add-bin/33',
                    '/add-dispatch-type/34',
                    '/add-port/35',
                    '/add-cash-center/36',
                    '/add-reason/37',
                    '/add-production-overhead/38',
                    '/add-business-nature/39',
                    '/add-clearance/40',
                    '/add-component/41',
                    '/add-production-opration/42',
                    '/add-sub-category/43',
                    '/add-worktype/44',
                    '/add-machine-portion/45',
                    '/add-methord/46',
                    '/add-standard/47',
                    '/add-stand/48',
                    '/add-item-description/49',
                    '/add-item-defact-point/50',
                    '/add-production-time-slab/51',
                    '/add-complaint-nature/52',
                    '/add-complaint-component/53',
                    '/add-component-vendor/54',
                    '/add-component-deviation/55',
                    '/add-scan-format/56',
                    '/add-digital-signature/57',
                    '/add-country/58',



                    '/add-mrp',
                    '/add-mrp-prod-ind',
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
                    "/material-recieve",
                    "/add-prod-ind",
                    "/add-loose-pack",
                    "/add-pack-to-loose",
                    "/add-material-movement",
                    '/add-material-dispatch',
                    '/add-gst-category',
                    '/tran-list/:master',
                    '/tran-modify/:master',
                    '/add-Vendor-Quot-Comp',
                    '/add-TBE',
                    '/successfully-modify',
                    '/successfully-quit'

                ]}>
                    <Layout>
                     
                        <Route exact path='/successfully-modify' component={SuccessFullyModify} />
                        <Route exact path='/successfully-quit' component={SuccessFullyModify} />
                        {/*Dashboards*/}
                        <Route exact path='/Home' component={Home} />
                        <Route exact path='/Purchase' component={Purchase} />
                        <Route exact path='/production-and-planning' component={ProductionPlanning} />
                        <Route exact path='/sales' component={Sales} />



                        <Route exact path='/modify/:master' component={Modify} />
                        <Route exact path='/list/:master' component={List} />


                       

                        <Route exact path="/add-series-configuration" component={Series_Conf} />

                        <Route exact path="/add-role-master-configuration" component={role} />
                        <Route exact path="/add-gst-category" component={GSTCategory_Page} />

                        <Route exact path='/add-user-master' component={UserMaster} />
                        {/*/add-sale-type*/} {/*/add-purchase-type*/}
                        <Route exact path="/bill-sundry" component={BillSundry} />
                        <Route exact path='/house-keeping' component={HouseKeeping} />
                        <Route exact path='/approval' component={Approval} />
                        <Route exact path='/add-sale-type' component={saletype$purtype} />
                        <Route exact path='/add-purchase-type' component={saletype$purtype} />


                        {/*SubMaster*/}


                        <Route exact path='/add-customer-group/1' component={SubMaster} />
                        <Route exact path='/add-supplier-group/2' component={SubMaster} />
                        <Route exact path='/add-item-group/3' component={SubMaster} />
                        <Route exact path='/add-material-center/4' component={SubMaster} />
                        <Route exact path='/add-machine/5' component={YetNotStarted} />
                        <Route exact path='/add-mold/6' component={YetNotStarted} />
                        <Route exact path='/add-qc-parameter/7' component={SubMaster} />
                        <Route exact path='/add-sampling-type/8' component={SubMaster} />
                        <Route exact path='/add-delivery-term/9' component={SubMaster} />
                        <Route exact path='/add-payment-term/10' component={SubMaster} />
                        <Route exact path='/add-product-type/11' component={SubMaster} />
                        <Route exact path='/add-product-category/12' component={SubMaster} />
                        <Route exact path='/add-employee/13' component={YetNotStarted} />
                        <Route exact path='/add-shift/14' component={YetNotStarted} />
                        <Route exact path='/add-bill-sundry/15' component={BillSundry} />
                        <Route exact path='/add-brand/16' component={SubMaster} />
                        <Route exact path='/add-unit/17' component={SubMaster} />
                        <Route exact path='/add-currency/18' component={SubMaster} />
                        <Route exact path='/add-process/19' component={Process} />
                        <Route exact path='/add-state/20' component={SubMaster} />
                        <Route exact path='/add-city/21' component={SubMaster} />
                        <Route exact path='/add-zone/22' component={SubMaster} />
                        <Route exact path='/add-discount-type/23' component={YetNotStarted} />
                        <Route exact path='/add-qc-type/24' component={SubMaster} />
                        <Route exact path='/add-cost-center/25' component={YetNotStarted} />
                        <Route exact path='/add-vehical-type/26' component={YetNotStarted} />
                        <Route exact path='/add-parameter-master/27' component={YetNotStarted} />
                        <Route exact path='/add-bank/28' component={SubMaster} />
                        <Route exact path='/add-bank-branch/29' component={SubMaster} />
                        <Route exact path='/add-option-text-field/30' component={YetNotStarted} />
                        <Route exact path='/add-measuring-methord/31' component={SubMaster} />
                        <Route exact path='/add-delivery-schedule/32' component={YetNotStarted} />
                        <Route exact path='/add-bin/33' component={YetNotStarted} />
                        <Route exact path='/add-dispatch-type/34' component={YetNotStarted} />
                        <Route exact path='/add-port/35' component={YetNotStarted} />
                        <Route exact path='/add-cash-center/36' component={YetNotStarted} />
                        <Route exact path='/add-reason/37' component={YetNotStarted} />
                        <Route exact path='/add-production-overhead/38' component={SubMaster} />
                        <Route exact path='/add-business-nature/39' component={YetNotStarted} />
                        <Route exact path='/add-clearance/40' component={SubMaster} />
                        <Route exact path='/add-component/41' component={YetNotStarted} />
                        <Route exact path='/add-production-opration/42' component={SubMaster} />
                        <Route exact path='/add-sub-category/43' component={SubMaster} />
                        <Route exact path='/add-worktype/44' component={YetNotStarted} />
                        <Route exact path='/add-machine-portion/45' component={YetNotStarted} />
                        <Route exact path='/add-methord/46' component={YetNotStarted} />
                        <Route exact path='/add-standard/47' component={YetNotStarted} />
                        <Route exact path='/add-stand/48' component={YetNotStarted} />
                        <Route exact path='/add-item-description/49' component={YetNotStarted} />
                        <Route exact path='/add-item-defact-point/50' component={YetNotStarted} />
                        <Route exact path='/add-production-time-slab/51' component={YetNotStarted} />
                        <Route exact path='/add-complaint-nature/52' component={YetNotStarted} />
                        <Route exact path='/add-complaint-component/53' component={YetNotStarted} />
                        <Route exact path='/add-component-vendor/54' component={YetNotStarted} />
                        <Route exact path='/add-component-deviation/55' component={YetNotStarted} />
                        <Route exact path='/add-scan-format/56' component={YetNotStarted} />
                        <Route exact path='/add-digital-signature/57' component={YetNotStarted} />
                        <Route exact path='/add-country/58' component={SubMaster} />



                        {/*Master*/}
                        <Route exact path='/add-customer-master' component={CusSupMaster} />
                        <Route exact path='/add-supplier-master' component={CusSupMaster} />
                        <Route exact path='/add-item-master' component={IMaster} />
                        <Route exact path='/add-cost-sheet-details' component={CostSheetDetails} />
                     
                        <Route exact path='/add-branch-master' component={BranchMasterComponent} />
                        <Route exact path='/add-Qc-Plan' component={AddQcPlanComponent} />
                        <Route exact path='/Import-Customer' component={YetNotStarted} />
                        <Route exact path='/Import-Supplier' component={YetNotStarted} />
                        <Route exact path='/Import-Item' component={YetNotStarted} />
                        <Route exact path='/Import-Qc-Plan' component={YetNotStarted} />
                        <Route exact path='/Item-Opening-Stock' component={YetNotStarted} />


                        {/* <Route exact path='/add-assortment-master' component={AssortmentMaster} />*/}



                        <Route exact path='/Tran-list/:master' component={Tran_List} />
                        <Route exact path='/Tran-modify/:master' component={Tran_Modify} />
                        <Route exact path='/add-sale-order' component={AddSaleOrder} />
                        <Route exact path="/add-projection-details" component={Projection} />
                        <Route exact path="/add-PR" component={PurchaseRequisation} />
                        <Route exact path="/add-sample" component={Sampling} />
                        <Route exact path="/add-purchase-order" component={PurchaseOrder} />

                        <Route exact path="/add-Quotation" component={PurchaseQuotation} />
                        <Route exact path="/add-Vendor-Quot-Entry" component={Vendor_Quotation_Entry} />
                        <Route exact path="/add-Po-PR" component={PurchaseOrder} />
                        <Route exact path="/add-Po-QT" component={PurchaseOrder} />
                        {/*// ------by me------*/}
                        <Route exact path="/add-Po" component={PurchaseOrder} />
                        {/*<Route exact path="/add-Fq" component={PurchaseOrder} />*/}
                        {/*------------------------------------------------/*/}
                        <Route exact path="/add-PS" component={PurchaseSchedules} />
                        <Route exact path="/add-GE" component={GateEntry} />
                        <Route exact path="/add-MRN" component={MRN} />
                        <Route exact path="/add-Dr-Note" component={Dr_Note} />
                        <Route exact path="/add-Purchase" component={PurcahseInvoice} />
                        <Route exact path='/add-Dir-Purchase' component={Direct_Purchase} />
                        <Route exact path='/add-Cash-Issue' component={Cash_Issue_Receipt} />
                        <Route exact path="/add-Cash-Receipt" component={Cash_Issue_Receipt} />
                        <Route exact path="/add-Qc-Inc" component={Qc_Incoming} />
                        <Route exact path="/add-Qc-Out" component={OQC} />
                        <Route exact path="/add-JW" component={Qc_Jobwork} />

                        <Route exact path="/add-Rework" component={OQC} />
                        <Route exact path="/add-SmpProd" component={OQC} />
                        <Route exact path="/add-TBE" component={YetNotStarted} />

                        <Route exact path="/add-SJ" component={StockJournal} />
                        <Route exact path="/add-ST" component={StockTransfer} />
                        <Route exact path="/add-STO" component={Stock_Transfer_Order} />
                        <Route exact path="/add-PPI" component={From_Prodiction_Indent} />
                        <Route exact path="/add-PDC" component={Plan_Date_Change} />
                        <Route exact path="/add-DWP" component={DayWisePlanning} />
                        <Route exact path="/add-DWPP" component={Daily_Plan_Print} />
                        <Route exact path="/add-POH" component={Production_Overhead} />
                        <Route exact path="/add-MatReq" component={Material_Request} />

                        <Route exact path='/add-MatIssue' component={MaterialIssue} />
                        <Route exact path='/add-Vendor-Quot-Comp' component={Vendor_Quotation_Approval} />

                        <Route exact path="/add-BDE" component={YetNotStarted} />
                        <Route exact path="/add-Chitp" component={Challan_Issue_Party} />
                        <Route exact path="/add-Chrfp" component={Challan_Receipt_Party} />
                        <Route exact path="/add-BDR" component={YetNotStarted} />
                        <Route exact path="/add-TTE" component={YetNotStarted} />
                        <Route exact path="/addd-TBE" component={YetNotStarted} />
                        <Route exact path="/add-PC" component={ProductionConfiguration} />
                        <Route exact path="/Tran-ANCI" component={New_Consume_item} />
                        <Route exact path="/add-Diss" component={Dissemble_Page} />
                        <Route exact path="/add-MDT" component={YetNotStarted} />
                        <Route exact path="/add-MMP" component={YetNotStarted} />
                        <Route exact path="/add-MMW" component={YetNotStarted} />
                        <Route exact path="/add-ReWork" component={YetNotStarted} />
                        <Route exact path="/add-STP" component={Sample_Trail_Production} />
                        <Route exact path="/add-DA" component={DispatchPlan} />
                        <Route exact path="/add-PI" component={YetNotStarted} />
                        <Route exact path='/add-SI' component={SaleInvoice} />
                        <Route exact path='/add-MMP' component={YetNotStarted} />
                        <Route exact path='/add-SR' component={SaleReturn} />
                        <Route exact path="/add-mrp" component={MRP} />
                        <Route exact path='/add-mrp-prod-ind' component={Mrp_Production_Indent} />
                        <Route exact path="/material-recieve" component={MaterialRecieve} />
                        <Route exact path="/add-prod-ind" component={ProductionIndent} />
                        <Route exact path="/add-loose-pack" component={LoosePack} />
                        <Route exact path="/add-pack-to-loose" component={PackToLoose} />
                        <Route exact path="/add-material-movement" component={MaterialMovement} />
                        <Route exact path='/add-material-dispatch' component={MarerialDispatch} />












                        <ConfigProvider>
                            {/*Configuration*/}
                            <Route exact path="/feature-option/gst" component={Inventory} />
                            <Route exact path="/feature-option/inventory/1" component={Inventory} />
                            <Route exact path="/feature-option/job-work/5" component={Inventory} />
                            <Route exact path="/feature-option/production-and-planning/2" component={Inventory} />
                            <Route exact path="/feature-option/purchase/3" component={Inventory} />
                            <Route exact path="/feature-option/quality-check/4" component={Inventory} />
                            <Route exact path="/feature-option/sale/6" component={Inventory} />

                            {/*Master*/}
                            <Route exact path="/add-bom-routing-configuration-master" component={BOM} />
                        </ConfigProvider>









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

                <Route path={["/Login", '/sign-in', "/notify", "/route-details"]}>
                    <LayoutLog>

                        <Route exact path='/notify' component={Notify} />
                        <Route exact path='/Login' component={LogIn} />
                        <Route exact path='/sign-in' component={LogIn} />
                        {/*<Route exact path="/Login" render={(props) => <LogIn {...props} />} />*/}
                    </LayoutLog>
                </Route>


                <Route path={["/register", "/", '/GridA', '"/test']}>
                    <RegisterLayout>
                        <Route exact path="/" component={CustomerVaildate} />
                        <Route exact path='/register' component={RegisterDomain} />
                        <Route exact path='/GridA' component={GridA} />
                        <Route exact path="/test" component={Test} />

                    </RegisterLayout>
                </Route>
                {/*<Route path={["/route-details"]}>*/}
                {/*    <Secret_LayOut>*/}
                {/*            <Route exact path='/route-details' component={RouteDetails} />*/}

                {/*    </Secret_LayOut>*/}
                {/*</Route>*/}


                {/*{defaultState == 1 ?*/}
                {/*    (<Route exact path="/" render={(props) => <LogIn {...props} />} />) : (<Route exact path="/" component={Nothing} />)}*/}
                {/*{defaultState == 2 ? (<Route exact path="/" component={RegisterDomain} />) : (<Route exact path="/" component={Nothing} />)}*/}
                {/*  <Route exact path="/" component={defaultState == 2 ? RegisterDomain : Nothing} />*/}



            </Switch>
        </>
    );

}

export default App;