import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { useAuthUser } from '../../Auth/auth';
import Input from './Input';
import Button from '../Button';

import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg';

const UserPasswordUpdateForm = (props) => {
  const [alert, setAlert] = useState('');
  const { closeEditPanel } = props;
  const { updateUserPassword } = useAuthUser();

  const formik = useFormik({
    initialValues: {
      newPassword: '',
      newPasswordConfirmation: '',
      // password: '',
    },

    validationSchema: Yup.object({
      newPassword: Yup.string()
        // .matches(
        //   /^.*(?=.{6,30})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        //   "The password has to be secure. Be sure it contains at least: 1 number, 1 letter, 1 capital letter, 1 symbol, is between 6 and 30 characters long and doesn't contain whitespaces.",
        // )
        .required(),

      newPasswordConfirmation: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords not match')
        .required(),
      // password: Yup.string().max(70),
    }),
    onSubmit: (values) => {
      updateUserPassword(values.newPassword);
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Input
          icon={<PasswordIcon width={16} height={16} />}
          title="new password"
          type="password"
          formikData={formik.getFieldProps('newPassword')}
          error={
            formik.touched.newPassword && formik.errors.newPassword
              ? formik.errors.newPassword
              : null
          }
        />
        <Input
          icon={<PasswordIcon width={16} height={16} />}
          title="confirm new password"
          type="password"
          formikData={formik.getFieldProps('newPasswordConfirmation')}
          error={
            formik.touched.newPasswordConfirmation &&
            formik.errors.newPasswordConfirmation
              ? formik.errors.newPasswordConfirmation
              : null
          }
        />
        {/* <Input
          icon={<PasswordIcon width={16} height={16} />}
          title="current password"
          type="password"
          formikData={formik.getFieldProps('password')}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        /> */}
        {alert && <div className="update-form__alert">{alert}</div>}
        <div className="update-form__buttons">
          <Button size="small" color="primary" type="submit">
            Save changes
          </Button>
          <button
            type="button"
            className="button button--small button--primary-neutral"
            onClick={closeEditPanel}
          >
            Cancel
          </button>
        </div>
      </form>
    </Fragment>
  );
};

UserPasswordUpdateForm.propTypes = {
  closeEditPanel: PropTypes.func.isRequired,
};

export default UserPasswordUpdateForm;
