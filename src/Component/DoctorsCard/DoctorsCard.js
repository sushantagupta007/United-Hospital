import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './DoctorCard.css'

const DoctorsCard = (props) => {
    const para1 = {
        color:'#159EEC',
        fontWeight:700,
        textTransform: "uppercase",
        fontFamily:'Work Sans',
        fontSize:'18px'
    }
    
    const h3 ={
        color:"#1F2B6C",
        fontFamily:'Work Sans',
        fontWeight:700,
        fontSize:"26px"
    }
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
            <Button className="customBg"  type="button">
                View Profile
            </Button>                                                                 
        </Card>                                                                  
    );
};

export default DoctorsCard;