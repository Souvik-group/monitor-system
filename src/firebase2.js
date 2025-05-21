// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzSZowjfm-a8C6wzmcI9f8KrnfYl3lD-s",
  authDomain: "admin-eadd9.firebaseapp.com",
  projectId: "admin-eadd9",
  storageBucket: "admin-eadd9.firebasestorage.app",
  messagingSenderId: "45362433178",
  appId: "1:45362433178:web:c997434e3ec45db9de6323",
  measurementId: "G-JQX0X0SMMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
