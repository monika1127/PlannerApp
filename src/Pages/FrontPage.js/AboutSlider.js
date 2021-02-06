import React from 'react'
import { aboutInfo } from '../../data/aboutInfo'
import conceptListPicture from '../../assets/pictures/concept-list/4034747.svg'
import Card from '../../Components/Card'
import Button from '../../Components/Button'
import Slider from '../../Components/Slider'
import AboutItem from '../../Components/SliderItems/AboutItem'

const AboutSlider = () => {
    return (
        <Card>
            <div className='about-slider'>
                <Slider sliderData={aboutInfo} SlideComponent={AboutItem}/>
            </div>
        </Card>
    )
}
export default AboutSlider
