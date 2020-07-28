import React, { Component } from 'react'
import Instance from '../components/Instance';

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
<<<<<<< HEAD
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
                    </div>
                    <div className="button">
                        <button><a href="/create-lobby">NEW LOBBY</a></button>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
=======

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
            const lobbies = json.map(item => {return {link: item._id, text: item.name}})

            this.setState({lobbies})
        })
    }

    

    render() {
        return (
            <div className="container">
                <div className="center">
                    <div className="header">
                        <h2>Lobbies</h2>
                        <p>You currently have # lobbies open.</p>
                    </div>
                    <div className="container">
                        <div className="instances">
                            {this.state.lobbies.map((instance) => <Instance instance={instance} key />)}
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
>>>>>>> 633c5c507a6726b2d8af7bd30f0121c33cc80db4
                    </div>
                </div>
                {this.state.redirect && <Redirect to="/" />}
            </div>
        )
    }
}