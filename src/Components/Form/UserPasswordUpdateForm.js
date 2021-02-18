import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { updateUserData } from '../../redux/user/actions';
import { userSelector } from '../../redux/user/selectors';
import Input from './Input';
import Button from '../Button';

import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg';

const UserUpdateForm = (props) => {
  const [alert, setAlert] = useState('');
  const {
    user: { user },
    updateUserData,
  } = props;
  };

  const formik = useFormik({
    initialValues: {
      newpassword: '',
      password: '',
    },

    validationSchema: Yup.object({
      newpassword: Yup.string()
        .matches(
          /^.*(?=.{6,30})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "The password has to be secure. Be sure it contains at least: 1 number, 1 letter, 1 capital letter, 1 symbol, is between 6 and 30 characters long and doesn't contain whitespaces.",
        )
        .required(),
      password: Yup.string().max(70),
    }),
    onSubmit: (values) => {
      const updatedUser = {
        password: values.newpassword,
      };
      const closeEditPanel = () => {
        props.handleClick();
      };
      user.password === values.password
        ? updateUserData(user.id, updatedUser, closeEditPanel)
        : setAlert('Incorrect password');
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Input
          icon={<PasswordIcon width={16} height={16} />}
          title="new password"
          type="password"
          formikData={formik.getFieldProps('newpassword')}
          error={
            formik.touched.newpassword && formik.errors.newpassword
              ? formik.errors.newpassword
              : null
          }
        />
        <Input
          icon={<PasswordIcon width={16} height={16} />}
          title="current password"
          type="password"
          formikData={formik.getFieldProps('password')}
          error={
            formik.touched.password && formik.errors.password
              ? formik.errors.password
              : null
          }
        />
        {alert && <div className="update-form__alert">{alert}</div>}
        <div className="update-form__buttons">
          <Button size="small" color="primary" type="submit">
            Save changes
          </Button>
          <button
            type="button"
            className="button button--small button--primary-neutral"
            onClick={props.handleClick}
          >
            Cancel
          </button>
        </div>
      </form>
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  user: userSelector(state),
});
export default connect(mapStateToProps, { updateUserData })(UserUpdateForm);
