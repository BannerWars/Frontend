import React from 'react'

import "../style/pages.css"

export default function CreateTeam() {
    return (
        <div className="container">
            <div className="auth">
                <h2>Create Team</h2>
                <div className="form">
                    <p name="email">Team name</p>
                    <input type="text" name="team-name" id="team-name" />
                    <input type="file" name="banner-upload" id="banner-upload" placeholder="Uplaod Banner"/>
                </div>
                <div className="button">
                    <button type="submit">CREATE TEAM</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}