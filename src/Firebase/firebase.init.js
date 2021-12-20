import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const fireBaseInitialization = () =>{
    return initializeApp(firebaseConfig);
}

export default fireBaseInitialization; 