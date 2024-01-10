import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
    apiKey: "AIzaSyDmi94lqNnjPyxMoZB1kLEGxhogCejofmU",
    authDomain: "ciclista-e605c.firebaseapp.com",
    databaseURL: "https://ciclista-e605c-default-rtdb.firebaseio.com",
    projectId: "ciclista-e605c",
    storageBucket: "ciclista-e605c.appspot.com",
    messagingSenderId: "585588316322",
    appId: "1:585588316322:web:31e7be72647d27f2151ffb",
    measurementId: "G-92G0DHY9SK"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
