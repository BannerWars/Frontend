import React from 'react'

import "../style/pages.css"
import { useState } from 'react'
import { Redirect, useParams } from 'react-router-dom'

function createLobby(lobbyName, setRedirect) {
    const path = process.env.REACT_APP_BACKEND + "/lobby/new/"
    const data = {
        token: localStorage.getItem("bannerWarsToken"),
        name: lobbyName,
    }
    fetch(path, {
        method : "POST", 
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        if (json.message === "lobby created") {
            setRedirect(true)
        }
        else {
            console.log(json.message)
            // do something
        }
    })
}

export default function CreateLobby() {
    const [redirect, setRedirect] = useState(false)
    const [lobbyName, setLobbyName] = useState("")
    const {id} = useParams()
    return (
        <div className="container">
            <div className="auth">
                <h2>Create Lobby</h2>
                <div className="form">
                    <p name="email">Lobby name</p>
                    <input text={lobbyName} onChange={e => setLobbyName(e.target.value)} type="text" name="lobby-name" id="lobby-name" />
                </div>
                <div onClick={() => createLobby(lobbyName, setRedirect)} className="button">
                    <button type="submit">CREATE LOBBY</button>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            {redirect && <Redirect to={`/lobbies/`}/>}
        </div>
    )
}