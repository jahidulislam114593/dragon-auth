import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcYpLnAU72Gw_JiA0XJDIOV-tTYmpuGIE",
  authDomain: "dragon-auth-9b745.firebaseapp.com",
  projectId: "dragon-auth-9b745",
  storageBucket: "dragon-auth-9b745.appspot.com",
  messagingSenderId: "350507592004",
  appId: "1:350507592004:web:c2067409d3af555b04cf11",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
