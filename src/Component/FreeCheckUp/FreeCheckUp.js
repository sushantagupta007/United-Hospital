import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FreeCheckUpCard from '../FreeCheckUpCard/FreeCheckUpCard';
import './FreeCheckUp.css'
const FreeCheckUp = () => {
    return (
        <Container className="responsiveCheckPadding">
            <Row className="gy-5">
                <Col lg={4} xs={12} sm={6} className="d-flex justify-content-center">
                    <FreeCheckUpCard 
                        title= "Lab and diagnostic care"
                        list = 'Biological, Microbiological, Serological, Chemical, Immunohematological.'
                    ></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6} className="d-flex justify-content-center">
                    <FreeCheckUpCard 
                        title="Mental health care"
                        list="Counseling, Therapy, Medication management, Social work services, Peer supports"
                        ></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6} className="d-flex justify-content-center">
                    <FreeCheckUpCard 
                        title="Dental care"
                        list="Cleaning, Fillings and Restorations, Tooth Extractions, Wisdom Teeth Removal,Root Canal"
                    ></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6} className="d-flex justify-content-center">
                    <FreeCheckUpCard title="Physical and occupational therapy"></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6} className="d-flex justify-content-center">
                    <FreeCheckUpCard title="Substance abuse treatment"></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6} className="d-flex justify-content-center">
                    <FreeCheckUpCard title="Pharmaceutical care."></FreeCheckUpCard>
                </Col>
            </Row>
        </Container>
    );
};

export default FreeCheckUp;