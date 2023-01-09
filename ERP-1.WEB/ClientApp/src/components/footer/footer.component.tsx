import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../AppContext/ThemeContext';
import './footer.styles.css';


export default function Footer() {
    var {theme, changeTheme } = useContext(ThemeContext)
    return (


        <div className="text-center p-0 footer mt-2" style={theme === 'dark' ? { backgroundColor: "#1F305E", margin: "2px 0 0 0", color:'navajowhite'}: { backgroundColor: "#798cd4", margin:"2px 0 0 0" , color:'grey'}}>
                © 2023 Copyright:
                <a className="text-light" href="https:http://www.excellentsoftwares.com/">Excellent Softwares</a>
        </div>

    );


}
