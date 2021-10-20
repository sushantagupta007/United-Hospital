import React from 'react';


import { useParams } from 'react-router';

import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';







const Service = () => {   

    const {serviceId} = useParams();
    const [detail,setDetail] = useState({}); 
    
    useEffect(()=>{
        fetch('/fakeData.json')
            .then(res=>res.json())
            .then(data=>{
                const details = data.find(item=>item.id==serviceId)
                setDetail(details)
            })
   
    },[])
   
    
    const {name,img,description} = detail
    return (
        <div class="d-flex justify-content-center">
             <Card style={{ width: '18rem' }} className="mb-5">
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            
            </Card.Body>
            </Card> 
        </div>
      
    );
};

export default Service;

//user.email.substring(0, user.email.lastIndexOf("@"))  