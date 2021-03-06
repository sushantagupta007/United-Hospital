import React from 'react';
import { Col, Row} from 'react-bootstrap';

import ServiceCareImg from '../../Image/ServiceCare.png'

import './ServiceCare.css'


const ServiceCare = () => {
    return (
    <div className="my-4 serviceDivPadding">
       <Row>
            <Col  xs= {12} lg={5} >
                <img className="w-100"src={ServiceCareImg} alt="ServiceCare" />
            </Col>
            <Col xs={12} lg={5}>
                <p className="text-uppercase secondaryTextColor fontWeight700 responsiveFontSize"> Welcome to United Hospital </p> 
                <h3 className="fontFamilyYesava fontWeight700 primaryTextColor fs-1"> Best Care for Your Good Health </h3>
                <Row>
                    <Col lg={6} className="p-0 m-0">
                        <ul>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> A Passion for Healing</li>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> All our best</li>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> A Legacy of Excellence</li>
                        </ul>     
                    </Col>
                    <Col lg={6}>
                        <ul>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> 5-Star Care</li>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> Believe in Us </li>
                            <li className="d-flex align-items-center fontFamilyWork fs-6 fontWeight400"> Always Caring</li>
                        </ul>
                    </Col>
                </Row>
                <Row  className="p-3 fontFamilyWork fs-6 fontWeight400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque placerat scelerisque tortor ornare ornare. Quisque 
                    placerat scelerisque tortor ornare ornare Convallis felis 
                    vitae tortor augue. Velit nascetur proin massa in. Consequat 
                    faucibus porttitor enim et.
                </Row>    
                <Row className="p-3 fontFamilyWork fs-6 fontWeight400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                    placerat scelerisque. Convallis felis vitae tortor augue. Velit
                    nascetur proin massa in.
                </Row>
            </Col>
        </Row>        
    </div>    
        
        
    );
};

export default ServiceCare;