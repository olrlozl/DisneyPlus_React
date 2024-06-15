// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDTpA3TF9AwJj8q9hJrtYlC8Q1Mms7MgIw",
    authDomain: "react-disney-plus-app-cf27e.firebaseapp.com",
    projectId: "react-disney-plus-app-cf27e",
    storageBucket: "react-disney-plus-app-cf27e.appspot.com",
    messagingSenderId: "98909474949",
    appId: "1:98909474949:web:c8e5b0654acc61effe19ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;