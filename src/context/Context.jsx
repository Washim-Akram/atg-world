import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const UserContext = createContext(null);

const Context = ({ children }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSignInShow = (value) => {
    if (value) {
      setShowSignIn(true);
      setShowSignUp(false);
    } else {
      setShowSignIn(false);
    }
  };

  const handleSignUpShow = (value) => {
    if (value) {
      setShowSignUp(true);
      setShowSignIn(false);
    } else {
      setShowSignUp(false);
    }
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const manageUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    showSignIn,
    showSignUp,
    handleSignInShow,
    handleSignUpShow,

    createUser,
    manageUser,
    signIn,
    googleSignIn,
    facebookSignIn,
    logOut,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default Context;
