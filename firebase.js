import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZRjp6kGwVZuQRSZbNZGgw5jkSfAs5Qu4",
  authDomain: "reels-5d202.firebaseapp.com",
  projectId: "reels-5d202",
  storageBucket: "reels-5d202.appspot.com",
  messagingSenderId: "9964578931",
  appId: "1:9964578931:web:f42590b905c2aed7da6206"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    // posts : firestore.collection('posts'),
    // comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.getTimeStamp,
}

export const storage = firebase.storage()