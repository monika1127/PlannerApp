import React, { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { updateUserUnicData } from '../../redux/user/actions';
import { userSelector } from '../../redux/user/selectors';
import Input from './Input';
import Button from '../Button';
import * as Yup from 'yup';

import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';

const UserUpdateForm = (props) => {
  const [alert, setAlert] = useState('');
  const {
    user: { user },
    updateUserUnicData,
  } = props;
  const errMsg = {
    email: 'he value must comply with the email format',
    required: 'The field is mandatory.',
  };

  const formik = useFormik({
    initialValues: {
      email: user.email,
    },
    validationSchema: Yup.object({
      email: Yup.string().email(errMsg.email).max(70).required(errMsg.required),
    }),
    onSubmit: (values) => {
      const callbackAllert = (txt) => {
        setAlert(txt);
      };
      const updatedUser = {
        ...values,
        name: user.name,
        password: user.password,
      };
      const closeEditPanel = () => {
        props.handleClick();
      };
      updateUserUnicData(user.id, updatedUser, closeEditPanel, callbackAllert);
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
export default connect(mapStateToProps, { updateUserUnicData })(UserUpdateForm);
