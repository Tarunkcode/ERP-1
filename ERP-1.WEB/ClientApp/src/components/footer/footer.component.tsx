﻿import * as React from 'react';
import './footer.styles.css';

import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';
import ReactDom from 'react-dom';


export default function Footer() {

    return (


        <div className="text-center p-0 footer" style={{ backgroundColor: "#798cd4", margin:"2px 0 0 0" }}>
                © 2022 Copyright:
                <a className="text-dark" href="https:http://www.excellentsoftwares.com/">ExcellentSoftwares.com</a>
        </div>

    );


}
