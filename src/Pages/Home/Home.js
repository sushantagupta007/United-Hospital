import React, { Fragment } from 'react';
import Doctors from '../../Component/Doctors/Doctors';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Banner from './../../Component/Banner/Banner';
import Contact from './../../Component/Contact/Contact';
import News from './../../Component/News/News';
import Speciality from './../../Component/Speciality/Speciality';
import Care from '../../Component/Care/Care';
import Services from '../../Component/Services/Services';
import Appointment from '../../Component/Appointment/Appointment'
const Home = () => {
    return (
        <Fragment>
            <Header></Header>
            <Banner></Banner>
            <Care></Care>
            <Services></Services>
            <Speciality></Speciality>
            <Appointment></Appointment>
            <Doctors></Doctors>
            <News></News>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default Home;