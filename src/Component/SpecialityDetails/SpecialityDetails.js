import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const SpecialityDetails = () => {
    const history = useHistory()
    const value = history.location.state
    return (
        <Container>
            <h1 className="text-center" > Details Coming Soon </h1>
            <p className="text-center font-weight-bold"> {value} </p>
        </Container>
    );
};

export default SpecialityDetails;