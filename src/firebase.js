// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU6YTE1QNVgUSyrix1FFqD0x9Jbx53csI",
  authDomain: "portfolio-4109a.firebaseapp.com",
  projectId: "portfolio-4109a",
  storageBucket: "portfolio-4109a.appspot.com",
  messagingSenderId: "272399486861",
  appId: "1:272399486861:web:81e60fee2d5c80189eb7c4",
  measurementId: "G-123DGFN946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);