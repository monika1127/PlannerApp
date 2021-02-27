import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as GoogleIcon } from '../../assets/icons/google-plus.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import loginPicture from '../../assets/pictures/login.svg';

class UserRegistrationForm extends Component {
  static propsTypes = {
    type: PropTypes.oneOf(['signup', 'login']),
  };

  render() {
    return (
      <Fragment>
        <div className="register__background">
          <div className="register__container">
            <div className="register__data">
              <div className="register__header">
                <div className="register__title">
                  {this.props.type === 'login'
                    ? 'Login to your account'
                    : 'Create your account'}
                </div>
                <div className="register__description">
                  Aenean pulvinar suscipit nisi
                </div>
                <div className="register__picture">
                  <img src={loginPicture} alt="login" />
                </div>
              </div>
              <div className="register__section">
                <div className="register__section-title">
                  {this.props.type.toUpperCase()} WITH E-MAIL ADRESS
                </div>
                {this.props.children}
              </div>
              <div className="register__section">
                <div className="register__section-title">
                  {this.props.type.toUpperCase()} WITH SOCIALMEDIA
                </div>
                <div className="register__integrating-media">
                  <div className="register__integrating-item --google">
                    <GoogleIcon width={24} height={24} />
                  </div>
                  <span>- or - </span>
                  <div className="register__integrating-item --facebook">
                    <FacebookIcon width={24} height={24} />
                  </div>
                </div>
              </div>
            </div>
            <div className="register__reference">
              <div>
                {this.props.type === 'login'
                  ? 'Are you new user?'
                  : 'You already have an account?'}
              </div>
              <Link
                to={`/${this.props.type === 'login' ? 'signup' : 'login'}`}
                className="register__reference--link"
              >
                {this.props.type === 'login' ? 'SIGN UP' : 'LOGIN'}
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default UserRegistrationForm;
