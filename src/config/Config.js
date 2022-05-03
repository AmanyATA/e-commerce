import * as firebase from 'firebase'
import 'firebase/firestore';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDbdJb7GltTYtEbN1W0Lmh0TR8PO6BiXj0",
    authDomain: "e-commerce-75522.firebaseapp.com",
    projectId: "e-commerce-75522",
    storageBucket: "e-commerce-75522.appspot.com",
    messagingSenderId: "876727723474",
    appId: "1:876727723474:web:da6b79fc7cd4dcfebb140b",
    measurementId: "G-N8CRQCDCGE" };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db }