import { Component } from "react";
import { connect } from "react-redux";

class LearningRedux extends Component{

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                Hi , {this.props.userName}
                <button onClick={this.props.changeData}>change the Data</button>

                {/* <ReduxComp></ReduxComp>
                <Redux3></Redux3> */}
            </div>
        )
    }
}
let readStoreData=(state)=>{
    return {
        userName:state.name  // mapping state to props obj
    }
}
let writeDataToStore=(dispatch)=>{
    return {
        changeData:()=>dispatch( {  type:"change" ,name:"sudarshan"})
    }
}
let connection=connect(readStoreData,writeDataToStore)
export default connection(LearningRedux)