import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeItemStatus, deleteItem } from '../../redux/notes/actions';
import { ReactComponent as Bin } from '../../assets/icons/bin2.svg';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';

const ListItem = (props) => {
  const { text, isActive, itemID, changeItemStatus, deleteItem } = props;

  const changeStatus = () => {
    const item = { text: text, noteID: 1, isActive: !isActive };
    changeItemStatus(itemID, item);
  };

  return (
    <div
      className={`list-item__container ${
        !isActive && 'list-item__container--active'
      }`}
    >
      <div className="list-item__checkbox" onClick={changeStatus}>
        <Checkmark width={14} height={14} />
      </div>
      <div className="list-item__description">{text}</div>
      <div
        className="list-item__delete-icon"
        onClick={() => deleteItem(itemID)}
      >
        <Bin width={20} height={20} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isActice: PropTypes.bool.isRequired,
};

export default connect(null, { changeItemStatus, deleteItem })(ListItem);
