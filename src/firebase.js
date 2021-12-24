import firebase from 'firebase'
/*import * as firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';*/

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZoJgZXI4uomj_D5iZ8BX7Mjpk62yfxEU",
  authDomain: "ivymedia-app.firebaseapp.com",
  projectId: "ivymedia-app",
  storageBucket: "ivymedia-app.appspot.com",
  messagingSenderId: "555906356569",
  appId: "1:555906356569:web:c408ad5302c41f4b85e848"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};

/*
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZoJgZXI4uomj_D5iZ8BX7Mjpk62yfxEU",
    authDomain: "ivymedia-app.firebaseapp.com",
    projectId: "ivymedia-app",
    storageBucket: "ivymedia-app.appspot.com",
    messagingSenderId: "555906356569",
    appId: "1:555906356569:web:c408ad5302c41f4b85e848"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};*/

// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZoJgZXI4uomj_D5iZ8BX7Mjpk62yfxEU",
  authDomain: "ivymedia-app.firebaseapp.com",
  projectId: "ivymedia-app",
  storageBucket: "ivymedia-app.appspot.com",
  messagingSenderId: "555906356569",
  appId: "1:555906356569:web:c408ad5302c41f4b85e848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {db, auth};*/