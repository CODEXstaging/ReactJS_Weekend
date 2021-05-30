import { Component } from "react";

class Showroom extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(<div>
            {this.props.name}
            We are inside car Showroom</div>)
    }
}
export default Showroom