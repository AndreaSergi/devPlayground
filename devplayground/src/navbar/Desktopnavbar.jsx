import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Desktopnavbar.css";
import './Navbar.css';
import { useState, useEffect } from 'react';

export function Desktopnavbar() {
  const [sticky, setSticky] = useState(false);
  const heightNavbar = 53;
  const styleNavbar = {
    height: heightNavbar
  };

  const handleScroll = () => {
    const isSticky = window.scrollY > heightNavbar;
    console.log(window.innerHeight);
    setSticky(isSticky);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar style={styleNavbar} className={`navbar ${sticky ? 'navbar-sticky' : ''}`} bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="navbar-nav me-auto">
            <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-item" href="#features">Features</Nav.Link>
            <Nav.Link className="nav-item" href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
