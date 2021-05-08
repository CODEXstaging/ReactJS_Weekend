import React, { Component } from 'react'

export default class Trophy extends Component {

    constructor(props){ // { winner:"RCB"}
        super()
        //step1 : creating the data in the child component
        this.state={
            name:"Amrutha"
        }
    }

    //step 2: we have to handle onClick event
    sendData=()=>{
        this.props.receiveData(this.state.name)
    }

    render() {
        return (
            <div>
               We are inside trophy comp 
              <div> Winning Team: {this.props.winner}</div>
            <button onClick={this.sendData}> Send Data To Parent</button>





            </div>
        )
    }
}
