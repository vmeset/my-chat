// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzxHALxKquhCsrHtqTpt9haquGNGILcNo",
  authDomain: "my-chat-e415f.firebaseapp.com",
  projectId: "my-chat-e415f",
  storageBucket: "my-chat-e415f.appspot.com",
  messagingSenderId: "1000247081120",
  appId: "1:1000247081120:web:522b6765fa4a1d3c1eb1c5"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}