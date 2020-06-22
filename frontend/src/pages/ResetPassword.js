import React from 'react'

import "../style/pages.css"

export default function ResetPassword() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Reset Password</h2>
                <div className="form">
                    <p name="password">New password</p>
                    <input type="password" name="password" id="password"/>
                    <p name="password">Re-enter password</p>
                    <input type="password" name="password" id="password"/>
                </div>
                <div className="button">
                    <button type="submit">RESET PASSWORD</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}