import React from 'react';

import './AppointmentCard.css';

const AppointmentCard = (props) => {
    const {bg,img} = props
    return (
        <div style={bg} className="appointmentCardContent p-2 d-flex justify-content-between align-items-center border">
            <p> Book an Appointment</p>
            <img src={img} alt="Calender"/>
        </div>
    );
};

export default AppointmentCard;