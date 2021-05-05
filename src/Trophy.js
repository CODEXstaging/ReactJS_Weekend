import React, { Component } from 'react'

export default class Trophy extends Component {

    constructor(props){ // { winner:"RCB"}
        super()
    }
    render() {
        return (
            <div>
               We are inside trophy comp 
              <div> Winning Team: {this.props.winner}</div>
            </div>
        )
    }
}
