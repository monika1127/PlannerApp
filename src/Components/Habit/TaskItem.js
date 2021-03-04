import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cross.svg';

const TaskItem = ({ status, habitName, changeHabitStatus, habitId }) => {
  return (
    <div
      className={`task-item__container ${
        status === 'overdued' && 'task-item__container-overdued'
      }`}
    >
      <div className="task-item__checkbox" onClick={() => changeHabitStatus(true, habitId  )}>
        <Checkmark width={14} height={14} />
      </div>
      <div className="task-item__description">{habitName}</div>
      <div
        className="task-item__delete-icon"
        onClick={() => changeHabitStatus(false, habitId)}
      >
        <DeleteIcon width={16} height={16} />
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  status: PropTypes.oneOf(['overdued', 'current']),
  habitName: PropTypes.string,
  changeHabitStatus: PropTypes.func.isRequired,
  habitId: PropTypes.string.isRequired,
};

export default TaskItem;
