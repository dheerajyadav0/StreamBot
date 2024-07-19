// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADRMhFY9jNVLCs7CaUhg41uQhBR8RESSQ",
  authDomain: "netflixgpt-1b96a.firebaseapp.com",
  projectId: "netflixgpt-1b96a",
  storageBucket: "netflixgpt-1b96a.appspot.com",
  messagingSenderId: "214713500842",
  appId: "1:214713500842:web:afd78c5ae23fef732abcd3",
  measurementId: "G-ZEQ4656EQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();