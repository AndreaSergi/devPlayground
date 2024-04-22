import { Link } from "react-router-dom";

export function HomeLogo(){
    return(
        <Link to="/">
        <img className="homeLogo" src="./src/HOMEPAGE/logoDevPlayground.png" alt="" />
        </Link>
    )
}