import { Component } from "react";

class BikeRider extends Component{

    constructor(props){
        super(props)
        this.state={
            amount:1500
        }
    }

    payFine=()=>{
        this.props.receive(this.state.amount)
    }

    render(){
        return(<div>
            We are inside  BikeRider
            <br/>
           received :  {this.props.receipt}
           <br/>
           <button onClick={this.payFine}>Pay fine</button>
            </div>)
    }
}
export default BikeRider