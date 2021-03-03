import { api } from '../../utils/api';
import {
  GET_HABITS_LIST,
  SET_LOADING,

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

// export const changeItemStatus = (noteID, itemID, item) => async (dispatch) => {
//   api
//     .put(`/api/note-categories/${noteID}/notes/${itemID}`, item)
//     .then((res) => res.json())
//     .then((res) => {
//       dispatch({
//         type: UPDATE_STATUS,
//         payload: res,
//       });
//     })
//     .catch((err) => console.log(err));
// };

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

// export const addNoteItem = (value, noteID, callback) => async (dispatch) => {
//   api
//     .post(`/api/note-categories/${noteID}/notes`, value)
//     .then((res) => res.json())
//     .then((res) => {
//       dispatch(
//         {
//           type: ADD_NOTE_ITEM,
//           payload: res,
//         },
//         console.log(res),
//         callback(),
//       );
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
