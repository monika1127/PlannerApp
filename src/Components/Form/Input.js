import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ title, type, formikData, error, icon }) => {
  return (
    <div>
      <div className={`input__container ${error && 'input__container--error'}`}>
        {icon && <div className="input__icon">{icon}</div>}
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
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  type: PropTypes.string.isRequired,
  formikData: PropTypes.object.isRequired,
  error: PropTypes.string,
};

export default Input;
