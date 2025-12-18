// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Remplacez par VOS clés copiées depuis la console Firebase
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "eb-garage-project.firebaseapp.com",
  projectId: "eb-garage-project",
  storageBucket: "eb-garage-project.firebasestorage.app",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);