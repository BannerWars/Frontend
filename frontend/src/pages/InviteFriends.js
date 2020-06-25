import React from 'react'

import "../style/pages.css"

export default function InviteFriends() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Invite Friends</h2>
                <div className="form">
                    <p name="email">Friend's e-mail</p>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="button">
                    <button type="submit">INVITE</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}