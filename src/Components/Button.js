import React, {Component } from 'react'
import PropTypes from 'prop-types'

export class Button extends Component {
    static propTypes = {
        type: PropTypes.oneOf(['button', 'submit']),
        size: PropTypes.oneOf(['full', 'small', 'round']),
        variant: PropTypes.oneOf(['primary', 'secondary', 'primary-neutral', 'secondary-neutral']),
        onClick: PropTypes.func,
    }

    render() {
        return (
            <button
            type={`${this.props.size || 'button'} `}
            className={`button button--${this.props.size} button--${this.props.variant}`}
            onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Button

