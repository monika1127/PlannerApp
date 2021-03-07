import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import DatePicker from '../DatePicker';
import 'react-day-picker/lib/style.css';
import { endOfToday } from 'date-fns';

import { dateFullLong } from '../../data/dateFunctions';
import Input from './Input';
import Button from '../Button';

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';
import { addHabit } from '../../redux/habits/actions';
import DailyTasks from '../Habit/DailyTasks';

const today = endOfToday();

const AddTask = (props) => {
  const [taskDate, setTaskDate] = useState(today);

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(70, 'Max name length is 70 characters').required(),
    }),
    onSubmit: (values, action) => {
      console.log('add task');
    },
  });
  return (
    <form className="add-task" onSubmit={formik.handleSubmit}>
      <div>
        <div className="add-task__title">Task Name:</div>
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
      </div>
      <div className="add-task__date-container">
        <div className="add-task__title">Task date</div>
        <div className="add-task__date"> {dateFullLong(taskDate)}</div>
        <DatePicker setDay={(day) => setTaskDate(day)} />
      </div>

      <div className="add-habit__button">
        <Button size="full" color="secondary" type="submit">
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default connect(null, { addHabit })(AddTask);
