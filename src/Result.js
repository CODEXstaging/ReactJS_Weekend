import { Component } from "react";
import obj from './Context';

class Result extends Component{

    constructor(){
        super()
    }


    render(){
        return(<div>
            we are inside Result
            <obj.DataConsumer>
                {
                    (data)=><div>{data}</div>
                }
            </obj.DataConsumer>
            </div>)
        }
}
export default Result