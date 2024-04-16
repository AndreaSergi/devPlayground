import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function ProvaHome() {
    const nav = useNavigate()

    const [isLogged, setUser] = useState(JSON.parse(sessionStorage.getItem("isLogged")));

    return (
        <div className="container">
            <h1>Home DEV PLAYGROUND</h1>
            {!isLogged && <button onClick={() => { nav("/login") }}>Login page</button>}
            {isLogged && <button onClick={() => { sessionStorage.setItem("isLogged", "false") ; setUser(false) }}>Log-out</button>}
            {<button onClick={() => { nav("/pingpong") }}>PingPong</button>}
            {<button onClick={() => { nav("tris") }}>Tris</button>}
            {<button onClick={() => { nav("/wordify") }}>Wordify</button>}
        </div>
    )
}