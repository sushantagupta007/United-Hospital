import React from 'react';
import { Row,Col,Button } from 'react-bootstrap';

import './Footer.css'
const Footer = () => {

    const h3 = {
        color:'#BFD2F8',
        fontWeight:700,
        fontFamily:'Yeseva One',
        fontSize:'36px'
    }

    const text ={
        color:"#FCFEFE",
        fontFamily:'Work Sans',
        fontWeight:'normal',
        fontSize:"18px"
    }

    
  
    return (
        <div className="appointmentCard customBg pt-5">
            <Row>
                <Col>
                    <h3 style={h3}> MEDICAL </h3>
                    <p style={text}> Leading the Way in Medical
                        Execellence, Trusted Care.
                    </p>
                </Col>
                <Col>
                    <h3 style={text}> Important Links</h3>
                    <ul  style={{listStyleType:'none',color:"white"}} > 
                        <li style={{listStyleType:"none"}}> Appointment </li>
                        <li> Doctors </li>
                        <li> Services </li>
                        <li> Abouts Us </li>
                    </ul>
                </Col>
                <Col>
                <h3 style={text}> Contact Us</h3>
                    <div className="text-white"> 
                        <p> Call: (237) 681-812-255 </p>
                        <p> Email: fildineesoe@gmail.com </p>
                        <p> Address: 0123 Some place </p>
                        <p> Some country </p>
                    </div>
                </Col>
                <Col>
                    <h3 style={text}> Newsletter</h3>
                    <input  style={{backgroundColor:"#BFD2F8", color:"#1F2B6C"}} className="p-3 w-100 text-black bg-none border-0" type="text" placeholder="Enter Your Email Address" />
                    <Button id="id"style={{marginLeft:"-45px"}}> <i  className="fs-6 fas fa-location-arrow"></i> </Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <div className="d-flex justify-content-between"> 
                    <p className="text-white"> © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD </p> 
                    <div id="fontAwesomeDiv"> 
                        <div className="d-flex" >
                            <Row> 
                                <Col> <i style={{backgroundColor:"#BFD2F8"}} className="border rounded-pill fab fa-linkedin-in p-2"> </i> </Col>
                                <Col> <i style={{backgroundColor:"#BFD2F8"}} className="rounded-pill p-2 border fab fa-facebook"> </i> </Col>
                                <Col> <i style={{backgroundColor:"#BFD2F8"}} className=" rounded-pill p-2 border fab fa-instagram"> </i> </Col>
                            </Row>
                        </div> 
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Footer;