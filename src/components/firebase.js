import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


var firebaseApp = firebase.initializeApp({
   
  apiKey: "AIzaSyAbitDw8GFuKpO-X4QY7zKmJ2V-nIpaiAI",
  authDomain: "ggcintrowebcontactform.firebaseapp.com",
  projectId: "ggcintrowebcontactform",
  storageBucket: "ggcintrowebcontactform.appspot.com",
  messagingSenderId: "803741179740",
  appId: "1:803741179740:web:7842c82877793880c2ab99",
  measurementId: "G-3QSEHXVV06"


});
 
var db = firebaseApp.firestore();

export  {db}