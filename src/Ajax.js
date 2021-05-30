import { Component } from "react";
import  axios from "axios";

class Ajax extends Component{

    constructor(){
        super()
        this.state={
            userId:"",
            id:"",
            title:"",
            body:""
        }
    }
    getData=()=>{
        let promiseObj=axios.get("https://jsonplaceholder.typicode.com/posts/1")
        promiseObj.then( (resp)=> this.setState({
            userId:resp.data.userId,
            id:resp.data.id,
            title:resp.data.title,
            body:resp.data.body
        })  )
    }
    postData=()=>{
        let promiseObj=axios.post("https://jsonplaceholder.typicode.com/posts", 
        {
            userId:100,
            id:100,
            title:"POST request",
            body:"we are making post request"
        })
        promiseObj.then( (resp)=>console.log(resp.data) )
    }
    putData=()=>{
        let promiseObj=axios.put("https://jsonplaceholder.typicode.com/posts/1", 
        {
            userId:100,
            title:"PUT request",
            body:"we are making PUT request"
        })
        promiseObj.then( (resp)=>console.log(resp.data) )
        
    }
    deleteData=()=>{
        let promiseObj=axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        promiseObj.then( (resp)=>console.log(resp.data) )
        
    }
    render(){
        return(<div>
            <button onClick={this.getData}>getData</button>
            <button onClick={this.postData}>Post Data</button>
            <button onClick={this.putData}>update Data</button>
            <button onClick={this.deleteData}>delete Data</button>
            <br/>
            {this.state.userId}
            {this.state.id}
            {this.state.title}
            {this.state.body}
        </div>)

    }
}
export default Ajax