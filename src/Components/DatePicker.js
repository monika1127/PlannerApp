import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from './Button';
import { endOfToday } from 'date-fns';
import { ReactComponent as CallendarIcon } from '../assets/icons/calendar.svg';
import PropTypes from 'prop-types';

const today = endOfToday();

const DatePicker = (props) => {
  const { setDay } = props;
  const [callendarActive, setCallendarActive] = useState(false);

  const handleDayClick = (day, modifires = {}) => {
    if (modifires.disabled) return;
    setDay(day);
    setCallendarActive(false);
  };

  const setToday = () => {
    setDay(today);
    setCallendarActive(false);
  };

  return (
    <div className="date-picker">
      <div
        className="date-picker__calendar-icon"
        onClick={() => setCallendarActive(!callendarActive)}
      >
        <CallendarIcon width={24} height={24} />
      </div>
      {callendarActive && (
        <div className="date-picker__callendar">
          <DayPicker
            onDayClick={handleDayClick}
            disabledDays={{ before: today }}
          />
          <div className="date-picker__callendar_buttons">
            <Button
              type="button"
              size="large"
              color="secondary"
              onClick={setToday}
            >
              Today
            </Button>
            <Button
              type="button"
              size="small"
              color="primary-neutral"
              onClick={() => setCallendarActive(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

DatePicker.propTypes = {
  setDay: PropTypes.func.isRequired,
};

export default DatePicker;
