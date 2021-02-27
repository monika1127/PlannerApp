import React from 'react';

import HandleTaskList from './HandledTaskList';
import ShortcutButton from './ShortcutButton';

import { ReactComponent as Avatar } from '../assets/icons/user.svg';

const UserPanel = () => {
  return (
    <div className="user-panel">
      <div className="user-data">
        <div className="user-data__name">Hello </div>
        <div className="user-data__avatar">
          <Avatar width={24} height={24} />
        </div>
      </div>
      <div className="user-panel__task-list">
        <HandleTaskList />
      </div>
      <div className="user-panel__shortcut-btns">
        <ShortcutButton />
      </div>
    </div>
  );
};

export default UserPanel;
