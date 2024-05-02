import React, { useState } from 'react';
import './ButtonUp.css'

export function ButtonUp() {
    const [isVisible, setIsVisible] = useState(false);

    // Mostra il pulsante quando la posizione dello scroll è oltre una certa soglia
    const toggleVisibility = () => {
        if (window.pageYOffset > 1020) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Torna in cima alla pagina
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Aggiungi un listener per controllare lo scroll
    window.addEventListener('scroll', toggleVisibility);

    return (
        <div>
            {isVisible && (
                <button onClick={scrollToTop} className='button-up'>
                    <svg viewBox="0 0 24 24" color="invertedContrast" ml="0.5rem" width="20px"  xmlns="http://www.w3.org/2000/svg"
                        class="button-up-arrow">
                        <path
                            d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z">
                        </path>
                    </svg>
                </button>
            )}
        </div>
    );
};

