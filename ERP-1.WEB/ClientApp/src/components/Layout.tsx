import * as React from 'react';
import { Container } from 'reactstrap';
import './Layout.css';
import Footer from '../components/footer/footer.component';
import $ from 'jquery';

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

    });

    return (
        <div className="cc">
            <React.Fragment>
                <div className="wrapper">

                    {/*topbar*/}
                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#798cd4", padding:'10px 0' }}>
                        <div className="cont d-flex flex-row justify-content-between mnav" style={{ marginLeft: "2em" }} >

                            <button type="button" id="sidebarCollapse" className="btn btn-info" style={{ padding: '10px' }}>
                                <i className="fas fa-align-left"></i>
                                <span></span>
                            </button>

                            {/*<span style={{ fontSize: "20px" }}>Excellent Softwares</span>*/}


                        </div>


                        <div className="mainNav-End">
                        
                            <span style={{ background: "white", padding: "0 14px 0 14px", margin: "0 10px 0 0" }}>
                            <span style={{padding:"0", margin:"0"}}>{`UserName : ${getUserName}`}</span> <br/>
                            <span style={{padding:'0', margin:'0'}}>{`CompCode : ${getCompCode}`}</span>
                           </span>
                   
                            <LogOut />
                        </div>
                       
                    </nav>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%", height: "114vh", padding:'4em 0 0 0' }}>

                    {/* Sidebar*/}
                    <nav id="sidebar">

                        <ul className="list-unstyled components">
                            {/*<div style={{ margin: "50px" }}></div>*/}
                            <div className="sidebar-header" style={{ margin: "16px 0 0 0", display: "flex", flexDirection: "column", backgroundColor: "white", border: "6px solid #798cd4", padding:"0" }}>


                                <img src={'./assets/erpLogo.png'} style={{ width: "10vw", borderRadius: "6%", margin: "0 auto" }} className="img-fluid" alt="Responsive image" />
                            </div>
                            <p><span style={{ fontWeight: "bolder", color: "black" }}>Financial Year</span> {state.Fy }</p>
                            <li className="active">
                                <a href="/home">Home</a>
                            </li>
                            <li>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Dashboard</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="/purchase">Purchase</a>
                                    </li>
                                    <li>
                                        <a href="/production-and-planning">Production & Planning</a>
                                    </li>
                                    <li>
                                        <a href="/sales">Sales</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/add-sale-order">Add Order</a>
                            </li>

                            <li>
                                <a href="/total-order">Total Order</a>
                            </li>
                            <li>
                                <a href="/pending-order">Pending Order</a>
                            </li>
                            <li>
                                <a href="/total-pi">Total PI</a>
                            </li>
                            <li>
                                <a href="/sale">Sale</a>
                            </li>
                            <li>
                                <a href="/ledger-us">Ledger us</a>
                            </li>
                            <li>
                                <a href="/credit-note">Credit Note</a>
                            </li>
                            <li>
                                <a href="/debit-note">Debit Note</a>
                            </li>
                        </ul>
                    </nav>


                    <div className="homeDiv" style={{ display: "flex", justifyContent: 'center', width: "100%", maxHeight: "100vh", maxWidth: "118vw", margin: "0", padding: "0 0 14em 0", overflowY: "scroll", overflowX: "hidden" }}>

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
