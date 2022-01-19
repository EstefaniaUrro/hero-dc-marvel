import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
        terms: false

    });
    const { name, email, password, password2, terms } = formValues;

    const isFormValid = () =>{
        if(name.trim().length < 2){
            // console.log('El nombre debe tener mas de dos caracteres')
            dispatch(setError('El nombre debe tener mas de dos caracteres'))
            return
        }
        if(password.length < 6  || password !== password2){
            // console.log('La contraseñas deben coincidir y tener al menos 6 caracteres')
            dispatch(setError('La contraseñas deben coincidir y tener al menos 6 caracteres'))
            return
        }
        if(!validator.isEmail(email)){
            // console.log('El email no es válido')
            dispatch(setError('El email no es válido'))
            return
        }
        if(!terms){
            // console.log('Debe aceptar los terminos para continuar')
            dispatch(setError('Debe aceptar los terminos para continuar'))
            return
        }
        dispatch( removeError() )
        return true
    }

    const handleRegister = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailPassword(email, password, name))
            // dispatch( crearUsuario() )
        }
    }
    return (
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            
                                            <form className="mx-1 mx-md-4" onSubmit={handleRegister}>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            type="text" 
                                                            id="form3Example1c" 
                                                            className="form-control"
                                                            name="name"
                                                            value={name}
                                                            onChange={handleInputChange}
                                                            autoComplete="off" 
                                                            required  
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            type="email"
                                                            id="form3Example3c" 
                                                            className="form-control"
                                                            name="email"
                                                            value={email}
                                                            onChange={handleInputChange}
                                                            autoComplete="off"
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            type="password" 
                                                            id="form3Example4c" 
                                                            className="form-control"
                                                            name="password"
                                                            value={password}
                                                            onChange={handleInputChange}
                                                            autoComplete="off"
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input 
                                                            type="password" 
                                                            id="form3Example4cd" 
                                                            className="form-control"
                                                            name="password2"
                                                            value={password2}
                                                            onChange={handleInputChange}
                                                            autoComplete="off"
                                                            required
                                                        />
                                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-left mb-5">
                                                    <input
                                                        className="form-check-input "
                                                        type="checkbox"
                                                        id="form2Example3c"
                                                        name="terms"
                                                        checked={terms}
                                                        onChange={handleInputChange}
                                                        // required
                                                    />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        Agree to terms and conditions
                                                    </label>
                                                </div>
                                                {
                                                    msgError && (
                                                        <div className="alert alert-danger" role="alert">
                                                            {msgError}
                                                        </div>
                                                    )
                                                }
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Create account</button>
                                                </div>
                                                    <Link to="/login">Already have an account? Sing in</Link>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sampleimage" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default RegisterScreen
