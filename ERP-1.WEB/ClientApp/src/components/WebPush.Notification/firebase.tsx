// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClJ126dBk9fysOBTyGRit5htltQgzgPmc",
    authDomain: "excellent-erp-notification.firebaseapp.com",
    projectId: "excellent-erp-notification",
    storageBucket: "excellent-erp-notification.appspot.com",
    messagingSenderId: "937866384262",
    appId: "1:937866384262:web:ee8963e6d5edee0f7b9207",
    measurementId: "G-XDCM7SCHH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);