import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Speciality.css'
import spciailitySection from '../../../Image/Speciality.png';

const Speciality = () => {
 

    return (
        <div className="spcilityMainDivPadding">
             <div className="d-flex align-items-center flex-column w-50 mx-auto">
                <p className="secondaryTextColor fontWeight700 fontFamilyWork text-uppercase fs5_5 text-center" > Always Caring </p> 
                <h3 className="primaryTextColor fontWeight700 fs-3 fontFamilyYesava text-center"> Our Specialties</h3>
            </div>
            <Container>
            <Row>
                <Col md={6} xs={12}className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Neurology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox customBg" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p className='text-white'>Bones</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Oncology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Otorhinolaryngology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Ophthalmology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Cardiovascular</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Pulmonology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Renal Medicine</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Gastroenterology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Urology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Dermatology</p>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <p>Gynaecology</p>
                </Col>
             
            </Row>
            </Container>
        </div>
    );
};

export default Speciality;