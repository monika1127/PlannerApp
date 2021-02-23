import { combaineReducers, combineReducers } from 'redux';
import notesReducers from './notes/reducers';

export default combineReducers({
  notes: notesReducers,
});
