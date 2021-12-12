import React, { Fragment } from 'react';
import Header from '../../Component/Header/Header';
import Banner from './../../Component/Banner/Banner';
import ServiceCare from './../../Component/ServiceCare/ServiceCare';
import QuoteCarousal from './../../Component/QuoteCarousal/QuoteCarousal';
import Doctors from '../../Component/Doctors/Doctors';
import News from './../../Component/News/News';
import Contact from './../../Component/Contact/Contact';
import Footer from './../../Component/Footer/Footer';



const About = () => {

    return (
        <Fragment>
            <Header></Header>
            <Banner></Banner>
            <ServiceCare> </ServiceCare>
            <QuoteCarousal></QuoteCarousal>
            <Doctors></Doctors>
            <News></News>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default About;