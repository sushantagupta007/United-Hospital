
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

const useFirebase = () => {
    

    const [user,setUser] = useState({})
    const [error,setError]= useState();
    const [loggedUser, setLoggUser]= useState({})

        const verifyEmail =()=>{
            sendEmailVerification(auth.currentUser)
            .then((result) => {
                setError(result)
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
                        })
                        .catch((error) => {
                        }); 
                        
                        console.log(newUser)
                        history.replace('/');        
                    })
                    .catch((error) => {
                      console.log(error)
                    })     
            }

        const passWordReset=(email) =>{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
               console.log(error)
            });
        }
        const userSignIn =(email,password,location,history)=>{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                setLoggUser(user)
                // sendSignInLinkToEmail(auth, email, actionCodeSettings)
                // .then(() => {
                //     // The link was successfully sent. Inform the user.
                //     // Save the email locally so you don't need to ask the user for it again
                //     // if they open the link on the same device.
                //     window.localStorage.setItem('emailForSignIn', email);
                //     // ...
                // })
                // .catch((error) => {
                //     const errorCode = error.code;
                //     const errorMessage = error.message;
                //     // ...
                // });
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
                    setLoggUser(user)
                } else {
                  setUser({})
                }
              });
        },[auth])

    return ({
        googleSignIn,
        signOutUser, 
        user,
        userCreate,
        userSignIn,
        loggedUser,
        error,
        passWordReset
        }   
    );
};

export default useFirebase;