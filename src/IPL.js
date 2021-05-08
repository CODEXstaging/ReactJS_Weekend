import React, { Component } from 'react'
import Trophy from './Trophy'

export default class IPL extends Component {
    constructor(){
        super()
        this.state={
            //teams:["RCB","CSK","MI"]
            teams:[{
                name:"RCB",matches:7, win:5,loss:2
            },{
                name:"CSK",matches:7, win:5,loss:2
            }] 
            ,
            devName:""

        }
    }
    receiveDataFromChild=(dataFromChild)=>{
        console.log("receiving data from the child")
        console.log(dataFromChild)
        this.setState({
            devName:dataFromChild
        })
    }
    render() {
        return (
            <div>
               <div>
                   Teams
               </div>
               <table border="1">
                   <thead>
                    <tr>
                         <th>SlNo.</th>
                         <th>Team</th>
                         <th>Matches</th>
                         <th>Win</th>
                         <th>Loss</th>
                    </tr>
                   </thead>
                   <tbody>
                   { this.state.teams.map( (team,index)=>
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{team.name}</td>
                            <td>{team.matches}</td>
                            <td>{team.win}</td>
                            <td>{team.loss}</td>
                        </tr> )}
                   </tbody>
               </table>
                    {this.state.devName}
            <Trophy   winner={this.state.teams[0].name}    receiveData={this.receiveDataFromChild} />


               {/* { this.state.teams.map(  (team,index)=> <div key={index}>{ team}</div> ) } */}

            </div>
        )
    }
}
