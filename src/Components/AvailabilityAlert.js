import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CancleIcon } from '../assets/icons/cross.svg';

const AvailabilityAlert = (props) => {
  const { alertText, cancellFunction } = props;
  return (
    <div className="alert__availability">
      <div className="alert__text">{alertText}</div>
      <div className="alert__cancle-icon" onClick={cancellFunction}>
        <CancleIcon width={12} height={12} />
      </div>
    </div>
  );
};
AvailabilityAlert.propTypes = {
  alertText: PropTypes.string.isRequired,
  cancellFunction: PropTypes.func.isRequired,
};

export default AvailabilityAlert;
