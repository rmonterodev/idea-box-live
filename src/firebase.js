// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE3oPQ__ThejOiUE0at8kBlyJQh8WmmhM",
  authDomain: "ideaboxlive-7f2ce.firebaseapp.com",
  projectId: "ideaboxlive-7f2ce",
  storageBucket: "ideaboxlive-7f2ce.appspot.com",
  messagingSenderId: "130821401323",
  appId: "1:130821401323:web:73cfa1d06d5164e8cb2cae"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(),
  db = firebase.firestore();

export { auth, db, firebase };
