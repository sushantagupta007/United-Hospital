import React,{useState} from 'react';
import { GoogleAuthProvider,getAuth,signInWithPopup, signOut } from "firebase/auth";
import fireBaseInitialization from '../Firebase/firebase.init';

//Initialization of Auth
fireBaseInitialization(); 
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser)
            console.log(loggedUser)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    const signOutUser = ()=>{
        signOut(auth).then(() => {
            setUser({})
            console.log(user)
          }).catch((error) => {
            console.log(error)
          });
    }
    return ({
        googleSignIn,
        signOutUser, 
        user
    }   
    );
};

export default useFirebase;