import React from 'react';
import { useState } from "react"
import { Form, Row, Button, Col,Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const Registraion = () => {
    const [patient,setPatient] = useState('')
    const [password,setPassWord] = useState('')
    const [email,setEmail] = useState('')
    const [error,setError] = useState('')
    
    const [isRegistered, setisRegistered] = useState('')
    

    const handlePatientName = (e)=>{
        setPatient(e.target.value)
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handlePassword =(e) =>{
        setPassWord(e.target.value)
    }
    
   

    const handleSubmit = (e) =>{
        console.log(patient, password)
        e.preventDefault(); 

        if(!/(?=.*?[A-Z].*[A-Z])/.test(password)){
            setError('Password contains two uppercaase')
            return; 
        }
        if(password.length<6){
            setError('password must be six character long')
            return ; 
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const user = result.user;
            
            console.log(user)
        })
       
    }

    let history = useHistory(); 
    const handleRegisterd=(e)=>{
        setisRegistered(e.target.checked)
        
        if(!isRegistered){
            history.push("/Login")
        }
    }

 
   
   

    return (
        <div className="w-50 mx-auto border p-5">
            <h3 className="text-center text-primary"> Register Your Information </h3>
            
            
            <Form onSubmit={handleSubmit}>
            <Container>
                <Row>
                    <Col>
                    <Form.Group required onBlur={handlePatientName} className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="fw-bold">Patient Name (Mandatory) </Form.Label>
                        <Form.Control type="text" placeholder="Susan Foster" />
                    </Form.Group>
                    <Form.Group required  onBlur = {handleEmail} className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="fw-bold">Email (Mandatory)</Form.Label>
                        <Form.Control type="email" placeholder="email@gmail.com" />
                    </Form.Group>
                    <Form.Group required  onBlur={handlePassword} className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="fw-bold">Password (Mandatory)</Form.Label>
                        <Form.Control type="password" placeholder="your password" />
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="fw-bold">Attendee Name</Form.Label>
                        <Form.Control placeholder="Susan Foster" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="fw-bold">Illness Type</Form.Label>
                        <Form.Control placeholder="Thalasemia" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label className="fw-bold">Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>
                    </Col>
                </Row>
            </Container>
                <div> <p className="text-danger"> {error} </p> </div>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>
                <Button variant="danger" type="submit">
                    Register
                </Button>
            </Form>
            <hr/>
            
            <Form.Group onFocus={handleRegisterd}className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className="text-primary " type="checkbox" label="Already Resgisterd ?" />
            </Form.Group> 
        </div>
    );
};

export default Registraion;