import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className='page'>
                {this.props.children}
            </div>
        )
    }
}

export default Card
