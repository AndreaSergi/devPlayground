class GetRegister {

    checkData = (email) => {
        let isRegistred = false; // booleano usato per verificare se l'utente è esistente o meno
        let listUsers = localStorage.getItem("listUser"); //importa dal local storage la lista di utenti
        listUsers = JSON.parse(listUsers); // la converte da stringa a un array di oggetti

        if (listUsers != null) {//verifico se la lista è vuota

            listUsers.forEach(user => { //verifica l'esistenza del utente

                if ((user.email == email)) {

                    isRegistred = true; // se lo trova setta a true il booleano
                }
            });
        }

        return isRegistred;
    }
    setData = async (isRegistred, email, password) => {

        if (await isRegistred) {
            alert("utente esistente");
            return false;
        } else {
            let listUsers = localStorage.getItem("listUser"); //importa dal local storage la lista di utenti
            listUsers = JSON.parse(listUsers); // la converte da stringa a un array di oggetti

            if (listUsers == null) {//verifico se la lista è vuota
                listUsers = [];
            }

            const newUser = { //crea un oggetto contente email e pass
                email: email,
                pass: password,
            }

            listUsers.push(newUser); //pusha il nuovo utente nella lista di utenti esistenti
            listUsers = JSON.stringify(listUsers); // converte in stringa

            localStorage.setItem("listUser", listUsers); // sovrascrive il local storage con la lista aggiornata

            alert("Benvenuto in DevPlayground");

            return true;
        }
    }
    getData = async (isRegistred, email, password) => {
        let listUsers = localStorage.getItem("listUser"); //importa dal local storage la lista di utenti
        listUsers = JSON.parse(listUsers); // la converte da stringa a un array di oggetti

        if (await isRegistred) {
            let okUser = false;
            listUsers.forEach(user => {
                if (user.email == email && user.pass == password) {
                    okUser = true;
                }
            });

            if (okUser) {
                alert("Bentornato, " + email);
                return true;
            } else {
                alert("email  o password errati");
                return false;
            }

        } else {
            alert("Utente non registrato");
            return false;
        }
    }
}

export default GetRegister