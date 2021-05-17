import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                We are inside Home Page
                <div><Link to="/home/sports"> Sports</Link>
                <span>&nbsp;&nbsp;</span>
                <Link to="/home/travel"> Travel</Link>
                </div>
            </div>
        )
    }
}
