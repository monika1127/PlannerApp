import { valuesIn } from 'lodash';
import { api } from '../../utils/api';
import {
  GET_HABITS_LIST,
  SET_LOADING,
  ADD_HABIT,
  UPDATE_HABIT_HISTORY

} from './types';

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getHabitsList = () => async (dispatch) => {
  setLoading();
  api
  .get('/api/habits')
    .then((res) => res.json())
    .then((res) => {
      dispatch({
        type: GET_HABITS_LIST,
        payload: res,
      });
    })
    .catch((err) => console.log(err));
  };

  export const addHabit = (values, callback) => async (dispatch) => {
    api
      .post('/api/habits', values)
      .then((res) => res.json())
      .then((res) => {
        dispatch(
          {
            type: ADD_HABIT,
            payload: res,
          },
          console.log(res),
          callback(),
        );
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

// export const deleteItem = (noteID, itemID) => async (dispatch) => {
//   setLoading();
//   api
//     .delete(`/api/note-categories/${noteID}/notes/${itemID}`)
//     .then((res) => {
//       dispatch({
//         type: DELETE_NOTE_ITEM,
//         payload: { noteID, itemID },
//       });
//     })
//     .catch((err) => console.log(err));
// };


// export const addNoteCategory = (value, callback) => async (dispatch) => {
//   api
//     .post('/api/note-categories/', value)
//     .then((res) => res.json())
//     .then((res) => {
//       dispatch(
//         {
//           type: ADD_NOTE_CATEGORY,
//           payload: res,
//         },
//         callback(),
//       );
//     })
//     .catch((err) => console.log(err));
// };

// export const deleteNoteList = (noteID) => async (dispatch) => {
//   api
//     .delete(`/api/note-categories/${noteID}`)
//     .then((res) => {
//       dispatch({
//         type: DELETE_NOTE_LIST,
//         payload: noteID,
//       });
//     })
//     .catch((err) => console.log(err));
// };

// export const sortNoteItems = (noteID) => {
//   setLoading();
//   return { type: SORT_NOTE_ITEMS, payload: noteID };
// };
