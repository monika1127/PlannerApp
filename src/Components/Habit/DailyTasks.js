import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {connect, useDispatch, useSelector} from 'react-redux'

import {updateHabitStatus} from '../../redux/habits/actions'
import {habitsListSelector} from '../../redux/habits/selectors'
import {
  dateFullLong,
  dateFull,
  weekDayLong,
  weekDayShort,
} from '../../data/dateFunctions';
import Button from '../Button';
import TaskItem from './TaskItem';
import { ReactComponent as CallendarIcon } from '../../assets/icons/calendar.svg';

//data for day anagement section
const today = new Date();

const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const days = [yesterday, today, tomorrow];

const DailyTasks = ({updateHabitStatus}) => {

  const [selectedDay, selectDay] = useState(today);
  const [calendarActive, setCalendar] = useState(false);
  const [customDate, setCustomDate] = useState(false);

  const habitsList = useSelector(habitsListSelector(selectedDay))
  const dispatch = useDispatch();

  const handleDayClick = (day, modifires = {}) => {
    if (modifires.disabled) return;
    selectDay(day);
    setCalendar(false);
    setCustomDate(true);
  };

  const backForToday = () => {
    selectDay(today);
    setCalendar(false);
    setCustomDate(false);
  };

  const changeHabitStatus = (isDone, habitId)=> {
    const history = { date:  dateFull(selectedDay), done: isDone }
    dispatch(updateHabitStatus(history, habitId))
  }

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
        <div
          className="daily-list__calendar-icon"
          onClick={() => setCalendar(true)}
        >
          <CallendarIcon width={24} height={24} />
        </div>
        {calendarActive && (
          <div className="daily-list__date-picker">
            <DayPicker
              onDayClick={handleDayClick}
              disabledDays={{ before: today }}
            />
            <div className="daily-list__date-picker__buttons">
              <Button
                type="button"
                size="large"
                color="secondary"
                onClick={backForToday}
              >
                Today
              </Button>
              <Button
                type="button"
                size="small"
                color="primary-neutral"
                onClick={() => setCalendar(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
      <div className="daily-list__container">
        <div className="daily-list__section-title --overdued">
          Overdued Task
        </div>
        <TaskItem status="overdued" habitName="TBD" />
      </div>
      <div className="daily-list__container">
        <div className="daily-list__section-title">Habits and Task</div>
        {habitsList.map((habit, index) => (
          <div key={index}>
            <TaskItem status="current" habitName={habit.name} habitId={habit._id} changeHabitStatus={changeHabitStatus}/>
          </div>
        ))}
      </div>
    </div>
  );
};


export default DailyTasks;
