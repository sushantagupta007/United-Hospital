import React from 'react';
import { Card } from 'react-bootstrap';

import './FreeCheckUpCard.css'

import VectorImage from '../../Image/Vector.png'; 
const FreeCheckUpCard = (props) => {
    const {title,list,img} = props
    
    
    return (
        <Card id="customCard" style={{ width: '18rem' }} className="m-0  p-2 w-100">
            <div className="containerId"> 
                <Card.Img className="image" variant="top" src={img} alt="" /> 
                <div className="middle">
                    <div className="text">
                        <img src={VectorImage} alt="" />
                    </div>
                </div>
            </div>
        
        <Card.Body>
            <Card.Title className="primaryTextColor fw-bold fontFamilyWork">{title}</Card.Title>
                <Card.Text className="fontFamilyWork ">
                   {list}
                </Card.Text>
                <a id="checkUpLink" className="secondaryTextColor" href="_target_blank"> Learn More  <i className="fas fa-arrow-right"> </i> </a>
        </Card.Body>
    </Card>
    );
};

export default FreeCheckUpCard;