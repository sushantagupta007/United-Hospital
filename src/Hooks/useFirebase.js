
import { GoogleAuthProvider,getAuth,signInWithPopup, 
    signOut,createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,updateProfile,sendEmailVerification,sendPasswordResetEmail } 
    
from "firebase/auth";

import fireBaseInitialization from '../Firebase/firebase.init';
import { useState, useEffect } from 'react';


//Initialization of Auth
fireBaseInitialization(); 
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const postNewUser =(name,email)=>{
    fetch('https://hospita-app.herokuapp.com/newUser', {
           
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            name,
            email
        })
    }).then(result=>console.log(result))
}
const useFirebase = () => {
    

    const [user,setUser] = useState({})
    const [error,setError]= useState(null);
    const [loggedUser, setLoggUser]= useState({})
    const [newUser,setNewUser] = useState({})

        const verifyEmail =()=>{
            sendEmailVerification(auth.currentUser)
            .then((result) => {
                console.log(result)
            })
        }
        const googleSignIn = (location,history) =>{
            signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                setLoggUser(loggedUser)
                const destination = location?.state?.from || '/';
                history.push(destination);
            }).catch((error) => {
                // Handle Errors here.
            });
        }

        const userCreate =(name,email,password,history) =>{
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                   
                    //User Create after registration
                    const newUser = { email, displayName: name }; 
                    verifyEmail();
                    updateProfile(auth.currentUser, {
                        displayName: name
                        })
                        .then(() => {
                            console.log("profile update")
                            console.log(auth.currentUser)
                            postNewUser(name,email)
                        })
                        .catch((error) => {
                        }); 
                        setNewUser(auth.currentUser)
                        history.replace('/');        
                    })
                    .catch((error) => {
                        setError(error.code)
                    })     
            }

        const passWordReset=(email) =>{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password Reset Email Sent")
            })
            .catch((error) => {
               const errorCode = error.code
               setError(errorCode)
            });
        }
        const userSignIn =(email,password,location,history)=>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                setLoggUser(user)
                
                const destination = location?.state?.from || '/';
                history.push(destination);
            })
            .catch((error) => {
                console.log(error)
            });
        }

        const signOutUser = ()=>{
            signOut(auth).then(() => {
                setLoggUser({})
                console.log(user)
              }).catch((error) => {
                console.log(error)
              });
        }

        //It activates when user login/logout state change
        useEffect(()=>{
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                } else {
                  setUser({})
                }
              });
        },[auth])

    return ({
        auth,
        googleSignIn,
        signOutUser, 
        user,
        newUser,
        userCreate,
        userSignIn,
        loggedUser,
        error,
        passWordReset
        }   
    );
};

export default useFirebase;