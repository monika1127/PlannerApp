import React, { Fragment } from 'react';
import ActivityItem from './Habit/ActivityItem';
import { connect } from 'react-redux';
import { dateFull } from '../data/dateFunctions';
import { endOfToday } from 'date-fns';
import {
  habitsListSelector,
  qtyOfPlannedHabitsSelector,
  qtyOfDoneHabitsSelector,
} from '../redux/habits/selectors';
import { updateHabitStatus } from '../redux/habits/actions';

const today = endOfToday();

const HandleTaskList = (props) => {
  const { habitsList, qtyPlanned, qtyDone, updateHabitStatus } = props;

  const changeHabitStatus = (isDone, habitId) => {
    const history = { date: dateFull(today), done: isDone };
    updateHabitStatus(history, habitId);
  };

  return (
    <Fragment>
      <div className="handle-task__summary">
        {qtyPlanned === 0 ? (
          <div>You don't have any task and habits scheduled for today </div>
        ) : (
          <div>
            Today you finished {qtyDone} of {qtyPlanned} planned tasks
          </div>
        )}
      </div>
      <div className="handle-task__list">
        {habitsList.length > 0 &&
          habitsList.map((habit) => (
            <div key={habit._id}>
              <ActivityItem
                type="habit"
                status="current"
                name={habit.name}
                id={habit._id}
                changeStatus={changeHabitStatus}
              />
            </div>
          ))}
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  habitsList: habitsListSelector(today)(state),
  qtyDone: qtyOfDoneHabitsSelector(state, today),
  qtyPlanned: qtyOfPlannedHabitsSelector(state, today),
});

export default connect(mapStateToProps, { updateHabitStatus })(HandleTaskList);
