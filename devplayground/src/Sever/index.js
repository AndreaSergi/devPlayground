const express = require('express')

const { pushData, getAllData, getOneUser } = require("./PostGreSQL");

const app = express()
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/status', (req, res) => {
  res.status(200).json({ status: "ok" });
})

app.post('/pushData', (req, res) => {
  const { data } = req.body; // prendo il JSON data dalla req
  const { name, surname, eta, email , password } = data;  // destrutturo data
  pushData(name, surname, eta, email , password); //salvo i dati

  res.status(200).json({ status: "Dati salvati correttamente", data: data });


})

app.post('/reqData', (req, res) => {
  const { richiesta } = req.body;
  if (richiesta == "dati") {
    res.status(200).json({ status: "accesso effettuato", data: DB });
  } else {
    res.status(400).json({ status: "Errore inserimento" });
  }

})

app.get('/getAllUser', (req, res) => {
  const data = getAllData();
  res.status(200).json({ status: "accesso effettuato", data: data });
})

app.get('/getUser/:email', getOneUser )

app.all("*", (req, res) => {
  res.send("pagina non trovata")
});

app.listen(3000)