import { useEffect, useState } from 'react';

const useFakeData = () =>{
    const[totalService,setTotallService] = useState([])
    useEffect(()=>{
        fetch('./fakeData.json')
            .then(res=>res.json())
            .then(data=>{
                setTotallService(data)
                
            })
    },[])
    
    return{
        totalService
    }
}



export default useFakeData; 