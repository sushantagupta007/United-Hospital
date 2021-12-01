import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import './Appointment.css'
const Appointment = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   
    return (
        <div className="appointmentCard appointCardBG">
            <Row className="appointCardBGContent">
                <Col lg={6} style={{padding:"12rem 3rem"}}>
                    <h3 className="secondaryTextColor fontFamilyYesava fs5_5 fontWeight400"> Book an Appointment</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque placerat scelerisque tortor ornare ornare. 
                        Convallis felis vitae tortor augue. Velit nascetur 
                        proin massa in. Consequat faucibus porttitor enim et.
                    </p>
                </Col>
                <Col lg={6} className="p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div> 
                        <Row className="border">
                            <Col lg={6} className="p-0 border-0 border-end customBg"> 
                                <input 
                                    className=" text-white w-100 bg-transparent border-0 p-2"
                                    type="text" 
                                    placeholder="Name" {...register("Name", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} className="p-0 customBg"> 
                            <select {...register("gender")} placeholder="Gender" className="text-white p-2 border-0 w-100 bg-transparent">
                            <option value="" disabled selected>Gender</option>
                                <option className="text-black" value="female">female</option>
                                <option className="text-black" value="male">male</option>
                                <option className="text-black" value="other">other</option>
                            </select>
                            </Col>
                        </Row>
                        <Row className="border ">
                            <Col lg={6} className="p-0 border-0 border-end customBg"> 
                                <input 
                                    className="w-100 bg-transparent border-0 p-2"
                                    type="year" 
                                    placeholder="Email" {...register("Email", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} className="p-0 customBg"> 
                                <input 
                                    className=" text-white w-100 bg-transparent border-0 p-2"
                                    type="text" 
                                    placeholder="Phone" {...register("Phone", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                        </Row>
                        <Row className="border ">
                            <Col lg={6} className="p-0 border-0 border-end customBg"> 
                                <input 
                                    className="w-100 bg-transparent border-0 p-2"
                                    type="date" 
                                    placeholder="Date" {...register("Date", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                            <Col lg={6} className="p-0 customBg"> 
                                <input 
                                    className="w-100 bg-transparent border-0 p-2"
                                    type="time" 
                                    placeholder="Time" {...register("Time", { required: true, maxLength: 20 })} 
                                />
                            </Col>
                        </Row>
                        <Row className="border ">
                            <Col lg={6} className="p-0 border-0 border-end customBg"> 
                            <select {...register("Doctor")} placeholder="Doctor" className=" text-white p-2 border-0 w-100 bg-transparent">
                                <option value="" disabled selected>Doctor</option>
                                <option className="text-black" value="female">Female</option>
                                <option className="text-black" value="male">Male</option>
                                <option className="text-black" value="other">Other</option>
                            </select>
                            </Col>
                            <Col lg={6} className="p-0 customBg"> 
                            <select {...register("Department")} placeholder="Department" className=" text-white p-2 border-0 w-100 bg-transparent">
                                <option value="" disabled selected>Department</option>
                                <option className="text-black" value="female">Female</option>
                                <option className="text-black" value="male">Male</option>
                                <option className="text-black" value="other">Other</option>
                            </select>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className="p-0 border-0 border-end ">
                                <textarea 
                                    rows="5"
                                    placeholder="Message " 
                                    className=" p-2 w-100 customBg text-white"
                                    style={{resize:'none'}}   
                                >        
                                </textarea>
                            </Col>
                        </Row>
                        <Row> 
                           <Col  lg={12} className="p-0 m-0"> 
                                <input  style={{backgroundColor:"#BFD2F8"}} type="submit" className="w-100 p-0 m-0"/> 
                           </Col> 
                        </Row>
                    </div>
                    
                    
                    
                   
                </form>
                </Col>
            </Row>
        </div>
    );
};

export default Appointment;