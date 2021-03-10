import { api } from '../../utils/api';
import {
  GET_HABITS_LIST,
  SET_LOADING,
  ADD_HABIT,
  UPDATE_HABIT_HISTORY,
  DELETE_HABIT,
  SET_ERROR,
} from './types';

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getHabitsList = () => async (dispatch) => {
  dispatch(setLoading());
  api
    .get('/api/habits')
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_HABITS_LIST,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERROR,
      });
    });
};

export const addHabit = (values, callback) => async (dispatch) => {
  api
    .post('/api/habits', values)
    .then((res) => res.json())
    .then((res) => {
      callback();
      dispatch({
        type: ADD_HABIT,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};
export const updateHabitStatus = (values, habitId) => async (dispatch) => {
  api
    .put(`/api/habits/${habitId}/history`, values)
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: UPDATE_HABIT_HISTORY,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteHabit = (habitId) => async (dispatch) => {
  api
    .delete(`/api/habits/${habitId}`)
    .then((res) => {
      dispatch({
        type: DELETE_HABIT,
        payload: { habitId },
      });
    })
    .catch((err) => console.log(err));
};
