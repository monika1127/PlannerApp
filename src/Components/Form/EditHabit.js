import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { habitSelector } from '../../redux/habits/selectors';
import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';
import DeleteAlert from '../DeleteAlert';
import { dateFullLong } from '../../data/dateFunctions';
import { deleteHabit } from '../../redux/habits/actions';
const EditHabit = (props) => {
  const { history } = props;
  const habitId = props.match.params.id;
  const habit = useSelector(habitSelector(habitId));

  const dispatch = useDispatch();
  const [alertSection, setAlertSection] = useState(false);

  const deleteFunction = async () => {
    await dispatch(deleteHabit(habitId));
    history.push('/dashboard/calendar');
  };

  const today = new Date();

  const week = [
    { id: 1, name: 'Mon' },
    { id: 2, name: 'Tue' },
    { id: 3, name: 'Wed' },
    { id: 4, name: 'Thu' },
    { id: 5, name: 'Fri' },
    { id: 6, name: 'Sat' },
    { id: 0, name: 'Sun' },
  ];
  return (
    <div className="edit-habit">
      <div className="edit-habit__header">Edit Habit</div>
      <div>
        <div className="edit-habit__name">{habit.name}</div>
        <div className="edit-habit__details">
          This habit is active since{' '}
          <div className="edit-habit__details--highlited">
            {dateFullLong(new Date(habit.dateCreated))}
          </div>
        </div>
      </div>
      <div className="edit-habit__title">Planned Frequency:</div>
      <div className="edit-habit__days">
        {week.map((day) => (
          <div
            key={day.id}
            className={`edit-habit__day ${
              habit.weeklyFrequency[day.id] && 'edit-habit__day--active'
            }`}
          >
            {day.name}
          </div>
        ))}
      </div>
      <div>
        <div
          className="edit-habit__delete-btn"
          onClick={() => setAlertSection(true)}
        >
          Delete habit?
        </div>
        {alertSection && (
          <div className="edit-habit__delete-alert">
            <DeleteAlert
              deleteBtnText="Delete habit"
              alertText="When you delete this habit, all data will be permanently lost. Are
              you sure you want to delete it?"
              deleteFunction={deleteFunction}
              cancellFunction={() => setAlertSection(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default EditHabit;
