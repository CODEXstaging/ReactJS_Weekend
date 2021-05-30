import { Component } from "react";
import { BrowserRouter, Route } 
from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

class Default extends Component{

    render(){
        return(<div>
            <BrowserRouter>
                <Route path="/login" component={Login} />        
                <Route path="/register" component={Register} />   
                <Route exact path="/" component={Login}/>
            </BrowserRouter>
        </div>)
    }
}
export default Default