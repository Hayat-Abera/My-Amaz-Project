// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaiONFXKWGzv1SXVrHp7LjmL-8DKxFYgI",
  authDomain: "e-clone-f2813.firebaseapp.com",
  projectId: "e-clone-f2813",
  storageBucket: "e-clone-f2813.firebasestorage.app",
  messagingSenderId: "273345815759",
  appId: "1:273345815759:web:a6ce9b84c089fc42e843ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
