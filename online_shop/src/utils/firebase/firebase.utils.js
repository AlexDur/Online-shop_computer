import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFireStore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvSfbzrzADc_23WZkKMJVhx3TtTDbvWdE",

  authDomain: "online-shop-db-267cf.firebaseapp.com",

  projectId: "online-shop-db-267cf",

  storageBucket: "online-shop-db-267cf.appspot.com",

  messagingSenderId: "1066129055647",

  appId: "1:1066129055647:web:faad7c62e690472ebc27aa",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Various providers like github, facebook, twitter, here: Google
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

/* export const db = getFireStore(); */

/* export const createUserDocumentFromAuth = async userAuth => {
  doc takes three arguments (database, collection, some identifier)
  const userDocRef = doc(db, "users", "userAuth.uid");

  console.log(userDocRef);
};
 */
