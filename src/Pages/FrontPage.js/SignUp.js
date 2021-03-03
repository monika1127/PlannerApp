import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/accessibility.svg';
import Input from '../../Components/Form/Input';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';
import * as Yup from 'yup';
import UserRegistrationForm from '../../Components/Form/UserRegistrationForm';
import { useAuthUser } from '../../Auth/auth';

const SignUn = ({ history }) => {
  const [alert, setAlert] = useState('');
  const { createUser } = useAuthUser();

  const errMsg = {
    email: 'The value must comply with the email format',
    password:
      "The password has to be secure. Be sure it contains at least: 1 number, 1 letter, 1 capital letter, 1 symbol, is between 6 and 30 characters long and doesn't contain whitespaces.",
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email(errMsg.email).max(70).required(),
      password: Yup.string()
        .matches(
          /^.*(?=.{6,30})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          errMsg.password,
        )
        .required(),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords not match')
        .required(),
    }),
    onSubmit: (values) => {
      const email = values.email;
      const password = values.password;
      const name = values.name;
      createUser({ name, email, password }, setAlert, () =>
        history.push('/dashboard'),
      );
    },
  });
  return (
    <Layout logoStatus="off">
      <UserRegistrationForm type="signup">
        <form className="signin__form" onSubmit={formik.handleSubmit}>
          <Input
            icon={<UserIcon width={16} height={16} />}
            title="User name"
            type="text"
            formikData={formik.getFieldProps('name')}
            error={
              formik.touched.name && formik.errors.name
                ? formik.errors.name
                : null
            }
          />
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
          <Input
            icon={<PasswordIcon width={16} height={16} />}
            title="confirm password"
            type="password"
            formikData={formik.getFieldProps('passwordConfirmation')}
            error={
              formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation
                ? formik.errors.passwordConfirmation
                : null
            }
          />
          <div className="submit__button">
            {alert && <div className="submit__alert">{alert}</div>}
            <Button size="full" color="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </UserRegistrationForm>
    </Layout>
  );
};

export default SignUn;
