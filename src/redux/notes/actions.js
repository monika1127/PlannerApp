import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  UPDATE_STATUS,
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

export const changeItemStatus = (id, values) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/noteItems/${id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    const updatedItem = await res.json();
    dispatch(
      {
        type: UPDATE_STATUS,
        payload: updatedItem,
      },
      console.log(updatedItem),
    );
  } catch (err) {}
};

export const deleteItem = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/noteItems/${id}`, {
      method: 'DELETE',
    });
    await res.json();
    dispatch({
      type: DELETE_NOTE_ITEM,
      payload: id,
    });
  } catch (err) {}
};

export const addNoteItem = (values) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/noteItems/`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    dispatch({
      type: ADD_NOTE_ITEM,
      payload: data,
    });
  } catch (err) {}
};
