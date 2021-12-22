import React, { Fragment } from 'react';
import BannerSingle from '../../Component/BannerSingle/BannerSingle';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import SingleNewsBlog from '../../Component/SingleNewsBlog/SingleNewsBlog';
import TopHeader from '../../Component/TopHeader/TopHeader';



const SingleNews = () => {

    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <BannerSingle></BannerSingle>
            <SingleNewsBlog ></SingleNewsBlog>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default SingleNews;