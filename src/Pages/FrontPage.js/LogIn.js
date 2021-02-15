import React, { useState } from 'react';
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { login } from '../../redux/user/actions';
import Input from '../../Components/Form/Input';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';
import * as Yup from 'yup';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';
import UserRegistrationForm from '../../Components/Form/UserRegistrationForm';

const LogIn = (props) => {
  const { login, history } = props;
  const errMsg = {
    name:
      'The value must contain only alphanumeric characters and be maximum 15 characters long',
    email: 'The value must comply with the email format',
    password:
      "The password has to be secure. Be sure it contains at least: 1 number, 1 letter, 1 capital letter, 1 symbol, is between 6 and 30 characters long and doesn't contain whitespaces.",
    required: 'The field is mandatory.',
  };

  const [alert, setAlert] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email(errMsg.email).max(70).required(errMsg.required),
      password: Yup.string().required(errMsg.required),
    }),
    onSubmit: (values) => {
      const callbackAlert = (txt) => {
        setAlert(txt);
        history.push('/dashboard');
      };
      login(values, callbackAlert);
    },
  });
  return (
    <Layout logoStatus="off">
      <UserRegistrationForm type="login">
        <form className="signin__form" onSubmit={formik.handleSubmit}>
          <Input
            icon={<MailIcon width={16} height={16} />}
            title="email"
            type="text"
            formikData={formik.getFieldProps('email')}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : null
            }
          />
          <Input
            icon={<PasswordIcon width={16} height={16} />}
            title="password"
            type="password"
            formikData={formik.getFieldProps('password')}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : null
            }
          />
          <div className="submit__button">
            {alert && <div className="submit__alert">{alert}</div>}
            <Button size="full" color="primary" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </UserRegistrationForm>
    </Layout>
  );
};

export default connect(null, { login })(LogIn);
