import { Component } from "react";

class Customer extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(<div>
    Customer Component
    <br/>                
    We have taken loan amount of {this.props.loanAmount} from Bank 
                </div>)
    }
}
export default Customer