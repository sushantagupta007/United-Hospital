import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import Phone from '../../Image/Group 188.png'; 
const AppointmentForm = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset(); 
    };

    return (
        <Container> 
            <Container>
                <Row>
                    <Col xs={12} lg={5} className="py-5 px-3">
                        <h2 className='secondaryTextColor fw-bold fontFamilyYesava'>Book An Appointment </h2>
                        <p className=''>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque 
                            placerat scelerisque tortor ornare ornare. Convallis felis vitae 
                            tortor augue. Velit nascetur proin massa in. Consequat faucibus 
                            porttitor enim et.    
                        </p>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <Row>
                                <Col xs={6} lg={6} className="pe-0">
                                    <input className="w-100 text-white rounded primaryBgColor p-2" placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />
                                </Col>
                                <Col xs={6} lg={6} className="ps-0 ">
                                    <select className="w-100 text-white p-2 primaryBgColor rounded" {...register("gender")}>
                                        <option value="Gender" disabled="true">Gender</option>
                                        <option value="male">Male</option>
                                        <option value="other">Female</option>
                                    </select>
                                </Col>
                                <Col xs={6} lg={6} className="pe-0">
                                    <input type="email" className="w-100 text-white rounded primaryBgColor p-2" placeholder='Email' {...register("email", { required: true})} />
                                </Col>
                                <Col xs={6} lg={6} className="ps-0 ">
                                    <input type="text" className="w-100 text-white primaryBgColor  p-2" placeholder='Phone' {...register("phone", {required:true } )}/>
                                </Col>
                                <Col xs={6} lg={6} className="pe-0">
                                    <input type="date" className="w-100 text-white rounded primaryBgColor p-2" placeholder='Date' {...register("date", { required: true})} />
                                </Col>
                                <Col xs={6} lg={6} className="ps-0 ">
                                    <input type="time" className="w-100 text-white primaryBgColor  p-2" placeholder='Time' {...register("time", {required:true } )}/>
                                </Col>
                                <Col xs={6} lg={6} className="pe-0">
                                    <select className="w-100 text-white p-2 primaryBgColor rounded" {...register("doctor")}>
                                        
                                        <option value="neurology" disabled>Doctor</option>
                                        <option value="neurology">Neorology</option>
                                        <option value="oncology">Oncology</option>
                                        <option value="bones">Bones</option>
                                        <option value="Otorhinolaryngology">Otorhinolaryngology</option>
                                        <option value="Ophthalmology">Ophthalmology</option>
                                        <option value="Pulmonology">Pulmonology</option>
                                        <option value="Renal Medicine">Renal Medicine</option>
                                        <option value="Gastroenterology">Gastroenterology</option>
                                        <option value="Urology">Urology</option>
                                        <option value="Dermatology">Dermatology</option>
                                        <option value="Gynaecology">Gynaecology</option>
                                        <option value="Pulmonology">Pulmonology</option>
                                    </select>
                                </Col>
                                <Col xs={6} lg={6} className="ps-0 ">
                                    <select className="w-100 text-white p-2 primaryBgColor rounded" {...register("department")}>
                                        
                                        <option value="neurology" disabled>Department</option>
                                        <option value="neurology">Neorology</option>
                                        <option value="oncology">Oncology</option>
                                        <option value="bones">Bones</option>
                                        <option value="Otorhinolaryngology">Otorhinolaryngology</option>
                                        <option value="Ophthalmology">Ophthalmology</option>
                                        <option value="Pulmonology">Pulmonology</option>
                                        <option value="Renal Medicine">Renal Medicine</option>
                                        <option value="Gastroenterology">Gastroenterology</option>
                                        <option value="Urology">Urology</option>
                                        <option value="Dermatology">Dermatology</option>
                                        <option value="Gynaecology">Gynaecology</option>
                                        <option value="Pulmonology">Pulmonology</option>
                                    </select>
                                </Col>
                                <Col lg={12} className="">
                                    <textarea rows="5"className="w-100 text-white primaryBgColor p-2" placeholder='Message' {...register("message", {required:true } )}/>    
                                </Col>
                                <Col lg={12}>
                                <input type="submit" className="w-100"/>    
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col xs={12} lg={6} className="py-5 px-4 ">
                        <Container className="primaryBgColor rounded p-3 ">
                            <h1 className="tertiaryTextColor fontFamilyYesava fw-bold  text-center"> Shcedule hours</h1>
                            <div className="">
                                <div className='w-75 mx-auto'>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Monday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Tuesday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Wednesday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Thursday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Friday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Saturday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            09.00 AM - 07.00 PM
                                        </Col>
                                    </Row>
                                    <Row className="text-white fontFamilyWork my-4">
                                        <Col lg={4}>
                                            Sunday
                                        </Col>
                                        <Col lg={2}>
                                            --
                                        </Col>
                                        <Col lg={6}>
                                            Closed
                                        </Col>
                                    </Row>
                                </div>
                                <hr className='text-white'/>
                            </div>
                            <div className="w-75 mx-auto">
                                <Row>
                                    <Col className="p-0 m-0 d-flex justify-content-end" > 
                                       <img src={Phone} alt="Phone" />
                                    </Col>
                                    <Col className="p-0 m-0">
                                        <Row className="p-0 m-0">
                                            <p className="fontFamilyWork text-white p-0 m-0"> Emergency </p>
                                        </Row>
                                        <Row className="p-0 m-0">
                                            <p className="fontFamilyWork text-white p-0 m-0"> (237) 681-812-255</p>
                                        </Row>
                                        
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Col>
                   
                </Row>
            </Container>
        </Container>
    );
};

export default AppointmentForm;