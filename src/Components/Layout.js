import React, { Component } from 'react'
import Navbar from './Navbar'
import logo from '../assets/logo/logo2.JPG'
import PropTypes from 'prop-types'

export class Card extends Component {
    static propsTypes = {
        logoStatus: PropTypes.oneOf(['off', 'on']),
    }
    render() {
        return (
            <div className='page'>
                <div className='page__navbar'>
                    <Navbar />
                </div>
                <img className={`logo logo--${this.props.logoStatus}`} src={logo} alt='logo' />

                    {this.props.children}

            </div>
        )
    }
}

export default Card
