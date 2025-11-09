// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getdatabase } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC07fg1eWmIlWhq-aVKwIE3YJEsDl8oH_M",
    authDomain: "divid-mores.firebaseapp.com",
    databaseURL: "https://divid-mores-default-rtdb.firebaseio.com",
    projectId: "divid-mores",
    storageBucket: "divid-mores.firebasestorage.app",
    messagingSenderId: "96902794085",
    appId: "1:96902794085:web:38711681e4f7251cbf2f8c"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getdatabase(firebaseConfig);

export { database };