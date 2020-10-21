import firebase from "firebase/app";
import 'firebase/firestore'

 

var firebaseConfig = {

    apiKey: "AIzaSyBw3CTNuuX5quEvhfrm1jRlmYJ7LHHrGV0",
    authDomain: "goals-tm.firebaseapp.com",
    databaseURL: "https://goals-tm.firebaseio.com",
    projectId: "goals-tm",
    storageBucket: "goals-tm.appspot.com",
    messagingSenderId: "857543639401",
    appId: "1:857543639401:web:63994afe03e0dafe0f7df8",
    measurementId: "G-F6SR2NGBQ7"
};

const app = firebase.initializeApp(firebaseConfig);

const firestore  = app.firestore();
const auth = firebase.auth;

export {
    firestore,
    auth,
 };
 