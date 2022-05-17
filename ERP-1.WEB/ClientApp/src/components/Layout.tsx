import * as React from 'react';
import { Container } from 'reactstrap';
import './Layout.css';
import Footer from '../components/footer/footer.component';
import $ from 'jquery';

import { LogOut } from './logout/logout.component';
export default (props: any) => {
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
                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: "#798cd4" }}>
                        <div className="cont d-flex flex-row justify-content-between mnav" style={{ marginLeft: "2em" }} >

                            <button type="button" id="sidebarCollapse" className="btn btn-info" style={{ padding: '10px' }}>
                                <i className="fas fa-align-left"></i>
                                <span></span>
                            </button>

                            {/*<span style={{ fontSize: "20px" }}>Excellent Softwares</span>*/}


                        </div>

                        <div style={{ border: "1px solid green", display: "flex", marginRight: "2em" }}>

                            <LogOut />
                        </div>

                    </nav>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "baseline", width: "100%", minHeight: "90vh" }}>

                    {/* Sidebar*/}
                    <nav id="sidebar">

                        <ul className="list-unstyled components">
                            {/*<div style={{ margin: "50px" }}></div>*/}
                            <div className="sidebar-header" style={{ margin: "49px 0 0 0", display: "flex", flexDirection: "column" }}>

                                <h3>Excellent Erp</h3>
                                <img src={'./assets/erpLogo.png'} style={{ width: "30%", borderRadius: "50%" }} className="img-fluid" alt="Responsive image" />
                            </div>
                            <p>ERP 2022</p>
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
                                <a href="#">Add Order</a>
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


                    <div className="homeDiv" style={{ display: "flex", justifyContent: 'center', width: "100%", maxHeight: "86vh", maxWidth: "100vw", margin: "0", padding: "0px 0 15em 0", overflowY: "scroll", overflowX: "hidden" }}>

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
