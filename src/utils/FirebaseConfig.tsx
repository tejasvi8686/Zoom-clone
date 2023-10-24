// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection, getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa84Rt2ZiWoPWb0YVeE9C4h6Uw1jw1dCg",
  authDomain: "zoom-clone-2f79b.firebaseapp.com",
  projectId: "zoom-clone-2f79b",
  storageBucket: "zoom-clone-2f79b.appspot.com",
  messagingSenderId: "205827215133",
  appId: "1:205827215133:web:a0807daa1e203664e2dbf4",
  measurementId: "G-V41C28CLXH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB, "users")