import React, { Fragment } from 'react';
import ContactForm from '../../Component/ContactForm/ContactForm';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Map from '../../Component/Map/Map';
import News from '../../Component/News/News';
import TopHeader from '../../Component/TopHeader/TopHeader';
import BannerContact from './../../Component/BannerContact/BannerContact';

const ContactPage = () => {
    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <BannerContact></BannerContact>
            <Map></Map>
            <ContactForm></ContactForm>
            <News></News>
            <Footer></Footer>
        </Fragment>
    );
};

export default ContactPage;