import React from 'react'
import conceptListPicture from '../../assets/pictures/concept-list.svg'
import Button from '../Button'

const AboutItem = ({ data }) => {
    return (
        <div className={`about-info`}>
            <div className='about-info__image'>
                <img src={conceptListPicture} alt='checklist picture' />
            </div>
            <div className='about-info__details'>
                <div className='about-info__title'>{data.title}</div>
                <div className='about-info__description'>{data.description}</div>
                <Button size='large' color='secondary'>Sign In</Button>
            </div>
        </div>
    )
}
export default AboutItem
