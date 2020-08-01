import React, { useState, useEffect } from 'react'
import LobbyInstance from '../components/LobbyInstance'
import BannerInstance from '../components/BannerInstance'
import { useParams, Link } from "react-router-dom"
import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css'

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

function stealCall(banner, teamName, lobbyId) {
    console.log("actually stealing now")
    const path = process.env.REACT_APP_BACKEND + `/team/steal/`
    const data = {
        token: localStorage.getItem("bannerWarsToken"),
        lobbyId,
        banner,
        teamName,
    }

    fetch(path, {
        method : "POST", 
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(json => {
        window.location.reload()
    })
}

function joinTeam(lobbyId, teamName) {
    const path = process.env.REACT_APP_BACKEND + `/team/join/`
    const data = {
        token: localStorage.getItem("bannerWarsToken"),
        lobbyId,
        teamName,
    }

    fetch(path, {
        method : "POST", 
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(data)
    }).then(res => res.json())
    .then(json => {
        window.location.reload()
    })
}

function stealBanner(banner, teamName, lobbyId) {
    const options = {
        title: `Steal ${banner}?`,
        message: `are you sure you want to steal the ${banner} banner?`,
        buttons: [
            {
              label: 'Yes',
              onClick: () => stealCall(banner, teamName, lobbyId)
            },
            {
              label: 'No',
              onClick: () => console.log("said no")
            }
          ],
    }
    confirmAlert(options)
}


function getLobby(lobbyId, setLobby, setUsers, teamIndex) {
    const path = process.env.REACT_APP_BACKEND + `/lobby/single/${lobbyId}`

    fetch(path)
        .then(res => res.json())
        .then(json => {
            setLobby(json)
            setUsers(json.users.filter((user) => json.teams[teamIndex].name == user.team))

        })


}

export default function OtherTeam() {
    const [lobby, setLobby] = useState({})
    const { lobbyId, teamIndex } = useParams()
    const [ users, setUsers] = useState([])

    useEffect(() => {
        getLobby(lobbyId, setLobby, setUsers, teamIndex)
    }, [lobbyId])

    return (
        <div className="container">
            <h1><Link to={`/lobbies/${lobbyId}`}>{lobby.name? lobby.name: "Lobby Name"}</Link> - {lobby.name? lobby.teams[teamIndex].name: "Team Name"}</h1>
            <div className="page-content">
                <div className="members">
                    <div className="header">
                        <h2>Members</h2>
                        <p>There {users.length == 1 ? "is" : "are"} currently {users.length} member{users.length != 1 && "s"}.</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {users.map((instance) => <LobbyInstance instance={{link: "#", text: instance.username}} />)}
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
                        <div className="button">
                            <button onClick={() => joinTeam(lobbyId, lobby.teams[teamIndex].name)}><div>JOIN TEAM</div></button>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="banners">
                    <div className="header">
                        <h2>Banners</h2>
                        <p>This team currently has {lobby.teams ? lobby.teams[teamIndex].banners.length : 0} banner{lobby.teams && lobby.teams[teamIndex].banners.length != 1 && "s"}</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {lobby.teams && lobby.teams[teamIndex].banners.map((instance) => <BannerInstance instance={{text: instance, steal: () => stealBanner(instance, lobby.teams[teamIndex].name, lobbyId)}} />)}
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
                    <img src={require("../images/banner.png")} alt="banner" />
                </div>
            </div>
        </div>
    )
}