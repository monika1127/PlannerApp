import { combaineReducers, combineReducers } from 'redux';
import userReducers from './user/reducers';
import notesReducers from './notes/reducers';

export default combineReducers({
  user: userReducers,
  notes: notesReducers,
});
