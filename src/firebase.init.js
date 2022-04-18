// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-wW6vURd7NwU70Sn5rbrTewahNzhpWas",
    authDomain: "my-cooking-services.firebaseapp.com",
    projectId: "my-cooking-services",
    storageBucket: "my-cooking-services.appspot.com",
    messagingSenderId: "503269987211",
    appId: "1:503269987211:web:c10c698c7e4d228404958e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;