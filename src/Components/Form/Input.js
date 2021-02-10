import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, type, formikData, error, icon }) => {
  return (
    <div>
      <div className={`input__container ${error && 'input__container--error'}`}>
        <div className="input__icon">{icon ? icon : null}</div>
        <input
          type={type}
          className="input__field"
          placeholder={title}
          {...formikData}
        ></input>
      </div>
      <div className={`input__error ${error && 'input__error--active'}`}>
        {error}
      </div>
    </div>
  );
};
Input.propTypes = {
  title: PropTypes.oneOf(['name', 'password', 'email']),
  icon: PropTypes,
  type: PropTypes.string.isRequired,
  formikData: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default Input;
