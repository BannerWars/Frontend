import React from 'react'
import Instance from '../components/Instance';

const instances = [
    {
        link: "/lobby",
        text: "Team Name",
    },
    {
        link: "/lobby",
        text: "Team Name",
    },
    {
        link: "/lobby",
        text: "Team Name",
    }
]

export default function Lobby() {
    return (
        <div className="container">
            <h1>Lobby Name</h1>
            <div className="page-content">
                <div className="left">
                    <div className="header">
                        <h2>Teams</h2>
                        <p>There are currently # teams.</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {instances.map((instance) => <Instance instance={instance}/>)}
                            {/* <a href="/lobby">
                                <button className="instance">
                                    <p>Team Name</p>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </a>
                            <a href="/lobby">
                                <button className="instance">
                                    <p>Team Name</p>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </a>
                            <a href="/lobby">
                                <button className="instance">
                                    <p>Team Name</p>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </a> */}
                        </div>
                        <div className="button">
                            <button><a href="/create-lobby">NEW TEAM</a></button>
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
                        <button><a href="/invite-friends">INVITE FRIENDS</a></button>
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