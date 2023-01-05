import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const config = {
  //your config json file
  apiKey: "AIzaSyCGqqG_c8sTp9Cf-g9mAsvakR_LO0fHxhE",
  authDomain: "oauth-login-e1c88.firebaseapp.com",
  projectId: "oauth-login-e1c88",
  storageBucket: "oauth-login-e1c88.appspot.com",
  messagingSenderId: "610997796191",
  appId: "1:610997796191:web:3ffbfc8a9fee6675d78aea",
  measurementId: "G-789H36HE7D",
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export default firebase;
