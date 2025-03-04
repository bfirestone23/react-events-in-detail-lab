import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    handleClick = (e) => {
        let arr = [e.clientX, e.clientY]
        return this.props.onReceiveCoordinates(arr);
    }
    
    render() {
        return (
            <button onClick={this.handleClick}/>
        )
    }


}