import * as React from 'react'
import { createContext, useState, useEffect } from 'react';

//import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';

const AuthContext = createContext({})

export default AuthContext;


export const AuthProvider = ({ children } : any) => {
    //let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : '')
    //let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : '')
    let [authTokens, setAuthTokens] : any = useState('')
    let [user, setUser] : any = useState('')
    let [loading, setLoading] : any = useState(true)


    //const history = useHistory()

 


    let logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        setAuthTokens: setAuthTokens,
        setUser: setUser,

        logoutUser: logoutUser,
    }


    useEffect(() => {

        if (authTokens) {
          /*  setUser(jwt_decode(authTokens.access))*/
            console.log('user by jwt decode',user)
        }
        setLoading(false)


    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}