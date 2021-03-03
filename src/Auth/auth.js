import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../utils/api';

const AuthContext = createContext();

function AuthProvider(props) {
  const storageUser = localStorage.getItem('user');
  const [currentUser, setCurrentUser] = useState(
    storageUser ? JSON.parse(storageUser) : null,
  );

  const createUser = (user, setAlert, redirect) => {
    api
      .post('/api/user/register', user)
      .then((res) => {
        localStorage.setItem('auth-token', res.headers.get('Authorization'));
        return res.json();
      })
      .then((res) => {
        setCurrentUser(res);
        localStorage.setItem('user', JSON.stringify(res));
        redirect();
      })
      .catch((err) => {
        setAlert(err);
        console.log(err);
      });
  };

  const loginUser = ({ email, password }, setAlert, redirect) =>
    api
      .post('/api/user/login', { email, password })
      .then((res) => {
        localStorage.setItem('auth-token', res.headers.get('Authorization'));
        return res.json();
      })
      .then((res) => {
        setCurrentUser(res);
        localStorage.setItem('user', JSON.stringify(res));
        redirect();
      })
      .catch((err) => {
        setAlert('Pasword not match');
        console.log(err);
      });

  const logoutUser = () => {
    localStorage.removeItem('auth-token');
    setCurrentUser(null);
  };
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       setCurrentUser(null);
  //     });

  // const deleteUser = () =>
  //   firebase
  //     .auth()
  //     .currentUser.delete()
  //     .then(() => {
  //       setCurrentUser(null);
  //     });

  // const updateUserName = (name) =>
  //   firebase
  //     .auth()
  //     .currentUser.updateProfile({
  //       displayName: name,
  //       photoURL: currentUser.photoURL,
  //     })
  //     .then((currentUser) => {
  //       setCurrentUser(currentUser);
  //     });

  // const updateUserEmail = (email) =>
  //   firebase
  //     .auth()
  //     .currentUser.updateEmail(email)
  //     .then((currentUser) => {
  //       setCurrentUser(currentUser);
  //     });

  // const updateUserPassword = (password) =>
  //   firebase
  //     .auth()
  //     .currentUser.updatePassword(password)
  //     .then((currentUser) => {
  //       setCurrentUser(currentUser);
  //     });

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        createUser,
        loginUser,
        logoutUser,
        // deleteUser,
        // updateUserName,
        // updateUserPassword,
        // updateUserEmail,
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
