import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FreeCheckUpCard from '../FreeCheckUpCard/FreeCheckUpCard';
import './FreeCheckUp.css'

import Lab from '../../Image/Lab.jpg'
import Mental from '../../Image/Mental.jpg'
import Dental from '../../Image/Dental.jpg'
import Occupation from '../../Image/Occupation.webp'
import Addiction from '../../Image/Addiction.jpg'
import Prevention from '../../Image/Prevention.jpg'
import Nutrition from '../../Image/Nutrition.jpg'
import Ambulance from '../../Image/Ambulance.png'
const FreeCheckUp = () => {
    return (
        <Container className="">
            <Row className="gy-2">
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard 
                        title= "Lab and diagnostic care"
                        list = 'Biological, Microbiological, Serological, Chemical, Immunohematological.'
                        img={Lab}
                    ></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard 
                        title="Mental health care"
                        list="Counseling, Therapy, Medication management, Social work, Peer supports"
                        img={Mental}
                        ></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard 
                        title="Dental care"
                        list="Cleaning, Fillings and Restorations, Tooth Extractions, Teeth Removal,Root Canal"
                        img={Dental}
                    ></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard title="Physical and occupational therapy" img={Occupation}></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard title="Substance abuse treatment" img={Addiction}></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard title="Preventative care." img={Prevention}></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard title="Transportation" img={Ambulance}></FreeCheckUpCard>
                </Col>
                <Col lg={3} xs={12} sm={6} className="d-flex justify-content-center p-2 my-2">
                    <FreeCheckUpCard title="Nutritional support" img={Nutrition}></FreeCheckUpCard>
                </Col>
            </Row>
        </Container>
    );
};

export default FreeCheckUp;