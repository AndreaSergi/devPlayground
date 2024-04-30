import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Navbar.css'
import { HomeLogo } from '../HOMEPAGE/HomeLogo';
import { useNavigate } from 'react-router-dom';


export function MobileNavbar() {
  const nav = useNavigate();

  const [expanded, setExpanded] = useState(false);
  const logo = "<DevPlayground/>";

  const [isScrolled, setIsScrolled] = useState(false);
  // Aggiungi uno stato per il percorso dell'immagine
  const [imageSrc, setImageSrc] = useState('navbar/ic_login_light.svg'); // Imposta il percorso iniziale dell'immagine

  useEffect(() => {

    const handleScroll = () => {
      const navbarElement = document.querySelector('.sticky-top');
      const heroElement = document.querySelector('.appContainer');
      const heroHeight = heroElement.offsetHeight;
      const navbarHeight = navbarElement.offsetHeight;
      const scrolled = window.scrollY > navbarHeight;
      //setIsScrolled(scrolled);
      setImageSrc(scrolled ? 'navbar/ic_login.svg' : 'navbar/ic_login_light.svg');
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };

  }, []);


  // Helper function
  function debounce(fn, delay) {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn();
      }, delay);
    }
  }


  return (
    <Navbar variant="dark" expanded={expanded} expand="md" className={`sticky-top ${isScrolled ? 'fixed-navbar' : ''}`}>

      <Container>
        <Navbar.Brand href="/">{(
          <div className='navbar-homeLogo'><HomeLogo /></div>
        )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            {/* <Nav.Link href="#features">Games</Nav.Link> */}
            {/* <Nav.Link href="#pricing">About</Nav.Link> */}
          </Nav>
          <Nav>
            <Button variant="secondary" onClick={()=>{nav("/login")}} >
              {/* Usa lo stato imageSrc per l'attributo src dell'immagine */}
              <img height={20} src={imageSrc} alt="Login" /> Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
