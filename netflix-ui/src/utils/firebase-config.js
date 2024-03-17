import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA0yAf9JiRI8D-YZI_zJ9ViDlcaMpAMmD8",
  authDomain: "react-netflix-clone-91328.firebaseapp.com",
  projectId: "react-netflix-clone-91328",
  storageBucket: "react-netflix-clone-91328.appspot.com",
  messagingSenderId: "930913880394",
  appId: "1:930913880394:web:093dac69c52293f3a719b3",
  measurementId: "G-8WCP325VGM"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);