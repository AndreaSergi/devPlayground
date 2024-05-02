import { Link } from "react-router-dom";
// import '../WORDIFY/WordifyIntro.css'

export function HomeLogo({nomeClassePersonalizzata}){
    return(
        <Link className={`linkHomeLogo ${nomeClassePersonalizzata}`} to="/">
        <img className='homeLogo' src="../public/LogoDP.png" alt="" />
        </Link>
    )
}