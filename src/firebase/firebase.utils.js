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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
}

export default firebase;