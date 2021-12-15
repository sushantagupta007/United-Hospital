import React from 'react';
import './BannerBlog.css'; 


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


const BannerBlog = () => {
    return (
        <div className="bannerWrapperBlog "> 
            <div className="bannerContentBlog breadcrumbContainerPaddingResponsive" id="responsiveDivSize"> 
            <Container className="breadcrumbContainerPaddingResponsive">
                <Breadcrumb>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/blog">
                    News 
                    </Breadcrumb.Item>
                </Breadcrumb>
                <h3 className='fw-bold primaryTextColor fontFamilyYesava'> Blog Posts</h3>
            </Container>
           
            </div>
        </div>
      
    )
        
};

export default BannerBlog;