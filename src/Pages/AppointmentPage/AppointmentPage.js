import React, { Fragment } from 'react';

import BannerDoctor from '../../Component/BannerDoctor/BannerDoctor';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Map from '../../Component/Map/Map';
import TopHeader from '../../Component/TopHeader/TopHeader';
import AppointmentForm from './../../Component/AppointmentForm/AppointmentForm';

const AppointmentPage = () => {
    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <BannerDoctor></BannerDoctor>
            <AppointmentForm></AppointmentForm>
            <Map></Map>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default AppointmentPage;