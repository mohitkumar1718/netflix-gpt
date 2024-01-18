// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0HcHY681k0u-xVRa3XXsr7xNS824_Z-g",
  authDomain: "netflixgpt-f0c3f.firebaseapp.com",
  projectId: "netflixgpt-f0c3f",
  storageBucket: "netflixgpt-f0c3f.appspot.com",
  messagingSenderId: "399389896904",
  appId: "1:399389896904:web:61d306961f2622dca4f5fd",
  measurementId: "G-82V6QKQ07G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();