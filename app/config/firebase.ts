import 'firebase/firestore';

// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBL3clUFzGxy05PMmsxYb22Cxdcz7iYWv0",
    authDomain: "my-blog-850e3.firebaseapp.com",
    projectId: "my-blog-850e3",
    storageBucket: "my-blog-850e3.appspot.com",
    messagingSenderId: "742427220523",
    appId: "1:742427220523:web:dc652106254190fde6e86e",
    measurementId: "G-755HEQLFSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const storage = getStorage(app)



