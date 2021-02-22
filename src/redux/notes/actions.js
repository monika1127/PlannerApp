import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_CATEGORY,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  DELETE_NOTE_LIST,
  UPDATE_STATUS,
  SORT_NOTE_ITEMS,
  SET_LOADING,
} from './types';
import firebase from '../../firebaseConfig';
import { doc } from 'prettier';

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

    const noteItems = await response.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    dispatch({
      type: GET_NOTE_ITEMS,
      payload: noteItems,
    });
  } catch (err) {}
};

export const changeItemStatus = (noteID, todoItemID, values) => async (
  dispatch,
) => {
  try {
    await firebase
      .firestore()
      .collection('notesCategories')
      .doc(noteID)
      .collection('todos')
      .doc(todoItemID)
      .update(values);

    const updatedItem = { ...values, id: todoItemID };
    dispatch({
      type: UPDATE_STATUS,
      payload: updatedItem,
    });
  } catch (err) {
    console.log({ err });
  }
};

export const deleteItem = (noteID, todoItemID) => async (dispatch) => {
  setLoading();
  try {
    await firebase
      .firestore()
      .collection('notesCategories')
      .doc(noteID)
      .collection('todos')
      .doc(todoItemID)
      .delete();
    dispatch({
      type: DELETE_NOTE_ITEM,
      payload: todoItemID,
    });
  } catch (err) {}
};

export const addNoteItem = (noteID, values, callback) => async (dispatch) => {
  try {
    const response = await firebase
      .firestore()
      .collection('notesCategories')
      .doc(noteID)
      .collection('todos')
      .add(values);
    const data = await (await response.get()).data();

    const newItem = { ...data, id: response.id };
    dispatch(
      {
        type: ADD_NOTE_ITEM,
        payload: newItem,
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
    dispatch({
      type: DELETE_NOTE_LIST,
      payload: id,
    });
  } catch (err) {}
};

export const sortNoteItems = () => {
  setLoading();
  return { type: SORT_NOTE_ITEMS };
};
