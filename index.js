import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBPTPBQbP13Qb4Cwrel043NgpKx6xei7jE",
    authDomain: "cart-79a17.firebaseapp.com",
    projectId: "cart-79a17",
    storageBucket: "cart-79a17.appspot.com",
    messagingSenderId: "836526575304",
    appId: "1:836526575304:web:a77057856f205620a0dffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render( < App / > , document.getElementById('root'));