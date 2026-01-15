// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjJTR3YKIt0Kl2VOSwMZgQGobTxCypsNk",
  authDomain: "netflixgpt-f63c6.firebaseapp.com",
  projectId: "netflixgpt-f63c6",
  storageBucket: "netflixgpt-f63c6.firebasestorage.app",
  messagingSenderId: "436303397344",
  appId: "1:436303397344:web:f3a5a25acfa8edc0812b85",
  measurementId: "G-QTZQ5S8BWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();