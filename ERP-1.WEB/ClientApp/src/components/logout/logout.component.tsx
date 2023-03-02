import * as React from 'react';
import { Redirect, useHistory } from 'react-router';
import './logout.styles.css';

export function LogOut() {
    const history = useHistory();
    const handleLogOut = () => {
     
      /*  localStorage.clear();*/
        sessionStorage.clear();
        history.push('/sign-in');
      
    }
    return (
        <span>
            
            <a style={{ fontSize: '1rem', marginLeft:'33px' , color:'#fff'}} href="#" onClick={handleLogOut}><i className="fas fa-sign-out-alt"></i>SignOut</a>
        </span>
    )
}