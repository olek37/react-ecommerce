import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDI2eAFKwyCFAgiNMAVETrxlNiTyH_Kyzs",
    authDomain: "react-ecommerce-590e0.firebaseapp.com",
    databaseURL: "https://react-ecommerce-590e0.firebaseio.com",
    projectId: "react-ecommerce-590e0",
    storageBucket: "",
    messagingSenderId: "480065520282",
    appId: "1:480065520282:web:d319f677c4b74175d19523"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => {
    console.log('hello')
    auth.signInWithPopup(provider);
}

export default firebase;