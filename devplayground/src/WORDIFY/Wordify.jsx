import { ParoleGrid } from "./ParoleGrid";
import { PlayAgain } from "./PlayAgain";
import { Tastiera } from "./Tastiera";
import { useEffect, useState} from "react";

export function Wordify() {
    

    const [lettereUguali, setLettereUguali] = useState([]);
    const [indiciUguali, setIndiciUguali] = useState([]);
    const [rowIndex, setRowIndex] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [oggettoOccorrenze, setOggettoOccorrenze] = useState({});
    const [parolaGenerata, setParolaGenerata] = useState([]);
    const [indovinato, setIndovinato] = useState(false)
    
    /* console.log('Parola generata:', parolaGenerata); */
    console.log('Parola generata:', parolaGenerata && parolaGenerata[0] ? parolaGenerata[0].join('') : '');

    const titolo = "W O R D I F Y"

    

    // Function to handle "invio" in Tastiera
    const handleInvio = (newLettereUguali, newIndiciUguali) => {
        
        setLettereUguali(newLettereUguali)
        setIndiciUguali(newIndiciUguali)
        
        console.log("Indici uguali???:",indiciUguali)
    
    };

    useEffect(()=>{
        if(indiciUguali.length == 5 || rowIndex  > 5){
            setGameOver(true)
        }

    },[rowIndex, indiciUguali])

    useEffect(() => {
        if(indiciUguali.length == 5){
            setIndovinato(true)
        }
    })

    return (
        <div className="parent-container">
            <div className="main-container">
                <h1 className="neonTextTitle">{titolo}</h1>
                <ParoleGrid indiciUguali = {indiciUguali} lettereUguali={lettereUguali} rowIndex = {rowIndex} occorenze = {oggettoOccorrenze}/>
                {!gameOver ?
                    <Tastiera onInvio={handleInvio} rowIndex = {rowIndex} setRowIndex = {setRowIndex}
                    setParolaGenerata={setParolaGenerata}/> : <PlayAgain parolaGenerata={parolaGenerata} rowIndex={rowIndex} indovinato={indovinato}/>
                }
            </div>

        </div>
    )
}