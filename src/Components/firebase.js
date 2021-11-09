import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBpnN04ZdTCeW_1qHjF3RkQr6gPyl9-PEU",
    authDomain: "bint-app-e825d.firebaseapp.com",
    projectId: "bint-app-e825d",
    storageBucket: "bint-app-e825d.appspot.com",
    messagingSenderId: "804679345796",
    appId: "1:804679345796:web:78c6543f2a44b0555e44d1"
  };

  let app = initializeApp(firebaseConfig);

  let firestore = getFirestore(app);

  export default firestore;