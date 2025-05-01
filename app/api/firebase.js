// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7zLjIi2CUccSWRSQOgBCJe5wgY0xRV6k",
  authDomain: "mybizzai-landingpage.firebaseapp.com",
  projectId: "mybizzai-landingpage",
  storageBucket: "mybizzai-landingpage.firebasestorage.app",
  messagingSenderId: "342541204879",
  appId: "1:342541204879:web:fc97e08db1a7014bb35ffa",
  measurementId: "G-N5YHNGJ7K5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);