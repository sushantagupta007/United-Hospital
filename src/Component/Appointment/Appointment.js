import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './Appointment.css'
const Appointment = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset();
    };
   
    return (
        <Container className="appointCardBG">
            <Row className="appointCardBGContent">
                <Col md={6} lg={6} xs={12} className="responsiveStyle" >
                    <h3 className="secondaryTextColor fontFamilyYesava responsiveFont fontWeight700"> Book an Appointment</h3>
                    <p className="fs5_5 fontFamilyWork"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque placerat scelerisque tortor ornare ornare. 
                        Convallis felis vitae tortor augue. Velit nascetur 
                        proin massa in. Consequat faucibus porttitor enim et.
                    </p>
                </Col>
                <Col md={6} lg={6} xs={12} className="p-5">
                <form onSubmit={handleSubmit(onSubmit)} >
                        <Row>
                            <Col lg={6} xs={12} className="p-0 border-end "> 
                                <input 
                                    className=" text-white fontFamilyWork responsiveWidth responsiveBorder primaryBgColor border-bottom border-0 p-2"
                                    type="text" 
                                    placeholder="Name" {...register("Name", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <select {...register("gender")} placeholder="Gender" className=" fontFamilyWork text-white p-2 border-bottom border-0 responsiveWidth primaryBgColor">
                                <option value="" disabled selected>Gender</option>
                                    <option className="text-black" value="female">female</option>
                                    <option className="text-black" value="male">male</option>
                                    <option className="text-black" value="other">other</option>
                                </select>
                            </Col>
                       
                            <Col lg={6} xs={12} className="p-0 border end"> 
                                <input 
                                    className=" fontFamilyWork responsiveWidth primaryBgColor border-bottom border-0 p-2"
                                    type="year" 
                                    placeholder="Email" {...register("Email", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <input 
                                    className=" fontFamilyWork text-white responsiveWidth border-bottom border-0 primaryBgColor p-2"
                                    type="text" 
                                    placeholder="Phone" {...register("Phone", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <input 
                                    className=" fontFamilyWork responsiveWidth primaryBgColor border-bottom border-0 p-2"
                                    type="date" 
                                    placeholder="Date" {...register("Date", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <input 
                                    className="responsiveWidth primaryBgColor p-2 border-bottom border-0"
                                    type="time" 
                                    placeholder="Time" {...register("Time", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                       
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                            <select {...register("Doctor")} placeholder="Doctor" className="fontFamilyWork text-white p-2 border-bottom border-0 responsiveWidth primaryBgColor">
                                <option className="text-black fontFamilyWork"value="" disabled selected>Doctor</option>
                                <option className="text-black fontFamilyWork" value="female">Female</option>
                                <option className="text-black fontFamilyWork" value="male">Male</option>
                                <option className="text-black fontFamilyWork" value="other">Other</option>
                            </select>
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                            <select {...register("Department")} placeholder="Department" className="fontFamilyWork text-white p-2 border-bottom border-0  responsiveWidth primaryBgColor">
                                <option className="text-black fontFamilyWork" value="" disabled selected>Department</option>
                                <option className="text-black fontFamilyWork" value="female">Female</option>
                                <option className="text-black fontFamilyWork" value="male">Male</option>
                                <option className="text-black fontFamilyWork" value="other">Other</option>
                            </select>
                            </Col>
                            <Col lg={12} xs={12} className="p-0 border-end ">
                                <textarea 
                                    rows="5"
                                    placeholder="Message " 
                                    className="fontFamilyWork p-2 responsiveWidth primaryBgColor border-bottom border-0 text-white"
                                    style={{resize:'none'}}   
                                >        
                                </textarea>
                            </Col>
                        
                           <Col  lg={12} xs={12} className="p-0 m-0"> 
                                <input  style={{backgroundColor:"#BFD2F8"}} type="submit" className="responsiveWidth p-0 m-0"/> 
                           </Col> 
                        </Row>
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Appointment;