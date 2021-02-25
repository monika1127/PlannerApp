import React, { Fragment } from 'react';
import { habitsArr } from '../data/habits-temporary';
import TaskItem from './Habit/TaskItem';

const today = new Date();

const HandleTaskList = () => {
  const habitsList = habitsArr.filter(
    (habit) =>
      // 1.habit creation date before selected day
      Date.parse(habit.dateCreated) <= Date.parse(today) &&
      // 2. habitat week day matches selected day
      habit.weeklyFrequency.includes(today.getDay()) &&
      // 3. is habitat still active? (not listed in hebits history)
      !habit.history.some((date) =>
        Object.keys(date).includes(today.toLocaleDateString('en-CA')),
      ),
  );

  return (
    <Fragment>
      <div className="handle-task__summary">
        <div>Today you finished 3 of 10 planned tasks</div>
      </div>
      <div className="handle-task__list">
        {habitsList.map((habit) => (
          <TaskItem status="current" habitName={habit.name} />
        ))}
      </div>
      <div className="handle-task__details-btn button button--full button--secondary">
        see more
      </div>
    </Fragment>
  );
};

export default HandleTaskList;
