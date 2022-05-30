import * as React from 'react';
import { Redirect, useHistory } from 'react-router';
import './logout.styles.css';

export function LogOut() {
    const history = useHistory();
    const handleLogOut = () => {
     
        localStorage.clear();
        sessionStorage.clear();
        history.push('/');
      
    }
    return (
        <span>
            <i className="fas fa-sign-out-alt"></i>
            <a href="#" onClick={handleLogOut}>Log Out</a>
        </span>
    )
}