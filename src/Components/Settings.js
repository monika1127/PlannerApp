import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';

import { ReactComponent as MailIcon } from '../assets/icons/envelop.svg';
import { ReactComponent as PasswordIcon } from '../assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import UserNameUpdateForm from './Form/UserNameUpdateForm';

const Settings = ({ user: { user } }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const [mailEdit, setMailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  return (
    <div className="settings__container">
      <div className="settings__header">Account settings</div>
      {/* user name */}
      <div
        className={`settings__section ${
          nameEdit && 'settings__user-data--edit'
        }`}
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
              onClick={() => setNameEdit(true)}
            >
              Edit
            </div>
          </Fragment>
        )}
      </div>
      {/* user email */}
      <div
        className={`settings__section ${
          mailEdit && 'settings__user-data--edit'
        }`}
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
              onClick={() => setMailEdit(true)}
            >
              Edit
            </div>
          </Fragment>
        )}
      </div>

      <div className="settings__section">
        <div
          className="settings__option-btn"
          onClick={() => setPasswordEdit(true)}
        >
          Change the password?
        </div>
        {passwordEdit && (
          <UserNameUpdateForm handleClick={() => setPasswordEdit(false)} />
        )}
        <div
          className="settings__option-btn"
          onClick={() => setConfirmation(true)}
        >
          Delete account?
        </div>
        {confirmation && (
          <div className="delete-account__alert">
            <div>
              When you delete an account, all data will be permanently lost. Are
              you sure you want to delete the account?
            </div>
            <div className="settings-update-form__button">
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
