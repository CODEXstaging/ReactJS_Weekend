import axios from 'axios'
import React, { Component } from 'react'

export default class Ajax extends Component {

    //step1 : create a state which has a property -> users:[]
    //use setState to set the Users array in the then method
    //step3 : display data in JSX

    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    getData=()=>{
        console.log('inside get data function')
        //get request
        //axios returns u a PROMISE -> object
        let promiseObj=axios.get('https://jsonplaceholder.typicode.com/posts/')
        promiseObj.then(  (resp)=> this.setState({users:resp.data}) )
                  .catch(err=>console.log(err))
                  .finally(()=>console.log('we are inside finally') )
    }

    postData=()=>{
        let promiseObj=axios.post( 'https://jsonplaceholder.typicode.com/posts/' , 
        { userId:100,
            title:"POST req", 
            body:"We are making POST request" } )
            promiseObj.then( (resp)=>console.log(resp.data))
                      .catch( (err)=> console.log(err))
    }

     // API . CORS error -> cross origin resource sharing. //CORS filter
      //localhost:3000

    updateData=()=>{
        let promiseObj=axios.put('https://jsonplaceholder.typicode.com/posts/1', 
            { userId:101,
                title:"PUT req", 
                body:"We are making PUT request" } )
        promiseObj.then( (resp)=>console.log(resp.data))
                  .catch( (err)=> console.log(err))
    }
    deleteData=()=>{
         axios.delete('https://jsonplaceholder.typicode.com/posts/1')
              .then(resp=>console.log(resp.data))
              .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                We are learning AJAX 
                <button onClick={this.getData} >Get Data</button>
                <button onClick={this.postData} >POST Data</button>
                <button onClick={this.updateData} >Update Data</button>
                <button onClick={this.deleteData} >Delete Data</button>

                <table border="1"> 
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>userId</th>
                            <th>title</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map( (user,i) => 
                            <tr key={i}>
                                <td>{user.id}</td>
                                <td>{user.userId}</td>
                                <td>{user.title}</td>
                                <td>{user.body}</td>
                            </tr>)
                        }
                      
                    </tbody>
                </table>
            </div>
        )
    }
}
