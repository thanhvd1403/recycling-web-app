// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAg5cc-gNUOeLBtishBLjGoLXUzgj-jVeY",
  authDomain: "cz2006-web-app.firebaseapp.com",
  projectId: "cz2006-web-app",
  storageBucket: "cz2006-web-app.appspot.com",
  messagingSenderId: "278618037050",
  appId: "1:278618037050:web:41373e3f25ddfee2144e03",
  measurementId: "G-3NPV0LKQ7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFireStore(app);
