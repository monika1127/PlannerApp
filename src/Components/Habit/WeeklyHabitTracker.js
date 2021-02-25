import React, { useState, Fragment } from 'react';
import { habitsArr } from '../../data/habits-temporary';
import { startOfWeek, endOfWeek, eachDayOfInterval, sub, add } from 'date-fns';
import { ReactComponent as PrevIcon } from '../../assets/icons/circle-left.svg';
import { ReactComponent as NextIcon } from '../../assets/icons/circle-right.svg';
const today = new Date();

const WeeklyHabitTracker = () => {
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
            <div className="date">
              {week[0].toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
              })}
            </div>
            <div className="week-day">
              (
              {week[0].toLocaleDateString('en-GB', {
                weekday: 'long',
              })}
              )
            </div>
          </div>
          <span>-</span>
          <div className="week-summary__current-week">
            <div className="date">
              {week[6].toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
              })}
            </div>
            <div className="week-day">
              (
              {week[6].toLocaleDateString('en-GB', {
                weekday: 'long',
              })}
              )
            </div>
          </div>
        </div>
        <div className="week-summary__navigation-icon" onClick={setNextWeek}>
          <NextIcon />
        </div>
      </div>
      <div>
        {habitsArr.map((habit) => (
          <div className="week-summary__habit">
            <div className="week-summary__habit-name">{habit.name}</div>
            <div className="week__container">
              {week.map((day) => (
                <div className="week-day">
                  <div className="week-day__name">
                    {day.toLocaleDateString('en-GB', {
                      weekday: 'short',
                    })}
                  </div>
                  <div
                    className={`week-day__field
                ${habit.weeklyFrequency.includes(day.getDay()) && '--activated'}
                ${Date.parse(day) <= today && '--clickable'}
                ${
                  habit.history.find((h) =>
                    Object.keys(h).includes(day.toLocaleDateString('en-CA')),
                  )
                    ? '--done'
                    : '--not-done'
                }`}
                    onClick={() => Date.parse(day) <= today && console.log(day)}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default WeeklyHabitTracker;
