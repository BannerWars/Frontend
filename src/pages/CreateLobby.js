import React from 'react'

import "../style/pages.css"

export default function CreateLobby() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Create Lobby</h2>
                <div className="form">
                    <p name="email">Lobby name</p>
                    <input type="text" name="lobby-name" id="lobby-name" />
                </div>
                <div className="button">
                    <button type="submit">CREATE LOBBY</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}