import React from "react"
import { Link } from "react-router-dom"

export default function BannerInstance(props) {
    const { steal, text } = props.instance
    return (<>
            <div onClick={steal}>
                <button className="instance">
                    <p>{text}</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </>
    )
}
