import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';

/*
<div class="p-3 mb-2 bg-dark bg-gradient text-white">.bg-dark.bg-gradient</div>
*/

export function Login() {
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
                    width: "40vw",
                    height: "70vh",
                    borderRadius: "16px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }
            }>
                <div style={{ textAlign: "center", paddingBottom: "64px" }}>
                    <h1>Accedi</h1>
                </div>
                <Form style={
                    {
                        padding:"16px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }
                }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> <h4>Email address</h4> </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> <h4>Password</h4> </Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Accedi
                    </Button>
                </Form>

            </div>

        </div>

    );
}