import { Link } from "react-router-dom";

export function HomeLogo(){
    return(
        <Link className="linkHomeLogo" to="/">
        <img className="homeLogo" src="../logoDevPlayground.png" alt="" />
        </Link>
    )
}