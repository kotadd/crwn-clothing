import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore
  .collection('users')
  .doc('njmgynPnzTKkcrYgWK5b')
  .collection('cartItems')
  .doc('AItT0r7DNl9mvvm4Vg3P');

firestore.doc('/cartItems/AItT0r7DNl9mvvm4Vg3P');
firestore.collection('/users/njmgynPnzTKkcrYgWK5b/cartItems/');
