import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import Checkup from '../../../Image/Checkup.png'
import Cardio from '../../../Image/Cardio.png'
import DNA from '../../../Image/DNATesting.png'
import BloodBank from '../../../Image/BlodBank.png'
import ServiceImage1 from '../../../Image/ServiceImage.png'
import ServiceImage2 from '../../../Image/ServiceImage2.png'

import './Services.css'

const para1 = {
    color:'#159EEC',
    fontWeight:700,
    textTransform: "uppercase",
    fontFamily:'Work Sans',
    fontSize:'18px'
}

const h3 ={
    color:"#1F2B6C",
    fontFamily:'Yeseva One',
    fontWeight:400,
    fontSize:"26px"
}

const para2 ={
    color:"rgba(33, 33, 36, 1)",
    fontFamily:'Work Sans',
    fontSize:"16px",
    fontWeight:400,
}

const para2Bg ={
    backgroundColor:"#1F2B6C"
}

const title ={
    fontFamily:'Work Sans',
    fontWeight:'bold',
    fontSize:"26px",
}
const Services = () => {
    return (
    <div className="my-4 appointmentCard">
        <div className="d-flex align-items-center flex-column customPadding w-50 mx-auto">
            <p style={para1}> Care you can believe in </p> 
            <h3 style={h3}> Our Services</h3>
        </div>
        <Container>
            <Row>
                <Col  lg={2} className="border">
                    <Row >
                        <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={Checkup} alt="Checkup" />
                            <p style={para2}> Free Checkup</p>
                        </Col>
                    </Row>
                    <Row style={para2Bg} >
                        <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={Cardio} alt="Checkup" />
                            <p style={{para2,color:"#BFD2F8"}}> Cardiogram</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={DNA} alt="Checkup" />
                            <p> DNA Testing</p>
                        </Col>
                    </Row>
                    <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center py-2">
                            <img src={BloodBank} alt="Checkup" />
                            <p> Blood Bank</p>
                        </Col>
                    </Row>
                    <Row>
                        <Button style={{backgroundColor:'#1F2B6C'}}type="button" > View All</Button>
                    </Row>
                </Col>
                <Col  lg={7}xs={6}>
                    <h3 style={title}> A passion for putting patients first. </h3>
                    <Row>
                        <Col lg={6} className="p-0 m-0">
                        <ul>
                            <li className="d-flex align-items-center" style={para2}> A Passion for Healing</li>
                            <li className="d-flex align-items-center" style={para2}> All our best</li>
                            <li className="d-flex align-items-center" style={para2}> A Legacy of Excellence</li>
                        </ul>
                        </Col>
                        <Col lg={6}>
                            <ul>
                                <li className="d-flex align-items-center" style={para2}> 5-Star Care</li>
                                <li className="d-flex align-items-center" style={para2}> Believe in Us </li>
                                <li className="d-flex align-items-center" style={para2}> Always Caring</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row style={para2} className="p-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque placerat scelerisque tortor ornare ornare. Quisque 
                        placerat scelerisque tortor ornare ornare Convallis felis 
                        vitae tortor augue. Velit nascetur proin massa in. Consequat 
                        faucibus porttitor enim et.
                    </Row>
                    <Row style={para2} className="p-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                     placerat scelerisque. Convallis felis vitae tortor augue. Velit
                      nascetur proin massa in.
                    </Row>
                </Col>
                <Col  lg={3}>
                    <Row className="mb-3">
                        <img src={ServiceImage1} alt="Service Image"/>
                    </Row>
                    <Row className="mt-3">
                        <img src={ServiceImage2} alt="Service Image"/>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>    
        
        
    );
};

export default Services;