import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNoteItems, getNotesList } from '../../redux/notes/actions';
import { notesSelector } from '../../redux/notes/selectors';

const NotesList = (props) => {
  const {
    notes: { notesCategories },
    getNotesList,
  } = props;

  useEffect(() => {
    if (notesCategories.length === 0) {
      getNotesList();
    }
  }, []);

  return (
    <div className="notes-list">
      <div className="notes-list__header">
        <div className="notes-list__title">Categories</div>
      </div>
      <div className="notes-list__items-container">
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
    </div>
  );
};
const mapStateToProps = (state) => ({
  notes: notesSelector(state),
});

export default connect(mapStateToProps, { getNotesList, getNoteItems })(
  NotesList,
);
