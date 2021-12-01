import React from 'react';
import { Row, Carousel, Col } from 'react-bootstrap';


import Doctor1 from '../../../Image/Doctors1.png'
import Doctors2 from '../../../Image/Doctors2.png'
import Doctors3 from '../../../Image/Doctors3.png'
import DoctorsCard from '../DoctorsCard/DoctorsCard';

import  './Doctors.css'
const Doctors = () => {
    
    const para1 = {
        color:'#159EEC',
        fontWeight:'bold',
        textTransform: "uppercase",
        fontFamily:'Work Sans',
        fontSize:'18px'
    }
    
    const h3 ={
        color:"#1F2B6C",
        fontFamily:'Work Sans',
        fontWeight:700,
        fontSize:"26px"
    }

    

    return (
        <div className="appointmentCard mb-2"> 
            <div className="d-flex align-items-center flex-column w-50 mx-auto mt-3">
                <p style={para1}> Trusted Care </p> 
                <h3 className="mb-5"style={h3}> Our Doctors</h3>
            </div> 
            <div>
            <Row className="mb-3">
                <Carousel>
                    <Carousel.Item>
                        <Row> 
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row> 
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row> 
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                            <Col lg={4} className="mb-2">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
            </div>  
        </div>
          
    );  
};

export default Doctors;

