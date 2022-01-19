import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPSI57U4SuAZiZFeMF3jIogCLAxcvs4uU",
    authDomain: "react-auth-firebase-232d2.firebaseapp.com",
    projectId: "react-auth-firebase-232d2",
    storageBucket: "react-auth-firebase-232d2.appspot.com",
    messagingSenderId: "893056895794",
    appId: "1:893056895794:web:1810851c24f302af50652b"
};

firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export{
    firebase,
    db,
    googleAuthProvider
}
