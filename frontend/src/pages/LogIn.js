import React from 'react'

import "../style/pages.css"

export default function LogIn() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Log In</h2>
                <div className="form">
                    <p name="email">E-mail</p>
                    <input type="email" name="email" id="email" />
                    <p name="password">Password</p>
                    <input type="password" name="password" id="password"/>
                </div>
                <p>Forgot password?</p>
                <div className="button">
                    <button type="submit">LOG IN</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}