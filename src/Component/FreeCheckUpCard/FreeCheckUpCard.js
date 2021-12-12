import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import CheckUpCard from '../../Image/CheckUpCard.png'; 
import './FreeCheckUpCard.css'

const FreeCheckUpCard = () => {
    
    const [style,setStyle] = useState("Clicked"); 

    const handleMove =()=>{
        setStyle("styled")
    }

    console.log(style)

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CheckUpCard} onMouseMove={handleMove} onMouseLeave={()=>{console.log("onMouseMove");}} />
            <Card.Body>
                <Card.Title className="primaryTextColor fw-bold fontFamilyWork">Free Checkup</Card.Title>
                    <Card.Text className="fontFamilyWork ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing Quisque 
                        placerat Convallis felis vitae tortor augue. 
                        Velit nascetur massa in.
                    </Card.Text>
                    <p id="checkUpLink"className="secondaryTextColor"> Learn More  <i className="fas fa-arrow-right"> </i> </p>
            </Card.Body>
        </Card>
    );
};

export default FreeCheckUpCard;