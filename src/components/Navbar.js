import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


// styles import
import '../style/navbar.css'



const navButtons = ["Rules", "Lobbies", "Log Out"]
const navButtonsLogOut = ["Rules", "Log In", "Sign Up"]


export default function Navbar() {
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("bannerWarsToken")
        if (token) {
            setAuth(true)
        }
    })
    return (
        <nav>
            <img src="./images/Grid.svg" alt="grid"/>
            <div className="content">
                <div className="logo">
                    <a href="/">
                        <h1>Banner Wars</h1>   
                    </a>             
                </div>
                <ul className="nav_buttons">
                    { 
                        /* render nav buttons with links to corresponding pages */
                        auth?
                        navButtons.map(text => <li key={text} ><Link className="nav-button" to={`/${text.toLowerCase().replace(/\s/g,"-")}`}>{text}</Link></li>)
                        :
                        navButtonsLogOut.map(text => <li key={text} ><Link className="nav-button" to={`/${text.toLowerCase().replace(/\s/g,"-")}`}>{text}</Link></li>)
                    }
                </ul>
            </div>
        </nav>
    )
}