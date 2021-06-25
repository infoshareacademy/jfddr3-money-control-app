import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB8mOz9VkGizAZvyZCWOnMyDhETCi8o5WE',
  authDomain: 'moneycontrol-eed33.firebaseapp.com',
  projectId: 'moneycontrol-eed33',
  storageBucket: 'moneycontrol-eed33.appspot.com',
  messagingSenderId: '176388755167',
  appId: '1:176388755167:web:cfff45c60f74d7a322a36a'
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut(provider);

export default firebase;
