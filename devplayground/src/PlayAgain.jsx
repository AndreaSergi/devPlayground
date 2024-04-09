import { useState } from "react";

export function PlayAgain({parolaGenerata, rowIndex, indovinato}) {
    function refreshPage() { 
        window.location.reload(); 
    }

    // Check if parolaGenerata is not null or undefined before accessing it
    const parola = parolaGenerata ? parolaGenerata[0].join('') : '';
    

    return (
        <>
            {parola && 
               <div className="correctIsContainer">
                 <div className="correctIs">
                    La parola corretta e':
                    <span id="correttaGameOver"> {parola.toUpperCase()} </span>
                    </div>
                    {indovinato === true && <div className="correctIs">Hai indovinato in <span className="numeroTentativi">{rowIndex}</span> tentativi !</div>
                    }
               </div>
            }


            <div className="play-again neonTextPlayAgain" type="div" onClick={refreshPage}>
                <span className="neonTextPlayAgain">GIOCA ANCORA</span>
            </div>
        </>
    )
}