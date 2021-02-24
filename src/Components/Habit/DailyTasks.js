import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CallendarIcon } from '../../assets/icons/calendar.svg';
import TaskItem from './TaskItem';
const HabitArr = [
  {
    name: 'stretching',
    dateCreated: '2021-02-24',
    weeklyFrequency: [1, 3, 4],
    color: 'blue',
    history: [{ '2021-02-24': false }],
  },
  {
    name: 'twarzing',
    dateCreated: '2021-02-24',
    weeklyFrequency: [1, 2, 3],
    color: 'blue',
    history: [{ '2021-02-24': true }],
  },
];
//data for day anagement section
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
const days = [yesterday, today, tomorrow];

const DailyTasks = (props) => {
  const [selectedDay, selectDay] = useState(today);

  return (
    <div>
      <div className="daily-list__header">
        <div className="daily-list__days">
          {days.map((day) => (
            <div
              className={`daily-list__day ${
                day === selectedDay && '--current-day'
              }`}
            >
              <div className="daily-list__day_number">{day.getDate()}</div>
              <div className="daily-list__day_name">
                {weekdays[day.getDay()]}
              </div>
            </div>
          ))}
        </div>
        <div className="daily-list__callendar">
          <CallendarIcon width={24} height={24} />
        </div>
      </div>
      <div className="daily-list__container">
        <div className="daily-list__section-title --overdued">Overdued</div>
        <TaskItem status="overdued" />
        <TaskItem status="overdued" />
        <TaskItem status="overdued" />
      </div>
      <div className="daily-list__container">
        <div className="daily-list__section-title">Today</div>
        <TaskItem status="current" />
        <TaskItem status="current" />
        <TaskItem status="current" />
      </div>
    </div>
  );
};

DailyTasks.propTypes = {};

export default DailyTasks;
