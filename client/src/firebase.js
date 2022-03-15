import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "devtracker-f8a3f.firebaseapp.com",
  projectId: "devtracker-f8a3f",
  storageBucket: "devtracker-f8a3f.appspot.com",
  messagingSenderId: "400355537089",
  appId: "1:400355537089:web:b15ebafdcd764a21a3e440",
  measurementId: "G-S16529VLX1"
}

const app = initializeApp(firebaseConfig);
export const authentification = getAuth(app);
