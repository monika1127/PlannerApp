import { combaineReducers, combineReducers } from 'redux';
import notesReducers from './notes/reducers';
import habitsReducers from './habits/reducers'

export default combineReducers({
  notes: notesReducers,
  habits: habitsReducers,
});
