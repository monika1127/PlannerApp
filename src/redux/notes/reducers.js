import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  UPDATE_STATUS,
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
    case UPDATE_STATUS:
      const updatedItems = state.noteItems.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      return {
        ...state,
        noteItems: updatedItems,
      };
    case DELETE_NOTE_ITEM:
      const deletedItem = state.noteItems.map(
        (item) => item.id !== action.payload && item,
      );
      return {
        ...state,
        noteItems: deletedItem,
      };
    default:
      return state;
  }
};
