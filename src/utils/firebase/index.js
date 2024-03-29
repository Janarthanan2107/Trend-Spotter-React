// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// *****Note:**** //
// 1. getAuth is for authenticating the app for google firebase
// 2. signInWithPopup is sign in with a popup
// 3. GoogleAuthProvider will provide the googleAuth function for App
// 4. createUserWithEmailAndPassword register your account
// 5. signInWithEmailAndPassword login with registered account
// 6. onAuthStateChanged backTrack the user which user is logged in or out
// 7. sign out the user

// fire store database
import { getFirestore } from "firebase/firestore";

// To create or overwrite a single document
import { doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-5xA7GqtAhhRojl2qV3Bap6nnfqPbbN8",
    authDomain: "practice-649fd.firebaseapp.com",
    projectId: "practice-649fd",
    storageBucket: "practice-649fd.appspot.com",
    messagingSenderId: "103084443162",
    appId: "1:103084443162:web:00078b03a6734119a033a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// clone the googleAuthProvider
const provider = new GoogleAuthProvider();

// signIn method accepts two arguments that initialized app and google provider
const signInWithGooglePopup = () => signInWithPopup(auth, provider)

// create user with email and password 
const createUserForGoogle = async (email, password) => {
    if (!email && !password) return;
    return createUserWithEmailAndPassword(auth, email, password)
}

// sign in with registered account
const signInAuthForGoogle = async (email, password) => {
    if (!email && !password) return;
    return signInWithEmailAndPassword(auth, email, password)
}

// sign out the user
const signOutUser = () => {
    return signOut(auth)
}

// tracker the login logout details
const onAuthStateChangeListener = (callback) => {
    onAuthStateChanged(auth, callback)
}

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    // // check once your values are returning
    // console.log("user Name:", userAuth.displayName);
    // console.log("user email:", userAuth.email);
    // console.log("user photo:", userAuth.photoURL);

    const userDocRef = doc(db, "user", userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });

            const userData = {
                uid: userAuth.uid,
                displayName,
                email,
                createdAt,
                ...additionalInfo
            };
            localStorage.setItem('userData', JSON.stringify(userData));
            // console.log('User data stored in localStorage:', userData);
        } catch (err) {
            console.log("Something went wrong!", err.message)
        }
    }

    return userDocRef;
}

const getUserDataFromCollection = async (userAuth) => {
    const docRef = doc(db, "user", userAuth.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
}


export { db, signInWithGooglePopup, createUserDocFromAuth, createUserForGoogle, signInAuthForGoogle, onAuthStateChangeListener, signOutUser, getUserDataFromCollection }