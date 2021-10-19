import React from 'react';

import {Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const IndividuallService = (props) => {
    const {id,img,name,description}= props.service

    return (
        <Card style={{ width: '18rem' }} className="mb-5">
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {description.slice(0,150)}
                </Card.Text>
                <Link to={`/Service/${id}`}> <Button variant="primary">Detail</Button> </Link>
            </Card.Body>
        </Card>
    );
};

export default IndividuallService;