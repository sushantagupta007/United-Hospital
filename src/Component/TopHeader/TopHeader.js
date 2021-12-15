import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import SmallPhone from '../../Image/SmallPhone.png'; 
import Clock from '../../Image/Clock.png'; 
import Location from '../../Image/Location.png'; 

import './TopHeader.css'
const TopHeader = () => {
    return (
        <Container>
            <Row>
                <Col lg={4}>
                    <h3 className='fontFamilyYesava primaryTextColor fw-bold'> MED
                        <span className='secondaryTextColor'>ICAL</span> 
                    </h3>
                </Col>
                <Col id="responsiveTopHeader" lg={8} className=' d-none d-sm-flex justify-content-around'>
                    <div className='d-flex'>
                        <div>
                            <img  className="w-100"src={SmallPhone} alt="Phone" />
                        </div>
                        <div>
                            <p style={{fontSize:"0.8rem"}} className="fontFamilyWork p-0 m-0 primaryTextColor"> Emergency </p>
                            <p style={{fontSize:"0.8rem"}} className="fontFamilyWork p-0 m-0 secondaryTextColor"> (237) 681-812-255</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img  className="w-100"src={Location} alt="Phone" />
                        </div>
                        <div>
                            <p style={{fontSize:"0.8rem"}} className="fontFamilyWork p-0 m-0 primaryTextColor "> Location</p>
                            <p style={{fontSize:"0.8rem"}} className="fontFamilyWork p-0 m-0 secondaryTextColor"> 0123, Some Place</p>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div>
                            <img  className="w-100"src={Clock} alt="Phone" />
                        </div>
                        <div>
                            <p style={{fontSize:"0.8rem"}} className="fontFamilyWork p-0 m-0 primaryTextColor"> Work Hour  </p>
                            <p style={{fontSize:"0.8rem"}} className="fontFamilyWork p-0 m-0 secondaryTextColor"> 09.00-20.00, Everydary</p>
                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default TopHeader;