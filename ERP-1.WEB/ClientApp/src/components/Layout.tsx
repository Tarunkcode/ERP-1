import * as React from 'react';
import { Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import './Layout.css';
import Footer from '../components/footer/footer.component';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import { LogOut } from './logout/logout.component';

export default (props: any) => {
    const getState = window.localStorage.getItem('state');
    const getUserName = window.sessionStorage.getItem('username');
    const getCompCode = window.sessionStorage.getItem('compCode');
    const state = JSON.parse(getState!)
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
                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#798cd4" }}>
                        <div className="cont d-flex flex-row justify-content-between mnav" style={{ marginLeft: "2em" }} >

                            <button type="button" id="sidebarCollapse" className="btn btn-info" style={{ padding: '10px' }}>
                                <i className="fas fa-align-left"></i>
                                <span></span>
                            </button>

                            {/*<span style={{ fontSize: "20px" }}>Excellent Softwares</span>*/}


                        </div>


                        <div style={{ display: "flex", marginRight: "2em" }}>
                        
                            <span style={{ background: "white", padding: "0 14px 0 14px", margin: "0 10px 0 0" }}>
                            <span style={{padding:"0", margin:"0"}}>{`UserName : ${getUserName}`}</span> <br/>
                            <span style={{padding:'0', margin:'0'}}>{`CompCode : ${getCompCode}`}</span>
                           </span>
                   
                            <LogOut />
                        </div>
                       
                    </nav>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%", maxHeight: "95vh", padding:'4em 0 0 0' }}>

                    {/* Sidebar*/}
                    <nav id="sidebar" style={{ zIndex: 2 }}>

                        <ul className="list-unstyled components">
                            {/*<div style={{ margin: "50px" }}></div>*/}
                            <div className="sidebar-header" style={{ margin: "16px 0 0 0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #798cd4", padding:"0" }}>


                                <img src={'./assets/erpLogo.png'} style={{ width: "6vw", borderRadius: "6%", margin: "0 auto" }} className="img-fluid" alt="Responsive image" />
                            </div>
                            <p><span style={{ fontWeight: "bolder", color: "black" }}>Financial Year</span> {state.Fy }</p>
                            <li className="active">
                                <a href="/home">Home</a>
                            </li>
                            <li className="dropdown" style={{ zIndex: 9999, position: 'absolute', display:'contents' }}>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Dashboard</a>
                                <ul style={{ width: '228px', position: 'initial' }} className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="homeSubmenu">
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <a href="/purchase">Purchase</a>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <a href="/production-and-planning">Production & Planning</a>
                                    </li>
                                    <li style={{ backgroundColor: '#24509e', fontWeight: 600, color: 'black' }}>
                                        <a href="/sales">Sales</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/add-sale-order">Add Order</a>
                            </li>
                            <li className="dropdown" style={{ zIndex: 25, position: 'absolute', display: 'contents' }}>
                                <a  href="#report" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Reports</a>
                                <ul style={{ width: '228px', position: 'initial' }} className="p-0 m-0 dropdown-menu dropdown-menu-right collapse list-unstyled" id="report">
                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color:'black' }} href="#submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Stock Report</a>

                                        
                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" id="submenu1sub1">
                                            <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400  }} className="nav-link p-1" href="/balance-only">
                                                    Balance Only
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400  }} className="nav-link p-1" href="/details">
                                                   Details
                                                </a>
                                            </li>
                                           
                                        </ul>

                                    </li>

     {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight: 600, color:'black'}} href="#pur-req_submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Purchase Requsition</a>


                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" id="pur-req_submenu1sub1">
                                            
                                            <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400}} className="nav-link p-1" href="/pr-details">
                                                   PR Details
                                                </a>
                                            </li>
                                             <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400 }} className="nav-link p-1" href="/pending-pr-details">
                                                   Pending PR Details
                                                </a>
                                            </li>

                                        </ul>

                                    </li>
                                   
     {/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
                                    <li className="dropdown" style={{ backgroundColor: '#7386D5' }}>
                                        <a style={{ fontWeight:600, color:'black' }} href="#pur-ord_submenu1sub1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Purchase Order</a>


                                        <ul style={{ width: '200px' }} className=" collapse list-unstyled" id="pur-ord_submenu1sub1">
                                            <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400 }} className="nav-link p-1" href="/purchase-order-details">
                                                   Purchase Order Details
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400 }} className="nav-link p-1" href="/pending-purchase-details">
                                                    Pending Purchase Details
                                                </a>
                                            </li>
                                            <li className='text-center'>
                                                <a style={{ color: 'red', fontWeight: 400 }} className="nav-link p-1" href="/pr-po-details">
                                                PR Po Details
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                </ul>
                            </li>

                       
                            <li>
                                <a href="/material-dispatch">(+)Material Dispatch</a>
                            </li>

                            <li>
                                <a href="#">Total Order</a>
                            </li>
                            <li>
                                <a href="#">Pending Order</a>
                            </li>
                            <li>
                                <a href="#">Total PI</a>
                            </li>
                            <li>
                                <a href="#">Sale</a>
                            </li>
                            <li>
                                <a href="#">Ledger us</a>
                            </li>
                            <li>
                                <a href="#">Credit Note</a>
                            </li>
                            <li>
                                <a href="#">Debit Note</a>
                            </li>
                        </ul>
                    </nav>


                    <div className="homeDiv" style={{display: "flex", justifyContent: 'center', width: "100%", maxHeight: "86vh", maxWidth: "100vw", margin: "0", padding: "0 0 14em 0", overflowY: "scroll", overflowX: "hidden" }}>

                        <Container style={{ maxHeight: "100vh", width: "100vw"}}>
                            {props.children}
                        </Container>
                    </div>

                </div>


                <Footer />
            </React.Fragment>
        </div>

    );
};
