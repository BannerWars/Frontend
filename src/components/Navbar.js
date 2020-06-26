import React from "react"
import { Link } from "react-router-dom"


// styles import
import '../style/navbar.css'



const navButtons = ["Rules", "Lobbies", "Log Out"]


export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <a href="/">
                    <h1>Banner Wars</h1>   
                </a>             
            </div>
            <ul className="nav_buttons">
                { 
                    /* render nav buttons with links to corresponding pages */
                    navButtons.map(text => <li key={text} ><Link className="nav-button" to={`/${text.toLowerCase()}`}>{text}</Link></li>)
                }
            </ul>
        </nav>
    )
}