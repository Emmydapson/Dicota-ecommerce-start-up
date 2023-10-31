
import { initializeApp } from "firebase/app";
import  {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBqz6J57u66IOybJWjXY_MyTZoL58Nzml8",
  authDomain: "dicota-ecommerce-start-up.firebaseapp.com",
  projectId: "dicota-ecommerce-start-up",
  storageBucket: "dicota-ecommerce-start-up.appspot.com",
  messagingSenderId: "837089913387",
  appId: "1:837089913387:web:6159595fcbf144976a986e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app