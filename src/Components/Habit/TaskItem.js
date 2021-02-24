import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cross.svg';

const TaskItem = ({ status }) => {
  return (
    <div
      className={`task-item__container ${
        status === 'overdued' && 'task-item__container-overdued'
      }`}
    >
      <div className="task-item__checkbox" onClick={() => console.log('done')}>
        <Checkmark width={14} height={14} />
      </div>
      <div className="task-item__description">cos</div>
      <div
        className="task-item__delete-icon"
        onClick={() => console.log('not done')}
      >
        <DeleteIcon width={16} height={16} />
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  status: PropTypes.oneOf(['overdued', 'current']),
};

export default TaskItem;
