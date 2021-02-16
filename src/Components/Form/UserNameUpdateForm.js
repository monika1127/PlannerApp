import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { updateUserData } from '../../redux/user/actions';
import { userSelector } from '../../redux/user/selectors';
import Input from './Input';
import Button from '../Button';
import * as Yup from 'yup';

import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const UserUpdateForm = (props) => {
  const [alert, setAlert] = useState('');
  const {
    user: { user },
    updateUserData,
  } = props;
  const errMsg = {
    name:
      'The value must contain only alphanumeric characters and be maximum 15 characters long',
    email: 'he value must comply with the email format',
    password:
      "The password has to be secure. Be sure it contains at least: 1 number, 1 letter, 1 capital letter, 1 symbol, is between 6 and 30 characters long and doesn't contain whitespaces.",
    required: 'The field is mandatory.',
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, errMsg.name).required(errMsg.required),
      email: Yup.string().email(errMsg.email).max(70).required(errMsg.required),
      password: Yup.string()
        .matches(
          /^.*(?=.{6,30})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          errMsg.password,
        )
        .required(errMsg.required),
    }),
    onSubmit: (values) => {
      const callbackAllert = (txt) => {
        setAlert(txt);
      };
      updateUserData(values, callbackAllert);
    },
  });
  return (
    <Fragment>
      <form className="signin__form" onSubmit={formik.handleSubmit}>
        <Input
          icon={<UserIcon />}
          title="name"
          type="text"
          formikData={formik.getFieldProps('name')}
          error={
            formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null
          }
        />
        {alert && <div className="submit__alert">{alert}</div>}
        <div className="settings-update-form__button">
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
