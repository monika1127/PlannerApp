import React from 'react'
import { Link } from 'react-router-dom'
import themePicture from '../../assets/pictures/time-management.svg'
import Button from '../../Components/Button'
import Layout from '../../Components/Layout'

const HomePage = () => {
    return (
        <Layout logoStatus='on'>
            <div className='home-page__theme'>
                <img src={themePicture} className='theme__picture' alt='time-management-picture' />
            </div>
            {/* for mobile */}
            <div className='home-page__about-app'>
                <div className='about__slogan'>Make your life organized</div>
                <div className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia molestie ex aliquet egestas. Aliquam arcu ex, hendrerit eget orci lacinia, dapibus ornare leo. Cras vitae mollis mauris. </div>
                <Link to='/about' className='about__link'>
                    <Button size='small' color='secondary-neutral'>How it works?</Button>
                </Link>
            </div>
            <div className='home-page__signIn'>
                <div className='signIn__slogan'>
                    <div className='signIn__slogan--additionall'>Over 7000 satisfied users.</div>
                    <div className='signIn__slogan--main'>Join us.</div>
                </div>
                <Link to='/signin' className='signIn__btn'>
                    <Button size='full' color='secondary'>Log In</Button>
                </Link>
                <Link to='/signin' className='signIn__btn'>
                    <Button size='full' color='secondary'>Sign Up</Button>
                </Link>
            </div>
        </Layout>
    )
}
export default HomePage
