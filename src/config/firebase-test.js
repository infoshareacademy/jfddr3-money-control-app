import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyB8mOz9VkGizAZvyZCWOnMyDhETCi8o5WE',
  authDomain: 'moneycontrol-eed33.firebaseapp.com',
  projectId: 'moneycontrol-eed33',
  storageBucket: 'moneycontrol-eed33.appspot.com',
  messagingSenderId: '176388755167',
  appId: '1:176388755167:web:cfff45c60f74d7a322a36a'
});

export const auth = app.auth();
export default app;
