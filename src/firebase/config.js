

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrO29iooVY3NrEbA8_b06nG4GDfZyhPwk",
  authDomain: "react-project-3e63f.firebaseapp.com",
  projectId: "react-project-3e63f",
  storageBucket: "react-project-3e63f.appspot.com",
  messagingSenderId: "1022812097137",
  appId: "1:1022812097137:web:1d194588d094966d8e29d0"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );