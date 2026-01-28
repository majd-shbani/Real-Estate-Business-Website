import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWb-dHV7vsCylee4hrS94FiQeLdpxlCgc",
  authDomain: "real-estate-e7b00.firebaseapp.com",
  projectId: "real-estate-e7b00",
  storageBucket: "real-estate-e7b00.firebasestorage.app",
  messagingSenderId: "1051307045159",
  appId: "1:1051307045159:web:36960654c0ba4b051bb902",
  databaseURL: "https://real-estate-e7b00-default-rtdb.firebaseio.com"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);