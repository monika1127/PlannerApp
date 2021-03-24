import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as AddIcon } from '../assets/icons/plus.svg';

const ShortcutButton = ({ routePath }) => {
  return (
    <div className="shortcut__button">
      <Link to={routePath} className="add__button">
        <AddIcon width={20} height={20} />
      </Link>
      <div className="add__button-description">ADD ACTIVITY</div>
    </div>
  );
};

ShortcutButton.propTypes = {
  routePath: PropTypes.string.isRequired,
};

export default ShortcutButton;
