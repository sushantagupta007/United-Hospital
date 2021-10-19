import React from 'react';
import {Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = (props) => {
    const {id,name,Designation, Degree,img} = props.team
    return (
        
        <Card style={{ width: '18rem',}} className="mb-5">
            <Card.Img  variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                {Designation}
                </Card.Text>
                <Card.Text>{Degree}</Card.Text>
                
                <Link to={`/Service/${id}`}> <Button variant="primary">Appointment</Button> </Link>
            </Card.Body>
        </Card>
        
    );
};

export default Doctor;