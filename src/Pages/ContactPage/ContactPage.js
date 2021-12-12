import React, { Fragment } from 'react';
import ContactForm from '../../Component/ContactForm/ContactForm';
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header/Header';
import News from '../../Component/News/News';

const ContactPage = () => {
    return (
        <Fragment>
            <Header></Header>
            <ContactForm></ContactForm>
            <News></News>
            <Footer></Footer>
        </Fragment>
    );
};

export default ContactPage;