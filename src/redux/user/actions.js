import {
  LOG_IN,
  LOG_OUT,
  REGIST_USER,
  LOGIN_ERROR,
  UPDATE_USER_DATA,
  DELETE_ACCOUNT,
} from './types';

// --------- login ---------

export const login = (values, callbackAlert) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/users/?q=${values.email}`);
    const user = await res.json();

    if (user.length === 0 || user[0].password !== values.password) {
      dispatch(callbackAlert('Incorrect email address or password'));
    } else if (user[0].password === values.password) {
      dispatch(
        {
          type: LOG_IN,
          payload: user[0],
        },
        callbackAlert(''),
      );
    }
  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: 'error',
    });
  }
};

// --------- signup ---------

export const signup = (values, callbackAlert) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/users/?q=${values.email}`);
    const data = await res.json();

    if (data.length === 1) {
      dispatch(callbackAlert('User with this address already exists'));
    } else {
      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(values),
        });
        const newUser = await response.json();
        dispatch({
          type: REGIST_USER,
          payload: newUser,
        });
      } catch (err) {}
    }
  } catch (err) {}
};

export const logout = () => {
  return {
    type: LOG_OUT,
  };
};
export const updateUserData = (userID, values, callback) => async (
  dispatch,
) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userID}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    const updatedUser = await response.json();
    dispatch(
      {
        type: UPDATE_USER_DATA,
        payload: updatedUser,
      },
      callback(),
    );
  } catch (err) {}
};

// change unic usaer data (email address)
export const updateUserUnicData = (
  userID,
  values,
  callback,
  callbackAlert,
) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/users/?q=${values.email}`);
    const data = await res.json();

    if (data.length >= 1) {
      dispatch(callbackAlert('User with this address already exists'));
    } else {
      try {
        const response = await fetch(`http://localhost:5000/users/${userID}`, {
          method: 'PUT',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(values),
        });
        const updatedUser = await response.json();
        dispatch(
          {
            type: UPDATE_USER_DATA,
            payload: updatedUser,
          },
          callback(),
        );
      } catch (err) {}
    }
  } catch (err) {}
};

export const deleteAccount = (userID) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/users/${userID}`, {
      method: 'DELETE',
    });
    await response.json();
    dispatch({
      type: DELETE_ACCOUNT,
    });
  } catch (err) {}
};
