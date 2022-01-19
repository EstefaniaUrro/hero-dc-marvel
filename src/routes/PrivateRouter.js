import React from 'react'
import { useLocation,Navigate } from 'react-router'

const PrivateRouter = ({children,isLogged}) => {

    const { pathname,search } = useLocation();

    localStorage.setItem('lastPath', pathname + search);

    return isLogged
    ? children
    : <Navigate to='/'/>
}

export default PrivateRouter
