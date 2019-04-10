import firebase from 'firebase';
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyATVJc-HleY5tmlp650m3315mZ9AE-b6vs",
    authDomain: "module-work.firebaseapp.com",
    databaseURL: "https://module-work.firebaseio.com",
    projectId: "module-work",
    storageBucket: "module-work.appspot.com",
    messagingSenderId: "83769487029"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase;