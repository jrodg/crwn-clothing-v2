// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpFrom from "../../components/sign-up-form/sign-up-form-component";
import SignInFrom from "../../components/sign-in-form /sign-in-form-component";
import './authentication.styles.scss'
// import {
//   signInWithGooglePopup,
//   createUserDocumentFromAuth,  
// } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  //   useEffect(async () => {
  //     const res = await getRedirectResult(auth);
  //     if (res) {
  //         const userDocRef = await createUserDocumentFromAuth(res.user);
  //     }
  //   }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  //   const LogGoogleRedirect = async () => {
  //     const { user } = await signInWithGoogleRedirect();
  //   };

  return (
    <div className='authentication-container'>
   
      <SignInFrom/>
      <SignUpFrom/>
    </div>
  );
};

export default Authentication;
