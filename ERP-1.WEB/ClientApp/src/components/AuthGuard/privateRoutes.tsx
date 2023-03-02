import * as React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../../AppContext/AuthContext'

const PrivateRoute = ({ children, ...rest } : any) => {
    let { user }: any = useContext(AuthContext)
    return (
        <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>
    )
}

export default PrivateRoute;