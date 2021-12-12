import React, { Fragment } from 'react';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Banner from './../../Component/Banner/Banner';
import Contact from './../../Component/Contact/Contact';
import FreeCheckUp from '../../Component/FreeCheckUp/FreeCheckUp'


const ServiceProvide = () => {
    return (
        <Fragment>
            <Header></Header>
            <Banner></Banner>
            <FreeCheckUp></FreeCheckUp>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default ServiceProvide;