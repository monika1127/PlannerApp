import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { habitsSelector } from '../../redux/habits/selectors';
import { startOfWeek, endOfWeek, eachDayOfInterval, sub, add } from 'date-fns';
import {
  dateFull,
  dateDDMM,
  weekDayLong,
  weekDayShort,
} from '../../data/dateFunctions';
import { updateHabitStatus } from '../../redux/habits/actions';
import { ReactComponent as PrevIcon } from '../../assets/icons/circle-left.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/circle-right.svg';

const today = new Date();

const WeeklyHabitTracker = ({ habit: { habits }, updateHabitStatus }) => {
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

  const changeHabitStatus = (day, status, habitId) => {
    const history = { date: dateFull(day), done: status };
    updateHabitStatus(history, habitId);
  };

  return (
    <Fragment>
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
      <div>
        {habits.map((habit) => {
          if (Date.parse(habit.dateCreated) < Date.parse(week[6]))
            return (
              <div key={habit._id} className="week-summary__habit">
                <div className="week-summary__habit-name">{habit.name}</div>
                <div className="week__container">
                  {week.map((day, index) => (
                    <div key={index} className="week-day">
                      <div className="week-day__name">{weekDayShort(day)}</div>
                      <div
                        className={`week-day__field
                ${
                  habit.weeklyFrequency[day.getDay()] &&
                  Date.parse(habit.dateCreated) < Date.parse(day) + 86400000 &&
                  '--activated'
                }
                ${Date.parse(day) <= today && '--clickable'}
                ${
                  habit.history &&
                  (habit.history[dateFull(day)] ? '--done' : '--not-done')
                }
                `}
                        onClick={() =>
                          Date.parse(day) <= today &&
                          Date.parse(habit.dateCreated) <=
                            Date.parse(day) + 86400000 &&
                          changeHabitStatus(
                            day,
                            habit.history &&
                              (habit.history[dateFull(day)] ? false : true),
                            habit._id,
                          )
                        }
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            );
        })}
      </div>
    </Fragment>
  );
};
const mapStateToPops = (state) => ({
  habit: habitsSelector(state),
});
export default connect(mapStateToPops, { updateHabitStatus })(
  WeeklyHabitTracker,
);
