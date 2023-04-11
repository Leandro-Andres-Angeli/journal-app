// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAdY5U0K_WPt1KGue1poNGxMQH5nkWA6M0',
  authDomain: 'journal-app-47f52.firebaseapp.com',
  projectId: 'journal-app-47f52',
  storageBucket: 'journal-app-47f52.appspot.com',
  messagingSenderId: '556145598282',
  appId: '1:556145598282:web:7c8fe5f4521da23522abb3',
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { db, googleAuthProvider, firebase };
