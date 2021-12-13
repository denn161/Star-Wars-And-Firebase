import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'


const app = initializeApp({
  apiKey: "AIzaSyB4548AiCWSD3o5boNsDFbxAHZaiq3lXTs",
  authDomain: "star-wars-project-9f31e.firebaseapp.com",
  projectId: "star-wars-project-9f31e",
  storageBucket: "star-wars-project-9f31e.appspot.com",
  messagingSenderId: "586439823559",
  appId: "1:586439823559:web:e99331e6f2f57aff9b6ee2"
});

 export const auth = getAuth(app)

 export const signUp = async (email, pass) => await createUserWithEmailAndPassword(auth, email, pass) 

export const logIn = async (email, pass) => await signInWithEmailAndPassword(auth, email, pass)

export const logOut = async () => await signOut(auth);