import React from 'react'
import { useFormik } from 'formik'
import Input from '../../Components/Form/Input'
import Layout from '../../Components/Layout'
import Button from '../../Components/Button'

const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            name: null,
            email: null,
            password: null,
            password2: null,
            policyConfirmation: false
        },
        onSubmit: values => {
            console.log(values)
        },
    })
    return (
        <Layout logoStatus='off'>
            <div className='signin__form-container'>
                <div>Create an account</div>
                <div>dsjhfb fkjfb jfkebfjebf jfkj</div>
                <div>LOLIN WITH E-MAIL ADRESS</div>
                <form className='signin__form' onSubmit={formik.handleSubmit}>
                    <Input id='name' type='text' {...formik.getFieldProps('name')} />
                    <Input id='name' type='text' {...formik.getFieldProps('name')} />
                    <Input id='name' type='text' {...formik.getFieldProps('name')} />
                    <Button size='full' type='primary'>Sign In</Button>
                </form>
                <div>LOLIN WITH SOCIALMEDIA</div>
                <div className='integrating-signin'>
                    <div className='integrating-signin-item'>G</div>
                    <div className='integrating-signin-item'>f</div>
                </div>
                <div className='signin__login-option'>
                    <div>Already have an account</div>
                    <Button size='small' type='secondary-neutral'>Login</Button>
                </div>
            </div>
        </Layout>

    )
}

export default SignIn
