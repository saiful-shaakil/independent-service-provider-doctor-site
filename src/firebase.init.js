// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbHe5XHcKCtMRYmxH8li1fvEZmBHQ-ZL4",
  authDomain: "independent-service-prov-2885e.firebaseapp.com",
  projectId: "independent-service-prov-2885e",
  storageBucket: "independent-service-prov-2885e.appspot.com",
  messagingSenderId: "173565598770",
  appId: "1:173565598770:web:9d6d9316fe22cd4dc7302b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
