
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import BlogPost from '../../Image/BlogPost.png'; 
import BlogPost1 from '../../Image/BlogPost1.png'; 
import BlogPost2 from '../../Image/BlogPost2.png'; 
import BlogPost3 from '../../Image/BlogPost3.png'; 
import R1 from '../../Image/R1.png'; 
import R2 from '../../Image/R2.png'; 
import R3 from '../../Image/R3.png'; 
import R4 from '../../Image/R4.png'; 
import R5 from '../../Image/R5.png'; 
import R6 from '../../Image/R6.png'; 

import './Post.css'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import SingleNewsItem from '../SingleNewsItem/SingleNewsItem';




const Post = () => {

    const history = useHistory(); 
    const location = useLocation(); 
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        reset();
        console.log(data)
    };
const newsArry = [
    {
        id:1, 
        img:BlogPost,
        title: "News Title 1",
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....`
    },
    {
        id:2, 
        img:BlogPost1,
        title: "News Title 2",
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....`
    },
    {
        id:3,
        img:BlogPost2,
        title: "News Title 3",
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....`
    },
    {
        id:4,
        img:BlogPost3,
        title: "News Title 4",
        details: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....`
    },
   
]
  
    
       
   
  
   
    return (
        <Container>
            <Row>
                <Col lg={8} className="p-5">
                {newsArry.map(news=>
                    <SingleNewsItem id={news.id} history={history} title={news.title} key={news.id} img={news.img} details={news.details}></SingleNewsItem>
                )}
                </Col>
                <Col lg={4} className="p-5 mt-3">
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
                    <Row className="my-4"> 
                        <Container>
                            <Row>
                                <h2 className="primaryTextColor fontFamilyYesava fw-bold"> Categories</h2>
                            </Row>
                            <Row className="p-4 g-2">
                                <Col xs={9} lg={9}>
                                    Surgery
                                </Col>
                                <Col xs={3} lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 3</div>
                                </Col>
                                <Col xs={9} lg={9}>
                                 HealthCare
                                </Col>
                                <Col  xs={3} lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 5</div>
                                </Col>
                                <Col  xs={9} lg={9}>
                                 Medical 
                                </Col>
                                <Col xs={3} lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 8</div>
                                </Col>
                                <Col xs={9} lg={9}>
                                 Professional
                                </Col>
                                <Col xs={3} lg={3}>
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

export default Post;