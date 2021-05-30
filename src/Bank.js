import { Component } from "react";
import Customer from "./Customer";

class Bank extends Component{

    constructor(){
        super()
        this.state={
            amount:"5Lacs"
        }
    }
    render(){
        return(<div>
            We are in the Bank  Component
            <br/>
            <Customer  loanAmount={this.state.amount}  />
                </div>)
    }
}
export default Bank