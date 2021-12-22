import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Paginate from './../Paginate/Paginate';

import R1 from '../../Image/R1.png'; 
import R2 from '../../Image/R2.png'; 
import R3 from '../../Image/R3.png'; 
import R4 from '../../Image/R4.png'; 
import R5 from '../../Image/R5.png'; 
import R6 from '../../Image/R6.png'; 
import SinglePost from './../SinglePost/SinglePost';


import { useEffect,useState } from 'react';
import {useLocation } from 'react-router-dom';






const SingleNewsBlog = () => {
    const [posts, setPosts] = useState([]);
    const location = useLocation(); 
    
    
    const { register, handleSubmit,reset } = useForm();
    
    const onSubmit = data => {
        reset();
    };

  
    const {allData,category} = location.state //News Data From News Component
    const newArray = allData.filter(item=>item.category===category)  //Based on category new array create
   
    //Array Update with Component Load and set it posts
    useEffect(() => {
        setPosts(newArray)
        }, []);


    return (
        <Container>
            <Row>
                <Col lg={8} className="pt-5">
                    {
                        //Paginate Component
                    <Paginate
                        data={posts}
                        RenderComponent={SinglePost}
                        dataLimit={1}
                    >
                    </Paginate>
                    }
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
                                    <div id="departmentNews" className="secondaryBgColor"> 
                                        {allData.filter(item=>item.category==='Surgery').length}                                    
                                    </div>
                                </Col>
                                <Col lg={9}>
                                 HealthCare
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor">
                                        {allData.filter(item=>item.category==='Health Care').length}  
                                    </div>
                                </Col>
                                <Col lg={9}>
                                 Medical 
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 
                                        {allData.filter(item=>item.category==='Medical').length}  
                                    </div>
                                </Col>
                                <Col lg={9}>
                                 Professional
                                </Col>
                                <Col lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor">
                                        {allData.filter(item=>item.category==='Professional').length}  
                                    </div>
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