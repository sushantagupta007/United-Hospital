import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Speciality.css'
import spciailitySection from '../../Image/Speciality.png';
import { Link} from 'react-router-dom';

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
                    <Link to={{pathname:"/specialityDetails",state:"Neurology" }}>Neurology</Link>
                </Col>
                <Col md={6} xs={12} className="border specialityBox customBg" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Bones" }}>Bones</Link>
                    
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Oncology" }}>Oncology</Link>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Otorhinolaryngology" }}>Otorhinolaryngology</Link>
                
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Ophthalmology" }}>Ophthalmology</Link>
                   
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Cardiovascular" }}>Cardiovascular</Link>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Pulmonology" }}>Pulmonology</Link>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Renal Medicine" }}>Renal Medicine</Link>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Gastroenterology" }}>Gastroenterology</Link>
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Urology" }}>Urology</Link>

                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Dermatology" }}>Dermatology</Link>
                    
                </Col>
                <Col md={6} xs={12} className="border specialityBox" lg={3}>
                    <img src={spciailitySection} alt ="Neurology" />
                    <Link to={{pathname:"/specialityDetails",state:"Gynaecolog" }}>Gynaecology</Link>
                </Col>
             
            </Row>
            </Container>
        </div>
    );
};

export default Speciality;