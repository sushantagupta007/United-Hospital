
import { useState, useEffect } from 'react';
import { getAuth, GoogleAuthProvider,signInWithPopup,signOut,onAuthStateChanged} from "firebase/auth";
import firebaseAppInitialize from './../Firebase/firebase.init';


firebaseAppInitialize(); 



const useFire = () =>{

    const [user,setUser] = useState({}); 
    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const logOut =()=>{
        const auth = getAuth();
            signOut(auth).then(() => {
                setUser({})
            }).catch((error) => {
                // An error happened.
        });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
                setUser({})
            }
          });
    },[auth])
    return{
        user,
        googleSignIn,
        logOut,
        

    }
}

export default useFire;