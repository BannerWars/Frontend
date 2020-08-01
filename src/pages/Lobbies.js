import React, { Component } from 'react'
import LobbyInstance from '../components/LobbyInstance';

import { Redirect, Link } from "react-router-dom"

// const instances = [
//     {
//         link: "/lobby",
//         text: "Lobby Name",
//     },
//     {
//         link: "/lobby",
//         text: "Lobby Name",
//     },
//     {
//         link: "/lobby",
//         text: "Lobby Name",
//     }
// ]

export default class Lobbies extends Component {
    constructor(props){
        super(props)

        this.state = {
            lobbies: [],
            redirect: false,
        }
    }

    componentDidMount() {
        if(localStorage.getItem("bannerWarsToken")){ 
            this.getLobbies()
        }
        else {
            this.setState({redirect: true})
        }
    }

    getLobbies() {
        const path = process.env.REACT_APP_BACKEND + "/users/lobbies/"
        fetch(path, {
            headers : {"Authorization": localStorage.getItem("bannerWarsToken")},
        })
        .then(res => res.json())
        .then(json => {
            const lobbies = json.map(item => {return {link: `/lobbies/${item._id}`, text: item.name}})
            this.setState({lobbies})
        })
    }

    

    render() {
        return (
            <div className="container">
                <div className="center">
                    <div className="header">
                        <h2>Lobbies</h2>
                        <p>You currently have {this.state.lobbies.length} {this.state.lobbies.length == 1? "lobby" : "lobbies"} open.</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {this.state.lobbies.map((instance) => <LobbyInstance instance={instance} key />)}
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
                            <button><Link to="/create-lobby">NEW LOBBY</Link></button>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                {this.state.redirect && <Redirect to="/" />}
            </div>
        )
    }
}