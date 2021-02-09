import React from 'react'
import {useFormik } from 'formik'
import Input from '../../Components/Form/Input'
import Layout from '../../Components/Layout'
import Button from '../../Components/Button'
import { ReactComponent as GoogleIcon } from '../../assets/icons/google-plus.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import * as Yup from 'yup'

const SignIn = () => {

    const errMsg = {
        name: "The value must contain only alphanumeric characters and be maximum 15 characters long",
        email: "he value must comply with the email format",
        password: "The password has to be secure. Be sure it contains at least: 1 number, 1 letter, 1 capital letter, 1 symbol, is between 6 and 30 characters long and doesn't contain whitespaces.",
        required: 'The field is mandatory.'
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email(errMsg.email)
                .max(70)
                .required(errMsg.required),
            password: Yup.string()
                .required(errMsg.required),
        }),
        onSubmit: values => {
            fetch(`http://localhost:5000/users/?q=${values.email}`).then(res => { console.log(res) })

        },
    })
    return (
        <Layout logoStatus='off'>
                        <div className='signin__form-container'>
                    <div>
                        <div className='signin__form-title'>Login to your account</div>
                        <div className='signin__form-description'> Aenean pulvinar suscipit nisi</div>
                    </div>
                    <div className='signin__section_title'>LOGIN WITH E-MAIL ADRESS</div>

                    <form className='signin__form' onSubmit={formik.handleSubmit}>

                        <Input
                            title='email'
                            type='text'
                            formikData={formik.getFieldProps('email')}
                            error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                        />
                        <Input
                            title='password'
                            type='password'
                            formikData={formik.getFieldProps('password')}
                            error={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                        />
                        <div>Forgot your password?</div>
                        <Button size='full' color='primary' type="submit" >Log In</Button>
                    </form>

                    <div className='signin__section_title'>LOGIN WITH SOCIALMEDIA</div>
                    <div className='integrating-signin'>
                        <div className='integrating-signin-item integrating-signin-item--google'>
                            <GoogleIcon width={24} height={24} />
                        </div>
                        <span>- or - </span>
                        <div className='integrating-signin-item integrating-signin-item--facebook'>
                            <FacebookIcon width={24} height={24} />
                        </div>
                    </div>
                    <div className='signin__login-option'>
                        <div>Are you new user?</div>
                        <Button size='small' color='secondary-neutral'>Sign In</Button>
                    </div>
                </div>
                  </Layout>

    )
}

export default SignIn
