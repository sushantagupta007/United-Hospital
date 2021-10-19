import React from 'react';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';




const Service = (props) => {   
    let {serviceId} = useParams();

    const[services,setServices] = useState([])
    useEffect(()=>{
      fetch('./fakeData.json')
          .then(res=>res.json())
          .then(data=>{
              setServices(data)
              console.log(data)
          })
  },[])
  console.log(services)

    return (
        <div>
            {
              <h1> 
                {serviceId}
              </h1>  
            }
        </div>
    );
};

export default Service;