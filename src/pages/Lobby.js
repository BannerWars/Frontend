import React from 'react'
import LobbyInstance from '../components/LobbyInstance';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


function getLobby(lobbyId, setLobby) {
    const path = process.env.REACT_APP_BACKEND + `/lobby/single/${lobbyId}`
    
    fetch(path)
    .then(res => res.json())
    .then(json => {
        setLobby(json)
        
    })


}

export default function Lobby() {
    const [lobby, setLobby] = useState({})
    const {id} = useParams()

    useEffect(() => {
        getLobby(id, setLobby)
    }, [id])
    return (
        <div className="container">
            <h1>Lobby Name</h1>
            <div className="page-content">
                <div className="left">
                    <div className="header">
                        <h2>Teams</h2>
                        <p>There {lobby.teams && `${lobby.teams.length != 1 ? "are" : "is"} currently ${lobby.teams.length} team${lobby.teams.length != 1 ? "s" : ""}`}.</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {lobby.teams && lobby.teams.map((instance, i) => <LobbyInstance instance={{text: instance.name, link: `${id}/${i}`}}/>)}
                      
                        </div>
                        <div className="button">
                            <button><Link to={`/create-team/${id}`}>NEW TEAM</Link></button>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="text">
                        <p>Not enough people in your lobby? Invite more!</p>
                    </div>
                    <div className="button">
                        <button><Link href="/invite-friends">INVITE FRIENDS</Link></button>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}