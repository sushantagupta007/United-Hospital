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
import TopHeader from '../../Component/TopHeader/TopHeader';
import ReviewCard from './../../Component/ReviewCard/ReviewCard';
import AppointmentForm from './../../Component/AppointmentForm/AppointmentForm';
const Home = () => {
    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <Banner></Banner>
            <Care></Care>
            <Services></Services>
            <Speciality></Speciality>
            <AppointmentForm></AppointmentForm>
            <Doctors></Doctors>
            <ReviewCard></ReviewCard>
            <News></News>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default Home;