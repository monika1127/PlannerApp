import {
  LOG_IN,
  LOG_OUT,
  REGIST_USER,
  UPDATE_USER_DATA,
  DELETE_ACCOUNT,
} from './types';

const initialState = {
  error: null,
  user: null,
  isLogged: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    case REGIST_USER:
      return {
        ...state,
        user: action.payload,
        isLogged: true,
      };
    default:
      return state;
  }
};
