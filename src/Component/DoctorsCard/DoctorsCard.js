import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './DoctorCard.css'
import { NavLink } from 'react-router-dom';

const DoctorsCard = (props) => {
    
   

    const {img} =props
    return (
        <Card id="responsiveCardSize">
           <Card.Img className="w-100"variant="top" src={img} />
           <Card.Body style={{backgroundColor:"#BFD2F8"}} className="d-flex flex-column align-items-center p-0 m-0">
                <Card.Text className="text-center secondaryTextColor fontWeight700 text-uppercase fontFamilyWork responsiveFontSizeTitle"> Doctor's Name </Card.Text>
                <Card.Title className="text-center fontFamilyWork fontWeight700 responsiveFontSize primaryTextColor">NEUROLOGY</Card.Title>
                <div>
                    <Row className="mb-1">
                        <Col>
                            <i  className="responsiveFontIconSize responsiveFontAwecomePadding border rounded-pill customBg text-white fab fa-facebook"></i>
                        </Col>
                        <Col>
                            <i  className="responsiveFontIconSize responsiveFontAwecomePadding border rounded-pill customBg text-white fab fa-linkedin-in"></i>
                        </Col>
                        <Col>
                            <i  className="responsiveFontIconSize responsiveFontAwecomePadding border rounded-pill customBg text-white fab fa-instagram"></i>
                        </Col>                                                                                                                                               
                    </Row>                                                                                                                                                
                </div>                                 
           </Card.Body>                                                      
            <NavLink to="/doctorprofile" className="btn btn-primary customBg"  type="button">
                View Profile
            </NavLink>                                                                 
        </Card>                                                                  
    );
};

export default DoctorsCard;