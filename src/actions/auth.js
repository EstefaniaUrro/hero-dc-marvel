import { googleAuthProvider,firebase } from "../firebase/firebase-config";
import { types } from "../types/types"
import { FinishLoading, startLoading } from "./ui";

export const startLoginWithEmailPassword = (email, password) =>{
    return (dispatch) => {
        dispatch( startLoading() )
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then( ({user}) => {
                dispatch( login(user.uid,user.displayName) )
                dispatch( FinishLoading() )
            })
            .catch( e=>{ 
                console.log(e) 
                dispatch( FinishLoading() )
            })
    }
}

export const startRegisterWithEmailPassword = (email,password,name) =>{
    return(dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then( async ({user}) =>{
                await user.updateProfile({
                    displayName: name
                })
                dispatch(login( user.uid,user.displayName))
            })
            .catch(e =>{
                console.log(e);
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) => dispatch( login(user.uid,user.displayName) ))
            .catch(e=>{ console.log(e) })
    }
}

export const login = (uid,displayName) =>{
    return ({
        type: types.login,
        payload: {
            uid,
            displayName
        }

    })
}

export const startLogout = () =>{
    return( async(dispatch) =>{
        await firebase.auth().signOut();
        dispatch(logout());
    })
}

const logout = () =>{
    return ({
        type: types.logout
    })
}