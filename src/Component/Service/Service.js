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
              console.log(services[0])
          })
  },[services])
  

    return (
        <div>
            {
              services.map((item)=>item.id==={serviceId}?item:'')
            }
        </div>
    );
};

export default Service;