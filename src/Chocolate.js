import { Component } from "react";
import Showroom from "./Showroom";

class Chocolate extends Component{

    constructor(){
        super()
        this.state={
            name:"",
            cost:1
        } 
    }



    changeChocolate=()=>{
        console.log("change cholocolate")
        this.setState({
            name:"Silk",
            cost:75
        })
        //this.state.name="Silk"
    }


    inputChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return(<div>
            { this.state.name} - {this.state.cost} Re
            <div>
                <input  type="text"   value={this.state.name}    placeholder="Enter Your favourite chocolate" onChange={this.inputChange}/>
            </div>
            <div>
                <button onClick={this.changeChocolate}  > Change Chocolate</button>
            </div>
            <div>We are in the Chocolate Component
                </div>
                <Showroom name="Bajaj" x={this.state.name}/>
                
                </div>)
    }
}
export default Chocolate