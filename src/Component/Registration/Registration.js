import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';


import './Registration.css';
import useAuth from './../../Hooks/useAuth';
import { Link } from 'react-router-dom';
const Registration = () => {
    const { register, handleSubmit,reset } = useForm();

    const {userCreate}= useAuth(); 
    const onSubmit = data => {
        const email= data.email
        const password = data.password
        userCreate(email,password)
        reset(); 
        console.log(data)};

    return (
        <Container fluid id="signMainContainer" >
            <Container  id="regForm" className=" mx-auto border rounded py-2">
            <h6 className="fontFamilyWork fontWeight700 primaryTextColor fs-1 my-0 "> Create Patient Record  </h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    {/* FirstName and Last */}
                    <Col lg={6} className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> First Name (*) </label>
                            <input 
                                className="m-0 px-0 py-2 border rounded"
                                type="text"
                                placeholder='Sushanta'
                                {...register("firstName", { required: true, maxLength: 20 })} 
                            />
                    </Col>
                    <Col lg={6} className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> Last Name (*) </label>
                            <input 
                                className="m-0 px-0 py-2 border rounded"
                                type="text"
                                placeholder='Gupta'
                                {...register("lastName", { required: true, maxLength: 20 })} 
                            />
                    </Col>

                     {/* Age and Gender */}
                    <Col lg={6} className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> Age (*) </label>
                            <input 
                                className="m-0 px-0 py-2 border rounded"
                                type="number"
                                placeholder='Age'
                                {...register("Age", { required: true})} 
                            />
                    </Col>
                    <Col lg={6} className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> Age (*) </label>
                            <input 
                                className="m-0 px-0 py-2 border rounded"
                                type="number"
                                placeholder='Gender'
                                {...register("Gender", { required: true})} 
                            />
                    </Col>

                    {/* Height and Weight */}
                    <Col lg={6} className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> Height (*) </label>
                            <input 
                                className="m-0 px-0 py-2 border rounded"
                                type="number"
                                placeholder='Height'
                                {...register("Height", { required: true})} 
                            />
                    </Col>
                    <Col lg={6} className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> Weight (*) </label>
                            <input 
                                className="m-0 px-0 py-2 border rounded"
                                type="number"
                                placeholder='Weight'
                                {...register("Weight", { required: true})} 
                            />
                    </Col>
                    {/* Doctor and Dept */}
                    <Col lg={6} className="d-flex flex-column">
                            <label className='secondaryTextColor'> Preferable Doctor (*) </label>
                                <select 
                                    className='m-0 px-0 py-2 border rounded'
                                    {...register("doctor")}>
                                    <option value="" disabled>Doctor</option>    
                                    <option value="Mr.X">Mr.X</option>
                                    <option value="Mr.Y">Mr.Y</option>
                                    <option value="Mr.Z">Mr.Z</option>
                                    <option value="Mr.A">Mr.A</option>
                                    <option value="Mr.B">Mr.B</option>
                                </select>
                    </Col>
                    <Col lg={6} className="d-flex flex-column">
                            <label className='secondaryTextColor fw-bold'> Preferable Department (*) </label>
                                <select 
                                    className='m-0 px-0 py-2 border rounded'
                                    {...register("department")}>
                                    <option value="" disabled>Department</option>    
                                    <option value="Haematology">Haematology</option>
                                    <option value="Dearmatology">Dearmatology</option>
                                    <option value="Urology">Urology</option>
                                    <option value="Gastroenterology">Gastroenterology</option>
                                    <option value="Gynaecology">Gynaecology</option>
                                    <option value="Oncology">Oncology</option>
                                    <option value="Pulmonology">Pulmonology</option>
                                </select>
                    </Col>
                    {/* Medical Record */}
                    <Col lg={12}className="d-flex flex-column">
                        <label className='secondaryTextColor fw-bold'> Medical Records (*) </label>
                                    <textarea 
                                        className='m-0 px-0 py-2 border rounded'
                                        type="text"
                                        placeholder='Previous Medical History'
                                        {...register("medicalhistory", { required: true, })} 
                                    />
                    </Col>
                    {/* Phone and Email */}

                    <Col lg={6} className="d-flex flex-column">
                            <label className='secondaryTextColor fw-bold'> Phone Number(*) </label>
                                    <input 
                                        className='m-0 px-0 py-2 border rounded'
                                        type="text"
                                        placeholder='017********'
                                        {...register("phone number", { required: true,maxLength:20})} 
                                    />
                    </Col>
                    <Col lg={6} className="d-flex flex-column">
                                <label className='secondaryTextColor fw-bold'> Email(*) </label>
                                    <input 
                                        className='m-0 px-0 py-2 border rounded'
                                        type="email"
                                        placeholder='123@gmail.com'
                                        {...register("email", { required: true})} 
                                    />
                    </Col>

                   
                </Row>
                <Row>
                    <Col lg={6}> 
                        <input type="submit" className='btn btn-primary mt-2' />
                    </Col>
                    <Col lg={6}> 
                        <Link to="/signin">Not a user? Please SignIn</Link>
                    </Col>
                </Row>
                
            </form>
            </Container>
        </Container>
  
    );
};

export default Registration;