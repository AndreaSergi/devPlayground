import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetRegister from '../Register/register';
import { useNavigate } from 'react-router-dom';

export function Login() {
    // const [user, setUser] = useState(null)
    const email = useRef(null);
    const pass = useRef(null);
    const nav = useNavigate();
    const metodi = new GetRegister();

    const handleLogin = (event) => {
        event.preventDefault();

        //console.log(email.current.value);
        //console.log(pass.current.value);
        const passIn = pass.current.value
        fetch(`http://localhost:3000/getUser/${email.current.value}`)
            .then((response) => response.json())
            .then((result) => {
                const { user } = result;
                if (!user[0]) {
                    //non esiste
                    console.log("non esiste");
                    alert("Email o password errata")
                } else {
                    //esiste
                    console.log("esiste");
                    
                    //console.log(pass.current.value);

                    const { password , name } = user[0];
                    console.log(password);
                    if (password == passIn) {
                        //pass corretta
                        console.log("pass corretta");
                        alert(`Bentornato, ${name}!`);
                        localStorage.setItem('isLoggedIn', 'true');
                        nav('/');
                    } else {
                        alert("Email o password errata")
                        console.log("pass errata");
                        //pass errata
                    }
                }
            })
            .catch((error) => console.error(error));

        
                //const isLogged = metodi.getData(metodi.checkData(email.current.value), email.current.value, pass.current.value);
                //if (isLogged) {
                    
                    //localStorage.setItem('isAuthenticated', 'true'); // Imposta isAuthenticated a true quando l'accesso ha successo
                    
                //} else {
                    //sessionStorage.setItem('isLogged', 'false');
                //}
                
            
    };

    return (
        <div className='p-3 mb-2 bg-black text-white' style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'arial' }}>
            <div className='p-3 mb-2 bg-dark bg-gradient text-white' style={{ minWidth: '40vw', minHeight: '70vh', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center', paddingBottom: '64px', fontFamily: 'Arial' }}>
                    <h1 style={{ fontFamily: 'arial' }}>Accedi</h1>
                </div>
                <Form style={{ padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Label>
                            <h4>Indirizzo e-mail</h4>
                        </Form.Label>
                        <Form.Control type='email' placeholder='prova.example@devplayground.com' ref={email} />
                        <Form.Text className='text-muted'></Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Label>
                            <h4>Password</h4>
                        </Form.Label>
                        <Form.Control type='password' placeholder='Password' ref={pass} />
                        <Form.Text className='text-muted'></Form.Text>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicCheckbox'></Form.Group>
                    <Button variant='primary' type='submit' onClick={handleLogin}>
                        Accedi
                    </Button>
                </Form>

                <div style={{ textAlign: 'center' }}>
                    <h6>Non sei registrato?</h6>
                    <h8 className={'text-primary'} onClick={() => nav('/register')} style={{ cursor: 'pointer' }}>
                        Clicca qui per farlo!
                    </h8>
                </div>
            </div>
        </div>
    );
}