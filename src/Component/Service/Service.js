import React from 'react';

import { useState, useEffect} from 'react';
import { useParams } from 'react-router';




const Service = (props) => {   
    let {serviceId} = useParams();
    
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