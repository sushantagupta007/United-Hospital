import React, { Fragment } from 'react';

import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import News from '../../Component/News/News';

import QuoteCarousal from '../../Component/QuoteCarousal/QuoteCarousal';
import Doctors from './../../Component/Doctors/Doctors';
import BannerDoctor from './../../Component/BannerDoctor/BannerDoctor';
import TopHeader from '../../Component/TopHeader/TopHeader';


const DoctorsPage = () => {
    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <BannerDoctor></BannerDoctor>
            <Doctors></Doctors>
            <QuoteCarousal></QuoteCarousal>
            <News></News>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default DoctorsPage;