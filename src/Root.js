import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage'
import Login from './Login'
import Register from './Register'
import Sports from './Sports'
import Travel from './Travel'

export default class Root extends Component {
    render() {
        return (
            <div>
                Hi , we are inside Root component
                <BrowserRouter>
                    <Route  path="/register" component={Register}/>
                    <Route  path="/login" component={Login}/>
                    <Route path="/home" component={HomePage} />
                    <Route  path="/home/sports" component={Sports}/>
                    <Route  path="/home/travel" component={Travel}/>
                    <Route  exact path="/" component={Login}/>
                </BrowserRouter>
            </div>
        )
    }
}
