import React from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

import useFire from './../Hooks/useFire';
import { useState} from 'react';
import { useHistory, useLocation } from 'react-router';

import { getAuth, signInWithEmailAndPassword,onAuthStateChanged,} from "firebase/auth";
import { useEffect } from 'react';





const Login = () => {
        const {googleSignIn}= useFire();
        
        const [email,setEmail] = useState(''); 
        const [password, setPassWord] = useState('');
        const [user,setUser] = useState({}); 
        const location = useLocation(); 

        const redirect = location.state?.from || '/Home'

        const history = useHistory(); 

        const handlegoogleSignIn =() =>{
            googleSignIn()
            .then((result) => {
                const user = result.user; 
                console.log(user)
            
                    history.push(redirect)
                
            }) 
            
        }

        // HandleEmail Function
        const handleEmail =(e)=>{
                setEmail(e.target.value)  
                console.log(email)          
        }


        // PassWord Function
        const handlePassword =(e)=>{
            setPassWord(e.target.value)
            console.log('password')
        }
        const auth = getAuth();
        //HandleEmailPassWord Login
        const hanleEmailLogin =(email,password) =>{
            
                signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            // });
        }

        useEffect(()=>{
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user)
                } else {
                  setUser({})
                }
              });
        },[auth])

        //Go Back to Registration
        const goBackRegistration =() =>{
            history.push("/Registraion")
        }
        
    return (
        <div className="w-50 mx-auto border p-5">
             <h3 className="text-center text-primary"> Login/Sign In Page </h3> 
        <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
 
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur = {handlePassword} type="password" placeholder="Password" />
                {password}
            </Form.Group>
            <Container>
            <Row>
                <Col>
                <button onClick={hanleEmailLogin} className="btn btn-success" type="button">LogIn </button>
                </Col>
                <Col>
                <button onClick={handlegoogleSignIn} className="btn btn-success" type="button">Google </button>
               
                </Col>
                <Col>
                <Button variant="danger" type="submit">
                    Reset Password
                </Button>
                </Col>
                <div><button onClick={goBackRegistration}type="button" className="btn btn-link">Go Back To Registration Page</button></div>
            </Row>
            </Container>
        </div>
        </div>
    );
};

export default Login;