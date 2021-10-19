import React from 'react';
import Carousal from '../Carousal/Carousal';
import OurTeam from '../OurTeam/OurTeam';
import Services from '../Services/Services';
import Contact from './../Contact/Contact';



const Home = () => {
    return (
        <div>
            <Carousal></Carousal>
            <Services></Services>
            <OurTeam></OurTeam>
            <Contact></Contact>
        </div>
    );
};

export default Home;