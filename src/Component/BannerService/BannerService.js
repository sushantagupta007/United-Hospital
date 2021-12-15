import React from 'react';




import { Breadcrumb, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faHeart, faUserAlt } from '@fortawesome/free-solid-svg-icons';

import './BannerService.css'

const h3 ={
    color: "rgba(31, 43, 108, 1)",
    fontFamily: "Yeseva One",
    fontWeight:400
}

const bannerContent ={
    width:"32.5rem",
    height:'auto'
}




const BannerService = () => {
    return (
        <div className="bannerWrapperService "> 
            <div className="bannerContentService bannerContentServicePaddingResponsive " id="responsiveDivSize"> 
            <Container className=" breadcrumbContainerPaddingResponsive">
                <Breadcrumb>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/service">
                    Service
                    </Breadcrumb.Item>
                   

                </Breadcrumb>
                <h3 className='fw-bold primaryTextColor fontFamilyYesava'> 
               Services
                </h3>
                         
            </Container>
           
            </div>
        </div>
      
    )
        
};

export default BannerService;