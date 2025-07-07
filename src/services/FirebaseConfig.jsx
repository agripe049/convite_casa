import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVZmFE8Ht39GJfkHI3a1AzLRcB3E9FD7Q",
  authDomain: "convite-casa.firebaseapp.com",
  projectId: "convite-casa",
  storageBucket: "convite-casa.firebasestorage.app",
  messagingSenderId: "520846106045",
  appId: "1:520846106045:web:7684e3d76b6978609506d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta o Firestore para usar no projeto
const db = getFirestore(app);
export { db };