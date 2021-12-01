import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NewsImg from '../../../Image/News.png'

const News = () => {
    const para1 = {
        color:'#159EEC',
        fontWeight:'bold',
        textTransform: "uppercase",
        fontFamily:'Work Sans',
        fontSize:'18px',
        
    }
    const para2 = {
        fontWeight:400,
        fontFamily:'Work Sans',
        fontSize:'18px',
    }
    
    const h3 ={
        color:"#1F2B6C",
        fontFamily:'Yeseva One',
        fontWeight:700,
        fontSize:"26px"
    }

    const date ={
        color:"#159EEC",
        fontFamily:'Work Sans',
        fontWeight:400,
        fontSize:"14px"
    }
    return (
        <div className="appointmentCard">
            <div className=" d-flex align-items-center flex-column w-50 mx-auto mt-3">
                <p style={para1}> Better information, Better health </p> 
                <h3 className="mb-5"style={h3}> News</h3>
            </div> 
            <Container>
                <Row className="my-1">
                    <Col lg={6}>
                        <Row> 
                            <Col lg={4}> 
                                <img src={NewsImg} alt="News"/>
                            </Col>
                            <Col lg={8}> 
                                <p style={date}>Monday 05, September 2021 | By Author</p>
                                <p style={para2}>
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between w-25">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row className="my-1"> 
                            <Col lg={4}> 
                                <img src={NewsImg} alt="News"/>
                            </Col>
                            <Col lg={8}> 
                                <p style={date}>Monday 05, September 2021 | By Author</p>
                                <p style={para2}>
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between w-25">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    
                </Row>
                <Row>
                    <Col lg={6}>
                        <Row> 
                            <Col lg={4}> 
                                <img src={NewsImg} alt="News"/>
                            </Col>
                            <Col lg={8}> 
                                <p style={date}>Monday 05, September 2021 | By Author</p>
                                <p style={para2}>
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between w-25">
                                    <i style={{color:"#526AE9"}}className="far fa-eye">  <span className="text-black">  68 </span> </i>                                    
                                    <i style={{color:"#E2315C"}}className="far fa-heart">  <span className="text-black">  68 </span> </i>                                    
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Row> 
                            <Col lg={4}> 
                                <img src={NewsImg} alt="News"/>
                            </Col>
                            <Col lg={8}> 
                                <p style={date}>Monday 05, September 2021 | By Author</p>
                                <p style={para2}>
                                    This Article’s Title goes Here, 
                                    but not too long.
                                </p>
                                <div className="d-flex justify-content-between w-25">
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