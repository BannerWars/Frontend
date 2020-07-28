import React, { useState } from 'react'

import { useParams, Redirect } from "react-router-dom"

import "../style/pages.css"

function createTeam(teamName, lobbyId, setRedirect) {
    const path = process.env.REACT_APP_BACKEND + "/team/new/"
    const data = {
        token: localStorage.getItem("bannerWarsToken"),
        teamName,
        lobbyId,
    }
    fetch(path, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(json => {
            if (json.message === "team created") {
                setRedirect(true)
            }
            else {
                console.log(json.message)
                // do something
            }
        })
}

export default function CreateTeam() {
    const [redirect, setRedirect] = useState(false)
    const [teamName, setTeamName] = useState("")
    const { id } = useParams()
    return (
        <div className="container">
            <div className="auth">
                <h2>Create Team</h2>
                <div className="form">
                    <p name="email">Team name</p>
                    <input value={teamName} onChange={e => setTeamName(e.target.value)} type="text" name="team-name" id="team-name" />
                    {/* <input type="file" name="banner-upload" id="banner-upload" placeholder="Uplaod Banner"/> */}
                </div>
                <div className="button">
                    <button onClick={() => createTeam(teamName, id, setRedirect)} type="submit">CREATE TEAM</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {redirect && <Redirect to={`/lobbies/${id}`} />}
        </div>
    )
}