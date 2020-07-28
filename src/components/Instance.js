import React from "react"
import { Link } from "react-router-dom"

function Instance(props) {
    const { link, text } = props.instance
    return (<>
            <Link to={`lobbies/${link}`}>
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

export default Instance