import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN8qtZETKSGrt4LgM7wnrU-dkY2_rXDwI",
  authDomain: "crwnsales-db.firebaseapp.com",
  projectId: "crwnsales-db",
  storageBucket: "crwnsales-db.appspot.com",
  messagingSenderId: "717364927364",
  appId: "1:717364927364:web:2050e861f1d29901a15bd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
