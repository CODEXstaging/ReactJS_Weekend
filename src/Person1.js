import React, { Component } from 'react'
import Person2 from './Person2'
import { PersonProvider } from './PersonContext'
export default class Person1 extends Component {

    render() {
        return (
            <div>
                Person1 component

                <PersonProvider value="Naveen">
                    <Person2/>
                </PersonProvider>

            </div>
        )
    }
}
