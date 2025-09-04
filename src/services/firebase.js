// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMx_A_ZtFD7bFVayew4vGLxoLl4YqfeGk",
  authDomain: "netflix-8bf45.firebaseapp.com",
  projectId: "netflix-8bf45",
  storageBucket: "netflix-8bf45.firebasestorage.app",
  messagingSenderId: "132679146894",
  appId: "1:132679146894:web:e91803506c1344a2df18df",
  measurementId: "G-YFQ5BNN7MM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth();
