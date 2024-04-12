import './Footer.css'
import { SiGithub, SiLinkedin,SiInstagram } from 'react-icons/si';

export function Footer() {
    return (
        <footer className="footer">
        
            <div className='footer-upper'>

                <img  className='footer-logo'src="https://www.repstatic.it/content/contenthub/img/2021/09/13/155552273-78253fc3-5949-4c83-a452-d07ee9b65dc9.png" alt="" />

                <div className="footer-left">
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Games</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2>Framework utilizzati</h2>
                    <div className="footer-social">
                    <SiGithub />
                    <SiLinkedin />
                    <SiInstagram />
                    {/* Aggiungi qui le icone dei social media desiderati */}
                </div>
                </div>
                
            </div>

            <div className="footer-bottom">
                <hr />
                <p>Privacy Policy</p>
            </div>
        </footer>
    );
}