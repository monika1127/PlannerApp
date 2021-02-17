import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNoteItems, getNotesList } from '../../redux/notes/actions';
import { notesSelector } from '../../redux/notes/selectors';
import AddNote from '../Form/AddNote';
import ListItem from './ListItem';

const NotesList = (props) => {
  const {
    notes: { noteItems },
    getNoteItems,
    getNotesList,
  } = props;

  useEffect(() => {
    getNoteItems();
    getNotesList();
  }, []);

  return (
    <div className="notes-list">
      <div className="notes-list__header">
        <div className="notes-list__title">My Notes</div>
      </div>
      <div className="notes-list__items-container">
        {noteItems.map((note) => (
          <div className="notes-list__item" key={note.id}>
            <ListItem
              text={note.text}
              isActive={note.isActive}
              itemID={note.id}
            />
          </div>
        ))}
      </div>
      <div className="notes-list__add-new">
        <AddNote noteCategory={1} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  notes: notesSelector(state),
});

export default connect(mapStateToProps, { getNotesList, getNoteItems })(
  NotesList,
);
