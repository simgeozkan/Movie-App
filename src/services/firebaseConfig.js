// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlpcfaNQfIxN6iNyfcZ3_mRTis_6zFaOE",
  authDomain: "movie-app-666ac.firebaseapp.com",
  projectId: "movie-app-666ac",
  storageBucket: "movie-app-666ac.firebasestorage.app",
  messagingSenderId: "408279733027",
  appId: "1:408279733027:web:0bd1b7ff6e657bbf65f296",
  measurementId: "G-X1WJ3F9WBR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);