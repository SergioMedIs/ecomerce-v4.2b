// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKkoa6szwsvKlxkQeN3MuI31fk8XA5VcI",
  authDomain: "ecomerce-45b8c.firebaseapp.com",
  projectId: "ecomerce-45b8c",
  storageBucket: "ecomerce-45b8c.appspot.com",
  messagingSenderId: "1036859786462",
  appId: "1:1036859786462:web:bbd1eb23f7e860b324ee4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =firebase.auth();

export {auth}