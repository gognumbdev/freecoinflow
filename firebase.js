// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCqwsVml8I1qAsfTZj8ongZYe4RxHD9RY",
  authDomain: "neoflow-d490e.firebaseapp.com",
  projectId: "neoflow-d490e",
  storageBucket: "neoflow-d490e.appspot.com",
  messagingSenderId: "118929919927",
  appId: "1:118929919927:web:8a6aa44e5519313f98e232",
  measurementId: "G-EJ6CZLCC84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);