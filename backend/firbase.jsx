// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkdquDC4BGbrFQyZ62Py1Ri94tnAEP6Ko",
  authDomain: "react-store-df82a.firebaseapp.com",
  databaseURL: "https://react-store-df82a-default-rtdb.firebaseio.com",
  projectId: "react-store-df82a",
  storageBucket: "react-store-df82a.appspot.com",
  messagingSenderId: "586100532124",
  appId: "1:586100532124:web:a518dae7c57cad28289e59",
  measurementId: "G-7LD8BNZ5YG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);