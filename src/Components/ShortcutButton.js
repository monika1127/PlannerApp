import React from 'react';
import { ReactComponent as AddIcon } from '../assets/icons/plus.svg';
const ShortcutButton = () => {
  return (
    <div className="shortcut__button">
      <div className="add__button">
        <AddIcon width={20} height={20} />
      </div>
      <div className="add__button-description">ADD TASK</div>
    </div>
  );
};

export default ShortcutButton;
