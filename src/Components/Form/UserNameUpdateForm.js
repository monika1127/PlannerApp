import React, { Fragment } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { useAuthUser } from '../../Auth/auth';
import Input from './Input';
import Button from '../Button';

import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';

const UserNameUpdateForm = (props) => {
  const { closeEditPanel } = props;

  const { updateUserName } = useAuthUser();
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(20).required(),
    }),
    onSubmit: (values) => {
      updateUserName(values.name);
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Input
          icon={<UserIcon width={16} height={16} />}
          title="new user name"
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
            onClick={closeEditPanel}
          >
            Cancel
          </button>
        </div>
      </form>
    </Fragment>
  );
};

UserNameUpdateForm.propTypes = {
  closeEditPanel: PropTypes.func.isRequired,
};
export default UserNameUpdateForm;
