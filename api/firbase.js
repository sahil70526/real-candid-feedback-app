import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4BYWitTunVZRGYp9lkFBHsjhh6lROzi4",
    authDomain: "authentication-app-7f648.firebaseapp.com",
    projectId: "authentication-app-7f648",
    storageBucket: "authentication-app-7f648.appspot.com",
    messagingSenderId: "744843581071",
    appId: "1:744843581071:web:2f657caa524e5ac37202fa"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export default app;