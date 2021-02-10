import React from 'react';
import { useFormik } from 'formik';
import { ReactComponent as MailIcon } from '../../assets/icons/envelop.svg';
import { ReactComponent as PasswordIcon } from '../../assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '../../assets/icons/user.svg';
import Input from '../../Components/Form/Input';
import Layout from '../../Components/Layout';
import Button from '../../Components/Button';
import * as Yup from 'yup';
import UserRegistrationForm from '../../Components/Form/UserRegistrationForm';

const SignUn = () => {
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
      name: '',
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
      fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values),
      }).then((res) => {
        console.log(res);
      });
    },
  });
  return (
    <Layout logoStatus="off">
      <UserRegistrationForm type="signup">
        <form className="signin__form" onSubmit={formik.handleSubmit}>
          <Input
            icon={<UserIcon width={16} height={16} />}
            title="name"
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
          <div className="submit-button">
            <Button size="full" color="primary" type="submit">
              Sign In
            </Button>
          </div>
        </form>
      </UserRegistrationForm>
    </Layout>
  );
};

export default SignUn;
