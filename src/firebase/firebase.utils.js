import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCOOabw0D49RjIpmMx2QSBmMqSucwU99Mo',
  authDomain: 'crwn-db-d6ba9.firebaseapp.com',
  databaseURL: 'https://crwn-db-d6ba9.firebaseio.com',
  projectId: 'crwn-db-d6ba9',
  storageBucket: '',
  messagingSenderId: '276251190173',
  appId: '1:276251190173:web:43882e60b6043990'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
