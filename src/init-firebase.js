// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2VpCmZS9IrDpGCRukdfSY4vViYWzy5uQ",
  authDomain: "yevausatova-b5c88.firebaseapp.com",
  projectId: "yevausatova-b5c88",
  storageBucket: "yevausatova-b5c88.appspot.com",
  messagingSenderId: "991314559405",
  appId: "1:991314559405:web:ccf2faeae739d4685ca124",
  measurementId: "G-WJZ1PTS4HX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);