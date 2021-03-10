import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import 'react-day-picker/lib/style.css';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from '../Button';
import { addHabit } from '../../redux/habits/actions';
import { week } from '../../data/dateFunctions';

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';

const AddHabit = (props) => {
  const { addHabit } = props;
  const [frequency, setFrequency] = useState([]);
  const history = useHistory();

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
    onSubmit: (values) => {
      const weeklyFrequency = frequency.reduce((acc, curr) => {
        acc[curr] = true;
        return acc;
      }, {});
      const color = 'not active yet';
      const newHabit = { name: values.name, weeklyFrequency, color };

      frequency.length > 0 &&
        addHabit(newHabit, () => history.push('/dashboard'));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div className="add-habit__title">Habit Name:</div>
        <Input
          icon={<PencilIcon width={16} height={16} />}
          title="enter habit name"
          type="text"
          formikData={formik.getFieldProps('name')}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
      </div>

      <div>
        <div className="add-habit__title">Frequency:</div>
        <div className="add-habit__days">
          {week.map((day) => (
            <div
              key={day.id}
              className={`add-habit__day ${
                frequency.includes(day.id) && 'add-habit__day--active'
              }`}
              onClick={() => changeFrequency(day.id)}
            >
              {day.name}
            </div>
          ))}
        </div>
        <div className="add-habit__days-combined">
          <div
            className="button button--primary-neutral button--small"
            onClick={() => changeFrequency('weekday')}
          >
            Weekdays
          </div>
          <div
            className="button button--primary-neutral button--small"
            onClick={() => changeFrequency('everyday')}
          >
            Everyday
          </div>
        </div>
      </div>
      <div className="add-habit__button">
        <Button size="full" color="secondary" type="submit">
          Add Habit
        </Button>
      </div>
    </form>
  );
};
AddHabit.propTypes = {
  addHabit: PropTypes.func.isRequired,
};
export default connect(null, { addHabit })(AddHabit);
