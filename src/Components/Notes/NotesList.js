import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PuffLoader from 'react-spinners/PuffLoader';

import { notesSelector } from '../../redux/notes/selectors';
import AddNoteCategory from '../Form/AddNoteCategory';

const NotesList = ({ notes: { notesCategories, isLoading } }) => {
  return isLoading ? (
    <PuffLoader color={'#385A64'} size={48} loading={isLoading} />
  ) : (
    <div className="notes-list">
      <div className="notes-list__header">Notes Categories</div>
      <div className="notes-list__container">
        {notesCategories.map((note, index) => (
          <div className="notes-list__item_container">
            <div className="notes-list__item_marker"></div>
            <Link
              to={`/dashboard/notes/${note.id}`}
              className="notes-list__item"
              key={index}
            >
              {note.name}
            </Link>
          </div>
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

export default connect(mapStateToProps)(NotesList);
