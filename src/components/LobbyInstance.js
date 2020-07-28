import React from "react"
import { Link } from "react-router-dom"

export default function LobbyInstance(props) {
    const { link, text } = props.instance
    return (<>
            <Link to={`${link}`}>
                <button className="instance">
                    <p>{text}</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </Link>
        </>
    )
}
