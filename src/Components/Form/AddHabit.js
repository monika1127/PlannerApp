import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { dateFullLong } from '../../data/dateFunctions';
import Input from './Input';
import Button from '../Button';

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';
import { addHabit } from '../../redux/habits/actions';

const today = new Date();

const AddHabit = ({ addHabit }) => {
  const [activityType, setActivityType] = useState(null);
  const [taskDate, setTaskDate] = useState(today);
  const [frequency, setFrequency] = useState([]);

  const handleDayClick = (day, modifires = {}) => {
    if (modifires.disabled) return;
    setTaskDate(day);
  };

  const weekDays = [
    { name: 'Mon', number: 1 },
    { name: 'Tue', number: 2 },
    { name: 'Wed', number: 3 },
    { name: 'Thu', number: 4 },
    { name: 'Fri', number: 5 },
    { name: 'Sat', number: 6 },
    { name: 'Sun', number: 0 },
  ];

  const changeFrequency = (day) => {
    if (Number.isInteger(day) && frequency.includes(day)) {
      const updatedFrequency = frequency.filter((d) => d !== day);
      setFrequency(updatedFrequency);
    } else if (Number.isInteger(day) && !frequency.includes(day)) {
      const updatedFrequency = [...frequency];
      updatedFrequency.push(day);
      setFrequency(updatedFrequency);
    } else if (day === 'weekday') {
      const updatedFrequency = [1, 2, 3, 4, 5];
      setFrequency(updatedFrequency);
    } else if (day === 'everyday') {
      const updatedFrequency = [0, 1, 2, 3, 4, 5, 6];
      setFrequency(updatedFrequency);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(70, 'Max name length is 70 characters').required(),
    }),
    onSubmit: (values, action) => {
      const callback = () => console.log('new habit added');
      const weeklyFrequency = frequency.reduce((acc, curr) => {
        acc[curr] = true;
        return acc;
      }, {});
      const color = 'not active yet';
      const newHabit = { name: values.name, weeklyFrequency, color };
      activityType === 'habit' &&
        frequency.length > 0 &&
        addHabit(newHabit, callback);
    },
  });
  return (
    <form className="add-habit" onSubmit={formik.handleSubmit}>
      <div>
        <div className="add-habit__title">New Habit/Task </div>
        <Input
          icon={<PencilIcon width={16} height={16} />}
          title="text"
          type="text"
          formikData={formik.getFieldProps('name')}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
        <div className="add-habit__buttons">
          <Button
            size="large"
            color="primary-neutral"
            type="button"
            onClick={() => setActivityType('task')}
          >
            Task
          </Button>
          <Button
            size="large"
            color="primary-neutral"
            type="button"
            onClick={() => setActivityType('habit')}
          >
            Habit
          </Button>
        </div>
      </div>
      {activityType === 'task' && (
        <Fragment>
          <div className="add-habit__title">Date</div>
          <div className="add-habit__title"> {dateFullLong(taskDate)}</div>

          <div className="add-habit_date-picker">
            <DayPicker
              onDayClick={handleDayClick}
              disabledDays={{ before: today }}
            />
          </div>
        </Fragment>
      )}
      {activityType === 'habit' && (
        <div>
          <div className="add-habit__title">Frequency</div>
          <div className="add-habit__days">
            {weekDays.map((day) => (
              <div
                key={day.number}
                className={`add-habit__day ${
                  frequency.includes(day.number) && 'add-habit__day--active'
                }`}
                onClick={() => changeFrequency(day.number)}
              >
                {day.name}
              </div>
            ))}
          </div>
          <div className="add-habit__days-combined">
            <Button
              size="small"
              color="primary-neutral"
              type="button"
              onClick={() => changeFrequency('weekday')}
            >
              Weekdays
            </Button>
            <Button
              size="small"
              color="primary-neutral"
              type="button"
              onClick={() => changeFrequency('everyday')}
            >
              Everyday
            </Button>
          </div>
        </div>
      )}
      {activityType && (
        <div className="add-habit__button">
          <Button size="full" color="secondary" type="submit">
            Add {activityType}
          </Button>
        </div>
      )}
    </form>
  );
};

export default connect(null, { addHabit })(AddHabit);
