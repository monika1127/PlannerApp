import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateUserUniqeData } from '../../redux/user/actions';
import { userSelector } from '../../redux/user/selectors';
import Input from './Input';
import Button from '../Button';

import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';

const UserEmailUpdateForm = (props) => {
  const [alert, setAlert] = useState('');
  const {
    user: { user },
    updateUserUniqeData,
    closeEditPanel,
  } = props;

  const formik = useFormik({
    initialValues: {
      email: user.email,
    },
    validationSchema: Yup.object({
      email: Yup.string().email().max(70).required(),
    }),
    onSubmit: (values) => {
      const callbackAllert = (txt) => {
        setAlert(txt);
      };

      updateUserUniqeData(user.id, values, closeEditPanel, callbackAllert);
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
const mapStateToProps = (state) => ({
  user: userSelector(state),
});

UserEmailUpdateForm.propTypes = {
  user: PropTypes.object.isRequired,
  updateUserUniqeData: PropTypes.func.isRequired,
  closeEditPanel: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { updateUserUniqeData })(
  UserEmailUpdateForm,
);
