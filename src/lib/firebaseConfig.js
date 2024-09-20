// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARHON-XmIKjwKQFehEwbHTvG3H20E804g",
  authDomain: "alt-exam-la.firebaseapp.com",
  databaseURL: "https://alt-exam-la-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "alt-exam-la",
  storageBucket: "alt-exam-la.appspot.com",
  messagingSenderId: "63257975214",
  appId: "1:63257975214:web:cf00a194aeb2deb796903f",
  measurementId: "G-QHZTVD2WT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };