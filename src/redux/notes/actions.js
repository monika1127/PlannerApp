import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  UPDATE_STATUS,
  SET_LOADING,
  ADD_NOTE_CATEGORY,
  SORT_NOTE_ITEMS,
} from './types';
import firebase from '../../firebaseConfig';

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const getNotesCategories = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await firebase
      .firestore()
      .collection('notesCategories')
      .get();

    const categories = await response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    dispatch({
      type: GET_NOTES_LIST,
      payload: categories,
    });
  } catch (err) {}
};

export const getNoteItems = (noteID) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await firebase
      .firestore()
      .collection('notesCategories')
      .doc(noteID)
      .collection('todos')
      .get();

    const noteItems = await response.docs.map((doc) => doc.data());

    dispatch({
      type: GET_NOTE_ITEMS,
      payload: noteItems,
    });
  } catch (err) {}
};

export const changeItemStatus = (id, values) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const res = await fetch(`http://localhost:5000/noteItems/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    const updatedItem = await res.json();
    dispatch({
      type: UPDATE_STATUS,
      payload: updatedItem,
    });
  } catch (err) {}
};

export const deleteItem = (id) => async (dispatch) => {
  setLoading();
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

export const addNoteItem = (values, callback) => async (dispatch) => {
  setLoading();
  try {
    const res = await fetch(`http://localhost:5000/noteItems`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    dispatch(
      {
        type: ADD_NOTE_ITEM,
        payload: data,
      },
      callback(),
    );
  } catch (err) {}
};

export const addNoteCategory = (values, callback) => async (dispatch) => {
  try {
    const userId = firebase.auth().currentUser.uid;
    const response = await firebase
      .firestore()
      .collection('notesCategories')
      .add({ name: values.name, todos: [], userId });

    const foo = await (await response.get()).data();
    const data = { ...foo, id: response.id };

    dispatch(
      {
        type: ADD_NOTE_CATEGORY,
        payload: data,
      },
      callback(),
    );
  } catch (err) {}
};

export const deleteNoteList = (id) => async (dispatch) => {
  try {
    await firebase.firestore().collection('notesCategories').doc(id).delete();
  } catch (err) {}
};

export const sortNoteItems = () => {
  setLoading();
  return { type: SORT_NOTE_ITEMS };
};
