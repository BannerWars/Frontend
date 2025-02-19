import React from 'react'

import '../style/pages.css'

export default function Home() {
    return (
        <div className="container">
            <div className="header">
                <h1>Welcome to Banner Wars!</h1>
            </div>
            <div className="content">
                <div className="left">
                    <div className="text">Banner Wars is excited to welcome you to the family! Here you can create capture the flag type game lobbies for you and your friends to play in. Simply sign up for an account, and get started with creating game lobbies right away!</div>
                    <div className="buttons">
                        <div className="button">
                            <button><a href="/create-lobby">NEW LOBBY</a></button>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="button">
                            <button><a href="/create-team">NEW TEAM</a></button>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="banners">
                        <p>Banners image to come</p>
                    </div>
                </div>
            </div>
        </div>
    )
}