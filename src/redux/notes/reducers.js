import {
  GET_NOTES_LIST,
  GET_NOTE_ITEMS,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  UPDATE_STATUS,
  SET_LOADING,
  ADD_NOTE_CATEGORY,
} from './types';

const initialState = {
  notesCategories: [],
  noteItems: [],
  isLoading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_LIST:
      return {
        ...state,
        notesCategories: action.payload,
        isLoading: false,
      };
    case GET_NOTE_ITEMS:
      return {
        ...state,
        noteItems: action.payload,
        isLoading: false,
      };
    case UPDATE_STATUS:
      const updatedItems = state.noteItems.map((item) =>
        item.id === action.payload.id ? action.payload : item,
      );
      return {
        ...state,
        noteItems: updatedItems,
        isLoading: false,
      };
    case DELETE_NOTE_ITEM:
      const updatedItemList = state.noteItems.filter(
        (item) => item.id !== action.payload,
      );
      return {
        ...state,
        noteItems: updatedItemList,
        isLoading: false,
      };
    case ADD_NOTE_ITEM:
      const noteItems = [...state.noteItems, action.payload];
      return {
        ...state,
        noteItems,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_NOTE_CATEGORY:
      const notesCategories = [...state.notesCategories, action.payload];
      return {
        ...state,
        notesCategories,
        isLoading: false,
      };
    default:
      return state;
  }
};
