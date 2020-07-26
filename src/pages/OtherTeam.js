import React from 'react'
import Instance from '../components/Instance';

const user_instances = [
    {
        link: "/invite-friends",
        text: "User Name",
    },
    {
        link: "/invite-friends",
        text: "User Name",
    },
    {
        link: "/invite-friends",
        text: "User Name",
    }
]

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

export default function OtherTeam() {
    return (
        <div className="container">
            <h1>Lobby Name - Team Name</h1>
            <div className="page-content">
                <div className="members">
                    <div className="header">
                        <h2>Members</h2>
                        <p>There are currently # members.</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {user_instances.map((instance) => <Instance instance={instance}/>)}
                            {/* <a href="/invite-friends">
                                <button className="instance">
                                    <p>User Name</p>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </a>
                            <a href="/invite-friends">
                                <button className="instance">
                                    <p>User Name</p>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </a>
                            <a href="/invite-friends">
                                <button className="instance">
                                    <p>User Name</p>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </button>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="banners">
                <div className="header">
                        <h2>Members</h2>
                        <p>There are currently # members.</p>
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
                    </div>
                </div>
                <div className="banner">
                    <img src="images/banner.png" alt="banner"/>
                </div>
            </div>
        </div>
    )
}