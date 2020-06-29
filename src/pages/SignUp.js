import React from 'react'

import "../style/pages.css"

export default function Signup() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Sign Up</h2>
                <div className="form">
                    <p name="email">E-mail</p>
                    <input type="email" name="email" id="email" />
                    <p name="nickname">Nick name</p>
                    <input type="text" name="nickname" id="nickname"/>
                    <p name="password">Password</p>
                    <input type="password" name="password" id="password"/>
                    <p name="password">Re-enter password</p>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="button">
                    <button type="submit">SIGN UP</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}