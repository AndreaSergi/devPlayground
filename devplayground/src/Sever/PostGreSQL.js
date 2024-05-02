const pgp = require('pg-promise')(); // importare pg-promise

const cn = { //oggetto con i parametri
    host: 'localhost',
    port: 5432,
    database: 'Prova Database',
    user: 'postgres',
    password: '1234',
    max: 30 // use up to 30 connections
};

const db = pgp(cn);


/*INSERIRE DATI NEL DB*/
async function pushData(name, surname, eta, email , password) {
    db.none("INSERT INTO prova_tabella(name,surname,eta,email,password) VALUES($1, $2, $3, $4 , $5)", [name, surname, eta, email , password])
        .then(() => {
            // success;
            console.log("Dati salvati correttamente");
        })
        .catch(error => {
            // error;
            console.log(error);
        });
}

/*PRENDERE DATI NEL DB*/
async function getAllData() {
    db.any("SELECT * FROM prova_tabella")
        .then(data => {
            // successo: data contiene i risultati della query
            console.log("dati ottenuti");
            console.log(data);
            return data;
        })
        .catch(error => {
            // errore: gestisci l'errore qui
            console.log(error);
        });
}

const getOneUser = async (req, res) => {
    const { email } = req.params;
    const user = await db.any("SELECT * FROM prova_tabella WHERE email = $1", [email])
    res.status(200).json({user});
}



/*RITORNA L'UTENTE INSERENDO L'EMAIL*/
async function getUserFromEmail(email) {
    db.any("SELECT * FROM prova_tabella WHERE email = $1", [email])
        .then(data => {
            // successo: data contiene i risultati della query
            console.log("ecco l' utente");
            console.log(data);
            return data;
        })
        .catch(error => {
            // errore: gestisci l'errore qui
            console.log(error);
        });
}

module.exports = { pushData, getAllData, getUserFromEmail , getOneUser }
