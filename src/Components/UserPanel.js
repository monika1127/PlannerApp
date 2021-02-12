import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';
import { ReactComponent as Avatar } from '../assets/icons/user.svg';
import HandleTaskList from './HandledTaskList';
import ShortcutButton from './ShortcutButton';

const UserPanel = ({ user: { user } }) => {
  return (
    <div className="user-panel">
      <div className="user-data">
        <div className="user-data__name">Hello {user.name}</div>
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
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(UserPanel);
