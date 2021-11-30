import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Appointment.css'
const Appointment = () => {
    const h3 ={
        color:"#159EEC",
        fontFamily:'Yeseva One',
        fontWeight:400,
        fontSize:"26px",
    }
    
    return (
        <div className="appointmentCard appointCardBG">
            <Row className="appointCardBGContent">
                <Col lg={6} style={{padding:"12rem 3rem"}}>
                    <h3 style={h3}> Book an Appointment</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque placerat scelerisque tortor ornare ornare. 
                        Convallis felis vitae tortor augue. Velit nascetur 
                        proin massa in. Consequat faucibus porttitor enim et.
                    </p>
                </Col>
                <Col lg={6}>
                    
                </Col>
            </Row>
        </div>
    );
};

export default Appointment;