// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWk4hVsjC5K9hZMwZyShBCjzUYWxKyrW0",
  authDomain: "react-coderhouse-d00a0.firebaseapp.com",
  projectId: "react-coderhouse-d00a0",
  storageBucket: "react-coderhouse-d00a0.appspot.com",
  messagingSenderId: "742108375629",
  appId: "1:742108375629:web:07d499d95501bda3c50a04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore. Exporto para poder llevar los datos de mi DB a otros componentes
export const firestoreDb = getFirestore(app)