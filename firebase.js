import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArhsh_UDt-EH5pQcSVyVMbbVhXZos1t84",
    authDomain: "emecho-garage.firebaseapp.com",
    projectId: "emecho-garage",
    storageBucket: "emecho-garage.appspot.com",
    messagingSenderId: "852898249207",
    appId: "1:852898249207:web:663766df5f5623734a56f2",
    measurementId: "G-9D2GWLJKL8"
  };
let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};