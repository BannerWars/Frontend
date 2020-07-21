import React, { Component } from 'react'

import "../style/pages.css"

export default class LogIn extends Component {
    constructor (props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            error: "",
        }
    }
    login() {
        const {email, password} = this.state
        const data = {email, password}
        const path = process.env.REACT_APP_BACKEND + "/users/login/"
        console.log(path)
        fetch(path, {
            method : "POST", 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            if (json.message) {
                this.setState({error: json.message})
            }
            else {
                localStorage.setItem("bannerWarsToken", json.token)
                window.location.href = "/"
            }
        })
    }
    render () {
        return (
            <div className="container">
                <div className="auth">
                    <h2>Log In</h2>
                    <div className="form">
                        <p name="email">E-mail</p>
                        <input type="email" name="email" id="email" value={this.state.email} 
                            onChange={(e) => this.setState({email: e.target.value})} />
                        <p name="password">Password</p>
                        <input type="password" name="password" id="password" value={this.state.password} 
                            onChange={(e) => this.setState({password: e.target.value})} />
                    </div>
                    <p>Forgot password?</p>
                    <div className="button">
                        <button type="submit" onClick={() => this.login()}>LOG IN</button>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {this.state.error && 
                    <div><p>{this.state.error}</p></div>}
                </div>
            </div>
        )
    }
}