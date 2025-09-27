// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsPfjB-9BOAGBCEkBiLzYED8BK28Yqf0U",
  authDomain: "hirely-dc0c4.firebaseapp.com",
  projectId: "hirely-dc0c4",
  storageBucket: "hirely-dc0c4.firebasestorage.app",
  messagingSenderId: "572512942477",
  appId: "1:572512942477:web:5fdbf174e6eba7f47a65c4",
  measurementId: "G-RH6WHXHRML"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);