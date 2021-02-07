import React, { useState } from 'react'

const Slider = ({ sliderData, SlideComponent }) => {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent(current < sliderData.length - 1 ? current + 1 : 0)
        console.log(current)
    }
    const prevSlide = () => {
        setCurrent(current > 0 ? current - 1 : sliderData.length - 1)
    }

    return (
        <div>
            <div className='slider__btn slider__btn--left' onClick={nextSlide}>move next</div>
                <div className='slider__btn' onClick={prevSlide}>move prev</div>
            <div className='slider'>
                {sliderData.map((item, index) => <div key={index} className={index === current ? 'slide slide--active' : 'slide'}>
                    <SlideComponent data={item} key={index} />
                </div>)}
            </div>
            <div className='slider__counter'>
                {sliderData.map((item, index) => <div key={index} className={index === current ? 'dot dot--active' : 'dot'}></div>)}
            </div>
        </div>
    )
}
export default Slider
