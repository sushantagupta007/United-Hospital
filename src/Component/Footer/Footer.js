import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OurTeam from './../OurTeam/OurTeam';
import Services from './../Services/Services';
import Registraion from './../Registraion/Registraion';

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className="bg-dark text-white">
                    <Row className="mt-3">
                        <Col className="d-flex flex-column p-4" sm={4}>
                            <h4> United Hospital</h4>
                            <p className="text-info">
                            United Hospital Ltd was borne out of a vision to provide a complete and one-stop healthcare solution to the people of Bangladesh.
                                </p>
                        </Col>
                        <Col className="d-flex flex-column p-4" sm={4}>
                            <h4> Quick Links</h4>
                                <Link to="/Home"> Home</Link>
                                <Link to="/OurTeam"> OurTeam</Link>
                                <Link to="/Services"> Services</Link>
                                <Link to="/Registraion"> Registraion</Link>
                                <Link to="/Services"> Services</Link>

                                <a href="https://www.wikipedia.org/"> Important Links</a>
                        </Col>
                        <Col className="d-flex flex-column p-4 justify-content-evenly align-items-center" sm={4}>
                            <h4> Contact</h4>
                            
                            <div className="text-info d-flex flex-column">
                                <i class="fas fa-map-marker-alt"> </i> Address: 34, Gulshan Avenue, Dhaka-1212
                                <i class="fas fa-envelope"></i> Email: unitedHopital@gmail.com
                            </div>
                            <div className="d-flex w-50 "> 
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}> 
                                        <a href="https://www.facebook.com/"> <i class="fab fa-facebook"></i> </a>
                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}>  
                                        <a href="https://twitter.com/?lang=en"> <i class="fab fa-twitter"></i> </a>
                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}>   
                                        <a href="https://www.linkedin.com/signup"> <i class="fab fa-linkedin"></i> </a>
                                    </Col>
                                    <Col className="d-flex justify-content-center align-items-center border" sm={3}>  
                                        <a href="https://www.linkedin.com/signup"> <i class="fab fa-instagram"></i> </a>
                                    </Col>
                            </div>
                        </Col>
                    </Row>
                    <Row className="border">
                        <p>CopyRight@UnitedHospital</p>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;