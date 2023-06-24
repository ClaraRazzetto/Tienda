// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYNp37zyJI3ViZQJR-OJSDL9IlEZ0aDmw",
  authDomain: "tiendaa-28736.firebaseapp.com",
  projectId: "tiendaa-28736",
  storageBucket: "tiendaa-28736.appspot.com",
  messagingSenderId: "792156939739",
  appId: "1:792156939739:web:f43b1d354ed8b859d3b3fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

//Creo una ruta a la referencia al Storage de firebase
const storage = getStorage();

export {auth, storage, db}