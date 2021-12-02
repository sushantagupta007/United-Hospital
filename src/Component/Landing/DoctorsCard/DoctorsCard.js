import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

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
        <Card style={{ width: '18rem' }}>
           <Card.Img variant="top" src={img} />
           <Card.Body style={{backgroundColor:"#BFD2F8"}} className="d-flex flex-column align-items-center p-0 m-0">
                <Card.Text style={para1}> Doctor's Name </Card.Text>
                <Card.Title style={h3}>NEUROLOGY</Card.Title>
                <div>
                    <Row className="mb-1">
                        <Col>
                            <i style={{fontSize:"1rem"}} className="p-2 border rounded-pill customBg text-white fab fa-facebook"></i>
                        </Col>
                        <Col>
                            <i style={{fontSize:"1rem"}} className="p-2 border rounded-pill customBg text-white fab fa-linkedin-in"></i>
                        </Col>
                        <Col>
                            <i style={{fontSize:"1rem"}} className="p-2 border rounded-pill customBg text-white fab fa-instagram"></i>
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