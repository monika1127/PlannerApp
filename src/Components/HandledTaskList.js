import React from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';

const UserPanel = ({ user: { user } }) => {
  return <div>Your task list - TBD</div>;
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(UserPanel);
