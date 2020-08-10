import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBAAjWWle3uXGu3kfO_Q4Ug0_diFqmldXM",
        authDomain: "crwn-db-f8c6b.firebaseapp.com",
        databaseURL: "https://crwn-db-f8c6b.firebaseio.com",
        projectId: "crwn-db-f8c6b",
        storageBucket: "crwn-db-f8c6b.appspot.com",
        messagingSenderId: "156176591661",
        appId: "1:156176591661:web:1d858a0c6dd5eedaeec1a4",
        measurementId: "G-1Z91WT523B"

};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;











