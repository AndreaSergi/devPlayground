import { HomeLogo } from '../HOMEPAGE/HomeLogo';
import { InfoWordify } from './InfoWordify';
import './wordifyIntro.css'
import './wordify.css'
import { Link} from "react-router-dom";

export function WordifyIntro() {

    return (
      
        <div className="introMainContainer">
            <img className="introImg" src="./src/WORDIFY/img/bricksBg2.jpg" alt="" />
            <div className="introTitle ">W O R D <span className="introBrokenLetter">I F Y</span></div>

            <Link className='wordifyLink' to="/HomeWordify/wordify">
              <button className="playWordify">Gioca</button>
            </Link>

            <InfoWordify/>
            <HomeLogo nomeClassePersonalizzata={"homeLogoWordify"}/>
        </div>
       
    )
}