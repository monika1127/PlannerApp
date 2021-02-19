import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const DeleteAlert = (props) => {
  const { alertText, deleteFunction, cancellFunction, deleteBtnText } = props;
  return (
    <Fragment>
      <div>{alertText}</div>
      <div className="alert__buttons">
        <Button
          type="button"
          size="small"
          color="danger"
          onClick={deleteFunction}
        >
          {deleteBtnText}
        </Button>
        <button
          type="button"
          className="button button--small button--primary-neutral"
          onClick={cancellFunction}
        >
          Cancel
        </button>
      </div>
    </Fragment>
  );
};
DeleteAlert.propTypes = {
  deleteBtnText: PropTypes.string.isRequired,
  alertText: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
  cancellFunction: PropTypes.func.isRequired,
};

export default DeleteAlert;
