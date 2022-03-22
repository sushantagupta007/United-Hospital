import {
    GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, 
    createUserWithEmailAndPassword, updateProfile, sendEmailVerification, updatePassword,
    signInWithEmailAndPassword, sendPasswordResetEmail, getIdToken
  } from "firebase/auth";
  
  import { useState, useEffect } from 'react';
  import fireBaseInitialization from './../Firebase/firebase.init';

  
  
  
  
  fireBaseInitialization()
  const auth = getAuth();
  
  
  
  const googleProvider = new GoogleAuthProvider();
  
  
  const useFirebase = () => {
    const [newUser, setNewUser] = useState(null)
    const [loggedUser,setLoggedUser] = useState({})
    const [existingUser,setExistingUser] = useState({})
    const [errors, setError] = useState("")
  
    const [loading,setIsLoading] = useState(true); 
  
    const googleSign = (location,history) =>{
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const loggedUser = result.user;
            setLoggedUser(loggedUser)
            const destination = location?.state?.from || '/';
            history.push(destination);
            setIsLoading(true)
        }).catch((error) => {
            // Handle Errors here.
        }).finally(setIsLoading(false))
    }
  
    
    const logOut = (history) => {
        const auth = getAuth();
        signOut(auth).then(() => {
          setLoggedUser({})
        }).catch((error) => {
            setError(error)
        });
        // history.replace('/home')
    }
  
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then((result) => {
                setError(result)
  
            })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setExistingUser(user)
            } else {
              
            }
          });
    },[auth])
  
    const userCreate = (name, email, password, phone, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //User Create after registration
                const newUser = { email, displayName: name, phoneNumber: phone };
                setNewUser(newUser)       
                updateProfile(auth.currentUser, {
                    displayName: newUser.displayName,
                })
                    .then(() => {
                        setNewUser(newUser)
                    })
                    .catch((error) => {
                    });
                
            })
            .catch((error) => {
                console.log(error)
            }).finally(setIsLoading(false))
    }
  
    const resetPassword = (email, history) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password Reset Email Sent")
            })
            .catch((error) => {
                setError(error)
            });
  
    }
  
    const signInUser = (email, password, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedUser(user)
                if (user) {
                    history.replace('/home')
                }
                console.log(user)
            })
            .catch((error) => {

            });
    }

  
  
  
  
    const updatePass = (newpassword, history) => {
  
        const user = auth.currentUser;
        const newPassword = newpassword
  
        updatePassword(user, newPassword).then(() => {
            if (newPassword) {
                alert("Password Update Successfully")
                history.replace('/signin')
            }
        }).catch((error) => {
            console.log(error)
        });
    }
  
    return ({
        googleSign,
        logOut,
      
        userCreate,
        resetPassword,
        signInUser,
        updatePass,
        newUser,
        errors,
        loading,
        existingUser,
        loggedUser
  
    })
  
  }
  
  export default useFirebase; 