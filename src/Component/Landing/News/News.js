import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsImg from '../../../Image/News.png';
import './News.css';

const News = () => {
     return (
        <div className="newsCardPadding">
            <div className=" d-flex align-items-center flex-column w-50 mx-auto mt-3">
                <p className="fw-bold text-uppercase fontFamilyWork fs5_5 secondaryTextColor text-center" > Better information, Better health </p> 
                <h3 className="mb-5 fontFamilyYesava fontWeight700 fs-3 primaryTextColor" > News</h3>
            </div> 
            <Container> 
                <Row className="my-1">
                    <Col xs={12} md={6} lg={6}>
                        <Row> 
                            <Col  xs={12} lg={4}> 
                                <img className="w-100"src={NewsImg} alt="News"/>
                            </Col>
                            <Col xs={12} lg={8}> 
                                <p className="secondaryTextColor fontFamilyWork fontWeight400 fs-6">Monday 05, September 2021 | By Author</p>
                                <p className="fs5_5 fontFamilyWork fontWeight400">
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-sm-between justify-content-around responsiveBoxFontIcon">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Row className="my-1"> 
                            <Col xs={12} lg={4}> 
                                <img className="w-100" src={NewsImg} alt="News"/>
                            </Col>
                            <Col xs={12} lg={8}> 
                                <p className="secondaryTextColor fontFamilyWork fontWeight400 fs-6">Monday 05, September 2021 | By Author</p>
                                <p className="fontWeight400 fontFamilyWork fs5_5">
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between responsiveBoxFontIcon">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Row> 
                            <Col xs={12} lg={4}> 
                                <img className="w-100"src={NewsImg} alt="News"/>
                            </Col>
                            <Col xs={12} lg={8}> 
                                <p className="secondaryTextColor fontFamilyWork fontWeight400 fs-6">Monday 05, September 2021 | By Author</p>
                                <p className="fontWeight400 fontFamilyWork fs5_5" >
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between responsiveBoxFontIcon">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Row> 
                            <Col xs={12} lg={4}> 
                                <img className="w-100" src={NewsImg} alt="News"/>
                            </Col>
                            <Col xs={12} lg={8}> 
                                <p className="secondaryTextColor fontFamilyWork fontWeight400 fs-6">Monday 05, September 2021 | By Author</p>
                                <p className="fontWeight400 fontFamilyWork fs5_5">
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between responsiveBoxFontIcon">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default News;