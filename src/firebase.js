import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7hmOr80ObLc-U1ZIPC0DSoHaIXtGsLtc",
  authDomain: "clone-b91d2.firebaseapp.com",
  projectId: "clone-b91d2",
  storageBucket: "clone-b91d2.appspot.com",
  messagingSenderId: "541435796527",
  appId: "1:541435796527:web:a7bf1835f63c57a5cc7ada",
  measurementId: "G-L7997PBE5K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
