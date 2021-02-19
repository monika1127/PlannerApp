import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getNoteItems, getNotesList } from '../../redux/notes/actions';
import { notesSelector } from '../../redux/notes/selectors';
import AddNote from '../Form/AddNote';
import NoteItem from './NoteItem';

const Note = (props) => {
  const noteID = props.match.params.id;
  const {
    notes: { noteItems },
    getNoteItems,
  } = props;

  useEffect(() => {
    getNoteItems(noteID);
  }, []);

  return (
    <div className="notes-list">
      <div className="notes-list__header">
        <div className="notes-list__title">My Notes</div>
      </div>
      <div className="notes-list__items-container">
        {noteItems.map((note) => (
          <div className="notes-list__item" key={note.id}>
            <NoteItem noteItem={note} />
          </div>
        ))}
      </div>
      <div className="notes-list__add-new">
        <AddNote noteCategory={noteID} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  notes: notesSelector(state),
});

Note.propTypes = {
  noteID: PropTypes.number.isRequired,
  getNoteItems: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getNotesList, getNoteItems })(Note);
