/* eslint-disable default-case */
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { userSelector } from '../redux/user/selectors';
import { deleteAccount } from '../redux/user/actions';
import { ReactComponent as MailIcon } from '../assets/icons/envelop.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import UserNameUpdateForm from './Form/UserNameUpdateForm';
import UserPasswordUpdateForm from './Form/UserPasswordUpdateForm';
import UserEmailUpdateForm from './Form/UserEmailUpdateForm';
import Button from './Button';
import DeleteAlert from './DeleteAlert';

const Settings = (props) => {
  const {
    user: { user },
    deleteAccount,
    history,
  } = props;

  const [nameEdit, setNameEdit] = useState(false);
  const [mailEdit, setMailEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const deleteUser = () => {
    deleteAccount(user.id);
    history.push('/');
  };
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
        {nameEdit ? (
          <Fragment>
            <div>Change user name:</div>
            <UserNameUpdateForm handleClick={() => setNameEdit(false)} />
          </Fragment>
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
        {mailEdit ? (
          <Fragment>
            <div>Change your email address:</div>
            <UserEmailUpdateForm handleClick={() => setMailEdit(false)} />
          </Fragment>
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
          <DeleteAlert
            deleteBtnText="Delete account"
            alertText="When you delete an account, all data will be permanently lost. Are
              you sure you want to delete the account?"
            deleteFunction={deleteUser}
            cancellFunction={() => setConfirmation(false)}
          />
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

export default connect(mapStateToProps, { deleteAccount })(Settings);
