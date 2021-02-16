/* eslint-disable default-case */
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';
import { ReactComponent as MailIcon } from '../assets/icons/envelop.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import UserNameUpdateForm from './Form/UserNameUpdateForm';
import UserPasswordUpdateForm from './Form/UserPasswordUpdateForm';
import UserEmailUpdateForm from './Form/UserEmailUpdateForm';
const Settings = ({ user: { user } }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const [mailEdit, setMailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const editCurrentSection = (currentSection) => {
    setNameEdit(false);
    setMailEdit(false);
    setPasswordEdit(false);
    setConfirmation(false);

    switch (currentSection) {
      case 'name':
        setNameEdit(true);
        break;
      case 'email':
        setMailEdit(true);
        break;
      case 'password':
        setPasswordEdit(true);
        break;
      case 'delete':
        setConfirmation(true);
        break;
    }
  };

  return (
    <div className="settings__container">
      <div className="settings__header">Account settings</div>
      {/* user name */}
      <div
        className={`settings__section ${nameEdit && 'settings__section--edit'}`}
      >
        <div>{nameEdit ? 'Change your name:' : 'Name:'}</div>
        {nameEdit ? (
          <UserNameUpdateForm handleClick={() => setNameEdit(false)} />
        ) : (
          <Fragment>
            <div className="settings__user-data">
              <UserIcon width={20} height={20} />
              <div className="settings__user-data-item">{user.name}</div>
            </div>
            <div
              className="settings__edit-btn"
              onClick={() => editCurrentSection('name')}
            >
              Edit
            </div>
          </Fragment>
        )}
      </div>
      {/* user email */}
      <div
        className={`settings__section ${mailEdit && 'settings__section--edit'}`}
      >
        <div>{mailEdit ? 'Change your email address:' : 'Mail:'}</div>
        {mailEdit ? (
          <UserNameUpdateForm handleClick={() => setMailEdit(false)} />
        ) : (
          <Fragment>
            <div className="settings__user-data">
              <MailIcon width={20} height={20} />
              <div className="settings__user-data-item">{user.email}</div>
            </div>
            <div
              className="settings__edit-btn"
              onClick={() => editCurrentSection('email')}
            >
              Edit
            </div>
          </Fragment>
        )}
      </div>
      {/* user password */}
      <div
        className={`settings__section ${
          passwordEdit && 'settings__section--edit'
        }`}
      >
        <div
          className="settings__option-btn"
          onClick={() => editCurrentSection('password')}
        >
          Change the password?
        </div>
        {passwordEdit && (
          <UserPasswordUpdateForm handleClick={() => setPasswordEdit(false)} />
        )}
      </div>

      {/* delete account */}

      <div
        className={`settings__section ${
          confirmation && 'settings__section--edit-danger'
        }`}
      >
        <div
          className="settings__option-btn"
          onClick={() => editCurrentSection('delete')}
        >
          Delete account?
        </div>
        {confirmation && (
          <div className="delete-account__alert">
            <div>
              When you delete an account, all data will be permanently lost. Are
              you sure you want to delete the account?
            </div>
            <div className="update-form__buttons">
              <button className="button button--small button--delete">
                Delete account
              </button>
              <button
                type="button"
                className="button button--small button--primary-neutral"
                onClick={() => setConfirmation(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps)(Settings);
