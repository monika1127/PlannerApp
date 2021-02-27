import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notesSelector } from '../../redux/notes/selectors';
import { changeItemStatus, deleteItem } from '../../redux/notes/actions';
import { ReactComponent as Bin } from '../../assets/icons/bin2.svg';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';

const NoteItem = (props) => {
  const {
    noteItem: { name, done, id },
    changeItemStatus,
    deleteItem,
    note: { isLoading },
    noteID,
  } = props;

  const changeStatus = () => {
    const item = { name, done: !done };
    changeItemStatus(noteID, id, item);
  };

  return (
    !isLoading && (
      <div
        className={`note-item__container ${
          done && 'note-item__container--active'
        }`}
      >
        <div className="note-item__checkbox" onClick={changeStatus}>
          <Checkmark width={14} height={14} />
        </div>
        <div className="note-item__description">{name}</div>
        <div
          className="note-item__delete-icon"
          onClick={() => deleteItem(noteID, id)}
        >
          <Bin width={16} height={16} />
        </div>
      </div>
    )
  );
};

NoteItem.propTypes = {
  changeItemStatus: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  note: notesSelector(state),
});
export default connect(mapStateToProps, { changeItemStatus, deleteItem })(
  NoteItem,
);
