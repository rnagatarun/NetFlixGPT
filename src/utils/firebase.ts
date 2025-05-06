// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBicpww-GpOqI0id2iebr7BmVp2Q5pnwk0",
  authDomain: "netflixgpt-faefb.firebaseapp.com",
  projectId: "netflixgpt-faefb",
  storageBucket: "netflixgpt-faefb.firebasestorage.app",
  messagingSenderId: "643517255424",
  appId: "1:643517255424:web:ca58ab47598c4ead97ede5",
  measurementId: "G-0WSNLN9C8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth();