import React from 'react';
import {Container } from 'react-bootstrap';


import './Contact.css'
const Contact = () => {

  
    // const para1 = {
    //     fontWeight:'bold',
    //     textTransform: "uppercase",
    //     fontFamily:'Work Sans',
    //     fontSize:'18px',
    // }

    // const h3 ={
    //     color:"#1F2B6C",
    //     fontFamily:'Yeseva One',
    //     fontWeight:700,
    //     fontSize:"26px"
    // }

    return (
        <Container className="">
            <div className=" d-flex align-items-center flex-column w-50 mx-auto mt-3">
                <p className="fw-bold text-uppercase fontFamilyWork fs5_5 secondaryTextColor text-center" > Get In Touch </p> 
                <h3 className="mb-5 fontFamilyYesava fontWeight700 fs-4 primaryTextColor" > Contact</h3>
            </div> 
            <div className="container py-2">
                <div  className="row gy-2">
                    <div className="col-lg-3" >
                        <div className='p-3 border tertiaryBgColor'> 
                            <i className="fs-2 fas fa-phone-volume primaryTextColor"></i>
                            <p className="fontWeight700 text-uppercase fontFamilyWork fs5_5 primaryTextColor"> Emergency </p>
                            <p className="primaryTextColor"> (237) 681-812-255 </p>
                            <p className="primaryTextColor"> (237) 666-331-894 </p>
                        </div>
                    </div>
                    <div className="col-lg-3" >
                        <div className='p-3 border  primaryBgColor'> 
                            <i className="tertiaryTextColor fs-2 fas fa-map-marker-alt"></i>
                            <p className="tertiaryTextColor fw-bold text-uppercase fontFamilyWork"> Location </p>
                            <p className="tertiaryTextColor"> 0123 Some place </p>
                            <p className="tertiaryTextColor" style={{color:"#BFD2F8"}}> 9876 Some country </p>
                        </div>
                    </div>
                    <div className="col-lg-3 " >
                        <div className='p-3 border tertiaryBgColor'> 
                            <i  className="primaryTextColor fs-2 far fa-envelope primaryTextColor"></i>
                            <p className="primaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5" > Email </p>
                            <p className="primaryTextColor"> fildineeesoe@gmil.com </p>
                            <p className="primaryTextColor"> myebstudios@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 " >
                        <div className='p-3 border tertiaryBgColor'> 
                            <i className="primaryTextColor fs-2 far fa-clock"></i>
                            <p className="primaryTextColor fontWeight700 text-uppercase fontFamilyWork fs5_5" > Working Hours </p>
                            <p className="primaryTextColor"> Mon-Sat 09:00-20:00 </p>
                            <p className="primaryTextColor"> Sunday Emergency only </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Contact;