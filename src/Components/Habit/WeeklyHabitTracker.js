import React, { useState } from 'react';
import { connect } from 'react-redux';
import { startOfWeek, endOfWeek, eachDayOfInterval, sub, add } from 'date-fns';

import { habitsSelector } from '../../redux/habits/selectors';
import { dateDDMM, weekDayLong } from '../../data/dateFunctions';
import WeeklyHabitItem from './WeeklyHabitItem';

import { ReactComponent as PrevIcon } from '../../assets/icons/circle-left.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/circle-right.svg';

const today = new Date();

const WeeklyHabitTracker = ({ habit: { habits } }) => {
  const weekStartDate = startOfWeek(today, { weekStartsOn: 1 });
  const weekEndDate = endOfWeek(today, { weekStartsOn: 1 });
  const weekArr = eachDayOfInterval({ start: weekStartDate, end: weekEndDate });

  const [week, setWeek] = useState(weekArr);

  const setPreviousWeek = () => {
    const updatedStartDate = sub(week[0], { days: 7 });
    const updatedEndDate = sub(week[6], { days: 7 });
    const updatedWeek = eachDayOfInterval({
      start: updatedStartDate,
      end: updatedEndDate,
    });
    setWeek(updatedWeek);
  };

  const setNextWeek = () => {
    const updatedStartDate = add(week[0], { days: 7 });
    const updatedEndDate = add(week[6], { days: 7 });
    const updatedWeek = eachDayOfInterval({
      start: updatedStartDate,
      end: updatedEndDate,
    });
    setWeek(updatedWeek);
  };

  return (
    <div className="week-summary">
      <div className="week-summary__header">
        <div
          className="week-summary__navigation-icon"
          onClick={setPreviousWeek}
        >
          <PrevIcon />
        </div>
        <div className="week-summary__current-week_container">
          <div className="week-summary__current-week">
            <div className="date">{dateDDMM(week[0])}</div>
            <div className="week-day">({weekDayLong(week[0])})</div>
          </div>
          <span>-</span>
          <div className="week-summary__current-week">
            <div className="date">{dateDDMM(week[6])}</div>
            <div className="week-day">({weekDayLong(week[6])})</div>
          </div>
        </div>
        <div className="week-summary__navigation-icon" onClick={setNextWeek}>
          <NextIcon />
        </div>
      </div>
      <div className="week-summary__habits">
        {habits.map((habit) => {
          if (Date.parse(habit.dateCreated) <= Date.parse(week[6]))
            return (
              <WeeklyHabitItem
                key={habit._id}
                habit={habit}
                week={week}
                today={today}
              />
            );
        })}
      </div>
    </div>
  );
};
const mapStateToPops = (state) => ({
  habit: habitsSelector(state),
});
export default connect(mapStateToPops)(WeeklyHabitTracker);
