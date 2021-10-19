import React from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
        const {googleuserCreate} = useAuth(); 
        const [email,setEmail] = useState('')
        const [password,setPassWord] = useState('')
        const location= useLocation(); 
        let history1 = useHistory(); 
        const redirectUrl = location.state?.from ||'/Service'

        const handleGoogleSignin = () =>{
            
            googleuserCreate()
            .then((result) => {
                const user = result.user;
                history1.push(redirectUrl)
                console.log(user); 
            })
        }

        const handleEmail =(e)=>{
                setEmail(e.target.value)
        }

        const handlePassword = (e) =>{
            setPassWord(e.target.value)
        }

        const handSignIn = () =>{
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                
            const user = result.user;
            console.log(user)
        })
    }
    let history = useHistory(); 
    const goBackRegistration =() =>{
        
        history.push("/Registraion")

    }
        

    return (
        <div className="w-50 mx-auto border p-5">
             <h3 className="text-center text-primary"> Login/Sign In Page </h3> 
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label onBlur={handleEmail}>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group onBlur = {handlePassword}className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Container>
            <Row>
                <Col>
                    <Button onClick={handSignIn}variant="success" type="submit">
                        Sign Using Email
                    </Button>
                </Col>
                <Col>
                <Button onClick={handleGoogleSignin}variant="success" type="submit">
                    Sign Using Google
                </Button>
                </Col>
                <Col>
                <Button variant="danger" type="submit">
                    Reset Password
                </Button>
                </Col>
                <div><button onClick={goBackRegistration}type="button" className="btn btn-link">Go Back To Registration Page</button></div>
            </Row>
            </Container>
        </Form>
        </div>
    );
};

export default Login;