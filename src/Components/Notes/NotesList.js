import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';

import { getNoteItems, getNotesList } from '../../redux/notes/actions';
import { notesSelector } from '../../redux/notes/selectors';
import AddNoteCategory from '../Form/AddNoteCategory';

const NotesList = (props) => {
  const {
    notes: { notesCategories, isLoading },
    getNotesList,
  } = props;

  useEffect(() => {
    if (notesCategories.length === 0) {
      getNotesList();
    }
  }, []);
  return isLoading ? (
    <PuffLoader color={'#385A64'} size={48} loading={isLoading} />
  ) : (
    <div className="notes-list">
      <div className="notes-list__header">Notes Categories</div>
      <div className="notes-list__container">
        {notesCategories.map((note) => (
          <Link
            to={`/dashboard/notes/${note.id}`}
            className="notes-list__item"
            key={note.id}
          >
            {note.title}
          </Link>
        ))}
      </div>
      <div className="note__add-new">
        <AddNoteCategory />
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
