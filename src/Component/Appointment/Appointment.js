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
                            <Col lg={6} className='p-0 border-end'>
                                <input 
                                    className="colPadding border-0 text-white fontFamilyWork responsiveWidth responsiveBorder primaryBgColor"
                                    type="text" 
                                    placeholder="Name" {...register("Name", { required: true})} 
                                />  
                            </Col>
                            <Col lg={6} className='p-0'>
                                <select {...register("Department")} className="fontFamilyWork text-white inputPadding responsiveWidth primaryBgColor">
                                    <option className="text-black fontFamilyWork" value="">Department</option>
                                    <option className="text-black fontFamilyWork" value="female">Female</option>
                                    <option className="text-black fontFamilyWork" value="male">Male</option>
                                    <option className="text-black fontFamilyWork" value="other">Other</option>
                                </select>
                            </Col>
                            <Col lg={6} className="p-0 border-end border-bottom">
                                <input 
                                    className="colPadding border-0 fontFamilyWork responsiveWidth primaryBgColor"
                                    type="email" 
                                    placeholder="Email" {...register("Email", { required: true })} 
                                />
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <input 
                                    className="border-0 border-bottom colPadding fontFamilyWork text-white responsiveWidth  primaryBgColor"
                                    type="text" 
                                    placeholder="Phone" {...register("Phone", { required: true})} 
                                />
                            </Col>
                            <Col lg={6 } className="p-0 border-end">
                                <input 
                                    className="border-0 border-bottom colPaddingborder-0 colPadding fontFamilyWork responsiveWidth primaryBgColor "
                                    type="date" 
                                    placeholder="Date" {...register("Date", { required: true})} 
                                />
                            </Col>
                            <Col lg={6} className="p-0 border-end">
                                <input 
                                    className="border-0 border-bottom colPadding responsiveWidth primaryBgColor"
                                    type="time" 
                                    placeholder="Time" {...register("Time", { required: true})} 
                                />
                            </Col>
                                                  
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <select {...register("Doctor")} placeholder="Doctor" className="border-0 border-bottom colPadding fontFamilyWork text-white responsiveWidth primaryBgColor">
                                    <option className="text-black fontFamilyWork"value="" disabled>Doctor</option>
                                    <option className="text-black fontFamilyWork" value="female">Female</option>
                                    <option className="text-black fontFamilyWork" value="male">Male</option>
                                    <option className="text-black fontFamilyWork" value="other">Other</option>
                                </select>
                            </Col>
                            <Col lg={6} xs={12} className="p-0 border-end"> 
                                <select {...register("Department")} placeholder="Department" className="border-0 border-bottom colPadding fontFamilyWork text-white responsiveWidth primaryBgColor">
                                    <option className="text-black fontFamilyWork" value="" disabled >Department</option>
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
                                <input id="buttonHover"  type="submit" className="tertiaryBgColor text-primary fw-bold border-0 responsiveWidth py-2 buttonMargin"/> 
                           </Col> 
                        </Row>
                </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Appointment;