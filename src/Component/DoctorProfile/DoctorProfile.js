import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';

import Doctor1 from '../../Image/Doctors1.png'




const DoctorProfile = () => {
    return (
        <Container className="bg-light p-5">
            <Row>
                <Col lg={6}>
                    <img className="w-100" src={Doctor1} alt="Doctor" />
                </Col>
                <Col lg={6}>
                  <p className='text-info'> Basic Info</p>
                  <h5 className='text-primary fw-bold'> Dr. Ifthekhairual Islam</h5>
                  <p> Details Coming Soon</p>
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorProfile;