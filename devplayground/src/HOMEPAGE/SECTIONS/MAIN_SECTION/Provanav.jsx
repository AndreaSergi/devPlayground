import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './parallax.css';

export function ProvaNav() {
    const nav = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
    }, [isLoggedIn]); // Aggiorna isAuthenticated ogni volta che cambia isLoggedIn

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAuthenticated(false);
        nav('/');
    };

    return (
        <div className='navProvaContainer'>
            <div className='logoProvaNav'>
                <img className='imgLogoNav' src="./public/LogoDP.png" alt="" />
            </div>
            {isLoggedIn ? (
                <div className='dxNav'>
                    <button className='buttonProvaNav' onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <button className='buttonProvaNav' onClick={() => nav('/login')}>Login</button>
            )}
        </div>
    );
}
