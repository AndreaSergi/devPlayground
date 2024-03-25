import { useState, useEffect } from "react";
import {InputButton} from "./InputButton"
import { RowGrid } from './RowGrid';
import {ParoleGrid} from './ParoleGrid'


export function Tastiera({onInvio, rowIndex, setRowIndex}){
    const [cellIndex, setCellIndex] = useState(0);
    const [tentativo, setTentativo ] = useState("")
    const [arrayParole1, setArrayParole1] = useState([])
    const [parolaCorretta, setParolaCorretta] = useState('')
    const [arrayDiLetterePuzzolenti, setArrayDiLetterePuzzolenti] = useState([])
    
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'INVIO', 'DELETE']
    ]


    const paroleItaliane5 = [
        "fiera",
        "rosso",
        "piano",
        "sedia",
        "grano",
        "fiume",
        "lampo",
        "sogno",
        "miele",
        "manto",
        "terra",
        "verde",
        "pazza",
        "corpo",
        "fogna",
        "donna",
        "stelo",
        "piede",
        "pollo",
        "fiore",
        "peste",
        "scala",
        "canna",
        "culla",
        "notte",
        "scala",
        "dolce",
        "pieno",
        "vista",
        "forza",
        "guida",
        "vetro",
        "cielo",
        "notte",
        "culla",
        "lampo",
        "canto",
        "occhi",
        "sonno",
        "padre",
        "ombra",
        "cacao",
        "secco",
        "burro",
        "denti",
        "luogo",
        "terra",
        "legno",
        "meteo",
        "monte",
        "palla",
        "scena",
        "fiera",
        "mente",
        "porto",
        "dente",
        "canto",
        "lucro",
        "scala",
        "copia",
        "pista",
        "scalo",
        "scena",
        "volta",
        "figli",
        "sinus",
        "sedia",
        "giuro",
        "guano",
        "giuro",
        "spina",
        "tempi",
        "tasso",
        "trama",
        "sogno",
        "messa",
        "ragno",
        "grado",
        "donna",
        "stamp",
        "panno",
        "norma",
        "lampo",
        "golfo",
        "guano",
        "gusto",
        "stria",
        "fiume",
        "pazza",
        "spada",
        "grana",
        "brama",
        "mossa",
        "villa",
        "pazza",
        "fetta",
        "nervo",
        "acqua",
        "pesca",
        "becco",
        "vista",
        "pieno",
        "folla",
        "botta",
        "risma",
        "magra",
        "terme",
        "piaga",
        "parco",
        "patto",
        "squad",
        "vista",
        "pazzo",
        "tavol",
        "pelle",
        "sogno",
        "scopo",
        "buono",
        "folla",
        "gamma",
        "venne",
        "lotta",
        "frodo",
        "mimmo",
        "prono",
        "retto",
        "vasta",
        "anima",
        "metto",
        "stiva",
        "verbo",
        "scema",
        "virgo",
        "gotta",
        "fugge",
        "scalo",
        "chiar",
        "prese",
        "corpo",
        "guano",
        "tovag",
        "curvo",
        "merlo",
        "stola",
        "lotto",
        "firma",
        "mista",
        "stiva",
        "comun",
        "sesto",
        "rondo",
        "trama",
        "bagno",
        "tagli",
        "fiato",
        "scudo",
        "vista",
        "ricco",
        "sello",
        "porto",
        "bosco",
        "zolla",
        "scena",
        "campo",
        "ruota",
        "senso",
        "botte",
        "tomba",
        "sorgo",
        "bosco",
        "fucil",
        "donna",
        "buona",
        "culla",
        "bocca",
        "folla",
        "curva",
        "pista",
        "tavol",
        "barca",
        "lotta",
        "spada",
        "costa",
        "risma",
        "zocco",
        "polio",
        "pieno",
        "bieta",
        "selva",
        "bioma",
        "cerbo",
        "suola",
        "stola",
        "spola",
        "frode",
        "lavor",
        "vento",
        "sugli",
        "lavor",
        "suole",
        "buono",
        "picco",
        "scato",
        "stesa",
        "metto",
        "corso",
        "farlo",
        "pette",
        "metto",
        "corso",
        "scema",
        "scato",
        "rospo",
        "musco",
        "salmo",
        "prono",
        "verbo",
        "bieta",
        "teore",
        "verme",
        "sopra",
        "risma",
        "stoca",
        "soffi",
        "musco",
        "verba",
        "folla",
        "spola",
        "maius",
        "veste",
        "sugli",
        "corso",
        "vetri",
        "vento",
        "vetro",
        "spesa",
        "grifo",
        "corsi",
        "corsa",
        "costa",
        "copia",
        "viggo",
        "pesto",
        "polio",
        "vesto",
        "piano",
        "bocca",
        "tomba",
        "lavor",
        "cuore",
        "lento",
        "copio",
        "corto",
        "visto",
        "scopa",
        "risma",
        "pieno",
        "scopa",
        "sopra",
        "stola",
        "vesta",
        "cesto",
        "petto",
        "peste",
        "stoic",
        "pieta",
        "posto",
        "carbo",
        "stima",
        "scopa",
        "bruma",
        "matto",
        "basso",
        "lotta",
        "scopa",
        "pesto",
        "corsi",
        "musco",
        "soffi",
        "rospo",
        "stoca",
        "calmo",
        "vista",
        "muovo",
        "sfera",
        "ruoto",
        "rospo",
      ];
      
      const paroleItaliane6 = [
        "giallo",
        "lunaio",
        "fiesta",
        "lavare",
        "patata",
        "andare",
        "calcio",
        "casset",
        "pagare",
        "gustar",
        "viaggi",
        "spazio",
        "cucina",
        "farina",
        "pensar",
        "salute",
        "dolore",
        "brutto",
        "lingua",
        "famili",
        "matita",
        "vitale",
        "ritorn",
        "abbond",
        "merito",
        "lavoro",
        "cancro",
        "saluto",
        "nebbia",
        "catena",
        "sorrid",
        "profum",
        "montag",
        "danneg",
        "terrib",
        "merito",
        "fidanz",
        "strada",
        "felice",
        "regalo",
        "giorno",
        "tempor",
        "sistem",
        "dottor",
        "pesant",
        "lucido",
        "aperto",
        "deside",
        "cavolo",
        "vestit",
        "pubbli",
        "fortun",
        "raggio",
        "veloce",
        "guardo",
        "girare",
        "vivere",
        "cavare",
        "polver",
        "fiorir",
        "vuotar",
        "sorris",
        "cucire",
        "tintor",
        "cercar",
        "attenz",
        "creare",
        "grembo",
        "storia",
        "sciogl",
        "fidanz",
        "amante",
        "pistol",
        "cassar",
        "bottig",
        "batter",
        "indaga",
        "albero",
        "nascon",
        "guidar",
        "pittur",
        "acquam",
        "lunghi",
        "ballar",
        "romanz",
        "ammira",
        "sugger",
        "brutto",
        "cresta",
        "contat",
        "fiocco",
        "scoppi",
        "malati",
        "scelte",
        "macchi",
        "esamin",
        "truppe",
        "vivace",
        "calcio",
        "modell",
        "cambia",
        "mentre",
        "dispos",
        "passag",
        "mandar",
        "diping",
        "mattin",
        "giocar",
        "terrib",
        "corsia",
        "candit",
        "vittor",
        "attacc",
        "solita",
        "valore",
        "cerchi",
        "dipend",
        "vuotar",
        "cancro",
        "spazio",
        "rubare",
        "fintur",
        "fumare",
        "pianur",
        "cammin",
        "ballat",
        "cucino",
        "urlare",
        "domani",
        "rischi",
        "soffer",
        "sapore",
        "divers",
        "riflet",
        "imparo",
        "voglio",
        "lascia",
        "vedere",
        "niente",
        "dentro",
        "batter",
        "ricchi",
        "mestie",
        "tavolo",
        "guidat",
        "ingann",
        "recita",
        "scolta",
        "grazia",
        "fatica",
        "spazio",
        "faccio",
        "fresco",
        "conten",
        "gruppo",
        "passat",
        "feriti",
        "abbiam",
        "chiama",
        "notare",
        "vestir",
        "cambie",
        "chiudo",
        "quando",
        "nascon",
        "quadro",
        "sorrid",
        "casset",
        "restit",
        "mister",
        "metter",
        "affari",
        "voglia",
        "vorrei",
        "sospet",
        "lavora",
        "rispon",
        "pantal",
        "cadere",
        "frutta",
        "bisogn",
        "sorris",
        "ammira",
        "fumare",
        "scopri",
        "stiamo",
        "salire",
        "genere",
        "guarda",
        "impara",
        "attesa",
        "sentir",
        "nascer",
        "torner",
        "mestie",
        "salire",
        "risolv",
        "toccar",
        "cresci",
        "leggim",
        "terrib",
        "guidat",
        "diritt",
        "scrivi",
        "arriva",
        "sistem",
        "comand",
        "solita",
        "rispon",
        "cerchi",
        "fuggir",
        "sostie",
        "scopri",
        "abbiam",
        "sentir",
        "leggim",
        "quando",
        "romanz",
        "prendi",
        "voglio",
        "compra",
        "potere",
        "prendi",
        "uccidi",
        "guardi",
        "parlai",
        "guarda",
        "prendi",
      ];
      


      useEffect(() => {
          const indiceParola = Math.floor(Math.random() * paroleItaliane5.length);
          setParolaCorretta(() => paroleItaliane5[indiceParola].split(''))
        }, []);


        useEffect(()=>{

            console.log("Parola corretta:", parolaCorretta)
        },[parolaCorretta])
        
        console.log("-----------------------------------------------")
