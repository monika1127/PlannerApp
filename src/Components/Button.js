import React, {Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
    static propTypes = {
        size: PropTypes.oneOf(['full', 'small', 'round']),
        type: PropTypes.oneOf(['primary', 'secondary', 'primary-neutral', 'primary-neutral']),
    }

    render() {
        return (
            <button type='button'className={`button button--${this.props.size} button--${this.props.type}`}>
                {this.props.children}
            </button>
        )
    }
}

export default Button

