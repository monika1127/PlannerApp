import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as CancelIcon } from '../assets/icons/cross.svg';

const AvailabilityAlert = (props) => {
  const { alertText, cancelFunction } = props;

  return (
    <div className="alert__availability">
      <div className="alert__text">{alertText}</div>
      <div className="alert__cancle-icon" onClick={cancelFunction}>
        <CancelIcon width={12} height={12} />
      </div>
    </div>
  );
};
AvailabilityAlert.propTypes = {
  alertText: PropTypes.string.isRequired,
  cancelFunction: PropTypes.func.isRequired,
};

export default AvailabilityAlert;