// -----------------------------------------------------------------------------

    function provaTest(parola1, parola2){
        let oggettoOccorrenze = {}
        parola2.split("").forEach(element => {
            if(oggettoOccorrenze[element] == undefined){
                oggettoOccorrenze[element] = 0
                parola1.forEach(element2 => {
                    if(element2 === element){
                        oggettoOccorrenze[element] ++
                    }
                })
            }
        });
        return oggettoOccorrenze
    }


// ---------------------------------------------------------------------------
            
        function handleInvio() {

            if (rowIndex <= 5 && cellIndex > 4) {
                setRowIndex(rowIndex + 1);
                setCellIndex(0);
                setArrayParole1(prevArray => [...prevArray, tentativo]);
        
                const tentativoLowercase = tentativo.toLowerCase();
                const tentativoArray = tentativoLowercase.split('');
                

                console.log("AAAAAAAAAAAAAAAAAAAAAAAAA",tentativo, parolaCorretta)
                
                const oggettoOccorrenze = provaTest(parolaCorretta, tentativoLowercase)



                // Trova gli indici uguali
                const nuoviIndiciUguali = tentativoArray.map((element, index) => {
                    if(parolaCorretta[index] === element)
                    if(oggettoOccorrenze[element] > 0){
                        oggettoOccorrenze[element] --
                        return index
                    }
                }).filter((lettera)=>(lettera != null));

                // Trova le lettere uguali
                const nuoveLettereUguali = tentativoArray.map((element, index) => {
                    if(oggettoOccorrenze[element] > 0){
                        oggettoOccorrenze[element] --
                        console.log("coloro di giallo", element)
                        return index
                    } else {
                        const letteraChePuzza = element
                        setArrayDiLetterePuzzolenti((prevArray) => [...prevArray, letteraChePuzza])
                        console.log("suca",letteraChePuzza)
                    }
                }).filter((lettera)=>(lettera != null));

                console.log("NUOVO CONSOLLAZZO" ,nuoveLettereUguali)
                
                
                            

                onInvio(nuoveLettereUguali, nuoviIndiciUguali, oggettoOccorrenze)
                console.log(nuoviIndiciUguali)
                console.log('Nuove lettere uguali:', nuoveLettereUguali)

                setTentativo("");

                
            } else {
                return null;
            }
        }
  


    function handleDelete() {
        const wordCells = document.querySelectorAll('.wordCellsContainer')[rowIndex].children;
    
        if (cellIndex > 0) {
            wordCells[cellIndex - 1].innerText = "";
            
            setCellIndex(cellIndex - 1);

            setTentativo(prevTentativo => prevTentativo.slice(0, -1));
    
        }
    }



    return (
        <div className="tastiera">
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((key, keyIndex) => (
                        <InputButton
                            key={keyIndex}
                            rowIndex={rowIndex}
                            cellIndex={cellIndex}
                            setTentativo={setTentativo}
                            setCellIndex={setCellIndex}
                            lettera={key}
                            puzza={arrayDiLetterePuzzolenti.includes(key.toLowerCase())}
                            clickFunction={key === 'INVIO' ? handleInvio : (key === 'DELETE' ? handleDelete : undefined)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}