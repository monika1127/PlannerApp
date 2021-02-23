import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { useAuthUser } from '../../Auth/auth';
import Input from './Input';
import Button from '../Button';
import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';

const UserEmailUpdateForm = (props) => {
  const { closeEditPanel } = props;
  const [alert, setAlert] = useState('');
  const { updateUserEmail } = useAuthUser;

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email().max(70).required(),
    }),
    onSubmit: (values) => {
      const callbackAllert = (txt) => {
        setAlert(txt);
      };

      updateUserEmail(values.email);
    },
  });
  return (
    <Fragment>
      <form onSubmit={formik.handleSubmit}>
        <Input
          icon={<MailIcon width={16} height={16} />}
          title="new email address"
          type="text"
          formikData={formik.getFieldProps('email')}
          error={
            formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null
          }
        />
        {alert && <div className="submit__alert">{alert}</div>}
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

UserEmailUpdateForm.propTypes = {
  closeEditPanel: PropTypes.func.isRequired,
};

export default UserEmailUpdateForm;
