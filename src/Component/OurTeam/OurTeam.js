import React from 'react';
import { useState, useEffect } from 'react';
import Doctor from './../Doctor/Doctor';


const OurTeam = () => {
    const [teams,setTeams] = useState([]); 
    useEffect(()=>{
        fetch('./faketeam.json')
            .then(res=>res.json())
            .then(data=>{
                setTeams(data)
                
            })
    },[])
    
    return (
        <div>
            <h1 className="text-center"> Our Team</h1>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    {
                        teams.map((team)=><Doctor key={team.id} team={team}></Doctor>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurTeam;