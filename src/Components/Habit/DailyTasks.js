import React, { useState } from 'react';
import { ReactComponent as CallendarIcon } from '../../assets/icons/calendar.svg';
import TaskItem from './TaskItem';
import { habitsArr } from '../../data/habits-temporary';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from '../Button';

//data for day anagement section
const today = new Date();

const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const days = [yesterday, today, tomorrow];

const DailyTasks = () => {
  const [selectedDay, selectDay] = useState(today);
  const [calendarActive, setCalendar] = useState(false);
  const [customDate, setCustomDate] = useState(false);

  const habitsList = habitsArr.filter(
    (habit) =>
      // 1.habit creation date before selected day
      Date.parse(habit.dateCreated) <= Date.parse(selectedDay) &&
      // 2. habitat week day matches selected day
      habit.weeklyFrequency.includes(selectedDay.getDay()) &&
      // 3. is habitat still active? (not listed in hebits history)
      !habit.history.some((date) =>
        Object.keys(date).includes(selectedDay.toLocaleDateString('en-CA')),
      ),
  );

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

  return (
    <div>
      <div className="daily-list__header">
        <div className="daily-list__days">
          {customDate && (
            <div className="daily-list__day--custom">
              <div className="daily-list__day_number">
                {selectedDay.toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </div>
              <div className="daily-list__day_name">
                {selectedDay.toLocaleDateString('en-GB', {
                  weekday: 'long',
                })}
              </div>
            </div>
          )}
          {!customDate &&
            days.map((day) => (
              <div
                className={`daily-list__day ${
                  day.toLocaleDateString('en-CA') ===
                    selectedDay.toLocaleDateString('en-CA') && '--selected'
                }`}
                onClick={() => {
                  selectDay(day);
                  console.log(day, selectedDay);
                }}
              >
                <div className="daily-list__day_number">{day.getDate()}</div>
                <div className="daily-list__day_name">
                  {day.toLocaleDateString('en-GB', {
                    weekday: 'short',
                  })}
                </div>
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
        <TaskItem status="overdued" habitName="cos" />
        <TaskItem status="overdued" habitName="cos" />
        <TaskItem status="overdued" habitName="cos" />
      </div>
      <div className="daily-list__container">
        <div className="daily-list__section-title">Habits and Task</div>
        {habitsList.map((habit) => (
          <TaskItem status="current" habitName={habit.name} />
        ))}
      </div>
    </div>
  );
};

export default DailyTasks;
