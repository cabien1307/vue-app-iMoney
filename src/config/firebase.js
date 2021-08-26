import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALddXh2JtxgLSoWE8IHuKMjdjzrTGGiUU",
    authDomain: "i-money-65b5e.firebaseapp.com",
    projectId: "i-money-65b5e",
    storageBucket: "i-money-65b5e.appspot.com",
    messagingSenderId: "283277330132",
    appId: "1:283277330132:web:e5bee598ace908302f5d41",
    measurementId: "G-YNG98Q8KQ7",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timeStamp };
