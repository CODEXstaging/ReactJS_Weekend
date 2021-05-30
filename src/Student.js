import { Component } from "react";
import obj from './Context'
import Exam from "./Exm";
class Student extends Component{

    constructor(){
        super()
    }

    render(){
        return(<div>
                        we are inside student
            <obj.DataProvider value="answers">
                <Exam></Exam>
            </obj.DataProvider>
            </div>)
        }
}
export default Student