import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { updateUserData } from '../../redux/user/actions';
import { userSelector } from '../../redux/user/selectors';
import Input from './Input';
import Button from '../Button';
import * as Yup from 'yup';

import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const UserUpdateForm = (props) => {
  const {
    user: { user },
    updateUserData,
  } = props;

  const errMsg = {
    name:
      'The value must contain only alphanumeric characters and be maximum 15 characters long',
    required: 'The field is mandatory.',
  };

  const formik = useFormik({
    initialValues: {
      name: user.name,
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20, errMsg.name).required(errMsg.required),
    }),
    onSubmit: (values) => {
      updateUserData(values);
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
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
