import React, { useState } from 'react'
import Card from './Card'


const Slider = ({sliderData, SlideComponent}) => {
const [current, setCurrent]= useState(0)
    return (
        <div>
            <div className='slider__container'>
                <div className='slider__btn' >move</div>
                <div className='slider'>
                    {sliderData.map((item, index) => <div className={index===current ? 'slide slide--actice' : 'slide'}>
                        <SlideComponent data={item} key={index}/>
                        </div>)}
                </div>
                <div className='slider__btn'>move</div>
            </div>
        </div>
    )
}
export default Slider
