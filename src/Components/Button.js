import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit']),
    size: PropTypes.oneOf(['full', 'small', 'large', 'round']),
    color: PropTypes.oneOf([
      'primary',
      'secondary',
      'primary-neutral',
      'secondary-neutral',
      'danger',
    ]),
    onClick: PropTypes.func,
  };

  render() {
    const { size, type, color, ...rest } = this.props;
    return (
      <button
        type={`${this.props.size || 'button'} `}
        className={`button button--${this.props.size} button--${this.props.color}`}
        {...rest}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
