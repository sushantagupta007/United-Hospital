import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FreeCheckUpCard from '../FreeCheckUpCard/FreeCheckUpCard';
import './FreeCheckUp.css'
const FreeCheckUp = () => {
    return (
        <Container className="responsiveCheckPadding">
            <Row className="gy-5">
                <Col lg={4} xs={12} sm={6}>
                    <FreeCheckUpCard></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6}>
                    <FreeCheckUpCard></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6}>
                    <FreeCheckUpCard></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6}>
                    <FreeCheckUpCard></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6}>
                    <FreeCheckUpCard></FreeCheckUpCard>
                </Col>
                <Col lg={4} xs={12} sm={6}>
                    <FreeCheckUpCard></FreeCheckUpCard>
                </Col>
            </Row>
        </Container>
    );
};

export default FreeCheckUp;