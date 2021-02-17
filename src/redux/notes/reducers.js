import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  DEAVTIVE_NOTE_ITEM,
} from './types';

const initialState = {
  notesCategories: null,
  noteItems: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_LIST:
      return {
        ...state,
        notesCategories: action.payload,
      };
    case GET_NOTE_ITEMS:
      return {
        ...state,
        noteItems: action.payload,
      };
    default:
      return state;
  }
};
