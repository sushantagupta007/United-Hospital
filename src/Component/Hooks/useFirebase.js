import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut} from "firebase/auth";

import firebaseAppInitialize from '../Firebase/firebase.init';

firebaseAppInitialize();  

const provider = new GoogleAuthProvider();
const auth = getAuth();


const useFirebase = () =>{
    
    const [user,setUser] = useState({})
   
    const googleuserCreate = () =>{
        return signInWithPopup(auth, provider)
        
    }

    const logOut = () =>{
            signOut(auth)
                .then(() => {
                    setUser({})
                })
                .catch((error) => {
                });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             console.log(user.displayName)
            }
            else{
                setUser({})
            }

          });
       
    },[])

  return {
      user,
      googleuserCreate, 
      logOut 
  }
}

export default useFirebase; 