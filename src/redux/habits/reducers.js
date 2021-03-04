import {
  GET_HABITS_LIST,
  SET_LOADING,
  ADD_HABIT,
  UPDATE_HABIT_HISTORY
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

      case ADD_HABIT:
        return {
          ...state,
          habits: [...state.habits, action.payload],
        };

        case UPDATE_HABIT_HISTORY:
          const habits = state.habits.map(habit=> habit._id === action.payload._id ? action.payload : habit)
        return{
          ...state,
          habits
        }
    default:
      return state;
  }
};

export default reducer;
