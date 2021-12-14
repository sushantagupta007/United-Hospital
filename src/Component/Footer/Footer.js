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
        <div className="footerCardPadding primaryBgColor pt-5">
            <Row>
                <Col lg={3} sm={6} md={3} className="px-5 m-0">
                    <h3 className="fontWeight700 fontFamilyYesava fs-2 tertiaryTextColor"> MEDICAL </h3>
                    <p style={text}> Leading the Way in Medical
                        Execellence, Trusted Care.
                    </p>
                </Col>
                <Col lg={3} sm={6} md={3} className="px-5">
                    <h3 style={text}> Important Links</h3>
                    <ul  style={{color:"white"}} > 
                        <li style={{listStyleType:"none"}}> Appointment </li>
                        <li> Doctors </li>
                        <li> Services </li>
                        <li> Abouts Us </li>
                    </ul>
                </Col>
                <Col lg={3} sm={6} md={3}className="px-5">
                <h3 style={text}> Contact Us</h3>
                    <div className="text-white"> 
                        <p> Call: (237) 681-812-255 </p>
                        <p> Email: fildineesoe@gmail.com </p>
                        <p> Address: 0123 Some place </p>
                        <p> Some country </p>
                    </div>
                </Col>
                <Col lg={3} sm={6} md={3} className="responsivePadding">
                    <h3 style={text}> Newsletter</h3>
                    <input  style={{backgroundColor:"#BFD2F8", color:"#1F2B6C"}} className="p-3 responsiveWidth text-black bg-none border-0" type="text" placeholder="Enter Your Email Address" />
                    <Button id="id"style={{marginLeft:"-35px",width:"35px"}}> <i  className="fs-6 fas fa-location-arrow"></i> </Button>
                </Col>
            </Row>
            <hr/>
            <div>
                <div className="d-flex justify-content-between flex-column flex-sm-column flex-md-row px-5"> 
                    
                    <p className="text-white m-0"> © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD </p> 
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
            </div>
        </div>
    );
};

export default Footer;