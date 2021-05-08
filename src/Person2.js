import React, { Component } from 'react'
import {PersonConsumer} from './PersonContext'
export default class Person2 extends Component {
    render() {
        return (
            <div>
                Person 2 component
                <PersonConsumer>
                    { 
                       (data)=><div>{data}</div>
                    }
                </PersonConsumer>

            </div>
        )
    }
}
