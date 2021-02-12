import React from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';
import { ReactComponent as Avatar } from '../assets/icons/user.svg';

const UserPanel = ({ user: { user } }) => {
  return (
    <div className="user-panel">
      <div className="user-panel__name">Hello {user.name}</div>
      <div className="user-panel__avatar">
        <Avatar width={24} height={24} />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(UserPanel);
