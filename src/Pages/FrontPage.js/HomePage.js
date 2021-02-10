import React from 'react'
import { Link } from 'react-router-dom'

import themePicture from '../../assets/pictures/time-management.svg'

import Layout from '../../Components/Layout'

const HomePage = () => {
    return (
        <Layout logoStatus='on'>
            <div className='home-page'>
                <div className='home-page__theme'>
                    <img src={themePicture} className='theme__picture' alt='time-management' />
                </div>
                <div className='home-page__container'>
                    <div className='home-page__about-app'>
                        <div className='about__slogan'>Make your life organized</div>
                        <div className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia molestie ex aliquet egestas. Aliquam arcu ex, hendrerit eget orci lacinia, dapibus ornare leo. Cras vitae mollis mauris. </div>
                        <Link to='/about' className='about__link button button--small button--secondary-neutral'>
                            How it works?
                        </Link>
                    </div>
                    <div className='home-page__signIn'>
                        <div className='signIn__slogan'>
                            <div className='signIn__slogan--additionall'>Over 7000 satisfied users. </div>
                            <div className='signIn__slogan--main'>Join us.</div>
                        </div>
                        <div className="signIn__btns">
                            <Link to='/signin' className='signIn__btn button button--small button--secondary'>
                                Login
                            </Link>
                            <Link to='/signin' className='signIn__btn button button--small button--secondary'>
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default HomePage
