import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notesSelector } from '../../redux/notes/selectors';
import { changeItemStatus, deleteItem } from '../../redux/notes/actions';
import { ReactComponent as Bin } from '../../assets/icons/bin2.svg';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';

const NoteItem = (props) => {
  const {
    text,
    isActive,
    itemID,
    changeItemStatus,
    deleteItem,
    note: { isLoading },
  } = props;

  const changeStatus = () => {
    const item = { text, noteID: 1, isActive: !isActive };
    changeItemStatus(itemID, item);
  };

  return (
    !isLoading && (
      <div
        className={`note-item__container ${
          !isActive && 'note-item__container--active'
        }`}
      >
        <div className="note-item__checkbox" onClick={changeStatus}>
          <Checkmark width={14} height={14} />
        </div>
        <div className="note-item__description">{text}</div>
        <div
          className="note-item__delete-icon"
          onClick={() => deleteItem(itemID)}
        >
          <Bin width={20} height={20} />
        </div>
      </div>
    )
  );
};

NoteItem.propTypes = {
  text: PropTypes.string.isRequired,
  isActice: PropTypes.bool.isRequired,
  itemID: PropTypes.number.isRequired,
  changeItemStatus: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  note: notesSelector(state),
});
export default connect(mapStateToProps, { changeItemStatus, deleteItem })(
  NoteItem,
);
