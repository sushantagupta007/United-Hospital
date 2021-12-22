
import React  from 'react';
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

import SingleNewsItem from '../SingleNewsItem/SingleNewsItem';
import { useHistory } from 'react-router-dom';





const Post = () => {

    const history = useHistory(); 
    
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        reset();
        console.log(data)
    };
const newsArry = [
    {
        id:1, 
        img:BlogPost,
        title: "Study Finds Main Drivers of Readmission After Hernia Repair",
        small: `A person’s socioeconomic status predicts their likelihood of 
        readmission and complications after ventral and inguinal hernia repairs, 
        according to the first nationwide study to examine this issue.`,

        details:`A person’s socioeconomic status predicts their likelihood of 
        readmission and complications after ventral and inguinal hernia repairs, 
        according to the first nationwide study to examine this issue.

        “Socioeconomic status will have an effect on patients’ outcomes despite the 
        type of procedure,” said study co-author James Feimster, MD, who performed 
        the research as chief resident at Southern Illinois University, in Springfield.
        
        Dr. Feimster, now a MIS/bariatric fellow at Atrium Health in Charlotte, 
        N.C., presented the study at SAGES 2021 annual meeting.
        
        The data also suggest there is more that surgeons could do to counter 
        the harmful effects of low socioeconomic status, he said.
        Patients who had laparoscopic surgery or underwent elective repairs were 
        readmitted at significantly lower rates—meaning surgeons may be able to 
        improve outcomes in at-risk populations by trying to get more minimally 
        invasive procedures to lower-income communities and operating earlier in 
        a patient’s disease course, said Dr. Feimster.`,
        category:"Surgery"
    },
    {
        id:2, 
        img:BlogPost,
        title: "Normothermic Machine Perfusion a ‘Game-Changer’ For Liver Transplants",
        small: `In a new study, the use of normothermic machine perfusion allowed the 
        transplantation of roughly 70% of livers that were deemed unfit for transplant. 
        The findings, presented at the joint annual meeting of the Central Surgical`,

        details:`In a new study, the use of normothermic machine perfusion allowed the 
        transplantation of roughly 70% of livers that were deemed unfit for transplant. 
        The findings, presented at the joint annual meeting of the Central Surgical 
        Association/Midwest Surgical Association (abstract 20), come from a study of 21 
        humans livers designated to be discarded.

        According to lead study author Cristiano Quintini, MD, Director of the Liver 
        Transplant Program at the Cleveland Clinic in Ohio, this is the first clinical 
        trial in the United States to evaluate normothermic machine perfusion (NMP) 
        for use on discarded livers with the goal of liver transplantation. 
        “There continues to be a huge discrepancy in the organ supply and demand. 
        There are still 15% to 20% of patients that are on the liver transplant waitlist 
        that will never be offered an organ and will die on the waiting list,” 
        said Dr. Quintini. “Normothermic machine perfusion is a game-changer in the 
        field of organ transplantation.”`,
        category:"Surgery"
    },
    {
        id:3, 
        img:BlogPost1,
        title: "Why changing the definition of 'fully vaccinated' could be difficult",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News2`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        `,
        category:"Health Care"
    },
    {
        id:4,
        img:BlogPost2,
        title: "Convalescent Plasma Cuts COVID-19 Hospitalizations in Half: Study",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News3`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....`,
        category:"Professional"
    },
    {
        id:5,
        img:BlogPost3,
        title: "What is Predictive Microbiology?",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News4`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor
        
        id:5`,
        category:"Medical"
    },
    {
        id:6, 
        img:BlogPost,
        title: "Will CODA Trial Results Change Surgeons’ Approach to Appendicitis?",
        small: `In the largest study of surgery versus antibiotics for appendicitis, 
        almost half of patients who received a single course of antibiotics did not 
        require an appendectomy by four years.`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
         id 6
        `,
        category:"Surgery"
    },
    {
        id:7, 
        img:BlogPost1,
        title: "Long lines for Covid-19 testing as Omicron variant looms",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News2`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        `,
        category:"Health Care"
    },
    {
        id:8,
        img:BlogPost2,
        title: "Brewing Love: Physician Spouses Grow Kombucha Business in NYC",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News3`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et....`,
        category:"Professional"
    },
    {
        id:9,
        img:BlogPost3,
        title: "What is the 'Twindemic",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News4`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor
        id:9`,
        category:"Medical"
    },
    {
        id:10,
        img:BlogPost3,
        title: "Changes in white matter connections during development linked to psychosis risk",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News4`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor
        id:10`,
        category:"Medical"
    },
    {
        id:11,
        img:BlogPost3,
        title: "Omicron evades roughly twice the number of SARS-CoV-2 neutralizing antibodies than Delta",
        small: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.More News4`,

        details:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor 
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor 
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et, 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor  
        augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor
        ornare ornare. Quisque placerat scelerisque tortor ornare ornare Convallis felis vitae tortor
        id:11`,
        
        category:"Medical"
    }
]
  
    
       
   
  
   
    return (
        <Container>
            <Row>
                <Col lg={8} className="p-5">
                {newsArry.map(news=>
                    <SingleNewsItem allData={newsArry} key={news.id} id={news.id} category={news.category} history={history} title={news.title}  img={news.img} small={news.small} details={news.details}></SingleNewsItem>
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
                                    <div id="departmentNews" className="secondaryBgColor"> 
                                        {newsArry.filter(item=>item.category==='Surgery').length}                                    
                                    </div>
                                </Col>
                                <Col xs={9} lg={9}>
                                 HealthCare
                                </Col>
                                <Col  xs={3} lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor">
                                        {newsArry.filter(item=>item.category==='Health Care').length}
                                    </div>
                                </Col>
                                <Col  xs={9} lg={9}>
                                 Medical 
                                </Col>
                                <Col xs={3} lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 
                                        {newsArry.filter(item=>item.category==='Medical').length}
                                    </div>
                                </Col>
                                <Col xs={9} lg={9}>
                                 Professional
                                </Col>
                                <Col xs={3} lg={3}>
                                    <div id="departmentNews" className="secondaryBgColor"> 
                                        {newsArry.filter(item=>item.category==='Professional').length}
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

export default Post;