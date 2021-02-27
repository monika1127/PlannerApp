import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PuffLoader from 'react-spinners/PuffLoader';
import {
  getNoteItems,
  deleteNoteList,
  sortNoteItems,
} from '../../redux/notes/actions';
import { notesSelector } from '../../redux/notes/selectors';

import AddNote from '../Form/AddNote';
import NoteItem from './NoteItem';
import DeleteAlert from '../DeleteAlert';
import { ReactComponent as DeleteIcon } from '../../assets/icons/bin2.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/filter.svg';
import { ReactComponent as SortIcon } from '../../assets/icons/move-down.svg';

const Note = (props) => {
  const [alert, setAlert] = useState(false);
  const {
    notes: { noteItems, isLoading },
    getNoteItems,
    deleteNoteList,
    sortNoteItems,
    history,
  } = props;
  const noteId = props.match.params.id;

  useEffect(() => {
    getNoteItems(noteId);
  }, [getNoteItems, noteId]);

  const deleteFunction = () => {
    deleteNoteList(noteId);
    history.push('/dashboard/notes');
  };

  return isLoading ? (
    <PuffLoader color={'#385A64'} size={48} loading={isLoading} />
  ) : (
    <div className="note__container">
      <div className="note__header">
        <div className="note__title">Note tititle frem auth</div>
        <div className="note__options">
          <div className="note__options-icon" onClick={sortNoteItems}>
            <SortIcon width={16} height={16} />
          </div>
          <div className="note__options-icon">
            <FilterIcon width={16} height={16} />
          </div>
          <div
            className={`note__options-icon ${
              alert && 'note__options-icon--danger'
            }`}
            onClick={() => setAlert(true)}
          >
            <DeleteIcon width={16} height={16} />
          </div>
        </div>
        <div className="note__detailed-options"></div>
      </div>
      {alert && (
        <div className="note__detailed-options--danger">
          <DeleteAlert
            deleteBtnText="Delete List"
            alertText="When you delete the note list, all items will be permanently lost. Are you sure you want to delete this note list?"
            deleteFunction={deleteFunction}
            cancellFunction={() => setAlert(false)}
          />
        </div>
      )}
      {!alert && (
        <Fragment>
          <div className="note__items-container">
            {noteItems.map((note) => (
              <div className="note__item" key={note.id}>
                <NoteItem noteItem={note} noteID={noteId} />
              </div>
            ))}
          </div>
          <div className="note__add-new">
            <AddNote noteCategory={noteId} />
          </div>
        </Fragment>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  notes: notesSelector(state),
});

Note.propTypes = {
  getNoteItems: PropTypes.func.isRequired,
  deleteNoteList: PropTypes.func.isRequired,
  notes: PropTypes.object.isRequired,
  sortNoteItems: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getNoteItems,
  deleteNoteList,
  sortNoteItems,
})(Note);
