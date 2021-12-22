import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import Checkup from '../../Image/Checkup.png'
import Cardio from '../../Image/Cardio.png'
import DNA from '../../Image/DNATesting.png'
import BloodBank from '../../Image/BlodBank.png'
import ServiceImage1 from '../../Image/ServiceImage.png'
import ServiceImage2 from '../../Image/ServiceImage2.png'

import './Services.css'
import { useHistory } from 'react-router-dom';




const para2Bg ={
    backgroundColor:"#1F2B6C"
}

const title ={
    fontFamily:'Work Sans',
    fontWeight:'bold',
    fontSize:"26px",
}

const Services = () => {
    
    const history = useHistory(); 
    const handleClick =() =>{
        history.replace('/service')
    }
    return (
    <div className="my-4 serviceDivPadding">
        <div className="d-flex align-items-center flex-column w-50 mx-auto">
            <p className="text-uppercase secondaryTextColor fontWeight700 responsiveFontSize text-center"> Care you can believe in </p> 
            <h3 className="primaryTextColor fontFamilyYesava fontWeight700 fs-2 text-center"> Our Services</h3>
        </div>
        <Container>
            <Row>
                <Col xs={12} lg={2} className="border">
                    <Row className="d-md-none"> 
                        <Col xs={6} className="d-flex flex-column justify-content-center align-items-center py-3">
                            <img src={Checkup} alt="Checkup" />
                            <p className="fontFamilyWork fs-6 fontWeight400"> Free Checkup</p>
                        </Col>
                        <Col xs={6} className="d-flex flex-column justify-content-center align-items-center py-3 primaryBgColor">
                            <img src={Cardio} alt="Checkup" />
                            <p className="fontFamilyWork fs-6 fontWeight400 text-white"> Cardiogram</p>
                        </Col>
                        <Col  xs={6} className="d-flex flex-column justify-content-center align-items-center py-3">
                            <img src={DNA} alt="Checkup" />
                            <p> DNA Testing</p>
                        </Col>
                        <Col xs={6} className="d-flex flex-column justify-content-center align-items-center py-3">
                            <img src={DNA} alt="Checkup" />
                            <p> DNA Testing</p>
                        </Col>
                    </Row>

                    <Row className="d-none d-md-block">
                        <Col className=" d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={Checkup} alt="Checkup" />
                            <p className="fontFamilyWork fs-6 fontWeight400"> Free Checkup</p>
                        </Col>
                    </Row>
                    <Row style={para2Bg} className="d-none d-md-block" >
                        <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={Cardio} alt="Checkup" />
                            <p className="fontFamilyWork fs-6 fontWeight400 "> Cardiogram</p>
                        </Col>
                    </Row>
                    <Row className="d-none d-md-block">
                        <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={DNA} alt="Checkup" />
                            <p> DNA Testing</p>
                        </Col>
                    </Row>
                    <Row className="d-none d-md-block">
                    <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={BloodBank} alt="Checkup" />
                            <p> Blood Bank</p>
                        </Col>
                    </Row>
                    <Row>
                        <Button onClick={handleClick} className="primaryBgColor" type="button"> View All</Button>
                    </Row>
                </Col>
                <Col className="d-none d-md-block" lg={7}>
                    <h3 style={title}> A passion for putting patients first. </h3>
                    <Row>
                        <Col lg={6} className="p-0 m-0">
                        <ul>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> A Passion for Healing</li>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> All our best</li>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> A Legacy of Excellence</li>
                        </ul>
                        </Col>
                        <Col lg={6}>
                            <ul>
                                <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> 5-Star Care</li>
                                <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> Believe in Us </li>
                                <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> Always Caring</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row  className="p-3 fontFamilyWork fs-6 fontWeight400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque placerat scelerisque tortor ornare ornare. Quisque 
                        placerat scelerisque tortor ornare ornare Convallis felis 
                        vitae tortor augue. Velit nascetur proin massa in. Consequat 
                        faucibus porttitor enim et.
                    </Row>
                    <Row className="p-3 fontFamilyWork fs-6 fontWeight400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                     placerat scelerisque. Convallis felis vitae tortor augue. Velit
                      nascetur proin massa in.
                    </Row>
                </Col>
                <Col  lg={3} className="d-none d-md-block">
                    <Row className="mb-3">
                        <img src={ServiceImage1} alt="Service"/>
                    </Row>
                    <Row className="mt-3">
                        <img src={ServiceImage2} alt="Service"/>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>    
        
        
    );
};

export default Services;