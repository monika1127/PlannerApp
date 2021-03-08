import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { useDispatch, useSelector } from 'react-redux';
import { endOfToday, differenceInDays } from 'date-fns';
import { habitsListSelector } from '../../redux/habits/selectors';
import { updateHabitStatus } from '../../redux/habits/actions';
import {
  dateFullLong,
  dateFull,
  weekDayLong,
  weekDayShort,
} from '../../data/dateFunctions';
import Button from '../Button';
import ActivityItem from './ActivityItem';
import { ReactComponent as CallendarIcon } from '../../assets/icons/calendar.svg';
import DatePicker from '../DatePicker';

//data for day anagement section
const today = endOfToday();

const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const days = [yesterday, today, tomorrow];

const DailyTasks = () => {
  const [selectedDay, selectDay] = useState(today);
  const [customDate, setCustomDate] = useState(false);

  const habitsList = useSelector(habitsListSelector(selectedDay));
  const dispatch = useDispatch();

  const setDay = (day) => {
    differenceInDays(day, today) === 0
      ? setCustomDate(false)
      : setCustomDate(true);
    console.log(day, today);
    selectDay(day);
  };

  const changeHabitStatus = (isDone, habitId) => {
    const history = { date: dateFull(selectedDay), done: isDone };
    console.log(typeof updateHabitStatus);
    dispatch(updateHabitStatus(history, habitId));
  };

  return (
    <div className="daily-list">
      <div className="daily-list__header">
        <div className="daily-list__days">
          {customDate && (
            <div className="daily-list__day--custom">
              <div className="daily-list__day_number">
                {dateFullLong(selectedDay)}
              </div>
              <div className="daily-list__day_name">
                {weekDayLong(selectedDay)}
              </div>
            </div>
          )}
          {!customDate &&
            days.map((day, index) => (
              <div
                key={index}
                className={`daily-list__day ${
                  dateFull(day) === dateFull(selectedDay) && '--selected'
                }`}
                onClick={() => {
                  selectDay(day);
                }}
              >
                <div className="daily-list__day_number">{day.getDate()}</div>
                <div className="daily-list__day_name">{weekDayShort(day)}</div>
              </div>
            ))}
        </div>

        <DatePicker setDay={setDay} />
      </div>
      <div className="daily-lists__container">
        <div className="daily-list__container">
          <div className="daily-list__section-title --overdued">
            Overdued Task
          </div>
          <ActivityItem type="task" status="overdued" name="TBD" />
        </div>
        <div className="daily-list__container">
          <div className="daily-list__section-title">Habits and Task</div>
          {habitsList.map((habit, index) => (
            <div key={index}>
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
      </div>
    </div>
  );
};

export default DailyTasks;
