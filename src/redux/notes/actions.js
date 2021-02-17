import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  DEAVTIVE_NOTE_ITEM,
} from './types';

export const getNotesList = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/noteCategories');
    const categories = await res.json();
    dispatch({
      type: GET_NOTES_LIST,
      payload: categories,
    });
  } catch (err) {}
};

export const getNoteItems = () => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/noteItems');
    const items = await res.json();
    dispatch({
      type: GET_NOTE_ITEMS,
      payload: items,
    });
  } catch (err) {}
};
