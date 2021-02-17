import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeItemStatus } from '../../redux/notes/actions';
import { ReactComponent as Bin } from '../../assets/icons/bin2.svg';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';

const ListItem = (props) => {
  const { text, isActive, itemID, changeItemStatus } = props;
  return (
    <div
      className={`list-item__container ${
        !isActive && 'list-item__container--active'
      }`}
    >
      <div className="list-item__checkbox" onClick={changeItemStatus(itemID)}>
        <Checkmark width={14} height={14} />
      </div>
      <div className="list-item__description">
        {text} status: {isActive ? 'aktywny' : 'nieaktywny'}
      </div>
      <div className="list-item__delete-icon">
        <Bin width={20} height={20} />
      </div>
    </div>
  );
};

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  isActice: PropTypes.bool.isRequired,
};

export default connect(null, { changeItemStatus })(ListItem);
