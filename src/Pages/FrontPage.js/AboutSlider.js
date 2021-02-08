import React from 'react'
import { aboutInfo } from '../../data/aboutInfo'
import Layout from '../../Components/Layout'
import Slider from '../../Components/Slider'
import AboutItem from '../../Components/SliderItems/AboutItem'

const AboutSlider = () => {
    return (
        <Layout logoStatus='off'>
            <div className='about-slider'>
                <Slider sliderData={aboutInfo} SlideComponent={AboutItem}/>
            </div>
        </Layout>
    )
}
export default AboutSlider
