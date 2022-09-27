"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the functions you need from the SDKs you need
var app_1 = require("firebase/app");
var analytics_1 = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyClJ126dBk9fysOBTyGRit5htltQgzgPmc",
    authDomain: "excellent-erp-notification.firebaseapp.com",
    projectId: "excellent-erp-notification",
    storageBucket: "excellent-erp-notification.appspot.com",
    messagingSenderId: "937866384262",
    appId: "1:937866384262:web:ee8963e6d5edee0f7b9207",
    measurementId: "G-XDCM7SCHH4"
};
// Initialize Firebase
var app = (0, app_1.initializeApp)(firebaseConfig);
var analytics = (0, analytics_1.getAnalytics)(app);
//# sourceMappingURL=firebase.js.map