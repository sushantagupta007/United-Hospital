import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ForgotPasswords.css';
import useAuth from './../../Hooks/useAuth';


import { Link, useLocation, useHistory } from 'react-router-dom';


const CustomMarginSignForm ={
    marginLeft:"3.8px"
}
const ForgotPassword = () => {
    const { register, handleSubmit,reset } = useForm();
    const {googleSignIn,userSignIn,passWordReset} = useAuth(); 
    const emailRef= useRef()

    const location = useLocation(); 
    const history = useHistory(); 

    const onSubmit = data => {
        const email = data.email
        passWordReset(email)
        history.push('/home')
    };

   
 
   
    return (
        <Container fluid id="signMainContainer" >
            <Container  id="regForm" className="w-50 mx-auto border py-4 rounded">
            {/* {loggedUser? <Alert variant="success">Successful Login</Alert> :""} */}
                <Container>
                <h6 className="text-center fontFamilyWork fontWeight700 primaryTextColor fs-1 "> Password Reset  </h6>
                </Container>
           
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <div className="container py-1">
                        <div className="col m-0"> 
                            <div className="p-1 d-flex flex-column m-0">
                            <label className='primaryTextColor fw-bold'> Email </label>
                                
                                    <input 
                                        ref={emailRef}
                                        style={{fontFamily:"Arial, FontAwesome"}}
                                        className='m-0 px-0 py-2 border-0 border-bottom'
                                        type="text"
                                        placeholder='&#xF007; abc@gmail.com'
                                        {...register("email", { required: true})} 
                                    />
                            </div>
                        </div>
                        
                    </div>
                    
                    <Container>
                        <button id="loginBtn" className="w-100 ms-1 btn text-white border rounded" type="submit"> Send Email</button>
                    </Container>
                </form>
                    
            </Container>
           
        </Container>
    );
};

export default ForgotPassword;