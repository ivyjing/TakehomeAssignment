import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
