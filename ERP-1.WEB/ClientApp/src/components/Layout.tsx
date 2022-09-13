import * as React from 'react';
import { Container, Dropdown } from 'reactstrap';
import './Layout.css';
import Footer from '../components/footer/footer.component';
import $ from 'jquery';

import { LogOut } from './logout/logout.component';
import { NavLink } from 'react-router-dom';


export default (props: any) => {
    const getUserName = window.sessionStorage.getItem('username');
    const getState = window.localStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.sessionStorage.getItem('compCode');
    var [Open, setState]: any = React.useState(false);


    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            
        });
        $('.cc').on('keydown', 'input, select', function (e) {
            if (e.key === "Enter") {
                var self = $(this), form = self.parents('form:eq(0)'), focusable, next;
                focusable = form.find('input,a,select,button,textarea').filter(':visible');
                next = focusable.eq(focusable.index(this) + 1);
                if (next.length) {
                    next.focus();
                } else {
                    form.focusout();
                }
                return false;
            }
          
        });
    

        
    });
   
    return (
        <div className="cc">
            <React.Fragment>
                <div className="wrapper">

                    {/*topbar*/}
                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#798cd4", padding: '0', margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                        <div className="cont d-flex flex-row justify-content-around mnav text-center" >

                            <button type="button" id="sidebarCollapse" className="btn btn-primary" style={{ padding: '10px', margin:'10px' }}>
                                <i className="fas fa-align-left"></i>
                                <span></span>
                            </button>
                          
                            {/*<img src={'./assets/dhpllogo.jpeg'} style={{ width: "6vw", borderRadius: "6%", margin: '2px 0 2px 60px', padding:'10px' }} className="img-fluid" alt="Responsive image" />*/}
                               

                        </div>


                        {/*<span className="companyName" style={{  textAlign: 'center' }}>Divay Hygiene Pvt. Ltd.</span>*/}

                        <div className="msall-cont">
                            <span className="accSvg" style={{display:'contents'}}>
                               
                                <span className="adminSvg"><i> <svg style={{ width: '33px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z" /></svg></i>{`${getCompCode}`}</span>
                                <span style={{ margin: '0', padding: '0', color: 'blue', marginTop: '3px', fontSize:'1rem' }}>{getUserName}</span>

                            </span>
                            
                            <LogOut />
                        </div>
                    </nav>
                </div>

                <div  style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%", maxHeight: "110vh", padding: '4em 0 0 0' }}>

                    {/* Sidebar*/}
                    <nav className="accordion active" id="sidebar"  style={{ zIndex: 2 }}>

                        <ul className="list-unstyled components">
                            {/*<div style={{ margin: "50px" }}></div>*/}
                            <div className="sidebar-header" style={{ margin: "0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #798cd4", padding: "0" }}>


                                <img src={'./assets/erpLogo.png'} style={{ width: "56vw", borderRadius: "6%", margin: "0" }} className="img-fluid erp-logo" alt="Responsive image" />
                            </div>

                            <p className="text-center" style={{ margin: '0', padding: '0' }}><span style={{ fontWeight: "bolder", color: "black", margin: '0' }}>FY :</span> {state.Fy}</p>

                            {/*DASHBOARDS*/}
                            <li className="dropdown" style={{ zIndex: 9999, position: 'initial', display: 'flow-root' }}>


                                <a href="#homeSubmenu" id="dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level0">Dashboards</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="dashboards" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="homeSubmenu">
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/home">Home</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/purchase">Purchase</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/production-and-planning">Production & Planning</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/sales">Sales</NavLink>
                                    </li>
                                </ul>


                            </li>


                            {/*SETUP*/}
                            <li className="dropdown" style={{ zIndex: 9999, position: 'initial', display: 'flow-root'  }}>


                                <a href="#setup" id="configurations" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level0">SET UP</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="configurations" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="setup">
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/features-option">Features/Option</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/house-keeping">House-Keeping</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink className="abascus" to="/approval">Approval</NavLink>
                                    </li>
                                </ul>


                            </li>

                            {/*MASTERS*/}
                            <li className="dropdown" id="masterParent" style={{ zIndex: 25, position: 'initial', display: 'flow-root'  }}>
                                <a href="#master" id="mast" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level0">Master</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="mas" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse" id="master">
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="cusMaster" href="#CustomerMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Customer Master</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#master" aria-labelledby="cusMaster" id="CustomerMaster">

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-customer-master">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-customer-master">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-customer-master">
                                                    List
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="supMaster" href="#supplierMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Supplier Master</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="supMaster" data-parent="#master" className=" collapse list-unstyled" id="supplierMaster">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-supplier-master">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/add-supplier-master">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-supplier-master">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>

                                    </li>
                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="itm" href="#itemMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Item</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="itm" data-parent="#master" className=" collapse list-unstyled" id="itemMaster">
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/add-item-master">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-item-master">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-item-master">
                                                    List
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="cstSht" href="#costSheetDetails" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Cost Sheet</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="cstSht" data-parent="#master" className=" collapse list-unstyled" id="costSheetDetails">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/cost-sheet-details">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/cost-sheet-details">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/cost-sheet-details">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>

                                    </li>


                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="rout" href="#routing" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Routing</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="rout" data-parent="#master" className=" collapse list-unstyled" id="routing">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/bom-routing-configuration">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/bom-routing-configuration">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/bom-routing-configuration">
                                                    List
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>


                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="qc" href="#QCplan" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">QC Plan</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="qc" data-parent="#master" className=" collapse list-unstyled" id="QCplan">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-qc-plan">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-qc-plan">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-qc-plan">
                                                    List
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="assortment" href="#assortmentMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Assortment Master</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="assortment" data-parent="#master" className=" collapse list-unstyled" id="assortmentMaster">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-assortment-master">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-assortment-master">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-assortment-master">
                                                    List
                                                </NavLink>
                                            </li>
                                            {/*<li className='text-center'>*/}
                                            {/*    <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/details">*/}
                                            {/*        Details*/}
                                            {/*    </NavLink>*/}
                                            {/*</li>*/}

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="brnMas" href="#branchMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Branch Master</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="brnMas" data-parent="#master" className=" collapse list-unstyled" id="branchMaster">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-branch-master">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-branch-master">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-branch-master">
                                                    List
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>
                                </ul>
                            </li>
                   




                            {/*TRANSACTION*/}
                            <li className="dropdown" style={{ zIndex: 9999, position: 'initial', display: 'flow-root' }}>


                                <a href="#transac" id="transactions" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level0">Transactions</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="transactions" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="transac">
                                    
                                 
                                    {/*<li className='text-center'>*/}
                                    {/*    <NavLink className="nav-link p-1 abascus" to="/total-order">Total Order</NavLink>*/}
                                    {/*</li>*/}
                                    {/*<li className='text-center'>*/}
                                    {/*    <NavLink className="nav-link p-1 abascus" to="/pending-order">Pending Order</NavLink>*/}
                                    {/*</li>*/}


                                    {/*---------Sale Quotation --------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="squote" href="#saleQuotation" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Sales Quotation</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="squote" id="saleQuotation">
                                            
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/Sale-Quotation">Add</NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/Sale-Quotation">
                                                    Modify 
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/Sale-Quotation">
                                                    List
                                                </NavLink>
                                            </li>
                                       
                                        </ul>

                                    </li>
                                    {/*------- Sale Order ------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="sOrder" href="#saleOrder" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Sale Order</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="sOrder" id="saleOrder">

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-sale-order">Add</NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-sale-order">
                                                  Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/add-sale-order">
                                                   List
                                                </NavLink>
                                            </li>
                                          
                                        </ul>

                                    </li>

                                    {/*------- Projection -------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="proj" href="#projection" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Projection</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="proj" id="projection">

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/projection">
                                                   Add
                                                </NavLink>
                                            </li>
                                              <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/projection">
                                                  Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/projection">
                                                  List
                                                </NavLink>
                                            </li>

                                            </ul>
                                            </li>
                                    {/*-------Sale Invoice -------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="sInvoice" href="#saleinvoice" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Sale Invoice</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="sInvoice" id="saleinvoice">

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sale-invoice">
                                                    Add
                                                </NavLink>
                                            </li>
                                             <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sale-invoice">
                                                    Modify
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sale-invoice">
                                                    List
                                                </NavLink>
                                            </li>
                                            
                                        </ul>
                                    </li>
                                    {/*------- Sales Return -------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="sReturn" href="#saleReturn" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Sales Return</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="sReturn" id="saleReturn">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sales-return">
                                                 Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sales-return">
                                                 Modify
                                                </NavLink>
                                            </li>
                                             <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sales-return">
                                                  List
                                                </NavLink>
                                            </li>

                                           

                                        </ul>
                                    </li>
                                    {/*------- Dispatch Plan -------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="dispPlan" href="#dispatchPlan" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Dispatch Plan(Advice)</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="dispPlan" id="dispatchPlan">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/dispatch-plan">
                                                  Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/dispatch-plan">
                                                   Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/dispatch-plan">
                                                   List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>


                                    {/*----------------------------------Purchase Requisation-----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="pReq" href="#purReq" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Requisation</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pReq" id="purReq">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-requisation">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-requisation">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-requisation">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*----------------------------------Purchase Quotation-----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="pQuotation" href="#purQuotation" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Quotation</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pQuotation" id="purQuotation">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-quotation">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-quotation">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-quotation">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*----------------------------------Purchase Order-----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="pOrder" href="#purOrder" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Order</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pOrder" id="purOrder">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-order">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-order">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-order">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Gate Entry-----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="gEntry" href="#gateEnt" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Gate Entry</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="gEntry" id="gateEnt">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/gate-entry">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/gate-entry">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/gate-entry">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Purchase Schedule-----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="pSchedule" href="#purSchedule" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Schedule</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pSchedule" id="purSchedule">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-schedules">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-schedules">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-schedules">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- MRN-----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="mrnn" href="#mrn" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">MRN</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="mrnn" id="mrn">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/mrn">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/mrn">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/mrn">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                  
                                    {/*---------------------------------- Purchase Invoice -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="pInvoice" href="#purInvoice" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Invoice</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pInvoice" id="purInvoice">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-invoice">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-invoice">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-invoice">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                 
                                    {/*---------------------------------- In Quality Check -----------------------------*/}
                                
                                    {/*<li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>*/}
                                    {/*    <a style={{ fontWeight: 600, color: 'black' }} id="inQualityCheck" href="#iqc" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">In Quality Check</a>*/}


                                    {/*    <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="inQualityCheck" id="iqc">*/}
                                    {/*        <li className='text-center'>*/}
                                    {/*            <NavLink className="nav-link p-1 abascus" to="/IQC">*/}
                                    {/*                Add*/}
                                    {/*            </NavLink>*/}
                                    {/*        </li>*/}

                                    {/*        <li className='text-center'>*/}
                                    {/*            <NavLink className="nav-link p-1 abascus" to="/IQC">*/}
                                    {/*                Modify*/}
                                    {/*            </NavLink>*/}
                                    {/*        </li>*/}

                                    {/*        <li className='text-center'>*/}
                                    {/*            <NavLink className="nav-link p-1 abascus" to="/IQC">*/}
                                    {/*                List*/}
                                    {/*            </NavLink>*/}
                                    {/*        </li>*/}


                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    
                                    {/*---------------------------------- Line -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="linee" href="#line" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Line</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="linee" id="line">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/line">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/line">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/line">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- O.Q.C -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="oqcc" href="#oqc" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">O.Q.C</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="oqcc" id="oqc">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/oqc">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/oqc">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/oqc">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- PPC Planning -----------------------------*/}
                                    {/*<li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>*/}
                                    {/*    <a style={{ fontWeight: 600, color: 'black' }} id="pPlanning" href="#ppcPlanning" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">PPC Planning</a>*/}


                                    {/*    <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pPlanning" id="ppcPlanning">*/}
                                    {/*        <li className='text-center'>*/}
                                    {/*            <NavLink className="nav-link p-1 abascus" to="/ppc-planning">*/}
                                    {/*                Add*/}
                                    {/*            </NavLink>*/}
                                    {/*        </li>*/}

                                    {/*        <li className='text-center'>*/}
                                    {/*            <NavLink className="nav-link p-1 abascus" to="/ppc-planning">*/}
                                    {/*                Modify*/}
                                    {/*            </NavLink>*/}
                                    {/*        </li>*/}

                                    {/*        <li className='text-center'>*/}
                                    {/*            <NavLink className="nav-link p-1 abascus" to="/ppc-planning">*/}
                                    {/*                List*/}
                                    {/*            </NavLink>*/}
                                    {/*        </li>*/}


                                    {/*    </ul>*/}
                                    {/*</li>*/}
                                    {/*---------------------------------- Production indent -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="pIndent" href="#prodIndent" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Production (Indent)</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="pIndent" id="prodIndent">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/production-indent">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/production-indent">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/production-indent">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- MRP -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="mrpp" href="#mrp" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">MRP</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="mrpp" id="mrp">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/mrp">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/mrp">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/mrp">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>

                                    {/*---------------------------------- DayWise Plan -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="dayPlan" href="#dayWisePlan" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Daywise Plan</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="dayPlan" id="dayWisePlan">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/daywise-plan">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/daywise-plan">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/daywise-plan">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Production Confirmation -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="prodConfir" href="#prodConfirmation" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Production Confirmation</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="prodConfir" id="prodConfirmation">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/production-confirmation">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/production-confirmation">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/production-confirmation">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                   
                                    {/*---------------------------------- Material Movement -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="materialMovement" href="#matMovement" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Material Movement</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="materialMovement" id="matMovement">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-movement">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-movement">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-movement">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Material Dispatch -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="materialDispatch" href="#matDispatch" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Material Dispatch</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="materialDispatch" id="matDispatch">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-dispatch">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-dispatch">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-dispatch">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Stock Transfer -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="stkTrans" href="#stockTransfer" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Stock Transfer</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="stkTrans" id="stockTransfer">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/stock-transfer">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/stock-transfer">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/stock-transfer">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>

                                    {/*---------------------------------- Stock Journal -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="stkJour" href="#stockJournal" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Stock Journal</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="stkJour" id="stockJournal">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/stock-journal">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/stock-journal">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/stock-journal">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Loose Pack -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="loosepck" href="#loosePack" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Loose Pack</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="loosepck" id="loosePack">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/loose-pack">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/loose-pack">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/loose-pack">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Pack to Loose -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="packLoose" href="#packToLoose" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Pack To Loose</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="packLoose" id="packToLoose">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/pack-to-loose">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/pack-to-loose">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/pack-to-loose">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Material Issue to party -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="materialIssue" href="#matIssue" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Material Issue to Party</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="materialIssue" id="matIssue">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-issue">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-issue">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-issue">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                    {/*---------------------------------- Material Recieve From Party -----------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="materialRecieve" href="#matRecieve" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Material Recieve From Party</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" data-parent="#transac" aria-labelledby="materialRecieve" id="matRecieve">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-recieve">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-recieve">
                                                    Modify
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/material-recieve">
                                                    List
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </li>
                                </ul>


                            </li>


                            {/*REPORTS*/}


                            <li className="dropdown" style={{ zIndex: 25, position: 'initial', display: 'flow-root' }}>
                                <a href="#report" id="reports" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level0">Reports</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="reports" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="report">
                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="purReq" href="#pur-req_submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Requsition</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" aria-labelledby="purReq" id="pur-req_submenu1sub1">

                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/pr-details">
                                                    PR Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/pending-pr-details">
                                                    Pending PR Details
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="purOrder" href="#pur-ord_submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Purchase Order</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" aria-labelledby="purOrder" id="pur-ord_submenu1sub1">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/purchase-order-details">
                                                    Purchase Order Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/pending-purchase-details">
                                                    Pending Purchase Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/pr-po-details">
                                                    PR Po Details
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>
                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="stkRep" href="#submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Stock Report</a>


                                        <ul style={{ width: '230px' }} className=" collapse list-unstyled" aria-labelledby="stkRep" id="submenu1sub1">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/balance-only">
                                                    Balance Only
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/details">
                                                    Details
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#aeb9e7' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="saleRep" href="#sale-report" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle level1">Sale Report</a>


                                        <ul style={{ width: '230px' }} aria-labelledby="saleRep" className="collapse list-unstyled" id="sale-report">
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/sale-order-details">
                                                    Sale Order Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink className="nav-link p-1 abascus" to="/pending-sale-order">
                                                    Pending Sale Order
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/sale-invoice-details">
                                                    Sale Invoice Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/sale-register">
                                                    Sale Register
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink  className="nav-link p-1 abascus" to="/pending-performa">
                                                    Pending Performa
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>
                                </ul>
                            </li>




                          



                         

                         

                            {/*<li>*/}
                            {/*    <NavLink to="/total-pi">Total PI</NavLink>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <NavLink to="/ledger-us">Ledger us</NavLink>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <NavLink to="/credit-note">Credit Note</NavLink>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <NavLink to="/debit-note">Debit Note</NavLink>*/}
                            {/*</li>*/}

                           
                        </ul>
                    </nav>

                    <div className="homeDiv" style={{ display: "flex", justifyContent: 'center', width: "100%", maxHeight: "100vh", maxWidth: "118vw", margin: "0", padding: "0 0 30em 0", overflowY: "scroll", overflowX: "hidden" }}>

                        <Container style={{ maxHeight: "100vh", width: "100vw" }}>
                            {props.children}
                        </Container>
                    </div>

                </div>


                <Footer />
            </React.Fragment>
        </div>
    );
};
