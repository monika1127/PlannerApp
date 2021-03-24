import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cross.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/pencil.svg';

const ActivityItem = (props) => {
  const { status, name, changeStatus, id, type } = props;

  return (
    <div
      className={`activity-item__container ${
        status === 'overdued' && 'activity-item__container-overdued'
      }`}
    >
      <div
        className="activity-item__checkbox"
        onClick={() => changeStatus(true, id)}
      >
        <Checkmark width={14} height={14} />
      </div>
      <div className="activity-item__description">{name}</div>

      <Link
        to={`/dashboard/edithabit/${id}`}
        className="activity-item__edit-icon"
      >
        <EditIcon width={14} height={14} />
      </Link>

      {type === 'task' && (
        <div
          className="activity-item__delete-icon"
          onClick={() => changeStatus(false, id)}
        >
          <DeleteIcon width={16} height={16} />
        </div>
      )}
    </div>
  );
};

ActivityItem.propTypes = {
  type: PropTypes.oneOf(['habit', 'task']),
  status: PropTypes.oneOf(['overdued', 'current']),
  name: PropTypes.string,
  changeStatus: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ActivityItem;
