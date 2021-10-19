

















// import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut} from "firebase/auth";

// import firebaseAppInitialize from '../Firebase/firebase.init';
// import { useEffect, useState } from "react"

// firebaseAppInitialize();  




// const useFirebase = () =>{
    
//     const [user,setUser] = useState({})
//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     const googleuserCreate = () =>{
//         return signInWithPopup(auth, provider)
        
//     }

//     const logOut = () =>{
//             signOut(auth)
//                 .then(() => {
//                     setUser({})
//                 })
//                 .catch((error) => {
//                 });
//     }
//     useEffect(()=>{
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//              setUser(user)
//              console.log(user.displayName)
//             }
//             else{
//                 setUser({})
//             }

//           });
       
//     },[auth])

//   return {
//       user,
//       googleuserCreate, 
//       logOut 
//   }
// }

// export default useFirebase; 