import React from 'react';
import { connect } from 'react-redux';
import PuffLoader from 'react-spinners/PuffLoader';

import HandleTaskList from './HandledTaskList';
import ShortcutButton from './ShortcutButton';
import { habitsSelector } from '../redux/habits/selectors';
import { ReactComponent as Avatar } from '../assets/icons/user.svg';

const UserPanel = ({ habits: { habits, habitsLoading } }) => {
  return (
    <div className="user-panel">
      <div className="user-data">
        <div className="user-data__name">Hello </div>
        <div className="user-data__avatar">
          <Avatar width={24} height={24} />
        </div>
      </div>
      <div className="user-panel__task-list">
        {habitsLoading ? <PuffLoader /> : <HandleTaskList />}
      </div>
      <div className="user-panel__shortcut-btns">
        <ShortcutButton routePath="/dashboard/activity/new" />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  habits: habitsSelector(state),
});
export default connect(mapStateToProps)(UserPanel);
