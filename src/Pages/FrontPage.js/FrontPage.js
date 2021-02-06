import React, { Fragment } from 'react'
import themePicture from '../../assets/pictures/time-management/4034742.svg'
import logo from '../../assets/logo/logo2.JPG'
import Button from '../../Components/Button'
import Navbar from '../../Components/Navbar'

const FrontPage = () => {
    return (
        <div className='front-page'>
            <div className='front-page__navbar--desktop'>
                <Navbar />
            </div>
                <img className='front-page__logo' src={logo} alt='logo' />

            <div className='front-page__container'>

                <div className='front-page__theme'>
                    <img src={themePicture} className='theme__picture' alt='time-management-picture' />
                </div>
                {/* for mobile */}
                <div className='front-page__about'>
                    <div className='about__slogan'>Make your life organized</div>
                    <Button size='small' type='secondary-neutral'>How it works?</Button>
                </div>
                <div className='front-page__signIn'>
                    <div className='signIn__slogan'>Join Us</div>
                    <Button size='full' type='secondary'>Log In</Button>
                    <Button size='full' type='secondary'>Sign Up</Button>
                </div>
                {/* for desktop */}
                <div className='front-page__info-container--desktop'>
                    <div className='front-page__about--desktop'>
                        <div className='about__slogan'>Make your life organized</div>
                        <div className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia molestie ex aliquet egestas. Aliquam arcu ex, hendrerit eget orci lacinia, dapibus ornare leo. Cras vitae mollis mauris. </div>
                        <Button size='small' type='primary-neutral'>How it works?</Button>
                    </div>
                    <div className='front-page__signIn--desktop'>

                        <div className='signIn__slogan'>Over 7k satisfied users. <span className='signIn__slogan'>Join us.</span></div>
                        <div className='signIn__buttons'>
                        <Button size='large' type='secondary'>Sign Up</Button>
                        <Button size='small' type='primary'>Log In</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FrontPage
