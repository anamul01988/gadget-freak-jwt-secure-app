
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCxBAcj1PYVmfxdv691x7Ea_5zRSkxcrU4",
  authDomain: "gadget-freak-jwt--app.firebaseapp.com",
  projectId: "gadget-freak-jwt--app",
  storageBucket: "gadget-freak-jwt--app.appspot.com",
  messagingSenderId: "820376046325",
  appId: "1:820376046325:web:5d99c084b09147dfd953bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;