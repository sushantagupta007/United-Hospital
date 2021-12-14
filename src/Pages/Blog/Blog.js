import React, { Fragment } from 'react';
import Contact from '../../Component/Contact/Contact';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import Post from '../../Component/Post/Post';
import TopHeader from '../../Component/TopHeader/TopHeader';
import BannerBlog from './../../Component/BannerBlog/BannerBlog';

const Blog = () => {
    return (
        <Fragment>
            <TopHeader></TopHeader>
            <Header></Header>
            <BannerBlog></BannerBlog>
            <Post></Post>
            <Contact></Contact>
            <Footer></Footer>
        </Fragment>
    );
};

export default Blog;