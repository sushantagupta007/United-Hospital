import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './SignIn.css';
import useAuth from '../../Hooks/useAuth';

import Logo from '../../Image/logo.jpg'
import { Link } from 'react-router-dom';

const CustomMarginSignForm ={
    marginLeft:"3.8px"
}


const SignIn = () => {
    const { register, handleSubmit,reset } = useForm();
    const {googleSignIn} = useAuth(); 
    const {userCreate}= useAuth(); 
    const onSubmit = data => {
        const email= data.email
        const password = data.password
        userCreate(email,password)
        reset(); 
        console.log(data)};

        const handleGoogleSign = ()=>{
            googleSignIn(); 
            console.log("clicked")
        }
        const handleFacebookSign = ()=>{
            console.log("Clicked")
        }
    return (
        <Container fluid id="signMainContainer" >
            
            <Container  id="regForm" className="w-50 mx-auto border py-4 rounded">
                <Container>
                <h6 className="text-center fontFamilyWork fontWeight700 primaryTextColor fs-1 "> Login  </h6>
                </Container>
           
                <form onSubmit={handleSubmit(onSubmit)} className='my-2'>
                    <div className="container py-1">
                        <div className="col m-0"> 
                            <div className="p-1 d-flex flex-column m-0">
                            <label className='primaryTextColor fw-bold'> Email </label>
                                
                                    <input 
                                        style={{fontFamily:"Arial, FontAwesome"}}
                                        className='m-0 px-0 py-2 border-0 border-bottom'
                                        type="text"
                                        placeholder='&#xF007; abc@gmail.com'
                                        {...register("email", { required: true})} 
                                    />
                            </div>
                        </div>
                        <div> 
                            <div className="p-1 d-flex flex-column m-0">
                                <label className='primaryTextColor fw-bold'> Password </label>
                                <input 
                                    className="m-0 px-0 py-2 border-0 border-bottom "
                                    placeholder='password'
                                    type="password"
                                    {...register("password", {required:true, })} 
                                />
                            </div>
                        </div>
                    </div>
                    <Container className="d-flex justify-content-end">
                        <Link to="/" className="ms-1 text-secondary text-decoration-none"> Forget Password ?</Link>
                    </Container>
                    <Container>
                        <button id="loginBtn" className="w-100 ms-1 btn text-white border rounded" type="button"> LOGIN</button>
                    </Container>
                </form>
                    <Container className="d-flex flex-column align-items-center justify-content-center">
                        <p className='text-center'> or Sign Up Using</p>
                        {/* <Link to="/regis" className=''> New Patient? Please Register</Link> */}
                    </Container>
                    <Container style={CustomMarginSignForm} className="border-top py-2">
                        <div id="fontAwesomeDiv" className="d-flex justify-content-center"> 
                            <div className="d-flex " >
                                <Row> 
                                    <Col> <a onClick={handleGoogleSign} > <i style={{backgroundColor:"#1F2B6C"}} className="border rounded-pill fab fa-google p-2 text-white"> </i> </a> </Col>
                                    <Col> <a onClick={handleFacebookSign}>  <i style={{backgroundColor:"#1F2B6C"}} className="rounded-pill p-2 fab fa-facebook text-white"> </i> </a> </Col>
                                </Row>
                            </div> 
                            
                        </div>
                        <Link to="/regis" className=''> New Patient? Please Register</Link>
                    </Container>
            </Container>
           
        </Container>
    );
};

export default SignIn;
{/* <Row> 
                            <Col>
                                
                            </Col>
                            <Col>
                                
                            </Col>
                        </Row> */}