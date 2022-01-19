import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { login } from '../actions/auth';

import DashboardRouter from './DashboardRouter';
import PrivateRouter from './PrivateRouter';
import {firebase} from '../firebase/firebase-config'
import PublicRouter from './PublicRouter';
import LoginScreen from '../Components/login/LoginScreen';
import RegisterScreen from '../Components/login/RegisterScreen';

const AppRouter = () => {

    const dispatch = useDispatch();
    const [isLogged, setIsLogged] = useState(false)
    const [isNotReady, setIsNotReady] = useState(true)

    const lastPath = localStorage.getItem('lastPath') || '/dc'

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) =>{
            if(user?.uid){
                setIsLogged(true);
                dispatch(login(user.uid,user.displayName))
            }
            else{
                setIsLogged(false);
            }
            setIsNotReady(false);
        })
    }, [dispatch])
    if(isNotReady){
        return(
            <div className="d-flex justify-content-center mt-5">
                <div className="spinner-grow text-primary" style={{width: '5rem', height: '5rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>

        )
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <PublicRouter isLogged= {isLogged} lastPath={ lastPath }>
                        <LoginScreen/>
                    </PublicRouter>
                }/>
                 <Route path="/register" element={
                    <RegisterScreen/>
                }/>
               

                <Route path="/*" element={
                    <PrivateRouter isLogged= {isLogged}>
                        <DashboardRouter/>
                    </PrivateRouter>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
