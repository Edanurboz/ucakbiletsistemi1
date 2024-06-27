
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyAau3wo53px8Jv9wm8UkmLOi4MCmhcMFSM",
  authDomain: "signup2-72ff5.firebaseapp.com",
  projectId: "signup2-72ff5",
  storageBucket: "signup2-72ff5.appspot.com",
  messagingSenderId: "459424542815",
  appId: "1:459424542815:web:738e63d6580e1e456c6bea"
};


 const app = initializeApp(firebaseConfig);
 const auth=getAuth (app)

 export {auth}