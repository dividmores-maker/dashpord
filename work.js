const firebaseConfig = {
    apiKey: "AIzaSyC07fg1eWmIlWhq-aVKwIE3YJEsDl8oH_M",
    authDomain: "divid-mores.firebaseapp.com",
    databaseURL: "https://divid-mores-default-rtdb.firebaseio.com",
    projectId: "divid-mores",
    storageBucket: "divid-mores.firebasestorage.app",
    messagingSenderId: "96902794085",
    appId: "1:96902794085:web:38711681e4f7251cbf2f8c"
};

const app = initializeApp(firebaseConfig);

if (app) {
    console.log("firebase init done")
} else {
    console.log("firebase init error")
}