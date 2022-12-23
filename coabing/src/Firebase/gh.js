// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   signInWithRedirect,
//   signInWithPopup,
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';
// import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyCgeq4VKGVl2Iim1A-A8I8hkJbADv4napE",
//     authDomain: "emart-482df.firebaseapp.com",
//     projectId: "emart-482df",
//     storageBucket: "emart-482df.appspot.com",
//     messagingSenderId: "639576138911",
//     appId: "1:639576138911:web:170b28738c16d8010caeaa"
// };
//  // eslint-disable-next-line
// const firebaseApp = initializeApp(firebaseConfig);

// const googleProvider = new GoogleAuthProvider();

// googleProvider.setCustomParameters({
//   prompt: 'select_account',
// });

// export const auth = getAuth();
// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);

// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, 'users', userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error) {
//       console.log('error creating the user', error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// const Kobby = () => {
//     return <h1>This is the jackets page</h1>;
//   };
  
//   export default Kobby;
import { useState } from 'react';

import FormInput from '../../Components/Form-input/form-input.component';
import Button from '../../Components/Button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../Firebase/firebase';

import "./sign-in.component.styles.css"