import { useState, useEffect } from 'react';
import './Navbar.css';

export function Navbar() {
    const [sticky, setSticky] = useState(false);
    const heightNavbar = 53
    const styleNavbar = {
        height: heightNavbar
    }

  const handleScroll = () => {
    const isSticky = window.scrollY > heightNavbar;
    console.log(window.innerHeight)
    setSticky(isSticky);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style={styleNavbar} className={`navbar ${sticky ? 'navbar-sticky' : ''}`}>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#games">Games</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}