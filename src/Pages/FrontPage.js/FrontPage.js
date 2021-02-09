import React from 'react'
import { Link } from 'react-router-dom'
import themePicture from '../../assets/pictures/time-management.svg'
import Button from '../../Components/Button'
import Layout from '../../Components/Layout'

const FrontPage = () => {
    return (
        <Layout logoStatus='on'>
            <div className='front-page__theme'>
                <img src={themePicture} className='theme__picture' alt='time-management-picture' />
            </div>
            {/* for mobile */}
            <div className='front-page__about'>
                <div className='about__slogan'>Make your life organized</div>
                <Link to='/about'>
                    <Button size='small' variant='secondary-neutral'>How it works?</Button>
                </Link>
            </div>
            <div className='front-page__signIn'>
                <div className='signIn__slogan'>Join Us</div>
                <Button size='full' variant='secondary'>Log In</Button>
                <Link to='/signin'>
                <Button size='full' variant='secondary'>Sign Up</Button>
                </Link>
            </div>
            {/* for desktop */}
            <div className='front-page__info-container--desktop'>
                <div className='front-page__about--desktop'>
                    <div className='about__slogan'>Make your life organized</div>
                    <div className='about__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia molestie ex aliquet egestas. Aliquam arcu ex, hendrerit eget orci lacinia, dapibus ornare leo. Cras vitae mollis mauris. </div>
                    <Link to='/about'>
                        <Button size='small' variant='primary-neutral'>How it works?</Button>
                    </Link>
                </div>
                <div className='front-page__signIn--desktop'>

                    <div className='signIn__slogan'>Over 7000 satisfied users. <span className='signIn__slogan'>Join us.</span></div>
                    <div className='signIn__buttons'>
                        <Link to='/signin'>
                        <Button size='large' variant='secondary'>Sign Up</Button>
                        </Link>
                        <Button size='small' variant='primary'>Log In</Button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default FrontPage
