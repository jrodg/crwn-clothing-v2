// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpFrom from "../../components/sign-up-form/sign-upform-component";
import {
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
  auth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //   useEffect(async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //         const userDocRef = await createUserDocumentFromAuth(res.user);
  //     }
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  //   const LogGoogleRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //   };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>

      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
      <SignUpFrom/>
    </div>
  );
};

export default SignIn;
