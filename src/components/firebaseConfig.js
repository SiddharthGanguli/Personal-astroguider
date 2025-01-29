// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4_evuVACbS0oknPVcAYZPpilDyvch_LM",
  authDomain: "astro-guider.firebaseapp.com",
  databaseURL: "https://astro-guider-default-rtdb.firebaseio.com",
  projectId: "astro-guider",
  storageBucket: "astro-guider.appspot.com",
  messagingSenderId: "42698345380",
  appId: "1:42698345380:web:2336a637f19c0cd9b38f31",
  measurementId: "G-WRT9RRTY1J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const firestore = getFirestore(app);

export { firestore };
