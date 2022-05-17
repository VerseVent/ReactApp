import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPPRixotcwWQlohSgkW58BGRXHAyML05U",
  authDomain: "scheduler-eed36.firebaseapp.com",
  projectId: "scheduler-eed36",
  storageBucket: "scheduler-eed36.appspot.com",
  messagingSenderId: "700080176496",
  appId: "1:700080176496:web:a0dad2015c7c3fb24863b5",
  measurementId: "G-PSG6N5DB34",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = getFirestore(app);

const auth = firebase.auth();

export { auth, db, app };
