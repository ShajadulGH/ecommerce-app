// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDQxF7XrRiDc2D9BaNBpG9lekM_sDoYrLk",
  authDomain: "shop-in-d2f51.firebaseapp.com",
  projectId: "shop-in-d2f51",
  storageBucket: "shop-in-d2f51.appspot.com",
  messagingSenderId: "919878144135",
  appId: "1:919878144135:web:667b0f665f4aa44db4a822",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
