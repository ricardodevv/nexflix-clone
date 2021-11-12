// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-EbqDToh83Wnjbq9koUsn2r2fsDZqvC8",
  authDomain: "nextflix-app.firebaseapp.com",
  projectId: "nextflix-app",
  storageBucket: "nextflix-app.appspot.com",
  messagingSenderId: "897549328054",
  appId: "1:897549328054:web:78cfdced2eecc068449017",
  measurementId: "G-0EFTQNL2M9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
