// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9VX6hm2P6qMYj_153pE2XlItoYJkEhh8",
  authDomain: "fir-practice-a510b.firebaseapp.com",
  projectId: "fir-practice-a510b",
  storageBucket: "fir-practice-a510b.appspot.com",
  messagingSenderId: "956757176139",
  appId: "1:956757176139:web:36e191acfd6b8f3a5382ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();