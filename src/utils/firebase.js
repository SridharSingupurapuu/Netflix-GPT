// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK-VTi5YPFxeiFqATfqUXtPR8Xec-yrDg",
  authDomain: "netflixgpt-864f4.firebaseapp.com",
  projectId: "netflixgpt-864f4",
  storageBucket: "netflixgpt-864f4.appspot.com",
  messagingSenderId: "582023607118",
  appId: "1:582023607118:web:81b01008f9a05a3144641f",
  measurementId: "G-YTR9BRGKFE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
