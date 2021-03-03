import React, { Fragment } from 'react';
import TaskItem from './Habit/TaskItem';
import {connect} from 'react-redux'
import {habitsListSelector} from '../redux/habits/selectors'

const today = new Date();

const HandleTaskList = ({habitsList}) => {

  return (
    <Fragment>
      <div className="handle-task__summary">
        <div>Today you finished 3 of 10 planned tasks</div>
      </div>
      <div className="handle-task__list">
        {habitsList.length >0 ? habitsList.map((habit, index) => (
          <div key={index}>
            <TaskItem status="current" habitName={habit.name} />
          </div>
        )): <div>No task</div>}
      </div>
      <div className="handle-task__details-btn button button--full button--secondary">
        see more
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  habitsList: habitsListSelector(state, today)
})

export default connect(mapStateToProps)(HandleTaskList);
