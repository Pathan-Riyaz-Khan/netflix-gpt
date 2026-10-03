// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1EEt7KrLWbQAjohY3ic6bmWzXeUebIqE",
  authDomain: "netflix-gpt-38115.firebaseapp.com",
  projectId: "netflix-gpt-38115",
  storageBucket: "netflix-gpt-38115.firebasestorage.app",
  messagingSenderId: "713182473409",
  appId: "1:713182473409:web:2da79d37a46bbdba9e3840",
  measurementId: "G-7P3FQ2CSRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
