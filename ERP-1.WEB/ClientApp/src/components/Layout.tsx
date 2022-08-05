import * as React from 'react';
import { Container } from 'reactstrap';
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

    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            
        });
        //$('ul.components li.dropdown').hover(function () {
        //    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        //}, function () {
        //    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
        //});

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

                            <p className="text-center" style={{ margin: '0', padding:'0' }}><span style={{ fontWeight: "bolder", color: "black", margin: '0' }}>FY :</span> {state.Fy}</p>
                            <li className="active">
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li className="dropdown" style={{ zIndex: 9999, position: 'absolute', display: 'contents' }}>


                                <a href="#homeSubmenu" id="dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Dashboards</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="dashboard" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="homeSubmenu">
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink to="/purchase">Purchase</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink to="/production-and-planning">Production & Planning</NavLink>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <NavLink to="/sales">Sales</NavLink>
                                    </li>
                                </ul>


                            </li>
                            <li>
                                <NavLink to="/add-sale-order">Add Order</NavLink>
                            </li>
                            <li className="dropdown" style={{ zIndex: 25, position: 'absolute', display: 'contents' }}>
                                <a href="#report" id="reports" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Reports</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="reports" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="report">
                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="purReq" href="#pur-req_submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Purchase Requsition</a>


                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" aria-labelledby="purReq" id="pur-req_submenu1sub1">

                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/pr-details">
                                                    PR Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/pending-pr-details">
                                                    Pending PR Details
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="purOrder" href="#pur-ord_submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Purchase Order</a>


                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" aria-labelledby="purOrder"  id="pur-ord_submenu1sub1">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none'}} className="nav-link p-1" to="/purchase-order-details">
                                                    Purchase Order Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/pending-purchase-details">
                                                    Pending Purchase Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/pr-po-details">
                                                    PR Po Details
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>
                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="stkRep" href="#submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Stock Report</a>


                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" aria-labelledby="stkRep" id="submenu1sub1">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border:'.5px solid #7386D5' }} className="nav-link p-1" to="/balance-only">
                                                    Balance Only
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/details">
                                                    Details
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="saleRep" href="#sale-report" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Sale Report</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="saleRep"  className="collapse list-unstyled" id="sale-report">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/sale-order-details">
                                                    Sale Order Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/pending-sale-order">
                                                    Pending Sale Order
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/sale-invoice-details">
                                                    Sale Invoice Details
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/sale-register">
                                                    Sale Register
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/pending-performa">
                                                    Pending Performa
                                                </NavLink>
                                            </li>

                                        </ul>

                                    </li>
                                </ul>
                            </li>


                            <li>
                                <NavLink to="/material-dispatch">Mat. Dispatch(+)</NavLink>
                            </li>

                            <li className="dropdown" style={{ zIndex: 25, position: 'absolute', display: 'contents' }}>
                                <a href="#master" id="mast" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Master</a>
                                <ul style={{ width: '101%', position: 'initial' }} aria-labelledby="mas" data-parent="#sidebar" className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="master">
                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="cusMaster" href="#CustomerMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Customer Master</a>


                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" aria-labelledby="cusMaster" id="CustomerMaster">

                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-customer-master">
                                                    Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-customer-master">
                                                    Modifier
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-customer-master">
                                                    List
                                                </NavLink>
                                            </li>
                                           
                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="supMaster" href="#supplierMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Supplier Master</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="supMaster" className=" collapse list-unstyled" id="supplierMaster">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/add-supplier-master">
                                                  Add
                                                </NavLink>
                                            </li>
                                             <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/add-supplier-master">
                                                  Modifier
                                                </NavLink>
                                            </li>
                                             <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5', borderTop: 'none' }} className="nav-link p-1" to="/add-supplier-master">
                                                  List
                                                </NavLink>
                                            </li>
                                            

                                        </ul>

                                    </li>
                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="itm" href="#itemMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Item</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="itm" className=" collapse list-unstyled" id="itemMaster">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-item-master">
                                                    Add
                                                </NavLink>
                                            </li>
                                           <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-item-master">
                                                    Modifier
                                                </NavLink>
                                            </li>
                                           <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-item-master">
                                                    List
                                                </NavLink>
                                            </li>
                                           
                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="cstSht" href="#costSheetDetails" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Cost Sheet</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="cstSht"  className=" collapse list-unstyled" id="costSheetDetails">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/cost-sheet-details">
                                                   Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/cost-sheet-details">
                                                   Modifier
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/cost-sheet-details">
                                                   List
                                                </NavLink>
                                            </li>
                                           

                                        </ul>

                                    </li>


                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="rout" href="#routing" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Routing</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="rout" className=" collapse list-unstyled" id="routing">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/bom-routing-configuration">
                                                   Add
                                                </NavLink>
                                            </li>
                                             <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/bom-routing-configuration">
                                                   Modifier
                                                </NavLink>
                                            </li>
                                             <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/bom-routing-configuration">
                                                   List
                                                </NavLink>
                                            </li>
                                           
                                        </ul>

                                    </li>


                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="qc" href="#QCplan" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">QC Plan</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="qc" className=" collapse list-unstyled" id="QCplan">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-qc-plan">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-qc-plan">
                                                    Modifier
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-qc-plan">
                                                    List
                                                </NavLink>
                                            </li>
                                           
                                        </ul>

                                    </li>

                                    {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="assortment" href="#assortmentMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Assortment Master</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="assortment" className=" collapse list-unstyled" id="assortmentMaster">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-assortment-master">
                                                    Add
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-assortment-master">
                                                    Modifier
                                                </NavLink>
                                            </li>

                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-assortment-master">
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

                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color: 'black' }} id="brnMas" href="#branchMaster" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Branch Master</a>


                                        <ul style={{ width: '200px' }} aria-labelledby="brnMas"  className=" collapse list-unstyled" id="branchMaster">
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-branch-master">
                                                  Add
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-branch-master">
                                                  Modifier
                                                </NavLink>
                                            </li>
                                            <li className='text-center'>
                                                <NavLink style={{ color: '#6d7fcc', fontWeight: 400, backgroundColor: "whitesmoke", border: '.5px solid #7386D5' }} className="nav-link p-1" to="/add-branch-master">
                                                  List
                                                </NavLink>
                                            </li>
                                           
                                        </ul>

                                    </li>
                                </ul>
                            </li>

                            <li>
                                <NavLink to="/total-order">Total Order</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pending-order">Pending Order</NavLink>
                            </li>
                            <li>
                                <NavLink to="/total-pi">Total PI</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sale">Sale</NavLink>
                            </li>
                            <li>
                                <NavLink to="/ledger-us">Ledger us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/credit-note">Credit Note</NavLink>
                            </li>
                            <li>
                                <NavLink to="/debit-note">Debit Note</NavLink>
                            </li>
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
