// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd0szDklpm9aZlpGm9Yd3SoCdukgwazF4",
  authDomain: "react-authentication-27e82.firebaseapp.com",
  projectId: "react-authentication-27e82",
  storageBucket: "react-authentication-27e82.appspot.com",
  messagingSenderId: "362256312691",
  appId: "1:362256312691:web:22802ff33a8f6698cb3d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);