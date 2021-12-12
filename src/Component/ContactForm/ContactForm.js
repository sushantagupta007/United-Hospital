import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
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
                        <h5 className='secondaryTextColor fw-bold'>GET IN TOUCH </h5>
                        <h3 className='primaryTextColor fw-bold fontFamilyYesava'>Contact </h3>
                        
                        <form onSubmit={handleSubmit(onSubmit)} className="">
                            <Row>
                                <Col xs={6} lg={6} className="pe-0">
                                    <input className="w-100 text-white rounded primaryBgColor p-2" placeholder='Name' {...register("Name", { required: true, maxLength: 20 })} />
                                </Col>
                                <Col xs={6} lg={6} className="ps-0 ">
                                    <input className="w-100 text-white primaryBgColor  p-2" placeholder='Email' {...register("email", {required:true } )}/>
                                </Col>
                                <Col lg={12} className="">
                                    <input className="w-100 text-white primaryBgColor  p-2" placeholder='Subject' {...register("subject", {required:true } )}/>    
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
                    <Col xs={12} lg={6} className="py-5 px-4">
                    <div className="container px-3">
                        <div className="row g-3">
                            <div className="col-lg-6">
                                <div className="p-3 border">
                                    <i className="fs-2 fas fa-phone-volume primaryTextColor"></i>
                                    <p className="fontWeight700 text-uppercase fontFamilyWork fs5_5 primaryTextColor"> Emergency </p>
                                    <p className="primaryTextColor"> (237) 681-812-255 </p>
                                    <p className="primaryTextColor"> (237) 666-331-894 </p>
                                </div>
                            </div>
                            <div className="col-lg-6 ">
                                <div className="p-3 primaryBgColor ">
                                <i className="tertiaryTextColor fs-2 fas fa-map-marker-alt"></i>
                                    <p className="tertiaryTextColor fw-bold text-uppercase fontFamilyWork"> Location </p>
                                    <p className="tertiaryTextColor"> 0123 Some place </p>
                                    <p className="tertiaryTextColor" style={{color:"#BFD2F8"}}> 9876 Some country </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-3 border tertiaryBgColor ">
                                <i className="primaryTextColor fs-2 fas fa-map-marker-alt"></i>
                                    <p className="primaryTextColor fw-bold text-uppercase fontFamilyWork"> Location </p>
                                    <p className="primaryTextColor"> 0123 Some place </p>
                                    <p className="primaryTextColor"> 9876 Some country </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-3 border tertiaryBgColor ">
                                <i className="primaryTextColor fs-2 fas fa-map-marker-alt"></i>
                                    <p className="primaryTextColor fw-bold text-uppercase fontFamilyWork"> Location </p>
                                    <p className="primaryTextColor"> 0123 Some place </p>
                                    <p className="primaryTextColor"> 9876 Some country </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                   
                    {/* <Col xs={12} lg={6} className="py-5 px-3">
                        <Row className="g-2">
                            <Col lg={6} className="border py-3 px-5" style={{backgroundColor:"#BFD2F8"}} >
                                <div> 
                                    
                                </div>
                                
                            </Col>
                            <Col lg={6} className="border py-3 px-5 primaryBgColor" >
                                <div> 
                                    
                                </div>
                            </Col>
                            <Col lg={6} className="border py-3 px-5" style={{backgroundColor:"#BFD2F8"}}>
                                <div> 
                                    <i  className="fs-2 far fa-envelope primaryTextColor"></i>
                                    <p className="primaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5" > Email </p>
                                    <p className="primaryTextColor"> fildineeesoe@gmil.com </p>
                                    <p className="primaryTextColor"> myebstudios@gmail.com</p>
                                </div>
                                
                            </Col>
                            <Col lg={6} className="border py-3 px-5" style={{backgroundColor:"#BFD2F8"}}>
                                <div> 
                                    <i className="fs-2 far fa-clock"></i>
                                    <p className="primaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5" > Working Hours </p>
                                    <p className="primaryTextColor"> Mon-Sat 09:00-20:00 </p>
                                    <p className="primaryTextColor"> Sunday Emergency only </p>
                                </div>
                                
                            </Col>
                        </Row>
                        
                    </Col> */}
                </Row>
            </Container>
        </Container>
    );
};

export default ContactForm;