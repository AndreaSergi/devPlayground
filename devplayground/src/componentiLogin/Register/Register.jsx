import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom"

import GetRegister from "./register";


export function Register() {

    const email = useRef(null);
    const pass = useRef(null);
    const name = useRef(null);
    const surname = useRef(null);
    const eta = useRef(null);
    const [metodi, setMetodi] = useState(new GetRegister());

    const nav = useNavigate();

    return (
        <div className='p-3 mb-2 bg-black text-white' style={
            {
                width: "100vw",
                height: "100vh",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }
        }>
            <div className='p-3 mb-2 bg-dark bg-gradient text-white' style={
                {
                    minWidth: "40vw",
                    minHeight: "70vh",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }
            }>
                <div style={{ textAlign: "center", paddingBottom: "64px" }}>
                    <h1 style={{ fontFamily: "arial" }}>Registrati</h1>
                </div>
                <Form style={
                    {
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }
                }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h4>Nome</h4> </Form.Label>
                        <Form.Control type="text" placeholder="Example: Mario" ref={name} />
                        <Form.Text className="text-muted">
                        </Form.Text>

                    </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h4>Cognome</h4> </Form.Label>
                        <Form.Control type="text" placeholder="Example: Rossi" ref={surname} />
                        <Form.Text className="text-muted">
                        </Form.Text>

                    </Form.Group><Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h4>Età</h4> </Form.Label>
                        <Form.Control type="text" placeholder="..." ref={eta} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h4>Indirizzo e-mail</h4> </Form.Label>
                        <Form.Control type="email" placeholder="prova.example@devplayground.com" ref={email} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <h4>Password</h4> </Form.Label>
                        <Form.Control type="password" placeholder="Password" ref={pass} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={
                        (event) => {
                            event.preventDefault();
                            const emailIn = email.current.value;
                            const passIn = pass.current.value;
                            const nameIn = name.current.value;
                            const surnameIn = surname.current.value;
                            const etaIn = parseInt(eta.current.value);

                            console.log(emailIn , passIn , nameIn , surnameIn ,etaIn);

                            fetch(`http://localhost:3000/getUser/${email.current.value}`)
                                .then((response) => response.json())
                                .then((result) => {
                                    const { user } = result;

                                    console.log(user[0]);

                                    if (!user[0]) {
                                        //non esiste

                                        const myHeaders = new Headers();
                                        myHeaders.append("Content-Type", "application/json");

                                        const raw = JSON.stringify({
                                            data: {
                                                name: nameIn,
                                                surname: surnameIn,
                                                eta: etaIn,
                                                email: emailIn,
                                                password: passIn
                                            }
                                        });

                                        const requestOptions = {
                                            method: "POST",
                                            headers: myHeaders,
                                            body: raw,
                                            redirect: "follow"
                                        };

                                        fetch("http://localhost:3000/pushData", requestOptions)
                                            .then((response) => response.text())
                                            .then((result) => console.log(result))
                                            .catch((error) => console.error(error));


                                        console.log("registrato");

                                        alert("Registrazione avvenuta con successo!")

                                        nav("/login");


                                    } else {
                                        //esiste
                                        console.log("esiste");
                                        alert("Utente già registrato");
                                        nav("/login");
                                    }
                                })
                        }
                    }>
                        Registrati
                    </Button>
                </Form>

            </div>

        </div>

    );
}