import React from 'react'
import Instance from '../components/Instance';

const instances = [
    {
        link: "/lobby",
        text: "Lobby Name",
    },
    {
        link: "/lobby",
        text: "Lobby Name",
    },
    {
        link: "/lobby",
        text: "Lobby Name",
    }
]

export default function Lobbies() {
    return (
        <div className="container">
            <div className="center">
                <div className="header">
                    <h2>Lobbies</h2>
                    <p>You currently have # lobbies open.</p>
                </div>
                <div className="container">
                    <div className="instances">
                        {instances.map((instance) => <Instance instance={instance}/>)}
                        {/* <a href="/lobby">
                            <button className="instance">
                                <p>Lobby Name</p>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                        </a>
                        <a href="/lobby">
                            <button className="instance">
                                <p>Lobby Name</p>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </button>
                        </a> */}
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