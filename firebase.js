import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-EbqDToh83Wnjbq9koUsn2r2fsDZqvC8",
  authDomain: "nextflix-app.firebaseapp.com",
  projectId: "nextflix-app",
  storageBucket: "nextflix-app.appspot.com",
  messagingSenderId: "897549328054",
  appId: "1:897549328054:web:78cfdced2eecc068449017",
  measurementId: "G-0EFTQNL2M9",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export default firebaseApp;
