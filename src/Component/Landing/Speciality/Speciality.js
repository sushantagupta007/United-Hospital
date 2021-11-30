import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Speciality.css'
import spciailitySection from '../../../Image/Speciality.png';

const Speciality = () => {
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

    return (
        <div className="appointmentCard">
             <div className="d-flex align-items-center flex-column customPadding w-50 mx-auto">
                <p style={para1}> Always Caring </p> 
                <h3 style={h3}> Our Specialties</h3>
            </div>
            <Container>
            <Row>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Neurology</p>
                </Col>
                <Col className="border specialityBox customBg" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p className='text-white'>Bones</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Oncology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Otorhinolaryngology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Ophthalmology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Cardiovascular</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Pulmonology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Renal Medicine</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Gastroenterology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Urology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Dermatology</p>
                </Col>
                <Col className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Gynaecology</p>
                </Col>
             
            </Row>
            </Container>
        </div>
    );
};

export default Speciality;