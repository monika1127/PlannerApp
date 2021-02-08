import React, {Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['button', 'submit']),
        size: PropTypes.oneOf(['full', 'small', 'round']),
        color: PropTypes.oneOf(['primary', 'secondary', 'primary-neutral', 'secondary-neutral']),
    }

    render() {
        return (
            <button
            type={`${this.props.size || 'button'} `}
            className={`button button--${this.props.size} button--${this.props.color}`}>
                {this.props.children}
            </button>
        )
    }
}

export default Button

