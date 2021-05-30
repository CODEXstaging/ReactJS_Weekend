import { Component } from "react";
import BikeRider from "./BikeRider";
import Result from "./Result";
import obj from './Context';
class Exam extends Component{

    constructor(){
        super()
    }


    render(){
        return(<div>
            we are inside Exam
            <obj.DataConsumer>
                {
                    (data)=><div>{data}</div>
                }
            </obj.DataConsumer>
            <Result/>
            </div>)
        }
}
export default Exam