import React from 'react'
import { Link } from "react-router-dom";
// import GoogleButton from 'react-google-button';
import {useForm} from '../../hooks/useForm'
import {useDispatch} from 'react-redux'
import { startLoginWithEmailPassword} from '../../actions/auth'
// import {startGoogleLogin, startLoginWithEmailPassword} from '../../actions/auth'
import { useSelector } from 'react-redux';


const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email : '',
        password:''
    });
    const { email,password } = formValues;
    
    const handleLogin = (e) =>{
        e.preventDefault();
        dispatch(startLoginWithEmailPassword(email,password));
    }
    // const handleGoogleLogin= ()=>{
    //    dispatch( startGoogleLogin() );
    // }

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr/>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        className="form-control"
                        id="exampleInputPassword1" 
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        autoComplete="off"
                        required
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    disabled= {loading}
                >
                    Login with email and password
                </button>
            </form>
            <hr/>
            <div className="mt-3">
                {/* <GoogleButton onClick={ handleGoogleLogin } />
                <hr/> */}
                <Link to="/register">Sing up</Link>
            </div>
        </div>
    )
}

export default LoginScreen
