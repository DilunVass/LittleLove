
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
 export const firebaseConfig = {

 
 
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase (app);
