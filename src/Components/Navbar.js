import React, { Fragment } from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__item'>
                <Button size='small' color='primary-neutral'>About</Button>
            </div>
            <div className='navbar__item'>
                <Button size='small' color='primary-neutral'>Home</Button>
            </div>
            <div className='navbar__item'>
                <Button size='small' color='secondary'>LogIn</Button>
            </div>
        </div>

    )
}

export default Navbar
