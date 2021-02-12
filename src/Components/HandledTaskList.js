import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';

const UserPanel = ({ user: { user } }) => {
  return (
    <Fragment>
      <div className="handle-task__summary">
        <div>Today you finished 3 of 10 planned tasks</div>
      </div>
      <div className="handle-task__list">
        <div className="handle-task__task"> TBD</div>
        <div className="handle-task__task"> TBD</div>
        <div className="handle-task__task"> TBD</div>
        <div className="handle-task__task"> TBD</div>
      </div>
      <div className="handle-task__details-btn button button--full button--secondary">
        see more
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(UserPanel);
