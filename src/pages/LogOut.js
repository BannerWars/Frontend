import React, {useEffect} from 'react'

export default function LogOut() {
    useEffect(() => {
        localStorage.removeItem("bannerWarsToken")
        window.location.href="/"
    })
    return (
        <>Loging out</>
    )
}