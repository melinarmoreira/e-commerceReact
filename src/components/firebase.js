// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgu_Nvv27K6hb5cYK346rr6pTc-L5u3ko",
  authDomain: "miecommerce-reactjs.firebaseapp.com",
  projectId: "miecommerce-reactjs",
  storageBucket: "miecommerce-reactjs.appspot.com",
  messagingSenderId: "359907342003",
  appId: "1:359907342003:web:d662a5ec87f3a148ade2c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);