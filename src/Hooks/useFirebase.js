
import { GoogleAuthProvider,getAuth,signInWithPopup, signOut,createUserWithEmailAndPassword } from "firebase/auth";
import fireBaseInitialization from '../Firebase/firebase.init';
import { useState } from 'react';

//Initialization of Auth
fireBaseInitialization(); 
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user,setUser] = useState({})
    const [newUser,setnewUser] = useState(null)
    
    const googleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const loggedUser = result.user;
            setUser(loggedUser)
            console.log(loggedUser)
        }).catch((error) => {
            // Handle Errors here.
         
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
    const userCreate =(email,password) =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;       
            setnewUser(user)
        })
        .catch((error) => {
            console.log(error)        
         });
    }
    return ({
        googleSignIn,
        signOutUser, 
        user,
        newUser,
        userCreate
    }   
    );
};

export default useFirebase;