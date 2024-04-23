import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

import GetRegister from "../Register/register";
import { useRef, useState } from 'react';

import { useNavigate } from "react-router-dom";



export function Login() {

    const email = useRef(null);
    const pass = useRef(null);
    const [metodi, setMetodi] = useState(new GetRegister());

    let isLogged=false;

    const nav = useNavigate();

    return (
        <div className='p-3 mb-2 bg-black text-white' style={
            {
                width: "100vw",
                height: "100vh",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",

                fontFamily : "arial"
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
                <div style={{ textAlign: "center", paddingBottom: "64px" , fontFamily : "Arial" }}>
                    <h1 style={{fontFamily : "arial"}}>Accedi</h1>
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
                            console.log("mail: " + email.current.value);
                            console.log("pass: " + pass.current.value);
                            isLogged = metodi.getData(metodi.checkData(email.current.value), email.current.value, pass.current.value);
                            if (isLogged) {
                                sessionStorage.setItem("isLogged","true");
                                nav("/");
                            } else {
                                sessionStorage.setItem("isLogged","false");
                            }
                            
                        }
                    }>
                        Accedi
                    </Button>
                </Form>

                <div style={{ textAlign: "center" }}>
                    <h6>Non sei registrato?</h6>
                    <h8 className={"text-primary"} onClick={() => { nav("/register") }} style={{ cursor: 'pointer' }}>Clicca qui per farlo!</h8>
                </div>

            </div>

        </div>

    );
}