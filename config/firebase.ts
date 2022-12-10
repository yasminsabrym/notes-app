import firebase from 'firebase/app'
import Constants from 'expo-constants';
import "firebase/auth"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk90HIJscD69Dg_KWGWQeNikpVM9RHGss",
    authDomain: "notes-app-99.firebaseapp.com",
    projectId: "notes-app-99",
    storageBucket: "notes-app-99.appspot.com",
    messagingSenderId: "784554811203",
    appId: "1:784554811203:web:450c4da257be74e5da19f6",


};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;