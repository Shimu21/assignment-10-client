import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPwPKXhEAtStvXYqCdHRruC-l9oC58DEE",
    authDomain: "cooking-app-11648.firebaseapp.com",
    projectId: "cooking-app-11648",
    storageBucket: "cooking-app-11648.appspot.com",
    messagingSenderId: "623221509857",
    appId: "1:623221509857:web:97ddd4937cc4c8f36a31a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;