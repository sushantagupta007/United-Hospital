import React from 'react';
import { Row,Col,Button } from 'react-bootstrap';

import './Footer.css'
import { NavLink } from 'react-router-dom';
const Footer = () => {

    

    const text ={
        color:"#FCFEFE",
        fontFamily:'Work Sans',
        fontWeight:'normal',
        fontSize:"18px"
    }

    
  
    return (
        <div className="footerCardPadding primaryBgColor pt-5">
            <Row className="g-2">
                <Col lg={3} sm={6} md={3} className=" m-0">
                    <h3 className="fontWeight700 fontFamilyYesava fs-2 tertiaryTextColor"> MEDICAL </h3>
                    <p className="fontFamilyWork text-light"> Leading the Way in Medical
                        Execellence, Trusted Care.
                    </p>
                </Col>
                <Col lg={3} sm={6} md={3} className="">
                    <h3 style={text}> Important Links</h3>
                    <div className='d-flex flex-column'> 
                        <NavLink className="text-white" to="/appointment"> Appointment </NavLink>
                        <NavLink className="text-white" to="/doctor"> Doctor </NavLink>
                        <NavLink className="text-white" to="/service"> Services </NavLink>
                        <NavLink className="text-white" to="/appointment"> Appointment </NavLink>
                    </div>
                </Col>
                <Col lg={3} sm={6} md={3}>
                <h3 style={text}> Contact Us</h3>
                    <div className="text-white"> 
                        <p className='m-0'> Call: (237) 681-812-255 </p>
                        <p className='m-0'> Email: fildineesoe@gmail.com </p>
                        <p className='m-0'> Address: 0123 Some place </p>
                        <p className='m-0'> Some country </p>
                    </div>
                </Col>
                <Col lg={3} sm={6} md={3}>
                    <h3 style={text}> Newsletter</h3>
                    <input  style={{backgroundColor:"#BFD2F8", color:"#1F2B6C"}} className="p-3 responsiveWidth text-black bg-none border-0" type="text" placeholder="Enter Your Email Address" />
                    <Button id="id"style={{marginLeft:"-50px",width:"35px"}}> <i  className="fs-6 fas fa-location-arrow"></i> </Button>
                </Col>
            </Row>
            <hr/>
            <div>
                <div className="d-flex justify-content-between align-items-center flex-column flex-sm-column flex-md-row"> 
                    
                    <p className="text-white m-0 text-center"> © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD </p> 
                    <div id="fontAwesomeDiv"> 
                        <div className="d-flex" >
                            <Row> 
                                <Col> <a href="https://www.linkedin.com/notifications/" > <i style={{backgroundColor:"#BFD2F8"}} className="border rounded-pill fab fa-linkedin-in p-2"> </i> </a> </Col>
                                <Col> <a href="https://web.facebook.com/?_rdc=1&_rdr">  <i style={{backgroundColor:"#BFD2F8"}} className="rounded-pill p-2 border fab fa-facebook"> </i> </a> </Col>
                                <Col> <a href="https://www.instagram.com/">  <i style={{backgroundColor:"#BFD2F8"}} className=" rounded-pill p-2 border fab fa-instagram"> </i> </a></Col>
                            </Row>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;