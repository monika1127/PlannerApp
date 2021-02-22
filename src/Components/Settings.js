/* eslint-disable default-case */
import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { useAuthUser } from '../Auth/auth';
import { userSelector } from '../redux/user/selectors';
import { deleteAccount } from '../redux/user/actions';
import { ReactComponent as MailIcon } from '../assets/icons/envelop.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import UserNameUpdateForm from './Form/UserNameUpdateForm';
import UserPasswordUpdateForm from './Form/UserPasswordUpdateForm';
import UserEmailUpdateForm from './Form/UserEmailUpdateForm';
import DeleteAlert from './DeleteAlert';

const Settings = (props) => {
  const { deleteUser } = useAuthUser();
  const {
    user: { user },
  } = props;

  const [openedSection, setOpenedSection] = useState(null);

  return (
    <div className="settings__container">
      <div className="settings__header">Account settings</div>
      {/* user name */}
      <div
        className={`settings__section ${
          openedSection === 'name' && 'settings__section--edit'
        }`}
      >
        {openedSection === 'name' ? (
          <Fragment>
            <div>Change user name:</div>
            <UserNameUpdateForm closeEditPanel={() => setOpenedSection(null)} />
          </Fragment>
        ) : (
          <Fragment>
            <div className="settings__user-data">
              <UserIcon width={20} height={20} />
              <div className="settings__user-data-item">{user.name}</div>
            </div>
            <div
              className="settings__edit-btn"
              onClick={() => setOpenedSection('name')}
            >
              Edit
            </div>
          </Fragment>
        )}
      </div>
      {/* user email */}
      <div
        className={`settings__section ${
          openedSection === 'email' && 'settings__section--edit'
        }`}
      >
        {openedSection === 'email' ? (
          <Fragment>
            <div>Change your email address:</div>
            <UserEmailUpdateForm
              closeEditPanel={() => setOpenedSection(null)}
            />
          </Fragment>
        ) : (
          <Fragment>
            <div className="settings__user-data">
              <MailIcon width={20} height={20} />
              <div className="settings__user-data-item">{user.email}</div>
            </div>
            <div
              className="settings__edit-btn"
              onClick={() => setOpenedSection('email')}
            >
              Edit
            </div>
          </Fragment>
        )}
      </div>
      {/* user password */}
      <div
        className={`settings__section ${
          openedSection === 'password' && 'settings__section--edit'
        }`}
      >
        <div
          className="settings__option-btn"
          onClick={() => setOpenedSection('password')}
        >
          Change the password?
        </div>
        {openedSection === 'password' && (
          <UserPasswordUpdateForm
            closeEditPanel={() => setOpenedSection(null)}
          />
        )}
      </div>

      {/* delete account */}

      <div
        className={`settings__section ${
          openedSection === 'alert' && 'settings__section--edit-danger'
        }`}
      >
        <div
          className="settings__option-btn"
          onClick={() => setOpenedSection('alert')}
        >
          Delete account?
        </div>
        {openedSection === 'alert' && (
          <DeleteAlert
            deleteBtnText="Delete account"
            alertText="When you delete an account, all data will be permanently lost. Are
              you sure you want to delete the account?"
            deleteFunction={deleteUser}
            cancellFunction={() => setOpenedSection(null)}
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
