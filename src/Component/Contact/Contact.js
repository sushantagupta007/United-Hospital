import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PhoneCall from '../../Image/PhoneCall.png'

import './Contact.css'
const Contact = () => {

  
    const para1 = {
        fontWeight:'bold',
        textTransform: "uppercase",
        fontFamily:'Work Sans',
        fontSize:'18px',
    }

    const h3 ={
        color:"#1F2B6C",
        fontFamily:'Yeseva One',
        fontWeight:700,
        fontSize:"26px"
    }

    return (
        <div className="contactCardPadding">
            <div className=" d-flex align-items-center flex-column w-50 mx-auto mt-3">
                <p className="fw-bold text-uppercase fontFamilyWork fs5_5 secondaryTextColor text-center" > Get In Touch </p> 
                <h3 className="mb-5 fontFamilyYesava fontWeight700 fs-4 primaryTextColor" > Contact</h3>
            </div> 
            <div>
                <Row >
                    <Col lg={3} className="border py-3 px-5" style={{backgroundColor:"#BFD2F8"}} >
                        <i class="fs-2 fas fa-phone-volume primaryTextColor"></i>
                        
                        <p className="fontWeight700 text-uppercase fontFamilyWork fs5_5 primaryTextColor"> Emergency </p>
                        <p className="primaryTextColor"> (237) 681-812-255 </p>
                        <p className="primaryTextColor"> (237) 666-331-894 </p>
                    </Col>
                    <Col lg={3} className="border py-3 px-5 primaryBgColor" >
                        <i className="tertiaryTextColor fs-2 fas fa-map-marker-alt"></i>
                        <p className="tertiaryTextColor fw-bold text-uppercase fontFamilyWork"> Location </p>
                        <p className="tertiaryTextColor"> 0123 Some place </p>
                        <p className="tertiaryTextColor" style={{color:"#BFD2F8"}}> 9876 Some country </p>
                    </Col>
                    <Col lg={3} className="border py-3 px-5" style={{backgroundColor:"#BFD2F8"}}>
                        <i  className="fs-2 far fa-envelope primaryTextColor"></i>
                        <p className="primaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5" > Email </p>
                        <p className="primaryTextColor"> fildineeesoe@gmil.com </p>
                        <p className="primaryTextColor"> myebstudios@gmail.com</p>
                    </Col>
                    <Col lg={3} className="border py-3 px-5" style={{backgroundColor:"#BFD2F8"}}>
                        <i class="fs-2 far fa-clock"></i>
                        <p className="primaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5" > Working Hours </p>
                        <p className="primaryTextColor"> Mon-Sat 09:00-20:00 </p>
                        <p className="primaryTextColor"> Sunday Emergency only </p>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Contact;