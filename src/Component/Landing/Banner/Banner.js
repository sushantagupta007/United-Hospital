import React from 'react';
import './Banner.css'; 
import { Button} from 'react-bootstrap';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import Calender from '../../../Image/Calender.png';
import Group from '../../../Image/Group.png';
import Cash from '../../../Image/Cash.png';

const h6 ={
    color:"rgba(21, 158, 236, 1)",
    fontWeight:700
}

const h3 ={
    color: "rgba(31, 43, 108, 1)",
    fontFamily: "Yeseva One",
    fontWeight:400
}

const bannerContent ={
    width:"32.5rem",
    height:"13.5rem"
}

const firstAppoint ={
    backgroundColor: "rgba(31, 43, 108, 1)",
    color:"#FCFEFE",
    fontFamily:'Work Sans'
}

const secondAppoint = {
    backgroundColor: "rgba(191, 210, 248, 1)",
    color:"rgba(31, 43, 108, 1)",
    fontFamily:'Work Sans'
}
const thirdAppoint = {
    backgroundColor: "#159EEC",
    color:"#FCFEFE",
    fontFamily:'Work Sans'
}


const Banner = () => {
    return (
        <div> 
            <div className="customBannerBG"> 
                <div style={bannerContent} className="d-flex flex-column justify-content-center">
                    <h6 style={h6}> CARING FOR LIFE</h6>
                    <h1 style={h3}> Leading the Way <br/> in Medical Excellency</h1>
                    <Button type="button" className=" mt-3 w-25 rounded-pill bannerButton customFont border-0"> Our Services </Button>
                </div>
            </div>
            <div className="appointmentCard d-flex justify-content-between"> 
                <AppointmentCard img = {Calender} bg={firstAppoint}></AppointmentCard> 
                <AppointmentCard img ={Group} bg={secondAppoint}></AppointmentCard> 
                <AppointmentCard img={Cash} bg={thirdAppoint}></AppointmentCard> 
            </div>
            
        </div>
    )
        
};

export default Banner;