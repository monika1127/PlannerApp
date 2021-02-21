import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from '../firebaseConfig';

const AuthContext = createContext();

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  const createUser = ({ email, password }, setAlert, redirect) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        redirect();
      })
      .catch((error) => setAlert(error.message));

  const loginUser = ({ email, password }, setAlert, redirect) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((currentUser) => {
        setCurrentUser(currentUser);
        redirect();
      })
      .catch((error) => setAlert(error.message));

  return (
    <AuthContext.Provider
      value={{ currentUser, createUser, loginUser }}
      {...props}
    />
  );
}

function useAuthUser() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthUser must be used with AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuthUser };
