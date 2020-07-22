import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import "../style/pages.css"

export default class Verification extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            id: props.match.params.id,
            message: "",
        }
    }

    componentDidMount() {
        this.verify()
    }

    verify() {
        const path = process.env.REACT_APP_BACKEND + "/users/verify/"
        fetch(path, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: this.state.id })
        })
            .then(res => res.json())
            .then(json => {
                this.setState({ message: json.message })
            })
    }

    render() {
        return (
            <div className="container">

                <h1 id="verification">Welcome to Banner Wars!</h1>
                <p>{this.state.message}</p>
                <Link to="/log-in" id="log-in">Log In</Link>
            </div>
        )
    }
}
