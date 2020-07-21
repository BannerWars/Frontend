import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

import "../style/pages.css"

export default class Signup extends Component{
    constructor (props) {
        super(props)

        this.state = {
            email: "",
            username: "",
            password: "",
            repassword: "",
            error: "",
        }
    }
    signup() {
        const {email, password, repassword, username} = this.state
        const data = {email, password, username}
        const path = process.env.REACT_APP_BACKEND + "/users/new/"
        console.log(path)
        if (password !== repassword) {
            this.setState({error: "Passwords don't match"})
        }
        else {
            fetch(path, {
                method : "POST", 
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(data)
            })
            .then(res => res.json())
            .then(json => {
                if (json.message === "new user created") {
                    this.setState({redirect : true})
                }
                else {
                    this.setState({error: json.message})
                }
            })
        }
    }
    render () {
        return (
            <div className="container">
                <div className="auth">
                    <h2>Sign Up</h2>
                    <div className="form">
                        <p name="email">E-mail</p>
                        <input type="email" name="email" id="email" value={this.state.email} 
                            onChange={(e) => this.setState({email: e.target.value})}/>
                        <p name="nickname">Nick name</p>
                        <input type="text" name="nickname" id="nickname" value={this.state.username} 
                            onChange={(e) => this.setState({username: e.target.value})}/>
                        <p name="password">Password</p>
                        <input type="password" name="password" id="password" value={this.state.password} 
                            onChange={(e) => this.setState({password: e.target.value})}/>
                        <p name="password">Re-enter password</p>
                        <input type="password" name="re-password" id="re-password" value={this.state.repassword} 
                            onChange={(e) => this.setState({repassword: e.target.value})}/>
                    </div>
                    <div className="button">
                        <button type="submit" onClick={() => this.signup()}>SIGN UP</button>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {this.state.error && 
                    <div><p>{this.state.error}</p></div>}
                </div>
                {this.state.redirect && <Redirect to = "/check-email" />}
            </div>
        )
    }
}