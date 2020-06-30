import React from 'react'

export default function Lobbies() {
    return (
        <div className="container">
            <div className="page-content">
                <div className="header">
                    <h2>Lobbies</h2>
                    <p>You currently have # lobbies open.</p>
                </div>
                <div className="container">
                    <div className="instance">
                        <p>Lobby Name</p>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="instance">
                        <p>Lobby Name</p>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="instance">
                        <p>Lobby Name</p>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="button">
                        <button><a href="/create-lobby">NEW LOBBY</a></button>
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