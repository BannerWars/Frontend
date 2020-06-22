import React from 'react'

import "../style/pages.css"

export default function ForgotPassword() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Log In</h2>
                <div className="form">
                    <p name="email">Enter your e-mail</p>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="button">
                    <button type="submit">SUBMIT</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}