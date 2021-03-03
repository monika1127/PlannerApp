import {
  GET_HABITS_LIST,
  SET_LOADING,
  } from './types';

const initialState = {
  habits: [],
  habitsLoading: true,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_LOADING:
    return {
      ...state,
      habitsLoading: true,
    };

    case GET_HABITS_LIST:
      return {
        ...state,
        habits: action.payload,
        habitsLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
