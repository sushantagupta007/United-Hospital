import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ServiceDetails = () => {
    const history = useHistory()
    const value = history.location.state.props 
    console.log(value)
    return (
        <Container>
            <h1> Details Coming Soon </h1>
            <p> {value.title} </p>
        </Container>
    );
};

export default ServiceDetails;