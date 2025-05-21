// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBzSZowjfm-a8C6wzmcI9f8KrnfYl3lD-s",
  authDomain: "admin-eadd9.firebaseapp.com",
  projectId: "admin-eadd9",
  storageBucket: "admin-eadd9.firebasestorage.app",
  messagingSenderId: "45362433178",
  appId: "1:45362433178:web:c997434e3ec45db9de6323",
  measurementId: "G-JQX0X0SMMC"
};

// Initialize Firebase with a unique name for the secondary app
const app1 = initializeApp(firebaseConfig, "project1");
export const db1 = getFirestore(app1);
