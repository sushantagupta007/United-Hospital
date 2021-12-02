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
        <div className="doctorsDivPadding mb-2"> 
            <div className="d-flex align-items-center flex-column w-50 mx-auto mt-3">
                <p className="secondaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5"> Trusted Care </p> 
                <h3 className="mb-5 primaryTextColor fw-bold fontFamilyYesava fs-3" > Our Doctors</h3>
            </div> 
            <div>
            <div className="mb-3">
                <Carousel className="responsivePadding">
                    <Carousel.Item id="responsiveDivSizeCarosal">
                        <Row className="d-none d-sm-flex">  
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                        </Row>
                        <Row className="d-md-none">  
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item id="responsiveDivSizeCarosal">
                        <Row  className="d-none d-sm-flex"> 
                            <Col xs={12} lg={4} className="mb-2 p-0">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2 p-0">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2 p-0">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                            
                        </Row>
                        <Row className="d-md-none"> 
                            <Col xs={12} lg={4} className="mb-2 p-0">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item id="responsiveDivSizeCarosal">
                        <Row className="d-none d-sm-flex"> 
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctor1}></DoctorsCard>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctors2}></DoctorsCard>
                            </Col>
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                        </Row>
                        <Row className="d-md-none"> 
                            <Col xs={12} lg={4} className="mb-2">
                                <DoctorsCard img={Doctors3}></DoctorsCard>
                            </Col>
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>  
        </div>
          
    );  
};

export default Doctors;

