import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'react-bootstrap/dist/react-bootstrap';
import './Navbar.css'

export function MobileNavbar() {
  const [expanded, setExpanded] = useState(false);
  const logo = "<DevPlayground/>";
  
  const [isScrolled, setIsScrolled] = useState(false);
  // Aggiungi uno stato per il percorso dell'immagine
  const [imageSrc, setImageSrc] = useState('navbar/ic_login_light.svg'); // Imposta il percorso iniziale dell'immagine

  
  

  useEffect(() => {
    const handleScroll = () => {
      const navbarElement = document.querySelector('.sticky-top');
      const navbarHeight = navbarElement.offsetHeight;
      const scrolled = window.scrollY > 550;
      setIsScrolled(scrolled);
      // Aggiorna il percorso dell'immagine in base allo scroll
      setImageSrc(scrolled ? 'navbar/ic_login.svg' : 'navbar/ic_login_light.svg');
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar variant="dark" expanded={expanded} expand="md" className={`sticky-top ${isScrolled ? 'fixed-navbar' : ''}`}>
      <Container>
        <Navbar.Brand href="#home">{logo}</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Games</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="secondary">
              {/* Usa lo stato imageSrc per l'attributo src dell'immagine */}
              <img height={20} src={imageSrc} alt="Login" /> Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
