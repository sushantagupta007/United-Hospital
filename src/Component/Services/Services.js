import React from 'react';
import useFakeData from '../Hooks/useFakeData';
import IndividuallService from '../IndividualService/IndividuallService';

const Services = () => {
    // const[services,setServices] = useState([])
    // useEffect(()=>{
    //     fetch('./fakeData.json')
    //         .then(res=>res.json())
    //         .then(data=>{
    //             setServices(data)
    //             console.log(data)
    //         })
    // },[])

    const {totalService} = useFakeData(); 
   
    return (
        <div>
            <h2 className="text-center"> Our Services</h2>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    {
                        totalService.map((service)=><IndividuallService key={service.id} service={service}></IndividuallService>)
                    }
                
                </div>
            </div>
        </div>
    );
};

export default Services;