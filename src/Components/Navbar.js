import React, { Fragment } from 'react'
import Button from './Button'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__item'>
                <Button size='small' type='primary-neutral'>About</Button>
            </div>
            <div className='navbar__item'>
                <Button size='small' type='primary-neutral'>Home</Button>
            </div>
            <div className='navbar__item'>
                <Button size='small' type='secondary'>LogIn</Button>
            </div>
        </div>

    )
}

export default Navbar
