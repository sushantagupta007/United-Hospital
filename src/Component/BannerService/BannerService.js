import React from 'react';




import { Breadcrumb, Container } from 'react-bootstrap';


import './BannerService.css'

// const h3 ={
//     color: "rgba(31, 43, 108, 1)",
//     fontFamily: "Yeseva One",
//     fontWeight:400
// }

// const bannerContent ={
//     width:"32.5rem",
//     height:'auto'
// }




const BannerService = () => {
    return (
        <div className="bannerWrapperService "> 
            <div className="bannerContentService bannerContentServicePaddingResponsive " id="responsiveDivSize"> 
            <Container className=" breadcrumbContainerPaddingResponsive">
                <Breadcrumb>
                    <Breadcrumb.Item style={{color:'1F2B6C'}} className="fw-bold" href="/home">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="primaryTextColor fw-bold" href="/service">
                    Service
                    </Breadcrumb.Item>
                   

                </Breadcrumb>
                <h3 id="responsiveBreadCrumbTitle" className='fw-bold primaryTextColor fontFamilyYesava p-0 m-0'> 
                Services
                </h3>    
            </Container>
            </div>
        </div>
      
    )
        
};

export default BannerService;