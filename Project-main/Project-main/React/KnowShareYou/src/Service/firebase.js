// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_bS9CAlZycd_LGtXZ7T6_bAlFB9GPTm8",
  authDomain: "knowshare-ef81e.firebaseapp.com",
  projectId: "knowshare-ef81e",
  storageBucket: "knowshare-ef81e.appspot.com",
  messagingSenderId: "67647749291",
  appId: "1:67647749291:web:7bad6696bdcad99868cbee",
  measurementId: "G-C01MC1DGLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const provider = new GoogleAuthProvider();
export { auth, provider };
