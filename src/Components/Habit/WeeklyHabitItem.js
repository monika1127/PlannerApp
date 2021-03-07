import React, { useState } from 'react';
import { connect } from 'react-redux';
import { dateFull, weekDayShort } from '../../data/dateFunctions';
import { updateHabitStatus } from '../../redux/habits/actions';
import { ReactComponent as EditIcon } from '../../assets/icons/pencil.svg';
import { Link } from 'react-router-dom';

const WeeklyHabitItem = (props) => {
  const { habit, week, updateHabitStatus, today } = props;
  const [alert, setAlert] = useState(false);

  const changeHabitStatus = (day, status, habitId) => {
    const history = { date: dateFull(day), done: status };
    updateHabitStatus(history, habitId);
  };

  return (
    <div
      key={habit._id}
      className={`week-summary__habit ${alert && '--danger'}`}
    >
      <Link
        to={`/dashboard/edithabit/${habit._id}`}
        className="week-summary__habit-header"
      >
        <EditIcon width={12} height={12} />
        <div className="week-summary__habit-name">{habit.name}</div>
      </Link>

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
                Date.parse(habit.dateCreated) <= Date.parse(day) + 86400000 &&
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
};

export default connect(null, { updateHabitStatus })(WeeklyHabitItem);
