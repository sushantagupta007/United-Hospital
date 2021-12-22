import React, { Fragment } from 'react';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';

import Contact from './../../Component/Contact/Contact';
import FreeCheckUp from '../../Component/FreeCheckUp/FreeCheckUp'
import TopHeader from '../../Component/TopHeader/TopHeader';
import BannerService from '../../Component/BannerService/BannerService';



const ServiceProvide = () => {
    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <BannerService></BannerService>
            <FreeCheckUp></FreeCheckUp>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default ServiceProvide;