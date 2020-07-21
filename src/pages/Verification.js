import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

export default function Verification() {
    let {id} = useParams()
    const [error, setError] = useState("")
    useEffect(() => {
        const path = process.env.REACT_APP_BACKEND + "/users/verify/"
        console.log(path)
        fetch(path, {
            method : "POST", 
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({userId: id})
        })
        .then(res => res.json())
        .then(json => {
            setError(json.message)
        })
    })
    return (
        <div className="container">

            <h1 id="verification">Welcome to Banner Wars!</h1>
            <p>{error}</p>
            <Link to="/log-in" id="log-in">Log In</Link>
        </div>
    )
}
