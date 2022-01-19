import React from 'react'
import { Navigate } from 'react-router'

const PublicRouter = ({children,isLogged,lastPath}) => {

    return isLogged
    ? <Navigate to={lastPath}/>
    : children
}

export default PublicRouter
