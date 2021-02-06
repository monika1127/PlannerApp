import React from 'react'
import conceptListPicture from '../../assets/pictures/concept-list/4034747.svg'
import Button from '../Button'

const AboutItem = ({data}) => {
    return (
        <div className={`about-info`}>
            <img src={conceptListPicture} className='about-info__image' alt='checklist picture' />
            <div className='about-info__details'>
                <div className='about-info__title'>{data.title}</div>
                <div className='about-info__description'>{data.description}</div>
                <Button size='large' type='secondary'>Sign In</Button>
            </div>
        </div>
    )
}
export default AboutItem
