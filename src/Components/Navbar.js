import React from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/about' className='navbar__item'>
                <Button size='small' variant='primary-neutral'>About</Button>
            </Link>
            <Link to='/' className='navbar__item'>
                <Button size='small' variant='primary-neutral'>Home</Button>
            </Link>
            <Link to='/signin' className='navbar__item'>
                <Button size='small' variant='secondary'>LogIn</Button>
            </Link>
        </div>

    )
}

export default Navbar
