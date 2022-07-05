
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAeLb0gPAtpKvisF65s1m1hY6sdFRt2Dcg",
  authDomain: "pruebatecnica-4a7e6.firebaseapp.com",
  projectId: "pruebatecnica-4a7e6",
  storageBucket: "pruebatecnica-4a7e6.appspot.com",
  messagingSenderId: "768633470192",
  appId: "1:768633470192:web:f5119394aebdd8dd439635"
};

export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider();

const app = initializeApp(firebaseConfig);
export default app 

export const DataBase = getFirestore()