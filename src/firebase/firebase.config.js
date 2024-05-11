// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4RLXbgWFZKDdYWZyVyuPIUpC1mO0tg2M",
  authDomain: "food-unity-8b66e.firebaseapp.com",
  projectId: "food-unity-8b66e",
  storageBucket: "food-unity-8b66e.appspot.com",
  messagingSenderId: "443166646599",
  appId: "1:443166646599:web:435afadfd642d44974ec62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;