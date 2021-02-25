import React, { useState, Fragment } from 'react';
import { habitsArr } from '../../data/habits-temporary';
import { startOfWeek, endOfWeek, eachDayOfInterval } from 'date-fns';

const today = new Date();

const WeeklyHabitTracker = () => {
  const weekStartDate = startOfWeek(today, { weekStartsOn: 1 });
  const weekEndDate = endOfWeek(today, { weekStartsOn: 1 });
  const weekArr = eachDayOfInterval({ start: weekStartDate, end: weekEndDate });

  console.log(weekArr);
  const [week, setWeek] = useState(weekArr);

  {
    /* <div className="daily-list__day_number">
                {selectedDay.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
              <div className="daily-list__day_name">
                {selectedDay.toLocaleDateString('en-GB', {
                  weekday: 'long',
                })}
              </div> */
  }

  return (
    <Fragment>
      <div className="week-summary__header">
        <div>back</div>
        <div>
          {week[0].toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          })}
        </div>
        <div>
          {week[0].toLocaleDateString('en-GB', {
            weekday: 'long',
          })}
        </div>
        <span>-</span>
        <div>
          {week[6].toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
          })}
        </div>
        <div>
          {week[6].toLocaleDateString('en-GB', {
            weekday: 'long',
          })}
        </div>
        <div>forw.</div>
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
