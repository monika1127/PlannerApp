import {
  LOG_IN,
  LOG_OUT,
  REGIST_USER,
  UPDATE_USER_DATA,
  DELETE_ACCOUNT,
} from './types';

// --------- login ---------

export const login = (values, callbackAlert) => async (dispatch) => {
  console.log('redux - actions start');
  try {
    const res = await fetch(`http://localhost:5000/users/?q=${values.email}`);
    const data = await res.json();

    if (data.length === 0) {
      dispatch(
        callbackAlert(
          'Incorrect email address,user not exist. check if the e-mail address is correct or regist as a new user',
        ),
        console.log('test1'),
      );
    } else if (data[0].password !== values.password) {
      dispatch(callbackAlert('Incorrect password '), console.log('test2'));
    } else if (data[0].password === values.password) {
      dispatch(
        {
          type: LOG_IN,
          payload: data[0],
        },
        callbackAlert(''),
      );
    }
  } catch (err) {
    dispatch({
      type: LOG_IN,
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
        const res_2 = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(values),
        });
        const data_2 = await res_2.json();
        dispatch({
          type: REGIST_USER,
          payload: data_2,
        });
      } catch (err) {}
    }
  } catch (err) {}
};
