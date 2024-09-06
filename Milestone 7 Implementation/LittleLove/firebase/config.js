// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase} from "firebase/database"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCH0qmv2dNMdXjjEabbTuKKlJ3HKWsyl4s",
//   authDomain: "test-reactnative-9bda1.firebaseapp.com",
//   databaseURL: "https://test-reactnative-9bda1-default-rtdb.firebaseio.com",
//   projectId: "test-reactnative-9bda1",
//   storageBucket: "test-reactnative-9bda1.appspot.com",
//   messagingSenderId: "673563042166",
//   appId: "1:673563042166:web:100c2101e5ada099bd9a57"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getDatabase(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
 export const firebaseConfig = {

  // apiKey: "AIzaSyD8KgliMnL-YMr3FPskzbkxKGXUaT4ZYxc",
  // authDomain: "little-love-aef05.firebaseapp.com",
  // projectId: "little-love-aef05",
  // storageBucket: "little-love-aef05.appspot.com",
  // messagingSenderId: "749665791874",
  // appId: "1:749665791874:web:1c94ab92c31c72620e299b",

  apiKey: "AIzaSyCH0qmv2dNMdXjjEabbTuKKlJ3HKWsyl4s",
  authDomain: "test-reactnative-9bda1.firebaseapp.com",
  databaseURL: "https://test-reactnative-9bda1-default-rtdb.firebaseio.com",
  projectId: "test-reactnative-9bda1",
  storageBucket: "test-reactnative-9bda1.appspot.com",
  messagingSenderId: "673563042166",
  appId: "1:673563042166:web:100c2101e5ada099bd9a57"
 
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase (app);