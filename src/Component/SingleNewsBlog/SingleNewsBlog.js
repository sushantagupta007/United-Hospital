import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import BlogPost from '../../Image/BlogPost.png'; 

import R1 from '../../Image/R1.png'; 
import R2 from '../../Image/R2.png'; 
import R3 from '../../Image/R3.png'; 
import R4 from '../../Image/R4.png'; 
import R5 from '../../Image/R5.png'; 
import R6 from '../../Image/R6.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
const SingleNewsBlog = () => {

    const location = useLocation(); 
    const {img,details} = location.state
    console.log(location)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        reset();
        console.log(data)
    };
    return (
        <Container>
            <Row>
                <Col lg={8} className="pt-5">
                    <img className="w-100 rounded" src={img} alt="" />
                    <div>
                        <p>
                            {details}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button style={{backgroundColor:"#BFD2F8"}}className="btn rounded-pill"> 
                            <FontAwesomeIcon className="primaryTextColor fs-7 me-1" icon={faArrowLeft}></FontAwesomeIcon>
                            <span className="primaryTextColor">Previous Article </span> 
                            
                        </button>
                        <button style={{backgroundColor:"#BFD2F8"}}className="btn rounded-pill"> 
                            <span className="primaryTextColor me-1">Next Article </span> 
                            <FontAwesomeIcon className="primaryTextColor fs-7" icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </div>
                </Col>

                <Col lg={4} className="pt-5">
                    <Row className="mb-3">
                        <form onSubmit={handleSubmit(onSubmit)} className="primaryBgColor d-flex justify-content-between px-0">
                                <input className="p-1 text-white bg-transparent w-100 border-0" type="text" placeholder="Search"{...register("search", { required: true}) }/>
                                <input  type="submit" className='primaryBgColor'  value="Search"/>
                            </form>
                    </Row>
                    <Row className="border rounded"> 
                        <Container className="mb-3">
                            <h2 className="primaryTextColor fontFamilyYesava fw-bold"> Recent Posts</h2>
                        </Container>
                        <Container>
                            <Row className="g-2"> 
                                <Col xs={3} lg={3}>
                                    <img src={R1} alt=""/>  
                                </Col>
                                <Col xs={9} lg={9}>
                                    <p style={{fontSize:"14px"}}className="secondaryTextColor fontFamilyWork m-0"> Monday 05, September 2021</p>
                                    <p style={{fontSize:"14px",fontWeight:"500"}}className=" fontFamilyWork m-0"> 
                                        This Article’s Title goes Here, but not too long.
                                    </p>
                                </Col>
                                <Col xs={3} lg={3}>
                                    <img src={R2} alt=""/>  
                                </Col>
                                <Col xs={9} lg={9}>
                                    <p style={{fontSize:"14px"}}className="secondaryTextColor fontFamilyWork m-0"> Monday 05, September 2021</p>
                                    <p style={{fontSize:"14px",fontWeight:"500"}}className=" fontFamilyWork m-0"> 
                                        This Article’s Title goes Here, but not too long.
                                    </p>
                                </Col>
                                <Col xs={3} lg={3}>
                                    <img src={R3} alt=""/>  
                                </Col>
                                <Col xs={9} lg={9}>
                                    <p style={{fontSize:"14px"}}className="secondaryTextColor fontFamilyWork m-0"> Monday 05, September 2021</p>
                                    <p style={{fontSize:"14px",fontWeight:"500"}}className=" fontFamilyWork m-0"> 
                                        This Article’s Title goes Here, but not too long.
                                    </p>
                                </Col>
                                <Col xs={3} lg={3}>
                                    <img src={R4} alt=""/>  
                                </Col>
                                <Col xs={9} lg={9}>
                                    <p style={{fontSize:"14px"}}className="secondaryTextColor fontFamilyWork m-0"> Monday 05, September 2021</p>
                                    <p style={{fontSize:"14px",fontWeight:"500"}}className=" fontFamilyWork m-0"> 
                                        This Article’s Title goes Here, but not too long.
                                    </p>
                                </Col>
                                <Col xs={3} lg={3}>
                                    <img src={R5} alt=""/>  
                                </Col>
                                <Col xs={9} lg={9}>
                                    <p style={{fontSize:"14px"}}className="secondaryTextColor fontFamilyWork m-0"> Monday 05, September 2021</p>
                                    <p style={{fontSize:"14px",fontWeight:"500"}}className=" fontFamilyWork m-0"> 
                                        This Article’s Title goes Here, but not too long.
                                    </p>
                                </Col>
                                <Col xs={3} lg={3}>
                                    <img src={R6} alt=""/>  
                                </Col>
                                <Col xs={9} lg={9}>
                                    <p style={{fontSize:"14px"}}className="secondaryTextColor fontFamilyWork m-0"> Monday 05, September 2021</p>
                                    <p style={{fontSize:"14px",fontWeight:"500"}}className=" fontFamilyWork m-0"> 
                                        This Article’s Title goes Here, but not too long.
                                    </p>
                                </Col>
                            </Row>    
                        </Container>
                    </Row>
                    <Row className="my-4 border rounded p-4"> 
                        <Container>
                            <Row >
                                <h2 className="primaryTextColor fontFamilyYesava fw-bold"> Categories</h2>
                            </Row>
                            <Row className="g-2">
                                <Col lg={9}>
                                    Surgery
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 3</div>
                                </Col>
                                <Col lg={9}>
                                 HealthCare
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 5</div>
                                </Col>
                                <Col lg={9}>
                                 Medical 
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 8</div>
                                </Col>
                                <Col lg={9}>
                                 Professional
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 10</div>
                                </Col>
                            </Row>
                        </Container>
                    </Row>

                </Col>
                
            </Row>
            
        </Container>
    );
};

export default SingleNewsBlog;