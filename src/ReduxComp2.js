import { Component } from "react";
import { connect } from "react-redux";

class ReduxComp extends Component{

    render(){
        return(<div>
            

            This is 2nd Redux Comp
            <br/>
            {this.props.userName}
        </div>
            )
    }
}
let readDataFromStore=(state)=>{
    return {
        userName:state.name
    }
}
let con=connect(readDataFromStore)
export default con(ReduxComp)