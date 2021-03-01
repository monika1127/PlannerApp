import {
  GET_NOTES_LIST,
  ADD_NOTE_ITEM,
  DELETE_NOTE_ITEM,
  DELETE_NOTE_LIST,
  UPDATE_STATUS,
  SET_LOADING,
  ADD_NOTE_CATEGORY,
  SORT_NOTE_ITEMS,
} from './types';

const initialState = {
  notesCategories: [],
  isLoading: false,
};

const sortItems = (arr) =>
  arr.sort((a, b) => {
    if (!a.done && b.done) return -1;
    else return 0;
  });

const sortCategoryNotes = (category) => ({
  ...category,
  notes: sortItems(category.notes),
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES_LIST:
      return {
        ...state,
        notesCategories: action.payload,
        isLoading: false,
      };

    case UPDATE_STATUS:
      const updatedItems = state.notesCategories.map((note) =>
        note._id === action.payload._id ? action.payload : note,
      );

      return {
        ...state,
        notesCategories: updatedItems,
        isLoading: false,
      };

    case DELETE_NOTE_ITEM:
      const updatedItemList = state.notesCategories.map((note) =>
        note._id === action.payload.noteID
          ? {
              ...note,
              notes: note.notes.filter(
                (item) => item._id !== action.payload.itemID,
              ),
            }
          : note,
      );

      return {
        ...state,
        notesCategories: updatedItemList,
        isLoading: false,
      };

    case ADD_NOTE_ITEM: {
      const notesCategories = state.notesCategories.map((category) =>
        category._id === action.payload._id ? action.payload : category,
      );
      return {
        ...state,
        notesCategories,
        isLoading: false,
      };
    }

    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_NOTE_CATEGORY: {
      const updatednotesCategories = [...state.notesCategories, action.payload];
      return {
        ...state,
        notesCategories: updatednotesCategories,
        isLoading: false,
      };
    }
    case SORT_NOTE_ITEMS: {
      const noteCategory = state.notesCategories.find(
        (note) => note._id === action.payload,
      );
      const notes = sortItems(noteCategory.notes);
      const notesCategories = state.notesCategories.map((category) =>
        category._id === action.payload ? { ...category, notes } : category,
      );

      return {
        ...state,
        notesCategories,
        isLoading: false,
      };
    }
    case DELETE_NOTE_LIST:
      const updatedNotesList = state.notesCategories.filter(
        (item) => item._id !== action.payload,
      );
      return {
        ...state,
        notesCategories: updatedNotesList,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
