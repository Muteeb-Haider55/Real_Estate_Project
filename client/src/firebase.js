// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-7cae4.firebaseapp.com",
  projectId: "real-estate-7cae4",
  storageBucket: "real-estate-7cae4.firebasestorage.app",
  messagingSenderId: "855499252086",
  appId: "1:855499252086:web:3945d8cf6845a7428e5a57",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
