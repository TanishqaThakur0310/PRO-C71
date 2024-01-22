import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDsZtuJrnFLUjeOlPHoMJn-IAxL-CJUpjs",
    authDomain: "e-ride-4883b.firebaseapp.com",
    databaseURL: "https://e-ride-4883b-default-rtdb.firebaseio.com",
    projectId: "e-ride-4883b",
    storageBucket: "e-ride-4883b.appspot.com",
    messagingSenderId: "984767375097",
    appId: "1:984767375097:web:93443005965cdeb9b46428"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
