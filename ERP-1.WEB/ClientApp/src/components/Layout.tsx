import * as React from 'react';
import { Container, Dropdown } from 'reactstrap';
import './Layout.css';
import Footer from '../components/footer/footer.component';
import $ from 'jquery';

import { LogOut } from './logout/logout.component';
import Sidebar from './SideNav/sidebar.component';
import registerServiceWorker from '../components/Notifications/registerServiceWorker';
import { ThemeContext } from '../AppContext/ThemeContext';
/*import Notify from '../components/Notifications/index';*/


export default (props: any) => {
    const getUserName = window.sessionStorage.getItem('username');
    const getState = window.sessionStorage.getItem('state');
    const state = JSON.parse(getState!)
    const getCompCode = window.localStorage.getItem('compCode');
    var [Open, setState]: any = React.useState(false);
    var { theme, changeTheme } = React.useContext(ThemeContext);

    React.useEffect(() => {
        console.log('currentTheme', theme)

    }, [theme])
    $(document).ready(function () {

        $('#sidebarCollapse').on('click', function (e: any) {
            console.log('clciked navbar toggler')
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
        <div className="cc" data-theme={theme}  >
            <React.Fragment>
                <div className="wrapper ">

                    {/*topbar*/}
                    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light fixed-top" style={theme === 'dark' ? { backgroundColor: '#1F305E', padding: '0', margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }:{ backgroundColor: '#798cd4', padding: '0', margin: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center' }}>
                        <div className="cont d-flex flex-row justify-content-around mnav text-center" >

                            <button type="button" id="sidebarCollapse" className={theme === 'dark' ? "btn btn-light" : "btn btn-primary" } style={{ padding: '10px', margin:'10px' }}>
                                <i className="fas fa-align-left"></i>
                                <span></span>
                            </button>
                          
                            {/*<img src={'./assets/dhpllogo.jpeg'} style={{ width: "6vw", borderRadius: "6%", margin: '2px 0 2px 60px', padding:'10px' }} className="img-fluid" alt="Responsive image" />*/}
                               

                        </div>


                        {/*<span className="companyName" style={{  textAlign: 'center' }}>Divay Hygiene Pvt. Ltd.</span>*/}

                        <div className="msall-cont">
                            <span className="accSvg" style={{display:'contents'}}>

                                <span className="adminSvg"><i> <svg style={{ width: '33px', color:'white' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M274.7 304H173.3C77.61 304 0 381.6 0 477.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM632.3 134.4c-9.703-9-24.91-8.453-33.92 1.266l-87.05 93.75l-38.39-38.39c-9.375-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94l56 56C499.5 285.5 505.6 288 512 288h.4375c6.531-.125 12.72-2.891 17.16-7.672l104-112C642.6 158.6 642 143.4 632.3 134.4z" /></svg></i>{`${getCompCode}`}</span>
                                <span style={{ margin: '0', padding: '0', color: 'blue', marginTop: '3px', fontSize:'1rem' }}>{getUserName}</span>

                            </span>
                            {/* <Notify />*/}

                            <div className="custom-control custom-switch">
                                <input type="checkbox" className="custom-control-input" id="themeSwitch" onChange={changeTheme} /><br />
                                <label className="custom-control-label" htmlFor="themeSwitch" style={{ cursor: 'pointer' }}>Dark Theme</label>
                            </div>
                            <LogOut />
                        </div>
                    </nav>
                </div>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", width: "100%", minHeight: 'auto', padding: '3.7em 0 0 0' }}>

                    {/* Sidebar*/}
                    <Sidebar state={state }/>

                    <div className={theme === 'dark' ? 'homeDiv bg-secondary' : 'homeDiv bg-light' } style={{ display: "flex", justifyContent: 'center', width: "100%", maxHeight: "100vh", minHeight: '110vh', maxWidth: "118vw", margin: "0 0 30px 0", padding: "0 0 30em 0", overflowY: "scroll", overflowX: "hidden" }}>

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
