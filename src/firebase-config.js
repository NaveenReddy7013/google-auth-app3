// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBCKOhMcwx50Y4oFnKDxOKH4_NKEDxNlU",
  authDomain: "my--login-app-476de.firebaseapp.com",
  projectId: "my--login-app-476de",
  storageBucket: "my--login-app-476de.firebasestorage.app",
  messagingSenderId: "537248626912",
  appId: "1:537248626912:web:7839a206ec982ccd5b3885",
  measurementId: "G-5Z66FWF5M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app