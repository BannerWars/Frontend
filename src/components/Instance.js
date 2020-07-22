import React from "react"

function Instance(props) {
    const { link, text } = props.instance
    return (<>
            <a href={`lobbies/${link}`}>
                <button className="instance">
                    <p>{text}</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </a>
        </>
    )
}

export default Instance