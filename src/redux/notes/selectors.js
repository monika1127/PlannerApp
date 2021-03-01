export const notesSelector = (state) => state.notes;
export const categorySelector = (state, noteCategoryId) =>
  state.notes.notesCategories.find(({ _id }) => _id === noteCategoryId);
