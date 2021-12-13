import React from 'react';
import './BannerContact.css'; 


import BlackDoctor from '../../Image/Doctor.png';
import { Breadcrumb, Container } from 'react-bootstrap';


const h3 ={
    color: "rgba(31, 43, 108, 1)",
    fontFamily: "Yeseva One",
    fontWeight:400
}

const bannerContent ={
    width:"32.5rem",
    height:'auto'
}




const BannerContact = () => {
    return (
        <div className="bannerWrapper "> 
            <div className="bannerContent p-5" id="responsiveDivSize"> 
            <Container className="p-5">
                <Breadcrumb>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/contact">
                    Contact
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h3 className='fw-bold primaryTextColor fontFamilyYesava'> Our Doctors</h3>
            </Container>
           
            </div>
        </div>
      
    )
        
};

export default BannerContact;