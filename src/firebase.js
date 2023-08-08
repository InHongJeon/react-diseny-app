// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1r8602zi_lh3FALh_IhTFLQWoesLSxgU",
  authDomain: "reace-disney-plus-app.firebaseapp.com",
  projectId: "reace-disney-plus-app",
  storageBucket: "reace-disney-plus-app.appspot.com",
  messagingSenderId: "397673725306",
  appId: "1:397673725306:web:a75c2cc5246bf7d0c42ac3",
  measurementId: "G-FHGNT0MJ0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app
