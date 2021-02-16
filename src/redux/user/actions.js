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

    if (user.length === 0) {
      dispatch(
        callbackAlert(
          'Incorrect email address,user not exist. check if the e-mail address is correct or regist as a new user',
        ),
      );
    } else if (user[0].password !== values.password) {
      dispatch(callbackAlert('Incorrect password '), console.log('test2'));
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
export const updateUserData = () => {
  console.log('user data updated');
};
