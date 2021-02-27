import React, { createContext, useContext, useEffect, useState } from 'react';
import firebase from '../firebaseConfig';
import fb from 'firebase';

const AuthContext = createContext();

function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    currentUser &&
      firebase.auth().setPersistence(fb.auth.Auth.Persistence.LOCAL);
  }, [currentUser]);

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
        console.log(currentUser);
      })
      .catch((error) => console.log({ error }) || setAlert(error.message));

  const logoutUser = () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        setCurrentUser(null);
      });

  const deleteUser = () =>
    firebase
      .auth()
      .currentUser.delete()
      .then(() => {
        setCurrentUser(null);
      });

  const updateUserName = (name) =>
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: name,
        photoURL: currentUser.photoURL,
      })
      .then((currentUser) => {
        setCurrentUser(currentUser);
      });

  const updateUserEmail = (email) =>
    firebase
      .auth()
      .currentUser.updateEmail(email)
      .then((currentUser) => {
        setCurrentUser(currentUser);
      });

  const updateUserPassword = (password) =>
    firebase
      .auth()
      .currentUser.updatePassword(password)
      .then((currentUser) => {
        setCurrentUser(currentUser);
      });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        createUser,
        loginUser,
        logoutUser,
        deleteUser,
        updateUserName,
        updateUserPassword,
        updateUserEmail,
      }}
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
